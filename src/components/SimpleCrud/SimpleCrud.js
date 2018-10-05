export default {
  name: "SimpleCrud",
  data() {
    return {
      schemaModelFields: {
        ProductID: { editable: false, nullable: true },
        ProductName: { validation: { required: true } },
        UnitPrice: { type: "number", validation: { required: true, min: 1 } },
        Discontinued: { type: "boolean" },
        UnitsInStock: { type: "number", validation: { min: 0, required: true } }
      }
    };
  },
  methods: {
    parameterMap: function(options, operation) {
      if (operation !== "read" && options.models) {
        return { models: kendo.stringify(options.models) };
      }
    }
  }
};
