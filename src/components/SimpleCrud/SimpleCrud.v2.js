export default {
  name: "SimpleCrud",
  props: {},
  methods: {
    methods: {
      onClick: function(e) {
        console.log("Event :: click");
      },
      onClose: function(e) {
        console.log("Event :: close");
      },
      onOpen: function(e) {
        console.log("Event :: open");
      },
      onToggle: function(e) {
        console.log("Event :: toggle");
      },
      onOverflowClose: function(e) {
        console.log("Event :: overflow close");
      },
      onOverflowOpen: function(e) {
        console.log("Event :: overflow open");
      }
    }
  },
  data() {
    return {
      loading: true,
      dataSource: [
        {
          ProductID: 1,
          ProductName: "Chai",
          UnitPrice: 18,
          UnitsInStock: 39,
          Discontinued: false
        },
        {
          ProductID: 2,
          ProductName: "Chang",
          UnitPrice: 17,
          UnitsInStock: 40,
          Discontinued: false
        },
        {
          ProductID: 3,
          ProductName: "Aniseed Syrup",
          UnitPrice: 10,
          UnitsInStock: 13,
          Discontinued: false
        }
      ][
        ({
          ProductID: 1,
          ProductName: "Chai",
          UnitPrice: 18,
          UnitsInStock: 39,
          Discontinued: false
        },
        {
          ProductID: 2,
          ProductName: "Chang",
          UnitPrice: 17,
          UnitsInStock: 40,
          Discontinued: false
        },
        {
          ProductID: 3,
          ProductName: "Aniseed Syrup",
          UnitPrice: 10,
          UnitsInStock: 13,
          Discontinued: false
        })
      ]
    };
  }
};
