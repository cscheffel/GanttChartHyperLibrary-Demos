﻿// Query string syntax: ?theme
// Supported themes: Generic-blue, Default.
var queryString = window.location.search;
var theme = queryString ? queryString.substr(1) : null;

var ganttChartView = document.querySelector('#ganttChartView');

var date = new Date(), year = date.getFullYear(), month = date.getMonth();
var items = [{ content: 'Task 1', isExpanded: false },
             { content: 'Task 1.1', indentation: 1, start: new Date(year, month, 2, 8, 0, 0), finish: new Date(year, month, 4, 16, 0, 0) },
             { content: 'Task 1.2', indentation: 1, start: new Date(year, month, 3, 8, 0, 0), finish: new Date(year, month, 5, 12, 0, 0) },
             { content: 'Task 2', isExpanded: true },
             { content: 'Task 2.1', indentation: 1, start: new Date(year, month, 2, 8, 0, 0), finish: new Date(year, month, 8, 16, 0, 0), completedFinish: new Date(year, month, 5, 16, 0, 0), assignmentsContent: 'Resource 1, Resource 2 [50%]' },
             { content: 'Task 2.2', indentation: 1 },
             { content: 'Task 2.2.1', indentation: 2, start: new Date(year, month, 11, 8, 0, 0), finish: new Date(year, month, 12, 16, 0, 0), completedFinish: new Date(year, month, 12, 16, 0, 0), assignmentsContent: 'Resource 2' },
             { content: 'Task 2.2.2', indentation: 2, start: new Date(year, month, 12, 12, 0, 0), finish: new Date(year, month, 14, 16, 0, 0), assignmentsContent: 'Resource 2' },
             { content: 'Task 2.3', indentation: 1, start: new Date(year, month, 15, 16, 0, 0), isMilestone: true }];
items[3].predecessors = [{ item: items[0], dependencyType: 'SS' }];
items[7].predecessors = [{ item: items[6], lag: 2 * 60 * 60 * 1000 }];
items[8].predecessors = [{ item: items[4] }, { item: items[5] }];
for (var i = 3; i <= 20; i++)
    items.push({ content: 'Task ' + i, start: new Date(year, month, 2, 8, 0, 0), finish: new Date(year, month, 4, 16, 0, 0) });

items[6].baselineStart = new Date(year, month, 10, 8, 0, 0);
items[6].baselineFinish = new Date(year, month, 11, 16, 0, 0);
items[7].baselineStart = new Date(year, month, 8, 8, 0, 0);
items[7].baselineFinish = new Date(year, month, 11, 16, 0, 0);
items[8].baselineStart = new Date(year, month, 12, 8, 0, 0);

var settings =
{
    currentTime: new Date(year, month, 2, 12, 0, 0),
    displayedTime: new Date(year, month, 1, 0, 0, 0),
    isGridRowClickTimeScrollingEnabled: false,

    itemHeight: 32, barHeight: 15,

    containerClass: 'container', selectedItemClass: 'selectedItem', cellClass: 'cell',
    toggleButtonClass: 'toggleButton', toggleButtonHoveringClass: 'toggleButtonHovering',
    standardBarClass: 'standardBar', standardCompletionBarClass: 'darkBar',
    summaryBarClass: 'darkBar', milestoneBarClass: 'darkBar',
    assignmentsClass: 'assignments', dependencyLineClass: 'dependencyLine',
    baselineBarClass: 'baselineBar',
    alternativeItemClass: (theme == 'Dark-black' ? 'alternativeGridItem-dark' : (theme == 'Steel-blue' ? 'alternativeGridItem-steel' : 'alternativeGridItem')),
    alternativeChartItemClass: theme == 'Dark-black' ? 'alternativeChartItem-dark' : 'alternativeChartItem'
};

// Optionally, initialize custom theme and templates (themes.js, templates.js).
if (initializeGanttChartTheme)
    initializeGanttChartTheme(settings, theme);
if (initializeGanttChartTemplates)
    initializeGanttChartTemplates(settings, theme);

DlhSoft.Controls.GanttChartView.initialize(ganttChartView, items, settings);

var item = items[4];
ganttChartView.selectItem(item);
