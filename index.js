const productDetails1 = {
    tomato: {
        name: "Tomato",
        description: "Fresh and juicy tomatoes.",
        price: "₹150.00",
        image: "images/vegetables/tomato.jpeg"
    },
    beans: {
        name: "Beans",
        description: "Fresh and healthy beans.",
        price: "₹150.00",
        image: "images/vegetables/beans.jpeg"
    },
    // Add details for other products
};


const productDetails = {
    beans: {
        name: "Beans",
        description: "Beans are a healthy and versatile vegetable. They are known for their fresh and crisp texture, making them a perfect addition to various dishes.",
        benefits: [
            "Rich in dietary fiber, beans promote good digestive health.",
            "They are a good source of vitamins and minerals.",
            "Beans are great for adding to salads, stir-fries, and soups."
        ],
        price: "₹150.00",
        image: "images/vegetables/beans.jpeg",
        offer: "34%",
        storageAndUses: "Store beans in a cool, dry place. They can be used in a variety of dishes, from salads to side dishes."
    },
    bittergourd: {
        name: "Bitter Gourd",
        description: "Bitter Gourd, also known as bitter melon, is a nutrient-rich vegetable known for its unique bitter taste. It is often used in traditional dishes.",
        benefits: [
            "It's low in calories but high in fiber, making it great for weight management.",
            "Bitter gourd is known for its potential health benefits."
        ],
        price: "₹150.00",
        offer: "34%",
        image: "images/vegetables/bittergourd.jpeg",
        storageAndUses: "Bitter gourd should be stored in the refrigerator. It can be used in curries, stir-fries, and even as a natural remedy."
    },
    brinjal: {
        name: "Brinjal",
        description: "Brinjal, also known as eggplant, is a versatile vegetable used in a wide range of cuisines. It has a unique taste and texture.",
        benefits: [
            "Brinjal is a good source of dietary fiber and various vitamins and minerals.",
            "It's used in dishes like curries, stir-fries, and even as a stuffing."
        ],
        price: "₹150.00",
        offer: "34%",
        image: "images/vegetables/brinjal.jpeg",
        storageAndUses: "Store brinjal in a cool, dry place. It can be used in various savory dishes."
    },
    cabbage: {
        name: "Cabbage",
        description: "Cabbage is made up of tightly bound clusters of soft, crumbly, sweet cabbage leaves that form a dense head. It's a common and versatile vegetable.",
        benefits: [
            "Cabbage is low in calories and rich in vitamins and minerals.",
            "It's used in coleslaw, salads, stir-fries, and various other recipes."
        ],
        price: "₹150.00",
        offer: "34%",
        image: "images/vegetables/cabbage.jpeg",
        storageAndUses: "Store cabbage in the refrigerator. It can be used in a variety of dishes, including coleslaw and sauerkraut."
    },
    carrot: {
        name: "Carrot",
        description: "Carrots are well-known for their vibrant orange color and sweet, crunchy taste. They are a popular and nutritious vegetable.",
        benefits: [
            "Carrots are rich in beta-carotene, which is good for eye health.",
            "They are used in salads, as a snack, and in cooking."
        ],
        price: "₹150.00",
        offer: "34%",
        image: "images/vegetables/carrot.jpeg",
        storageAndUses: "Store carrots in the refrigerator. They can be eaten raw, cooked, or used in soups and stews."
    },
    cauliflower: {
        name: "Cauliflower",
        description: "Cauliflower is made up of tightly bound clusters of soft, crumbly, sweet cauliflower florets that form a dense head. Resembling a classic tree, the florets are attached to a central edible white trunk which is firm and tender.",
        benefits: [
            "One serving of cauliflower contains 77 percent of the daily recommended value of vitamin C.",
            "Cauliflowers are rich in B complex vitamins, potassium, and manganese. They protect from the risk of heart diseases and brain disorders.",
            "It also contains a cancer-fighting nutrient called sulforaphane."
        ],
        price: "₹150.00",
        offer: "34%",
        image: "images/vegetables/cauliflower.jpeg.jpg",
        storageAndUses: "Refrigerate in a loosely sealed plastic bag. It keeps well for up to 7 days. Do not store florets for more than 5 days. Cooked and used in soups, rice, curries, gobi parathas (flatbreads), one of the most liked recipes."
    },
    elephantyam: {
        name: "Elephant Yam",
        description: "Elephant Yam, also known as Suran, is a starchy and nutritious vegetable. It is commonly used in Indian and Asian cuisines.",
        benefits: [
            "It is a good source of carbohydrates and dietary fiber.",
            "Elephant Yam is used in curries, fries, and traditional dishes."
        ],
        price: "₹150.00",
        offer: "34%",
        image: "images/vegetables/elephantyam.jpeg",
        storageAndUses: "Store elephant yam in a cool, dry place. It can be used in a variety of savory dishes."
    },
    ladysfinger: {
        name: "Lady's Finger (Okra)",
        description: "Lady's Finger, also known as Okra, is a green, slim, and nutritious vegetable. It is a common ingredient in various cuisines.",
        benefits: [
            "It's low in calories and rich in vitamins and minerals.",
            "Lady's finger is used in curries, gumbo, and stir-fries."
        ],
        price: "₹150.00",
        offer: "34%",
        image: "images/vegetables/ladysfinger.jpeg",
        storageAndUses: "Store lady's finger in the refrigerator. It can be used in a variety of dishes, especially in Indian and Southern cuisines."
    },
    onion: {
        name: "Onion",
        description: "Onions are a fundamental ingredient in cooking, known for their pungent flavor and versatility in various recipes.",
        benefits: [
            "Onions are a good source of antioxidants and vitamin C.",
            "They are used in salads, curries, and as a flavor base in many dishes."
        ],
        price: "₹150.00",
        offer: "34%",
        image: "images/vegetables/onion.jpeg",
        storageAndUses: "Store onions in a cool, dry place. They can be used in a wide range of savory dishes."
    },
    pumpkin: {
        name: "Pumpkin",
        description: "Pumpkin is a nutritious and naturally sweet vegetable. It's known for its bright orange color and delicious taste.",
        benefits: [
            "Pumpkin is rich in vitamins and antioxidants.",
            "It's used in soups, pies, and various desserts."
        ],
        price: "₹150.00",
        offer: "34%",
        image: "images/vegetables/pumpkin.jpeg",
        storageAndUses: "Store pumpkin in a cool, dry place. It's used in both savory and sweet dishes."
    },
    radish: {
        name: "Radish",
        description: "Radishes are crunchy and peppery root vegetables. They add a burst of flavor to salads and other dishes.",
        benefits: [
            "Radishes are low in calories and a good source of vitamin C.",
            "They are often used in salads and pickles."
        ],
        price: "₹150.00",
        offer: "34%",
        image: "images/vegetables/raddish.jpeg",
        storageAndUses: "Store radishes in the refrigerator. They are great for fresh salads and side dishes."
    },
    spinach: {
        name: "Spinach",
        description: "Spinach is a leafy green vegetable packed with nutrients. It's known for its versatility in cooking.",
        benefits: [
            "Spinach is rich in iron, vitamins, and minerals.",
            "It's used in salads, smoothies, and various savory dishes."
        ],
        price: "₹150.00",
        offer: "34%",
        image: "images/vegetables/spinach.jpeg",
        storageAndUses: "Store spinach in the refrigerator. It's perfect for fresh salads, sautés, and omelets."
    },
    tomato: {
        name: "Tomato",
        description: "Tomatoes are a staple in many cuisines. They are known for their juicy and slightly tangy flavor.",
        benefits: [
            "Tomatoes are low in calories and provide important nutrients like vitamin C and potassium. They're also rich in antioxidants—one called lycopene, responsible for tomatoes' characteristic color, is linked to several benefits, such as a reduced risk of heart disease and certain cancers."],
        image: "images/vegetables/tomato.jpeg",
        offer: "34%",
        price: "₹150.00",
        storageAndUses: "For short-term storage, it is best to keep the tomatoes in a well-vented ripening dome or a paper bag at the coolest room temperature possible. Be sure to keep the fruit out of direct sunlight as it will warm the fruit and cause more rapid softening."
    },
    potato: {
        name: "Potato",
        description: "Potatoes are one of the world's most widely consumed vegetables. They are known for their starchy and versatile nature, making them a popular choice in various dishes.",
        benefits: [
            "Potatoes are a good source of carbohydrates and dietary fiber.",
            "They are rich in vitamins and minerals, including vitamin C and potassium.",
            "Potatoes are used in a wide range of recipes, from mashed potatoes to French fries."
        ],
        image: "images/featuredproducts/featured6.jpeg",
        offer: "34%",
        price: "₹150.00",
        storageAndUses: "Store potatoes in a cool, dark place. They can be used in countless recipes, both savory and sweet."
    },
    // Vegetables contents


    apple: {
        name: "Apple",
        description: "Apples are one of the most popular fruits in the world. They are known for their sweet and crisp texture.",
        benefits: [
            "Apples are a good source of dietary fiber, vitamin C, and various antioxidants.",
            "They may help reduce the risk of chronic diseases and promote heart health.",
            "Apples can be enjoyed fresh or used in a variety of desserts and dishes."
        ],
        image: "images/fruits/apple.jpeg",
        price: "₹150.00",
        storageAndUses: "Store apples in a cool, dark place or refrigerate them. They can be eaten fresh or used in salads, pies, and more."
    },
    banana: {
        name: "Banana",
        description: "Bananas are a tropical fruit known for their distinctive shape and sweet flavor.",
        benefits: [
            "Bananas are rich in potassium and vitamin B6, making them a healthy snack choice.",
            "They are convenient for on-the-go consumption and can be added to smoothies or oatmeal."
        ],
        image: "images/fruits/banana.jpeg",
        price: "₹100.00",
        storageAndUses: "Store bananas at room temperature. They can be eaten as a quick snack or added to various recipes."
    },
    dragonfruit: {
        name: "Dragonfruit",
        description: "Dragonfruit, also known as pitaya, is a visually striking fruit with vibrant colors and a mildly sweet taste.",
        benefits: [
            "Dragonfruit is rich in vitamin C, fiber, and antioxidants.",
            "It may support digestion and provide several essential nutrients."
        ],
        image: "images/fruits/dragonfruit.jpeg",
        price: "₹200.00",
        storageAndUses: "Store dragonfruit in the refrigerator. It can be eaten fresh or used in fruit salads and smoothie bowls."
    },
    gooseberry: {
        name: "Gooseberry",
        description: "Gooseberries are small, round fruits that offer a unique sweet-tart flavor.",
        benefits: [
            "Gooseberries are a good source of vitamin C and fiber.",
            "They are known for their antioxidant properties and potential health benefits."
        ],
        image: "images/fruits/gooseberry.jpeg",
        price: "₹120.00",
        storageAndUses: "Store gooseberries in the refrigerator. They can be used in jams, desserts, and as a snack."
    },
    grapes: {
        name: "Grapes",
        description: "Grapes come in various colors and are known for their naturally sweet taste.",
        benefits: [
            "Grapes are rich in antioxidants, vitamins, and minerals.",
            "They may support heart health and overall well-being.",
        ],
        image: "images/fruits/grapes.jpeg",
        price: "₹180.00",
        storageAndUses: "Store grapes in the refrigerator. They can be eaten fresh or used in salads and desserts."
    },
    mango: {
        name: "Mango",
        description: "Mangoes are often called the 'king of fruits' and are loved for their sweet and juicy flesh.",
        benefits: [
            "Mangoes are rich in vitamin C, vitamin A, and dietary fiber.",
            "They are versatile and can be enjoyed fresh, in smoothies, or in a variety of dishes.",
        ],
        image: "images/fruits/mango.jpeg",
        price: "₹160.00",
        storageAndUses: "Store mangoes at room temperature until ripe. They can be eaten fresh or used in mango-based recipes."
    },
    orange: {
        name: "Orange",
        description: "Oranges are a citrus fruit known for their refreshing taste and high vitamin C content.",
        benefits: [
            "Oranges are an excellent source of vitamin C and antioxidants.",
            "They support the immune system and overall health.",
        ],
        image: "images/fruits/orange.jpeg",
        price: "₹120.00",
        storageAndUses: "Store oranges in the refrigerator. They can be eaten fresh or used to make fresh orange juice."
    },
    papaya: {
        name: "Papaya",
        description: "Papayas are tropical fruits with sweet, orange flesh and numerous black seeds at the center.",
        benefits: [
            "Papayas are rich in vitamin C, vitamin A, and dietary fiber.",
            "They are known for their digestive enzymes and potential health benefits.",
        ],
        image: "images/fruits/papaya.jpeg",
        price: "₹140.00",
        storageAndUses: "Store papayas in the refrigerator. They can be enjoyed fresh or added to fruit salads."
    },
    pomegranate: {
        name: "Pomegranate",
        description: "Pomegranates are unique fruits filled with ruby-red, jewel-like seeds surrounded by sweet-tart juice.",
        benefits: [
            "Pomegranates are high in antioxidants and vitamin C.",
            "They are believed to have various health benefits, including heart health support.",
        ],
        image: "images/fruits/pommegranate.jpeg",
        price: "₹160.00",
        storageAndUses: "Store pomegranates in the refrigerator. They can be enjoyed by eating the seeds or juicing them."
    },
    redguava: {
        name: "Red Guava",
        description: "Red guavas are tropical fruits with a sweet and slightly grainy flesh. They are often eaten fresh.",
        benefits: [
            "Red guavas are rich in vitamin C and dietary fiber.",
            "They are known for their antioxidant content and potential health benefits.",
        ],
        image: "images/fruits/redguava.jpeg",
        price: "₹150.00",
        storageAndUses: "Store red guavas at room temperature until ripe. They can be eaten fresh or used in smoothies."
    },
    strawberry: {
        name: "Strawberry",
        description: "Strawberries are red, heart-shaped fruits known for their sweet and slightly tangy flavor.",
        benefits: [
            "Strawberries are a good source of vitamin C, fiber, and antioxidants.",
            "They are often used in desserts, salads, and as a topping for various dishes.",
        ],
        image: "images/fruits/strawberry.jpeg",
        price: "₹180.00",
        storageAndUses: "Store strawberries in the refrigerator. They can be eaten fresh or used in a variety of recipes."
    },
    watermelon: {
        name: "Watermelon",
        description: "Watermelons are large, juicy fruits with sweet, red or pink flesh and black seeds.",
        benefits: [
            "Watermelons are hydrating and contain vitamins A and C.",
            "They are a popular choice for staying refreshed in hot weather.",
        ],
        image: "images/fruits/watermelon.jpeg",
        price: "₹120.00",
        storageAndUses: "Store watermelon in the refrigerator. It can be sliced and eaten fresh or used in beverages."
    },
    pineapple: {
        name: "Pineapple",
        description: "Pineapples are tropical fruits known for their sweet and tangy flavor. They have a spiky, rough skin and yellow flesh.",
        benefits: [
            "Pineapples are a good source of vitamin C and dietary fiber.",
            "They contain bromelain, an enzyme with potential anti-inflammatory properties.",
            "Pineapples are versatile and can be enjoyed fresh, in fruit salads, or used in cooking.",
        ],
        image: "images/fruits/pineapple.jpeg",
        price: "₹150.00",
        storageAndUses: "Store pineapples in the refrigerator. They can be enjoyed fresh, added to fruit salads, or used in various recipes."
    },
    // Dairy Products


    eggs6: {
        name: "6 Eggs",
        description: "A half-dozen farm-fresh eggs.",
        benefits: [
            "High-quality protein source.",
            "Rich in essential vitamins and minerals."
        ],
        image: "images\\dairyproducts\\6eggs.jpeg",
        price: "₹20.00",
        storageAndUses: "Store eggs in the refrigerator. Great for breakfast and baking."
    },
    eggs30: {
        name: "30 Eggs",
        description: "A pack of 30 farm-fresh eggs.",
        benefits: [
            "High-quality protein source.",
            "Rich in essential vitamins and minerals."
        ],
        image: "images\\dairyproducts\\30eggs.jpeg",
        price: "₹100.00",
        storageAndUses: "Store eggs in the refrigerator. Perfect for families."
    },
    boxicecream: {
        name: "Box of Ice Cream",
        description: "A delicious assortment of ice cream flavors.",
        benefits: [
            "Perfect for satisfying your sweet tooth.",
            "Variety of flavors for everyone to enjoy."
        ],
        image: "images\\dairyproducts\\boxicecream.jpeg",
        price: "₹250.00",
        storageAndUses: "Keep frozen. Enjoy on a hot day or as a dessert."
    },
    butter: {
        name: "Butter",
        description: "Pure and creamy butter for cooking and spreading.",
        benefits: [
            "Versatile for cooking, baking, or spreading on toast.",
            "Rich, creamy taste."
        ],
        image: "images\\dairyproducts\\butter.jpeg",
        price: "₹30.00",
        storageAndUses: "Store in the refrigerator. Great for cooking and baking."
    },
    cheese: {
        name: "Cheese",
        description: "A selection of fine cheeses.",
        benefits: [
            "Great for snacking or adding to recipes.",
            "Rich in calcium and protein."
        ],
        image: "images/dairyproducts/cheese.jpg",
        price: "₹60.00",
        storageAndUses: "Store in the refrigerator. Ideal for cheese platters."
    },
    cream: {
        name: "Cream",
        description: "Fresh, high-quality cream for various culinary uses.",
        benefits: [
            "Perfect for making desserts and sauces.",
            "Adds richness to dishes."
        ],
        image: "images\\dairyproducts\\cream.jpeg",
        price: "₹40.00",
        storageAndUses: "Keep refrigerated. Ideal for cooking and baking."
    },
    ghee: {
        name: "Ghee",
        description: "Pure, clarified butter with a rich, nutty flavor.",
        benefits: [
            "Used in Indian cooking for its flavor and health benefits.",
            "Great for sautéing and frying."
        ],
        image: "images\\dairyproducts\\ghee.jpeg",
        price: "₹80.00",
        storageAndUses: "Store in a cool, dark place. Suitable for Indian cuisine."
    },
    kefir: {
        name: "Kefir",
        description: "A cultured dairy product similar to yogurt.",
        benefits: [
            "Probiotic-rich for gut health.",
            "Versatile for drinking or using in smoothies."
        ],
        image: "images\\dairyproducts\\kefir.jpeg",
        price: "₹50.00",
        storageAndUses: "Keep refrigerated. Enjoy as a healthy drink or in recipes."
    },
    milk: {
        name: "Milk",
        description: "Fresh and nutritious cow's milk.",
        benefits: [
            "Excellent source of calcium and vitamins.",
            "Great for drinking and cooking."
        ],
        image: "images\\dairyproducts\\milk.jpeg",
        price: "₹25.00",
        storageAndUses: "Keep refrigerated. Use for beverages and cooking."
    },
    vanillaicecream: {
        name: "Vanilla Ice Cream",
        description: "Classic vanilla ice cream for a sweet treat.",
        benefits: [
            "A timeless favorite for dessert lovers.",
            "Pairs well with various toppings."
        ],
        image: "images\\dairyproducts\\vanillaicecream.jpeg",
        price: "₹60.00",
        storageAndUses: "Keep frozen. Add your favorite toppings and enjoy."
    },
    yoghurt: {
        name: "Yoghurt",
        description: "Smooth and creamy yoghurt for snacking or cooking.",
        benefits: [
            "Protein-rich and great for gut health.",
            "Versatile for smoothies, parfaits, and more."
        ],
        image: "images\\dairyproducts\\yoghurt.jpeg",
        price: "₹35.00",
        storageAndUses: "Keep refrigerated. Enjoy as a snack or in recipes."
    },


    DaburToothpaste: {
        description: "Dabur Toothpaste is a trusted oral care product known for its natural ingredients and effectiveness in maintaining oral hygiene.",
        benefits: [
            "Helps prevent cavities and tooth decay.",
            "Contains herbal ingredients for fresh breath.",
            "Supports gum health."
        ],
        offer: "20%",
        image: "images\\groceries\\daburpaste.jpeg",
        price: "₹75.00",
        storageAndUses: "Store in a cool, dry place. Use daily for best results."
    },
    GarlicPickle: {
        description: "Garlic Pickle is a flavorful condiment made from garlic cloves, spices, and oil. It adds a zesty touch to your meals.",
        benefits: [
            "Enhances the taste of your meals.",
            "Contains garlic, known for its potential health benefits.",
            "Adds a spicy kick to your dishes."
        ],
        offer: "15%",
        image: "images\\groceries\\garlicpickle.jpeg",
        price: "₹120.00",
        storageAndUses: "Store in a cool, dry place. Serve with rice or bread for a tasty meal."
    },
    GingellyOil: {
        description: "Gingelly Oil, also known as sesame oil, is a nutritious cooking oil known for its unique flavor and health benefits.",
        benefits: [
            "Rich in antioxidants and healthy fats.",
            "Enhances the taste of various dishes.",
            "Used for culinary and medicinal purposes."
        ],
        offer: "10%",
        image: "images\\groceries\\gingelyoil.jpeg",
        price: "₹180.00",
        storageAndUses: "Store in a cool, dark place. Ideal for cooking, frying, and dressing salads."
    },
    GreenGram: {
        description: "Green Gram, or Moong Dal, is a versatile lentil used in various Indian dishes, from dals to sweets.",
        benefits: [
            "High in protein and dietary fiber.",
            "Suitable for both savory and sweet dishes.",
            "Essential in vegetarian diets."
        ],
        offer: "5%",
        image: "images\\groceries\\greengram.jpeg",
        price: "₹50.00",
        storageAndUses: "Store in a dry, airtight container. Use in curries, soups, and desserts."
    },
    GroundnutOil: {
        description: "Groundnut Oil, also known as peanut oil, is a popular cooking oil with a mild, nutty flavor.",
        benefits: [
            "Suitable for frying, roasting, and sautéing.",
            "Contains heart-healthy monounsaturated fats.",
            "Adds a delightful flavor to your dishes."
        ],
        offer: "10%",
        image: "images\\groceries\\groundnutoil.jpeg",
        price: "₹160.00",
        storageAndUses: "Store in a cool, dry place. Great for deep frying and general cooking."
    },
    HairOil: {
        description: "Hair Oil is a nourishing blend of natural oils that promote healthy hair and scalp.",
        benefits: [
            "Strengthens hair and reduces hair fall.",
            "Conditions the scalp and prevents dandruff.",
            "Promotes hair growth and adds shine."
        ],
        offer: "15%",
        image: "images\\groceries\\hairoil.jpeg",
        price: "₹90.00",
        storageAndUses: "Store in a cool, dark place. Massage into the scalp and leave for a few hours before washing."
    },
    AachiPepperPowder: {
        description: "Aachi Pepper Powder is a versatile spice that adds a bold, spicy flavor to a variety of dishes.",
        benefits: [
            "Enhances the taste of curries, soups, and stews.",
            "Contains antioxidants and potential health benefits.",
            "Adds a zing to your meals."
        ],
        offer: "5%",
        image: "images\\groceries\\pepper.jpeg",
        price: "₹60.00",
        storageAndUses: "Store in a dry place. Use in cooking for an extra kick of flavor."
    },
    RedLabelTea: {
        description: "Red Label Tea is a popular tea brand known for its rich taste and aroma.",
        benefits: [
            "A soothing and refreshing beverage.",
            "A source of antioxidants.",
            "Perfect for a morning or evening tea."
        ],
        offer: "10%",
        image: "images\\groceries\\redlabel.jpeg",
        price: "₹80.00",
        storageAndUses: "Store in an airtight container. Brew with hot water and enjoy with milk and sugar."
    },
    Turmeric: {
        description: "Turmeric is a bright yellow spice known for its earthy flavor and potential health benefits.",
        benefits: [
            "Used in cooking and traditional medicine.",
            "Contains curcumin, a natural anti-inflammatory compound.",
            "Adds color and flavor to curries and stews."
        ],
        offer: "0%",
        image: "images\\featuredproducts\\featured8.jpeg",
        price: "₹30.00",
        storageAndUses: "Store in a cool, dry place. Use in curries, rice, and soups."
    },
    Aashirvad: {
        name: "Aashirvad Atta",
        description: "Aashirvad Atta is a popular brand of whole wheat flour used to make chapatis, rotis, and other Indian bread.",
        benefits: [
            "Made from 100% whole wheat grains for maximum nutrition.",
            "Ideal for making soft and fluffy chapatis and rotis.",
            "A staple in Indian households for daily meals."
        ],
        offer: "10%",
        image: "images\\featuredproducts\\featured2.jpeg",
        price: "₹120.00",
        storageAndUses: "Store in a cool, dry place. Use to make chapatis, rotis, and other wheat-based dishes."
    },
    sunrich: {
        name: "Sunrich Refined Sunflower Oil",
        description: "Sunrich Refined Sunflower Oil is a high-quality cooking oil known for its light color and neutral taste.",
        benefits: [
            "Rich in heart-healthy monounsaturated fats.",
            "Suitable for various cooking methods, including frying and sautéing.",
            "Adds a mild flavor to your dishes without overpowering the taste."
        ],
        offer: "15%",
        image: "images\\featuredproducts\\featured5.jpeg",
        price: "₹150.00",
        storageAndUses: "Store in a cool, dry place. Use for frying, roasting, and everyday cooking needs."
    },
    UradDal: {
        description: "Urad Dal, or black gram, is a nutritious lentil used in a variety of Indian dishes.",
        benefits: [
            "High in protein and dietary fiber.",
            "Essential in South Indian cuisine.",
            "Ideal for making dosas, idlis, and more."
        ],
        offer: "5%",
        image: "images\\groceries\\uraddal.jpeg",
        price: "₹70.00",
        storageAndUses: "Store in a dry, airtight container. Use in dosas, idlis, and dals."
    }
};

function checkPincode() {
    const pincode = document.getElementById('pincode').value;
    const pincodeError = document.getElementById('pincode-error');

    if (pincode.length === 6 && !isNaN(pincode)) {
        // You can perform additional verification logic here
        // For instance, checking against a list of acceptable pincodes
        // For the sake of this example, let's just show an alert
        alert(`The pincode ${pincode} is valid and accepted.`);
        pincodeError.style.display = 'none';
    } else {
        pincodeError.style.display = 'block';
    }
}
function buynow() {
    const pincode = document.getElementById('pincode').value;
    if (pincode.length == 6) {
        window.location.href = 'address.html';
    }
    else {
        alert("Please enter the pincode to proceed");
    }
}

