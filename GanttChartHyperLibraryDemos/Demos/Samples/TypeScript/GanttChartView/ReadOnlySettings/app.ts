﻿/// <reference path='./Scripts/DlhSoft.ProjectData.GanttChart.HTML.Controls.d.ts'/>
import GanttChartView = DlhSoft.Controls.GanttChartView;
import GanttChartItem = GanttChartView.Item;
import PredecessorItem = GanttChartView.PredecessorItem;

// Query string syntax: ?theme
// Supported themes: Generic-blue, Default.
var queryString = window.location.search;
var theme = queryString ? queryString.substr(1) : null;
declare var initializeGanttChartTemplates;
declare var initializeGanttChartTheme;

// Retrieve and store the control element for reference purposes.
var ganttChartViewElement = <HTMLElement>document.querySelector('#ganttChartView');

var date = new Date(), year = date.getFullYear(), month = date.getMonth();
var items = <GanttChartItem[]>[
    { content: 'Task 1', isExpanded: false, start: new Date() },
    { content: 'Task 1.1', indentation: 1, start: new Date(year, month, 2, 8, 0, 0), finish: new Date(year, month, 4, 16, 0, 0) },
    { content: 'Task 1.2', indentation: 1, start: new Date(year, month, 3, 8, 0, 0), finish: new Date(year, month, 5, 12, 0, 0) },
    { content: 'Task 2', isExpanded: true, start: new Date() },
    { content: 'Task 2.1', indentation: 1, start: new Date(year, month, 2, 8, 0, 0), finish: new Date(year, month, 8, 16, 0, 0), completedFinish: new Date(year, month, 5, 16, 0, 0), assignmentsContent: 'Resource 1, Resource 2 [50%]' },
    { content: 'Task 2.2', indentation: 1, start: new Date() },
    { content: 'Task 2.2.1', indentation: 2, start: new Date(year, month, 11, 8, 0, 0), finish: new Date(year, month, 14, 16, 0, 0), completedFinish: new Date(year, month, 14, 16, 0, 0), assignmentsContent: 'Resource 2' },
    { content: 'Task 2.2.2', indentation: 2, start: new Date(year, month, 12, 12, 0, 0), finish: new Date(year, month, 14, 16, 0, 0), assignmentsContent: 'Resource 2' },
    { content: 'Task 3', indentation: 1, start: new Date(year, month, 15, 16, 0, 0), isMilestone: true }];
items[3].predecessors = [{ item: items[0], dependencyType: 'SS' }];
items[7].predecessors = [{ item: items[6], lag: 2 * 60 * 60 * 1000 }];
items[8].predecessors = [{ item: items[4] }, { item: items[5] }];
for (var i = 4; i <= 16; i++)
    items.push({ content: 'Task ' + i, indentation: i >= 8 && i % 3 == 2 ? 0 : 1, start: new Date(year, month, 2 + (i <= 8 ? (i - 4) * 3 : i - 8), 8, 0, 0), finish: new Date(year, month, 2 + (i <= 8 ? (i - 4) * 3 + (i > 8 ? 6 : 1) : i - 2), 16, 0, 0) });

var ganttChartView: GanttChartView.Element;
var settings: GanttChartView.Settings;

// Prepare command element references.
var isReadOnlyCheckBox = <HTMLInputElement>document.querySelector('#isReadOnlyCheckBox');
var isGridReadOnlyCheckBox = <HTMLInputElement>document.querySelector('#isGridReadOnlyCheckBox');
var isChartReadOnlyCheckBox = <HTMLInputElement>document.querySelector('#isChartReadOnlyCheckBox');
var isContentReadOnlyCheckBox = <HTMLInputElement>document.querySelector('#isContentReadOnlyCheckBox');
var isStartReadOnlyCheckBox = <HTMLInputElement>document.querySelector('#isStartReadOnlyCheckBox');
var isEffortReadOnlyCheckBox = <HTMLInputElement>document.querySelector('#isEffortReadOnlyCheckBox');
var isCompletionReadOnlyCheckBox = <HTMLInputElement>document.querySelector('#isCompletionReadOnlyCheckBox');
var areAssignmentsReadOnlyCheckBox = <HTMLInputElement>document.querySelector('#areAssignmentsReadOnlyCheckBox');
var areDependenciesReadOnlyCheckBox = <HTMLInputElement>document.querySelector('#areDependenciesReadOnlyCheckBox');
var hideDependenciesCheckBox = <HTMLInputElement>document.querySelector('#hideDependenciesCheckBox');
var disableCreatingStartDependenciesCheckBox = <HTMLInputElement>document.querySelector('#disableCreatingStartDependenciesCheckBox');
var disableStartEndDraggingCheckBox = <HTMLInputElement>document.querySelector('#disableStartEndDraggingCheckBox');
var disableScrollingOnTaskClick = <HTMLInputElement>document.querySelector('#disableScrollingOnTaskClick');
var areSchedulingColumnsReadOnlyCheckBox = <HTMLInputElement>document.querySelector('#areSchedulingColumnsReadOnlyCheckBox');
var hideGridCheckBox = <HTMLInputElement>document.querySelector('#hideGridCheckBox');

// Initialize settings based on user selections.
function initialize() {
    // When we reinitialize the component, clean up previous internal item dependency dragging cache.
    // This is not necessary if you initialize the component only once, nor if you don't need to update certain dependency settings upon reinitialization.
    if (ganttChartViewElement['draggableDependencyItems'])
        delete ganttChartViewElement['draggableDependencyItems'];

    settings = <GanttChartView.Settings>{ currentTime: new Date(year, month, 2, 12, 0, 0) };

    settings.isReadOnly = isReadOnlyCheckBox.checked;
    settings.isGridReadOnly = isGridReadOnlyCheckBox.checked;
    settings.isChartReadOnly = isChartReadOnlyCheckBox.checked;
    settings.isGridVisible = !hideGridCheckBox.checked;
    settings.isContentReadOnly = isContentReadOnlyCheckBox.checked;
    settings.isTaskStartReadOnly = isStartReadOnlyCheckBox.checked;
    settings.isTaskEffortReadOnly = isEffortReadOnlyCheckBox.checked;
    settings.isTaskCompletionReadOnly = isCompletionReadOnlyCheckBox.checked;
    settings.isAssignmentsContentReadOnly = areAssignmentsReadOnlyCheckBox.checked;
    settings.areTaskPredecessorsReadOnly = areDependenciesReadOnlyCheckBox.checked;
    settings.areTaskDependenciesVisible = !hideDependenciesCheckBox.checked;
    settings.allowCreatingStartDependencies = !disableCreatingStartDependenciesCheckBox.checked;
    settings.allowCreatingToFinishDependencies = false; // Doesn't support updates upon reinitialization (unless you clean up the internal draggable dependency cache using: delete ganttChartViewElement['draggableDependencyItems']).
    settings.isDraggingTaskStartEndsEnabled = !disableStartEndDraggingCheckBox.checked;
    settings.isGridRowClickTimeScrollingEnabled = !disableScrollingOnTaskClick.checked;
    if (areSchedulingColumnsReadOnlyCheckBox.checked) {
        var columns = GanttChartView.getDefaultColumns(items, settings);
        for (var i = 1; i <= 4; i++)
            columns[i].isReadOnly = true;
        settings.columns = columns;
    }

    // Optionally, initialize custom theme and templates (themes.js, templates.js).
    if (initializeGanttChartTheme)
        initializeGanttChartTheme(settings, theme);
    if (initializeGanttChartTemplates)
        initializeGanttChartTemplates(settings, theme);

    // (Re-)Initialize the component.
    ganttChartView = DlhSoft.Controls.GanttChartView.initialize(ganttChartViewElement, items, settings);
}
initialize();

// Reinitialize settings and the component upon user commands.
isReadOnlyCheckBox.addEventListener('change', initialize);
isGridReadOnlyCheckBox.addEventListener('change', initialize);
isChartReadOnlyCheckBox.addEventListener('change', initialize);
hideGridCheckBox.addEventListener('change', initialize);
isContentReadOnlyCheckBox.addEventListener('change', initialize);
isStartReadOnlyCheckBox.addEventListener('change', initialize);
isEffortReadOnlyCheckBox.addEventListener('change', initialize);
isCompletionReadOnlyCheckBox.addEventListener('change', initialize);
areAssignmentsReadOnlyCheckBox.addEventListener('change', initialize);
areDependenciesReadOnlyCheckBox.addEventListener('change', initialize);
hideDependenciesCheckBox.addEventListener('change', initialize);
disableCreatingStartDependenciesCheckBox.addEventListener('change', initialize);
disableStartEndDraggingCheckBox.addEventListener('change', initialize);
disableScrollingOnTaskClick.addEventListener('change', initialize);
areSchedulingColumnsReadOnlyCheckBox.addEventListener('change', initialize);

// Handle item commands.
function setSelectedItemAsReadOnly() {
    var item = ganttChartView.getSelectedItem();
    if (!item)
        return;
    item.isReadOnly = true;
    ganttChartView.refreshItem(item);
}
function setSelectedItemBarAsReadonly() {
    var item = ganttChartView.getSelectedItem();
    if (!item)
        return;
    item.isBarReadOnly = true;
    ganttChartView.refreshChartItem(item);
}
