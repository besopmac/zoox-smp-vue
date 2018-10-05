<template>
  <div id="vueapp" class="vue-app">
    <kendo-datasource ref="datasource1"
                      :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Products'"
                      :transport-read-data-type="'jsonp'"
                      :transport-update-url="'https://demos.telerik.com/kendo-ui/service/Products/Update'"
                      :transport-update-data-type="'jsonp'"
                      :transport-destroy-url="'https://demos.telerik.com/kendo-ui/service/Products/Destroy'"
                      :transport-destroy-data-type="'jsonp'"
                      :transport-create-url="'https://demos.telerik.com/kendo-ui/service/Products/Create'"
                      :transport-create-data-type="'jsonp'"
                      :transport-parameter-map="parameterMap"
                      :schema-model-id="'ProductID'"
                      :schema-model-fields="schemaModelFields"
                      :batch='true'
                      :page-size='20'>
    </kendo-datasource>

    <kendo-grid :height="600"
                :data-source-ref="'datasource1'"
                :navigatable="true"
                :pageable="true"
                :editable="false"
                :toolbar="['create', 'save', 'cancel', { name: 'create', text: 'Add' }]">
        <kendo-grid-column :field="'ProductName'"></kendo-grid-column>
        <kendo-grid-column :field="'UnitPrice'"
                           :title="'Unit Price'"
                           :width="120"
                           :format="'{0:c}'"></kendo-grid-column>
        <kendo-grid-column :field="'UnitsInStock'"
                           :title="'Units In Stock'"
                           :width="120"></kendo-grid-column>
        <kendo-grid-column :field="'Discontinued'" :width="120"></kendo-grid-column>
        <kendo-grid-column :command="['edit', 'destroy']"
                           :title="'&nbsp;'"
                           :width="100"></kendo-grid-column>
    </kendo-grid>
  </div>
</template>

<script src="./SimpleCrud.js" />

<style lang="scss" scoped>
.box-filter {
  padding: 2.5% 2.5% 1.5%;
}

@media screen and (min-width: 768px) {
  .box-filter {
    padding: 2% 1.5% 0.5%;
  }

  .right.mat-cell,
  .right.mat-header-cell {
    display: flex;
    padding-right: 1.5%;
    justify-content: flex-end;
  }

  .left.mat-cell,
  .left.mat-header-cell {
    display: flex;
    padding-left: 1.5%;
    justify-content: flex-start;
  }

  .right.mat-header-cell:last-child {
    margin-right: 0;
  }

  .list-table {
    line-height: 2em;
  }
}
</style>
