import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  -- Logo
 * --- Menu
 * Body
 * --search\
 * -- Restaurant container
 * ------- Restaurant card
 * Footer
 * -- copyright
 * --- somne links
 * --- Address of company
 *
 * @returns
 */

// const Title = () => (<h1 id="heading" className="head class" tabIndex={1}>This is come from jsx </h1>)

// const number = 1000;

// const HeadingComponent = () => (
//      <div id="container">
//           <h2>{number}</h2>
//           <Title/>
//           <h1 className="header"> This is Functional component </h1>

//      </div>
// );

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/premium-vector/online-food-app-icon-food-shop-location-logo-also-online-resturent-location-template_608547-155.jpg?w=826"
        ></img>
      </div>

      <div className="nav-items">
        <ul>
          <li> Home </li>
          <li> About us </li>
          <li> Contact us </li>
          <li> Cart </li>
        </ul>
      </div>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "353956",
      name: "Bakingo",
      cloudinaryImageId: "0c53fd8f62e3d25ba56d1b4cfe572cef",
      locality: "A Block",
      areaName: "Sector 83",
      costForTwo: "₹300 for two",
      cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
      avgRating: 4.3,
      parentId: "3818",
      avgRatingString: "4.3",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "20 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-02 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
    },
  },
  {
    info: {
      id: "28797",
      name: "Domino's Pizza",
      cloudinaryImageId: "vhbeexcj4xkytbcghko9",
      locality: "A 3rd Block",
      areaName: "Sector 110",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.2,
      parentId: "2456",
      avgRatingString: "4.2",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 25,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-02 00:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
  },
  {
    info: {
      id: "622165",
      name: "MOJO Pizza - 2X Toppings",
      cloudinaryImageId: "59b64f9bb67234987652437f21d379c2",
      locality: "Sector 49",
      areaName: "Noida",
      costForTwo: "₹250 for two",
      cuisines: ["Pizzas", "Italian", "Fast Food", "Desserts"],
      avgRating: 4.4,
      parentId: "11329",
      avgRatingString: "4.4",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 4.7,
        serviceability: "SERVICEABLE",
        slaString: "21-31 mins",
        lastMileTravelString: "4.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-02 02:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-1e100510-a3bf-4a5c-9615-eae4a638e641",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/mojo-pizza-2x-toppings-sector-49-noida-noida-1-622165",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "702769",
      name: "La Pino'z Pizza",
      cloudinaryImageId: "5fe4444a065b60c4fe39ef975222c12b",
      locality: "World One",
      areaName: "Sector 90",
      costForTwo: "₹400 for two",
      cuisines: [
        "Pizzas",
        "Pastas",
        "Beverages",
        "Fast Food",
        "Italian",
        "Desserts",
      ],
      avgRating: 3.9,
      parentId: "4961",
      avgRatingString: "3.9",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 3.9,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        lastMileTravelString: "3.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-02 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-1e100510-a3bf-4a5c-9615-eae4a638e641",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/la-pinoz-pizza-world-one-sector-90-noida-1-702769",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "561297",
      name: "Subway",
      cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
      locality: "Sector 1",
      areaName: "Shahdara",
      costForTwo: "₹400 for two",
      cuisines: ["Fast Food", "Snacks", "Beverages"],
      avgRating: 4.1,
      parentId: "2",
      avgRatingString: "4.1",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 3.9,
        serviceability: "SERVICEABLE",
        slaString: "35 mins",
        lastMileTravelString: "3.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-02 08:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-1e100510-a3bf-4a5c-9615-eae4a638e641",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/subway-sector-1-shahdara-noida-1-561297",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

const Restaurant = (props) => {
  // const { resName, cusineName } = props;

  const { resData } = props;
  //console.log(resData.name);

  const {
    name,
    cuisines,
    costForTwo,
    avgRating,
    deliveryTime,
    cloudinaryImageId,
  } = resData?.info;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0f0" }}>
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      ></img>
      <h3>{name} </h3>
      <h4>{cuisines.join(",")} </h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
      <h4>3{deliveryTime} Minutes </h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Serarch</div>
      <div className="res-container">
        {resList.map((restaurants) => (
          <Restaurant key={restaurants.info.id} resData={restaurants} />
        ))}
      </div>
    </div>
  );
};

const Applayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Body />
    </div>
  );
};

const rootx = ReactDOM.createRoot(document.getElementById("root"));

rootx.render(<Applayout />);
