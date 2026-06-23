const recipes = {

  // ── MATCHA ──────────────────────────────────────────────
  matcha: {
    emoji: '🍵',
    name: 'Matcha with Red Bean Paste and Butter Mochi',
    desc: 'Classic matcha flavor, enhanced with sweet red bean paste and chewy butter mochi.',
    time: '2.5 hrs active · overnight chilling',
    serves: 'Makes 2 pints',
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
    serves: 'Makes 2-3 pints',
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
    serves: 'Makes 2 pints',
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
    serves: 'Makes 3 pints',
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
    serves: 'Makes 3 pints',
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
    serves: 'Makes 2 pints',
    tags: ['Summery'],
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

  // ── EARL GREY W/ SHORTBREAD ───────────────────────────────────────────
  earlgrey_shortbread: {
    emoji: '🩶',
    name: 'Earl Grey Ice Cream with Shortbread',
    desc: 'A sophisticated blend of bergamot and buttery shortbread.',
    time: '2 hr active · overnight chilling',
    serves: 'Makes 2 pints',
    tags: ['Tea'],
    sections: [
      {
        title: 'Earl Grey Ice Cream Base',
        ingredients: ['10 bags Earl Grey tea', '2.5 cups heavy cream', '1/2 cup whole milk', '2/3 cup sugar', 'pinch of salt', '6 egg yolks', '1 tsp vanilla extract'],
        steps: [
          'Cut open the bags of Earl Grey tea and add the tea leaves to a sacepan with the cream and milk. Heat until it just starts to simmer, then remove from heat and let steep for 20 minutes to infuse the tea flavor.',
          'Strain the tea leaves out and add the sugar and salt to the infused cream mixture. Heat again until the sugar is dissolved and the mixture is hot (but not boiling). I aim for around 150°F.',
          'In a separate bowl, whisk the egg yolks. Slowly pour some of the hot cream mixture into the yolks while whisking to temper them.',
          'Pour the tempered yolks back into the saucepan with the rest of the cream mixture. Cook over medium heat, stirring constantly with a wooden spoon or heat-resistant spatula, until the custard thickens enough to coat the back of the spoon (about 170°F). You should also smell the custard.',
          'Stir in the vanilla extract.',
          'Remove from heat and strain the custard through a fine-mesh sieve to remove any lumps or bits of cooked egg.',
          'Chill the custard in the refrigerator for at least 4 hours.',
        ],
      },
      {
        title: 'Shortbread Pieces',
        ingredients: ['1/2 stick of softened unsalted butter', '23 g powdered sugar', '1/4 tsp vanilla extract', '53 g all-purpose flour', '11 g cornstarch', 'pinch of salt'],
        steps: [
          'Beat the butter and powdered sugar together on medium-high speed until light and fluffy. Add the vanilla extract and mix until combined.',
          'Whisk together the flour, cornstarch, and salt in a separate bowl. Gradually add the dry ingredients to the butter mixture and mix until just combined.',
          'Turn the dough onto plastic wrap, flatten into a disk, and wrap tightly. Chill in the refrigerator for at least 1 hour.',
          'Preheat the oven to 325°F. Roll the dough out to about 1/4 inch thick and cut into small bite-sized pieces. Place the pieces on a baking sheet lined with parchment paper.',
          'Bake for 20-25 minutes, or until the edges are lightly golden. Let cool completely before using.',
        ],
      },
      {
        title: 'Assembly',
        ingredients: ['Earl Grey ice cream base', 'Shortbread pieces'],
        steps: [
          'Churn the Earl Grey ice cream base in an ice cream maker until it reaches a soft-serve consistency.',
          'Layer the ice cream and shortbread pieces in a container. Repeat until all components are used up or your container is full.',
          'Freeze the assembled ice cream overnight.',
        ],
      },
    ],
    note: "I didn't have a very fine strainer, so I had some bits of tea leaves in my ice cream. The ice cream texture was fine, but if you want a smoother texture, I would recommend using a fine strainer or cheesecloth to strain the tea leaves out.",
  },


    // ── STRAWBERRY ───────────────────────────────────────────
  strawberry: {
    emoji: '🍓',
    name: 'Strawberry Ice Cream',
    desc: 'A classic and refreshing strawberry ice cream.',
    time: '2 hr active · overnight chilling',
    serves: 'Makes 2 pints',
    tags: ['Fruity'],
    sections: [
      {
        title: 'Strawberry Jam',
        ingredients: ['1.5 lbs fresh strawberries, hulled and halved', '1/3 cup sugar', '1 tsp lemon juice', 'pinch of salt'],
        steps: [
          'In a saucepan, combine the strawberries, sugar, lemon juice, and salt. Cook over medium heat until the strawberries break down and the mixture thickens slightly (about 10-15 minutes).',
          'Remove from heat and let cool completely before using.',
        ],
      },
      {
        title: 'Strawberry Puree',
        ingredients: ['0.5 lbs fresh strawberries, hulled and halved'],
        steps: [
          'Blend the strawberries until smooth. I used an immersion blender, but you can also use a regular blender.',
        ],
      },
      {
        title: 'Strawberry Ice Cream Base',
        ingredients: ['3 cups heavy cream', '1/3 cup sugar', 'pinch of salt', '6 egg yolks', '1 tsp vanilla extract'],
        steps: [
          'Simmer the heavy cream, whole milk, sugar, salt, and lemon zest in a saucepan until the sugar is dissolved and the mixture is hot (but not boiling). I aim for around 150°F.',
          'In a separate bowl, whisk the egg yolks. Slowly pour some of the hot cream mixture into the yolks while whisking to temper them.',
          'Pour the tempered yolks back into the saucepan with the rest of the cream mixture. Cook over medium heat, stirring constantly with a wooden spoon or heat-resistant spatula, until the custard thickens enough to coat the back of the spoon (about 170°F). You should also smell the custard.',
          'Stir in the strawberry jam, strawberry puree, and vanilla extract.',
          'Remove from heat and strain the custard through a fine-mesh sieve to remove any lumps or bits of cooked egg.',
          'Chill the custard in the refrigerator for at least 4 hours.',
        ],
      },
      {
        title: 'Assembly',
        ingredients: ['Strawberry ice cream base', 'Shortbread pieces'],
        steps: [
          'Churn the strawberry ice cream base in an ice cream maker until it reaches a soft-serve consistency.',
          'Layer the ice cream and shortbread pieces in a container. Repeat until all components are used up or your container is full.',
          'Freeze the assembled ice cream overnight.',
        ],
      },
    ],
    note: "I used strawberry puree to brighten the color of the ice cream, but it made it icy. Next time, I would just use all 2 lbs of strawberries for the jam and skip the puree.",
  },

    // ── STRAWBERRY FROYO───────────────────────────────────────────
  strawberryfroyo: {
    emoji: '🍓',
    name: 'Strawberry Frozen Yogurt',
    desc: 'A frozen yogurt interpretation of the classic strawberry flavor.',
    time: '2 hr active · overnight chilling',
    serves: 'Makes 2 pints',
    tags: ['Fruity', 'Tart', 'Blender required'],
    sections: [
      {
        title: 'Strawberry Concentrate',
        ingredients: ['1 lbs fresh strawberries, hulled and halved', '1/3 cup sugar', '1.5 tsp lemon juice'],
        steps: [
          'In a saucepan, combine the strawberries, sugar, and lemon juice. Cook over medium heat until the the volume reduces to 30%.',
          'Remove from heat and blend. Chill in the fridge.',
        ],
      },
      {
        title: 'Strawberry Frozen Yogurt Base',
        ingredients: ['strawberry concentrate', '500 g plain whole milk yogurt', '100 g sugar', 'pinch of salt', '1 tsp vanilla extract', '2 tsp honey'],
        steps: [
          'Combine all the ingredients in a bowl and whisk until the sugar is dissolved.',
          'Chill in the fridge for at least 4 hours before churning.',
        ],
      },
      {
        title: 'Assembly',
        ingredients: ['Strawberry ice cream base', 'Shortbread pieces'],
        steps: [
          'Churn the strawberry ice cream base in an ice cream maker until it reaches a soft-serve consistency.',
          'Freeze the assembled ice cream overnight.',
        ],
      },
    ],
  },

  // ── LYCHEE SORBET ───────────────────────────────────────────
  lycheesorbet: {
    emoji: '🍨',
    name: 'Lychee Sorbet',
    desc: 'A light and refreshing sorbet that captures the delicate floral sweetness of lychee.',
    time: '1/2 hr active · overnight chilling',
    serves: 'Makes 2 pints',
    tags: ['Tropical', 'Vegan', 'Dairy-free', 'Egg-free'],
    sections: [
      {
        title: 'Lychee Sorbet Base',
        ingredients: ['3 cups water', '1.5 cup sugar', 'juice from 1/2 lime', '2 tbsp lychee extract'],
        steps: [
          'In a saucepan, combine all the ingredients and heat over medium heat until the sugar is dissolved.',
          'Remove from heat and chill in the fridge for at least 1 hour.',
        ],
      },
      {
        title: 'Assembly',
        ingredients: ['Lychee sorbet base'],
        steps: [
          'Churn the lychee sorbet base in an ice cream maker until it reaches slushy consistency.',
          'Freeze the sorbet overnight.',
        ],
      },
    ],
    note: 'It was a bit too sweet, so I would reduce the sugar to 1 cup next time.',
  },

      // ── BUTTER PECAN ───────────────────────────────────────────
  butterpecan: {
    emoji: '🥜',
    name: 'Butter Pecan Ice Cream',
    desc: 'A rich and creamy ice cream with a hint of buttery sweetness and crunchy pecans.',
    time: '2 hr active · overnight chilling',
    serves: 'Makes 2 pints',
    tags: ['Nutty'],
    sections: [
      {
        title: 'Brown Butter Pecans',
        ingredients: ['150 g pecans, halved', '3 tbsp unsalted butter', '50 g light brown sugar', 'pinch of salt'],
        steps: [
          'Brown the butter in a skillet over medium heat until it starts to smell nutty and turns a golden brown color.',
          'Add the pecans, brown sugar, and salt to the skillet. Cook for another 4-5 minutes and stir until coated.',
          'Spread on parchment paper to cool, then chop into smaller pieces.',
        ],
      },
      {
        title: 'Brown Butter Ice Cream Base',
        ingredients: ['2 tbsp unsalted butter', '2 cups heavy cream', '1 cup whole milk', '100 g brown sugar', '40 g sugar', 'pinch of salt', '6 egg yolks', '1 tsp vanilla extract'],
        steps: [
          'Brown the butter in a saucepan over medium heat until it starts to smell nutty and turns a golden brown color.',
          'Simmer the heavy cream, whole milk, sugar, and salt in a saucepan until the sugar is dissolved and the mixture is hot (but not boiling). I aim for around 150°F.',
          'In a separate bowl, whisk the egg yolks. Slowly pour some of the hot cream mixture into the yolks while whisking to temper them.',
          'Pour the tempered yolks back into the saucepan with the rest of the cream mixture. Cook over medium heat, stirring constantly with a wooden spoon or heat-resistant spatula, until the custard thickens enough to coat the back of the spoon (about 170°F). You should also smell the custard.',
          'Stir in the brown butter and vanilla extract.',
          'Remove from heat and strain the custard through a fine-mesh sieve to remove any lumps or bits of cooked egg.',
          'Chill the custard in the refrigerator for at least 4 hours.',
        ],
      },
      {
        title: 'Assembly',
        ingredients: ['Brown butter ice cream base', 'Brown butter pecans'],
        steps: [
          'Churn the brown butter ice cream base in an ice cream maker until it reaches a soft-serve consistency.',
          'Layer the ice cream and pecan pieces in a container. Repeat until all components are used up or your container is full.',
          'Freeze the assembled ice cream overnight.',
        ],
      },
    ],
  },

  // ── ALMOND W/ BLUEBERRY JAM ───────────────────────────────────────────
  almond_blueberry_jam: {
    emoji: '🥜🫐',
    name: 'Almond Ice Cream with Blueberry Jam',
    desc: 'A creamy almond ice cream swirled with sweet and tangy blueberry jam.',
    time: '2 hr active · overnight chilling',
    serves: 'Makes 2 pints',
    tags: ['Nutty', 'Fruity'],
    sections: [
      {
        title: 'Blueberry Jam',
        ingredients: ['300 g fresh blueberries', '140 g sugar', '1 tbsp lemon juice'],
        steps: [
          'Let the blueberries macerate with the sugar for 30 minutes to an hour. You\'ll see the blueberries release their juices and create a syrup.',
          'Simmer the blueberries, sugar, and lemon juice in a saucepan over medium heat until the mixture thickens (about 15-20 minutes).',
          'It\'s ready when you put a drop of the mixture on a cold plate and it holds its shape.',
          'Remove from heat and let cool completely before using.',
        ],
      },
      {
        title: 'Almond Ice Cream Base',
        ingredients: ['2.5 cups heavy cream', '1/2 cup whole milk', '100 g brown sugar', '40 g sugar', 'pinch of salt', '6 egg yolks', '1 tsp vanilla extract', '1 tsp almond extract'],
        steps: [
          'Simmer the heavy cream, whole milk, sugar, and salt in a saucepan until the sugar is dissolved and the mixture is hot (but not boiling). I aim for around 150°F.',
          'In a separate bowl, whisk the egg yolks. Slowly pour some of the hot cream mixture into the yolks while whisking to temper them.',
          'Pour the tempered yolks back into the saucepan with the rest of the cream mixture. Cook over medium heat, stirring constantly with a wooden spoon or heat-resistant spatula, until the custard thickens enough to coat the back of the spoon (about 170°F). You should also smell the custard.',
          'Stir in the vanilla extract and almond extract.',
          'Remove from heat and strain the custard through a fine-mesh sieve to remove any lumps or bits of cooked egg.',
          'Chill the custard in the refrigerator for at least 4 hours.',
        ],
      },
      {
        title: 'Assembly',
        ingredients: ['Almond ice cream base', 'Blueberry jam'],
        steps: [
          'Churn the almond ice cream base in an ice cream maker until it reaches a soft-serve consistency.',
          'Layer the ice cream and swirl in the blueberry jam in a container. The jam is sweet, so I did about a spoon full in each layer of a pint container. Repeat until all components are used up or your container is full.',
          'Freeze the assembled ice cream overnight.',
        ],
      },
    ],
  },

  // ── LOW CAL PANDAN ───────────────────────────────────────
  low_cal_pandan: {
    emoji: '🍃',
    name: 'Low Calorie Pandan Ice Cream',
    desc: 'A low calorie version of pandan ice cream with no compromise on flavor and texture.',
    time: '30 min active · overnight chilling',
    serves: 'Makes 3 pints',
    tags: ['Low calorie', 'Blender required'],
    ingredients: [
      '1 tsp cornstarch',
      '3.5 cups whole milk',
      '1/2 cup heavy cream',
      '1/3 cup sugar',
      '1 cup allulose',
      '7 tbsp nonfat dry milk powder',
      'pinch of salt',
      '6 egg yolks',
      '1 tsp vanilla extract',
      '4 tsp pandan extract',
      '4 oz reduced-fat cream cheese'
    ],
    steps: [
      'Whisk together the cornstarch with 2 tbsp of the whole milk until smooth. Set aside.',
      'Simmer the whole milk, heavy cream, and dry milk powder in a saucepan until the sugar is dissolved and the mixture is hot (but not boiling). I aim for around 150°F.',
      'In a separate bowl, whisk the egg yolks with the sugar, allulose, and salt. Slowly pour some of the hot cream mixture into the yolks while whisking to temper them.',
      'Pour the tempered yolks back into the saucepan with the rest of the cream mixture and add the cornstarch slurry. Cook over medium heat, stirring constantly with a wooden spoon or heat-resistant spatula, until the custard thickens enough to coat the back of the spoon (about 170°F). You should also smell the custard.',
      'Stir in the vanilla extract and pandan extract.',
      'Remove from heat and strain the custard through a fine-mesh sieve to remove any lumps or bits of cooked egg.',
      'Add the reduced-fat cream cheese to the custard and blend until smooth. I used an immersion blender, but you can also use a regular blender.',
      'Chill the custard mixture in the refrigerator for at least 4 hours.',
      'Churn the custard mixture in an ice cream maker until it reaches soft-serve consistency.',
      'Transfer to containers and freeze the ice cream overnight.'
    ],
    note: '147 calories per 1/2 cup serving (or 587 calories for one pint)!',
  },

};
