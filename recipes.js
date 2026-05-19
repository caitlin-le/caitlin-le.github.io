const recipes = {

  // ── MATCHA ──────────────────────────────────────────────
  matcha: {
    emoji: '🍵',
    name: 'Matcha with Red Bean Paste and Butter Mochi',
    desc: 'Classic matcha flavor, enhanced with sweet red bean paste and chewy butter mochi.',
    time: '2.5 hrs active · overnight chilling',
    serves: 'Makes ~2 pints',
    tags: ['Lots of texture', 'Pressure cooker required', 'Blender required'],
    sections: [
      {
        title: 'Matcha Ice Cream Base',
        ingredients: ['2 cups heavy cream', '1 cup whole milk', '2/3 cup sugar', 'pinch of salt', '6 egg yolks', '6 tbsp matcha powder'],
        steps: [
          'Simmer the cream, milk, sugar, and salt in a saucepan until the sugar is dissolved and the mixture is hot (but not boiling). I aim for around 150°F.',
          'Add some warmed cream mixture into a small bowl and whisk in the matcha powder until smooth. Then pour the matcha mixture back into the saucepan and whisk to combine.',
          'In a separate bowl, whisk the egg yolks. Slowly pour some of the hot cream mixture into the yolks while whisking to temper them.',
          'Pour the tempered yolks back into the saucepan with the rest of the cream mixture. Cook over medium heat, stirring constantly with a wooden spoon or heat-resistant spatula, until the custard thickens enough to coat the back of the spoon (about 170°F). You should also smell the custard.',
          'Remove from heat and strain the custard through a fine-mesh sieve to remove any lumps or bits of cooked egg.',
          'Chill the custard in the refrigerator for at least 4 hours.',
        ],
      },
      {
        title: 'Red Bean Paste',
        ingredients: ['340 g red beans (adzuki beans)', '5.5 cups water', '1.25 cups sugar', 'pinch of salt'],
        steps: [
          'Rinse the red beans.',
          'Add to a pressure cooker with 5.5 cups of water.',
          'Cook on high pressure for 25 minutes. Release the pressure and check if the beans are soft. If not, cook for another 5-10 minutes.',
          'Drain the water and add the sugar and salt to the beans in a saucepan. Heat over low heat and stir until the sugar and salt is dissolved.',
          'Blend until smooth. I used an immersion blender, but you can also use a regular blender.',
          'Store in the fridge in an airtight container until ready to use. The paste will thicken as it cools.',
        ],
      },
      {
        title: 'Butter Mochi Bits',
        steps: [
          'I followed this recipe from <a href="https://www.biggerbolderbaking.com/hawaiian-butter-mochi/#buttermochi" target="_blank" style="color:var(--purple); font-weight:600;">Bigger Bolder Baking</a>, then cut into small bite-sized cubes.',
        ],
      },
      {
        title: 'Assembly',
        ingredients: ['Matcha ice cream base', 'Red bean paste', 'Butter mochi bits'],
        steps: [
          'Churn the matcha ice cream base in an ice cream maker until it reaches a soft-serve consistency.',
          'Layer the ice cream and swirl thin layer of red bean paste in a container. Keep the red bean paste thin because it will freeze into a very hard layer. Repeat until all components are used up or your container is full.',
          'At the top layer, put a few pieces of butter mochi. They will freeze into very hard cubes, so I like to keep only a few on the top layer and serve extra unfrozen mochi on the side.',
          'Freeze the assembled ice cream overnight. Serve with extra butter mochi on the side if desired.',
        ],
      },
    ],
    note: 'I made my own red bean paste with a pressure cooker, but you can also follow another recipe using the tools you have or use pre-made red bean paste.<br><br>Both the red bean paste and butter mochi will freeze into very hard textures. If you leave the ice cream out for 10-15 minutes before scooping, the red bean paste and mochi will soften up a bit while the matcha ice cream will still hold its shape.',
  },

  // ── CORN ────────────────────────────────────────────────
  corn: {
    emoji: '🌽',
    name: 'Corn with Corn Bread and Honey',
    desc: 'Accurate on the corn flavor. Take that how you will.',
    time: '2.5 hr active · overnight chilling',
    serves: 'Makes ~2-3 pints',
    tags: ['Conversation starter', 'Blender required'],
    sections: [
      {
        title: 'Corn Ice Cream Base',
        ingredients: ['2.5 cups heavy cream', '0.5 cup whole milk', '1/2 cup sugar', 'pinch of salt', '6 egg yolks', '5 ears of corn'],
        steps: [
          'Cut off the corn kernels from the cobs. Keep the cobs and cut them in half.',
          'Heat the cream and milk in a saucepan until it just starts to simmer. Remove from heat and add the corn kernels and cobs. Cover and let steep for 1 hr to infuse the corn flavor.',
          'Take out the cobs and blend the corn kernels with the cream mixture until smooth. I used an immersion blender, but you can also use a regular blender. Strain through a fine-mesh sieve to remove any solids.',
          'Simmer the infused cream, sugar, and salt in a saucepan until the sugar is dissolved and the mixture is hot (but not boiling). I aim for around 150°F.',
          'In a separate bowl, whisk the egg yolks. Slowly pour some of the hot cream mixture into the yolks while whisking to temper them.',
          'Pour the tempered yolks back into the saucepan with the rest of the cream mixture. Cook over medium heat, stirring constantly with a wooden spoon or heat-resistant spatula, until the custard thickens enough to coat the back of the spoon (about 170°F). You should also smell the custard.',
          'Remove from heat and strain the custard through a fine-mesh sieve to remove any lumps or bits of cooked egg.',
          'Chill the custard in the refrigerator for at least 4 hours.',
        ],
      },
      {
        title: 'Corn Bread Pieces',
        ingredients: ["Boxed cornbread mix. I used Marie Callender's Original Corn Bread Mix."],
        steps: [
          'Follow the instructions on the boxed cornbread mix to make the cornbread.',
          'Once the cornbread is baked and cooled, cut it into small bit-sized pieces.',
        ],
      },
      {
        title: 'Assembly',
        ingredients: ['Corn ice cream base', 'Corn bread pieces', 'Honey (for drizzling)'],
        steps: [
          'Churn the corn ice cream base in an ice cream maker until it reaches a soft-serve consistency.',
          'Layer the ice cream and a layer of corn bread in a container. Drizzle honey over the corn bread pieces. Repeat until all components are used up or your container is full.',
          'Freeze the assembled ice cream overnight.',
        ],
      },
    ],
    note: 'Depending on how much corn bread you add, you may need 3 pint containers instead of 2.',
  },

  // ── HOT CHOCOLATE ────────────────────────────────────────
  hotchoc: {
    emoji: '☕',
    name: 'Hot Chocolate with Cinnamon, Marshmallows, and Peppermint Bits',
    desc: 'A flavor for the holidays.',
    time: '1 hr active · overnight chilling',
    serves: 'Makes ~2 pints',
    tags: ['Showstopper', 'Holiday flavor'],
    sections: [
      {
        title: 'Hot Chocolate Ice Cream Base',
        ingredients: ['2 cups heavy cream', '1 cup whole milk', '2/3 cup sugar', 'pinch of salt', '6 egg yolks', '1/3 cup cocoa powder', '1/4 tsp cinnamon'],
        steps: [
          'Simmer the cream, milk, sugar, salt, cocoa powder, and cinnamon in a saucepan until the sugar is dissolved and the mixture is hot (but not boiling). I aim for around 150°F.',
          'In a separate bowl, whisk the egg yolks. Slowly pour some of the hot cream mixture into the yolks while whisking to temper them.',
          'Pour the tempered yolks back into the saucepan with the rest of the cream mixture. Cook over medium heat, stirring constantly with a wooden spoon or heat-resistant spatula, until the custard thickens enough to coat the back of the spoon (about 170°F). You should also smell the custard.',
          'Remove from heat and strain the custard through a fine-mesh sieve to remove any lumps or bits of cooked egg.',
          'Chill the custard in the refrigerator for at least 4 hours.',
        ],
      },
      {
        title: 'Marshmallow Mixin',
        ingredients: ['2 handfuls of mini marshmallows'],
        steps: [
          "Spread the marshmallows out on a baking sheet in a single layer. Toast them under the broiler for 1-2 minutes, watching closely to prevent burning. They should become golden and slightly puffed up. They might also stick together, depending on how close they are, but that's okay.",
          'Cool the marshmallows. I placed the tray into my freezer to speed this up.',
          'Once cooled, break apart any large clusters into smaller pieces.',
        ],
      },
      {
        title: 'Peppermint Bits',
        ingredients: ['2 candy canes'],
        steps: [
          'Crush them into small pieces. I put them in a ziplock bag and bashed them with a hammer.',
        ],
      },
      {
        title: 'Assembly',
        ingredients: ['Hot chocolate ice cream base', 'Toasted marshmallows', 'Crushed peppermint bits'],
        steps: [
          'Churn the hot chocolate ice cream base in an ice cream maker until it reaches a soft-serve consistency.',
          'Layer the ice cream, marshmallows, and peppermint bits in a container. Repeat until all components are used up or your container is full.',
          'Freeze the assembled ice cream overnight. The marshmallows will provide a nice chewy texture contrast to the creamy ice cream and crunchy peppermint bits.',
        ],
      },
    ],
    note: '',
  },

  // ── DARK CHOCOLATE ───────────────────────────────────────
  darkchoc: {
    emoji: '🍫',
    name: 'Dark Chocolate',
    desc: 'Super rich, for the true chocolate lover.',
    time: '1 hr active · overnight chilling',
    serves: 'Makes ~3 pints',
    tags: ['Decadent'],
    ingredients: [
      '3/4 cups heavy cream',
      '3 tbsp cocoa powder',
      '10 oz dark chocolate chips',
      '1.5 cups whole milk',
      '2/3 cup sugar',
      'pinch of salt',
      '6 egg yolks',
      '3/4 cups creme fraiche',
      '1 tsp vanilla extract',
    ],
    steps: [
      'Simmer the cream and cocoa powder in a saucepan until it just starts to simmer. Remove from heat, add the chocolate chips, and whisk until smooth.',
      'In a separate saucepan, heat the milk, sugar, and salt until the sugar is dissolved and the mixture is hot (but not boiling). I aim for around 150°F.',
      'In a separate bowl, whisk the egg yolks. Slowly pour some of the hot milk mixture into the yolks while whisking to temper them.',
      'Pour the tempered yolks back into the saucepan with the rest of the milk mixture. Cook over medium heat, stirring constantly with a wooden spoon or heat-resistant spatula, until the custard thickens enough to coat the back of the spoon (about 170°F). You should also smell the custard.',
      'Stir in the chocolate mixture, creme fraiche, and vanilla extract.',
      'Remove from heat and strain the custard through a fine-mesh sieve to remove any lumps or bits of cooked egg.',
      'Chill the custard in the refrigerator for at least 4 hours before churning. Freeze overnight after churning.',
    ],
    note: 'Depending on the crowd, I sometimes add a handful or two of semi-sweet chocolate chips to melt with the dark chocolate base to make the flavor less intense.',
  },

  // ── MANGO STICKY RICE ────────────────────────────────────
  mangostickyrice: {
    emoji: '🥭',
    name: 'Mango Sticky Rice Ice Cream',
    desc: 'Inspired by the classic Thai dessert, this ice cream combines the tropical sweetness of mango with the creamy richness of coconut milk and sticky rice.',
    time: '1.5 hr active · overnight chilling',
    serves: 'Makes ~3 pints',
    tags: ['Tropical'],
    sections: [
      {
        title: 'Coconut Ice Cream Base',
        ingredients: ['1 can coconut cream', '1/2 cup heavy cream', '1/2 cup whole milk', '2/3 cup sugar', 'pinch of salt', '6 egg yolks'],
        steps: [
          'Shake up the can of coconut cream. Simmer the coconut cream, heavy cream, milk, sugar, and salt in a saucepan until the sugar is dissolved and the mixture is hot (but not boiling). I aim for around 150°F.',
          'In a separate bowl, whisk the egg yolks. Slowly pour some of the hot cream mixture into the yolks while whisking to temper them.',
          'Pour the tempered yolks back into the saucepan with the rest of the cream mixture. Cook over medium heat, stirring constantly with a wooden spoon or heat-resistant spatula, until the custard thickens enough to coat the back of the spoon (about 170°F). You should also smell the custard.',
          'Remove from heat and strain the custard through a fine-mesh sieve to remove any lumps or bits of cooked egg.',
          'Chill the custard in the refrigerator for at least 4 hours.',
        ],
      },
      {
        title: 'Mango Jam',
        ingredients: ['1.5 cups ripe mangoes, diced', '2 tbsp sugar', '1 tsp lemon juice'],
        steps: [
          'In a saucepan, combine the diced mangoes, sugar, and lemon juice and cook over medium heat until the mixture thickens and coats the back of a spoon (about 10-15 minutes).',
          'Remove from heat and let cool completely before using.',
        ],
      },
      {
        title: 'Mochi Bits',
        ingredients: ['Store-bought mochi'],
        steps: [
          'Chop the mochi into small bite-sized pieces.',
        ],
      },
      {
        title: 'Assembly',
        ingredients: ['Coconut ice cream base', 'Mango jam', 'Mochi bits'],
        steps: [
          'Churn the coconut ice cream base in an ice cream maker until it reaches a soft-serve consistency.',
          'Layer the ice cream, mango jam, and mochi bits in a container. Repeat until all components are used up or your container is full.',
          'Freeze the assembled ice cream overnight.',
        ],
      },
    ],
    note: "The coconut ice cream came out a bit icier than I'd hoped, so I would do 1 cup heavy cream and no whole milk next time to make it creamier.",
  },

  // ── LEMON CURD ───────────────────────────────────────────
  lemoncurd: {
    emoji: '🍋',
    name: 'Lemon Ice Cream with Lemon Curd',
    desc: 'A refreshing twist on classic lemon ice cream, featuring a tangy lemon curd swirled throughout.',
    time: '2 hr active · overnight chilling',
    serves: 'Makes ~2 pints',
    tags: ['Summer flavor'],
    sections: [
      {
        title: 'Lemon Syrup',
        ingredients: ['1/2 cup lemon juice (2-3 lemons)', '1/4 cup sugar'],
        steps: [
          'In a saucepan, combine the lemon juice and sugar and cook over medium heat until the sugar is dissolved and the mixture thickens slightly (about 5-7 minutes).',
          'Chill in the fridge.',
        ],
      },
      {
        title: 'Lemon Ice Cream Base',
        ingredients: ['2 cups heavy cream', '1 cup whole milk', '2/3 cup sugar', 'pinch of salt', 'zest of 2 lemons', '6 egg yolks', '1 tsp vanilla extract'],
        steps: [
          'Simmer the heavy cream, whole milk, sugar, salt, and lemon zest in a saucepan until the sugar is dissolved and the mixture is hot (but not boiling). I aim for around 150°F.',
          'Remove from heat, cover, and let steep for 10-15 minutes for the lemon flavor to infuse.',
          'Reheat the mixture until it just starts to simmer again.',
          'In a separate bowl, whisk the egg yolks. Slowly pour some of the hot cream mixture into the yolks while whisking to temper them.',
          'Pour the tempered yolks back into the saucepan with the rest of the cream mixture. Cook over medium heat, stirring constantly with a wooden spoon or heat-resistant spatula, until the custard thickens enough to coat the back of the spoon (about 170°F). You should also smell the custard.',
          'Stir in the vanilla extract.',
          'Remove from heat and strain the custard through a fine-mesh sieve to remove any lumps or bits of cooked egg.',
          'Chill the custard in the refrigerator for at least 4 hours.',
        ],
      },
      {
        title: 'Lemon Curd',
        ingredients: ['3 large egg yolks', '1 large whole egg', '1/2 cup sugar', '1/2 cup lemon juice (about 2-3 lemons)', 'zest of 1 lemon', 'pinch of salt', '4 tbsp unsalted butter, cut into small pieces'],
        steps: [
          'Combine everything except the butter in a saucepan and cook over low heat. Stir constantly for 5-8 minutes until the mixture thickens and coats the back of a spoon. I aimed for 170°F.',
          'Remove from heat and stir in the butter pieces until fully incorporated.',
          'Strain through a fine-mesh sieve into a bowl. Press plastic wrap directly onto the surface to prevent a skin from forming.',
          'Chill in the fridge until ready to use.',
        ],
      },
      {
        title: 'Assembly',
        ingredients: ['Lemon ice cream base', 'Lemon syrup', 'Lemon curd'],
        steps: [
          'Mix the lemon syrup into the lemon ice cream base.',
          'Churn the lemon ice cream base in an ice cream maker until it reaches a soft-serve consistency.',
          'Layer the ice cream and swirl in lemon curd in a container. Repeat until all components are used up or your container is full.',
          'Freeze the assembled ice cream overnight.',
        ],
      },
    ],
    note: "The lemon ice cream came out a bit icier than I'd hoped, probably due to the lemon syrup being a bit watery. Next time, I would do 2.5 cups heavy cream and 0.5 cups whole milk, or even 3 cups heavy cream and no whole milk.",
  },

};
