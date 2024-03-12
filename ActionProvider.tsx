'use client';

// in ActionProvider.jsx
import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const nutritionFacts = [
    'Did you know? Broccoli is a great source of vitamin C, fiber, and antioxidants.',
    'Eating carrots can improve your eyesight due to their high vitamin A content.',
    'Nuts like almonds and walnuts are rich in healthy fats, protein, and fiber.',
    'Salmon is an excellent source of omega-3 fatty acids, which are beneficial for heart health.',
    'Dark chocolate contains antioxidants known as flavonoids, which may improve blood flow and lower blood pressure.',
    'Avocados are packed with healthy fats, fiber, and various vitamins and minerals.',
    'Quinoa is a gluten-free grain that is high in protein and contains all nine essential amino acids.',
    'Green tea is loaded with antioxidants and nutrients that have powerful effects on the body.',
    'Blueberries are one of the best sources of antioxidants, which help protect your body from damage by free radicals.',
    'Eggs are a nutrient-rich food, containing high-quality protein, vitamins, minerals, and antioxidants.',
    'Greek yogurt is an excellent source of calcium and probiotics, which are beneficial for gut health.',
    'Oatmeal is high in fiber and may help lower cholesterol levels and improve blood sugar control.',
    "Almonds are among the world's best sources of vitamin E, which is important for skin health.",
    'Oranges are an excellent source of vitamin C, which is important for immune function and skin health.',
    'Bananas are high in potassium, which helps regulate blood pressure and reduce the risk of stroke.',
    'Spinach is a nutrient-dense leafy green that is rich in vitamins, minerals, and antioxidants.',
    'Tomatoes are a good source of lycopene, an antioxidant that may reduce the risk of heart disease and cancer.',
    'Garlic contains compounds with potent medicinal properties, including allicin, which has antibacterial and antiviral properties.',
    'Sweet potatoes are rich in beta-carotene, which is converted into vitamin A in the body and is important for eye health.',
    'Bell peppers are loaded with vitamins C and A, which are important for immune function and eye health.',
    'Kale is one of the most nutrient-dense foods on the planet, containing vitamins, minerals, and antioxidants.',
    'Chia seeds are high in fiber, omega-3 fatty acids, and various micronutrients, making them a superfood for heart health.',
    'Coconut oil is high in saturated fats, which may raise HDL (good) cholesterol levels and improve heart health.',
    'Cinnamon has been shown to lower blood sugar levels and improve insulin sensitivity, making it beneficial for people with diabetes.',
    'Turmeric contains curcumin, a compound with powerful anti-inflammatory and antioxidant properties.',
    'Pumpkin seeds are high in magnesium, which is important for bone health and muscle function.',
    'Quinoa is a complete protein, containing all nine essential amino acids, making it an excellent plant-based protein source.',
    'Flaxseeds are high in omega-3 fatty acids and lignans, which may reduce the risk of heart disease and cancer.',
    'Ginger has been used for centuries as a natural remedy for nausea, indigestion, and inflammation.',
    'Soybeans are a good source of protein, fiber, vitamins, and minerals, and may reduce the risk of heart disease and improve bone health.',
    'Cabbage is low in calories and high in fiber, making it a great food for weight loss and digestive health.',
    'Pomegranates are rich in antioxidants, which may help protect against heart disease, cancer, and other chronic diseases.',
    'Olive oil is high in monounsaturated fats, which are heart-healthy fats that may reduce the risk of heart disease and improve cholesterol levels.',
    'Lentils are high in protein and fiber, making them a great food for weight loss, heart health, and digestive health.',
    'Sardines are an excellent source of omega-3 fatty acids, calcium, vitamin D, and protein, making them a superfood for heart health and bone health.',
    'Beets are high in nitrates, which may improve athletic performance and lower blood pressure.',
    'Cranberries are rich in antioxidants, which may help prevent urinary tract infections and reduce the risk of certain cancers.',
    'Cauliflower is low in calories and high in fiber, vitamins, and minerals, making it a great food for weight loss and overall health.',
    'Walnuts are high in omega-3 fatty acids, antioxidants, and protein, making them a superfood for heart health and brain health.',
    'Grapefruit is low in calories and high in fiber, vitamins, and antioxidants, making it a great food for weight loss and heart health.',
    'Barley is high in fiber and has been shown to lower cholesterol levels and improve blood sugar control.',
    'Black beans are high in protein and fiber, making them a great food for weight loss, heart health, and digestive health.',
    'Pistachios are high in protein and healthy fats, and may help improve heart health, lower cholesterol levels, and aid in weight loss.',
    'Eggplant is low in calories and high in fiber, vitamins, and minerals, making it a great food for weight loss and heart health.',
    'Arugula is a nutrient-dense leafy green that is rich in vitamins, minerals, and antioxidants.',
    'Mushrooms are low in calories and high in vitamins, minerals, and antioxidants, making them a great addition to a healthy diet.',
    'Watermelon is low in calories and high in water content, making it a great food for hydration and weight loss.',
    'Papaya is high in vitamin C, vitamin A, and antioxidants, making it a great food for immune function and skin health.',
    'Asparagus is low in calories and high in fiber, vitamins, and minerals, making it a great food for weight loss and digestive health.',
    'Artichokes are high in fiber and antioxidants, and may help improve digestive health and liver function.',
    'Apricots are high in vitamin A, vitamin C, and antioxidants, making them a great food for immune function and skin health.',
    'Raspberries are high in fiber and antioxidants, and may help reduce inflammation and improve heart health.',
    'Mangoes are high in vitamin C, vitamin A, and antioxidants, making them a great food for immune function and skin health.',
  ];

  function getRandomNutritionFact() {
    const randomIndex = Math.floor(Math.random() * nutritionFacts.length);
    return nutritionFacts[randomIndex];
  }

  const randomFact = getRandomNutritionFact();

  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleGoodbye = () => {
    const botMessage = createChatBotMessage(
      'Have a good rest of your day or night! Sussy Out!'
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleEmptyText = () => {
    const botMessage = createChatBotMessage(
      "It doesn't seem you have typed anything"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleNoMatch = () => {
    const botMessage = createChatBotMessage(
      "Sorry I don't understand, please try rephrasing the question."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleDog = () => {
    const botMessage = createChatBotMessage(
      "Here's a nice dog picture for you!",
      {
        widget: 'dogPicture',
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, prev],
    }));
  };

  const handleLoginPill = () => {
    const botMessage = createChatBotMessage(
      <div>
        <p>To sign in to you account, please visit the sigin page</p>
        <a
          className='underline'
          href='https://nutritiontracker.vercel.app/login'
        >
          HERE{' '}
        </a>
      </div>
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleSignupPill = () => {
    const botMessage = createChatBotMessage(
      <div>
        <p>Want to create your own account? click</p>
        <a
          className='underline'
          href='https://nutritiontracker.vercel.app/signup'
        >
          HERE{' '}
        </a>
        <p>Or sign in with google </p>
        <a
          className='underline'
          href='https://nutritiontracker.vercel.app/login'
        >
          HERE{' '}
        </a>
      </div>
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleContactPill = () => {
    const botMessage = createChatBotMessage(
      <div>
        <p>
          If you need to contact us you can email{' '}
          <a href='mailto:tylerallen@live.com'>tylerallen@live.com</a> or click
          or click
        </p>
        <a
          className='underline'
          href='https://nutritiontracker.vercel.app/contact'
        >
          HERE{' '}
        </a>
      </div>
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleABoutPill = () => {
    const botMessage = createChatBotMessage(
      <div>
        <p>Nutritiontracker is an easy way to log your food intake.</p>
        <p>Keep a detailed ordered log of all your food by date.</p>
        <p>Select a date for each log and start tracking your intake.</p>
        <p>
          Set macronutrient goals for each date to also track and make sure you
          are hitting your targeted goals.
        </p>
        <p>
          Adjust your logs as needed to make sure the quantity is correct along
          with deleting any logs you do not want anymore.
        </p>
      </div>
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleSettingsPill = () => {
    const botMessage = createChatBotMessage(
      <div>
        <p>
          If you want to change you settings, make sure you are signed in to
          your account. You can adjust settings
        </p>
        <a
          className='underline'
          href='https://nutritiontracker.vercel.app/settings'
        >
          HERE{' '}
        </a>
      </div>
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleNutritionFactPill = () => {
    const botMessage = createChatBotMessage(
      <div>
        <p>{randomFact}</p>
      </div>
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleDashPill = () => {
    const botMessage = createChatBotMessage(
      <div>
        <p>
          If you want to start logging your nutrition, make sure you are signed
          in to your account and head over to the{' '}
          <a
            className='underline'
            href='https://nutritiontracker.vercel.app/dashboard'
          >
            DASHBOARD{' '}
          </a>{' '}
          to begin tracking!
        </p>
      </div>
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const MyFoodLogPillButton = () => {
    const botMessage = createChatBotMessage(
      <div>
        <p>
          Your recorded food logs are stored in your{' '}
          <a
            className='underline'
            href='https://nutritiontracker.vercel.app/myfoodlogs'
          >
            FOOD LOGS
          </a>{' '}
          page
        </p>
      </div>
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleGoodbye,
            handleEmptyText,
            handleDog,
            handleLoginPill,
            handleSignupPill,
            handleContactPill,
            handleABoutPill,
            handleSettingsPill,
            handleNutritionFactPill,
            handleDashPill,
            MyFoodLogPillButton,
            handleNoMatch,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
