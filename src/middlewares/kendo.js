import Vue from "vue";

import "@progress/kendo-ui";

import {
  Barcode,
  QRCode,
  BarcodesInstaller
} from "@progress/kendo-barcodes-vue-wrapper";

import {
  Button,
  ButtonGroup,
  ButtonGroupButton,
  ToolBar,
  ToolBarItem,
  ButtonsInstaller
} from "@progress/kendo-buttons-vue-wrapper";

import {
  Chart,
  ChartSeriesItem,
  Sparkline,
  SparklineSeriesItem,
  StockChart,
  ChartInstaller
} from "@progress/kendo-charts-vue-wrapper";

import { Chat, ChatInstaller } from "@progress/kendo-chat-vue-wrapper";

import {
  DataSource,
  HierarchicalDataSource,
  GanttDataSource,
  GanttDependencyDataSource,
  PivotDataSource,
  SchedulerDataSource,
  TreeListDataSource,
  DataSourceInstaller
} from "@progress/kendo-datasource-vue-wrapper";

import {
  Calendar,
  DateInput,
  TimePicker,
  DatePicker,
  DateTimePicker,
  DateinputsInstaller
} from "@progress/kendo-dateinputs-vue-wrapper";

import { Diagram, DiagramInstaller } from "@progress/kendo-diagram-vue-wrapper";

import { Dialog, DialogInstaller } from "@progress/kendo-dialog-vue-wrapper";

import {
  DropDownTree,
  DropDownTreeInstaller
} from "@progress/kendo-dropdowntree-vue-wrapper";

import {
  AutoComplete,
  ComboBox,
  DropDownList,
  MultiSelect,
  MultiColumnComboBox,
  MultiColumnComboBoxColumn,
  DropdownsInstaller
} from "@progress/kendo-dropdowns-vue-wrapper";

import {
  Editor,
  EditorTool,
  EditorInstaller
} from "@progress/kendo-editor-vue-wrapper";

import { Gantt, GanttInstaller } from "@progress/kendo-gantt-vue-wrapper";

import {
  LinearGauge,
  LinearGaugePointer,
  RadialGauge,
  RadialGaugePointer,
  ArcGauge,
  ArcGaugeColor,
  GaugesInstaller
} from "@progress/kendo-gauges-vue-wrapper";

import { Grid, GridInstaller } from "@progress/kendo-grid-vue-wrapper";

import {
  MaskedTextBox,
  NumericTextBox,
  ColorPicker,
  Slider,
  RangeSlider,
  InputsInstaller
} from "@progress/kendo-inputs-vue-wrapper";

import {
  ContextMenu,
  Menu,
  PanelBar,
  Splitter,
  TabStrip,
  LayoutInstaller
} from "@progress/kendo-layout-vue-wrapper";

import { ListBox, ListBoxInstaller } from "@progress/kendo-listbox-vue-wrapper";

import {
  Pager,
  ListView,
  ListViewInstaller
} from "@progress/kendo-listview-vue-wrapper";

import {
  Map,
  MapMarker,
  MapLayer,
  MapInstaller
} from "@progress/kendo-map-vue-wrapper";

import {
  MediaPlayer,
  MediaPlayerInstaller
} from "@progress/kendo-mediaplayer-vue-wrapper";

import {
  PivotGrid,
  PivotGridInstaller
} from "@progress/kendo-pivotgrid-vue-wrapper";

import {
  KendoTooltip,
  KendoNotification,
  KendoPopupsInstaller
} from "@progress/kendo-popups-vue-wrapper";

import {
  Scheduler,
  SchedulerResource,
  SchedulerView,
  SchedulerInstaller
} from "@progress/kendo-scheduler-vue-wrapper";

import {
  Spreadsheet,
  SpreadsheetSheet,
  SpreadsheetInstaller
} from "@progress/kendo-spreadsheet-vue-wrapper";

import {
  TreeList,
  TreeListInstaller
} from "@progress/kendo-treelist-vue-wrapper";

import { TreeMap, TreeMapInstaller } from "@progress/kendo-treemap-vue-wrapper";

import {
  TreeView,
  TreeViewItem,
  TreeViewInstaller
} from "@progress/kendo-treeview-vue-wrapper";

import { Upload, UploadInstaller } from "@progress/kendo-upload-vue-wrapper";

import {
  Validator,
  ValidatorInstaller
} from "@progress/kendo-validator-vue-wrapper";

import { Window, WindowInstaller } from "@progress/kendo-window-vue-wrapper";

Vue.use(BarcodesInstaller);
Vue.use(ButtonsInstaller);
Vue.use(ChartInstaller);
Vue.use(ChatInstaller);
Vue.use(DataSourceInstaller);
Vue.use(DateinputsInstaller);
Vue.use(DiagramInstaller);
Vue.use(DialogInstaller);
Vue.use(DropDownTreeInstaller);
Vue.use(DropdownsInstaller);
Vue.use(EditorInstaller);
Vue.use(GanttInstaller);
Vue.use(EditorInstaller);
Vue.use(GaugesInstaller);
Vue.use(GridInstaller);
Vue.use(InputsInstaller);
Vue.use(LayoutInstaller);
Vue.use(ListBoxInstaller);
Vue.use(ListViewInstaller);
Vue.use(MapInstaller);
Vue.use(MediaPlayerInstaller);
Vue.use(PivotGridInstaller);
Vue.use(KendoPopupsInstaller);
Vue.use(SchedulerInstaller);
Vue.use(SpreadsheetInstaller);
Vue.use(TreeListInstaller);
Vue.use(TreeMapInstaller);
Vue.use(TreeViewInstaller);
Vue.use(UploadInstaller);
Vue.use(ValidatorInstaller);
Vue.use(WindowInstaller);

export default {
  Barcode,
  QRCode,
  Button,
  ButtonGroup,
  ButtonGroupButton,
  ToolBar,
  ToolBarItem,
  Chart,
  ChartSeriesItem,
  Chat,
  Sparkline,
  SparklineSeriesItem,
  StockChart,
  DataSource,
  HierarchicalDataSource,
  GanttDataSource,
  GanttDependencyDataSource,
  PivotDataSource,
  SchedulerDataSource,
  TreeListDataSource,
  Calendar,
  DateInput,
  TimePicker,
  DatePicker,
  DateTimePicker,
  Diagram,
  Dialog,
  DropDownTree,
  AutoComplete,
  ComboBox,
  DropDownList,
  MultiSelect,
  MultiColumnComboBox,
  MultiColumnComboBoxColumn,
  Editor,
  EditorTool,
  Gantt,
  LinearGauge,
  LinearGaugePointer,
  RadialGauge,
  RadialGaugePointer,
  ArcGauge,
  ArcGaugeColor,
  Grid,
  MaskedTextBox,
  NumericTextBox,
  ColorPicker,
  Slider,
  RangeSlider,
  ContextMenu,
  Menu,
  PanelBar,
  Splitter,
  TabStrip,
  ListBox,
  Pager,
  ListView,
  Map,
  MapMarker,
  MapLayer,
  MediaPlayer,
  PivotGrid,
  KendoTooltip,
  KendoNotification,
  Scheduler,
  SchedulerResource,
  SchedulerView,
  Spreadsheet,
  SpreadsheetSheet,
  TreeList,
  TreeMap,
  TreeView,
  TreeViewItem,
  Upload,
  Validator,
  Window
};
