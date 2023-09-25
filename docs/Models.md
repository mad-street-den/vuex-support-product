
## Model

A model is a pre-defined, ready-to-use configuration to create a personalized shopping experience for customers. Most popular customer decisions and buying patterns are taken into consideration in these available models that you can choose from and when you create a strategy.

Powered by several algorithmic decisions, these models analyze, learn, and discover patterns in customer, product, and contextual data to present every customer with a personalized experience.




### Visual Similarity Model

This model recommends products with attributes similar to the product currently in view. It enables your customers to discover new products from the catalog and quickens the purchasing decision. Based on various criteria, the model assigns a similarity score for each product, and the products with the highest similarity score are recommended to the customers.

You can configure this model to create various types of recommendation strategies by assigning varied importance to product attributes such as brand, color, and category. You can further streamline your boosting results with the facet-based boosting configuration. This allows you to select a category, over and above the global boost parameters, and customize results. For example, you can set the precedence of color over pattern for a dress.

![Example Image](https://static.wixstatic.com/media/a57536_f91db2c424bf41f2bd08edd98b76aa72~mv2.png/v1/fill/w_598,h_497,al_c,lg_1,q_85,enc_auto/Similar%20products%20model.png)

**To Configure Visually Similar Products:**

1. Choose **Assets > Strategies** from the top navigation bar.
2. Click **New Strategy**.
3. Choose **Contextual > Visual Similarity**. The Manage Strategy page is displayed.

4. Click on the edit icon to configure model parameters.
5. Click + to add a Product Attribute and choose an attribute from the drop-down. The default product attributes are brand, color, and pattern.
6. Drag the slider to indicate how important the product attribute is to the model. The values range from -1 to 1.

7. Click **Additional Customization** and select a Category from the drop-down.
8. Drag the slider to indicate how important the category is to the model.

9. Click **Next**.
10. Indicate whether you want to apply 1:1 affinity-based personalization on the model.
11. Click **Done**.



### Recently Engaged Model

This model displays products that were last engaged by the customer, with the most recently engaged appearing first. The recommendations are typically based on data from the last X days (which can be configured).

You can configure this model to create various recommendation strategies by adding a single event or combining events. Some examples of configuring this model are listed below:

**To Configure Recently Engaged:**

1. Choose **Assets > Strategies** from the top navigation bar.
2. Click **New Strategy**.
3. Click **Journey-aware > Recently Engaged**. The Manage Strategy page is displayed.

4. Click on the edit icon to configure model parameters.

5. Click + to add a new event type and choose an event from the drop-down. The default event types considered by the model are Add to Cart, Add to Wishlist, Buy, and Pageview.

| Event Type       | Description                                                                      |
| ---------------- | -------------------------------------------------------------------------------- |
| Add to Cart      | On choosing Add to Cart, the model displays products added to the customer's cart in the last X days. |
| Add to Wishlist  | On choosing Add to Wishlist, the model displays products added to the customer's wishlist in the last X days. |
| Buy              | On choosing Buy, the model displays products bought by the customer in the last X days. |
| Pageview         | On choosing Pageview, the model displays products viewed by the customer in the last X days. |

6. Click **Next**.
7. Click **Done**.

### Trending Model

This model recommends products that are most popular on the website based on all customer interactions and events on the website. This model can be configured to show 1:1 personalized products to each user.

*Note: You can further customize attributes for each category individually by defining the importance of attributes using the “Additional customization options”.*



### Inspired by Browsing History Model

This model looks at products that your customers have been browsing, interacting with, and recommends very similar products of different shapes, sizes, and brands to help them find a product very similar to the one they have browsed earlier.

You can configure this model to create various recommendation strategies based on:

- Customer events such as page view and add to carts
- Assigning varied importance to product attributes such as brand, color, and category.

**To Configure Inspired by Browsing History:**

1. Choose **Assets > Strategies** from the top navigation bar.
2. Click **New Strategy**.
3. Click **Journey-aware > Inspired by browsing history**. The Manage Strategy page is displayed.
4. Click on the edit icon to configure model parameters.
5. Select the Lookback Period from the drop-down. This indicates the time period used to determine the product popularity.
6. Configure the importance of user events considered while displaying the products.
7. Click + to add a Product Attribute and choose an attribute from the drop-down. Indicate on a slider how important the attribute is to the model, with values ranging from -1 to 1.
8. Click **Next**.
9. If you want to include business rules optionally, click **Add a new business rule**.
10. Click **Done**.

### Bundling Model

There are two types of bundling models you can configure on VueX:

![Example Image](https://static.wixstatic.com/media/a57536_ab804ac4729c4a258e7ed84f7dba4773~mv2.png/v1/fill/w_1206,h_540,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/a57536_ab804ac4729c4a258e7ed84f7dba4773~mv2.png)

- **Cross Products**: Displays cross-product recommendations, for the respective theme, based on the product in view. This model is based on a source product.
- **Product Curations**: Displays a collection of product outfits for a particular theme.

You can configure both of these models for a variety of themes available, for example, casual, party, etc.

**To Configure Bundling Strategy:**

1. Choose **Assets > Strategies** from the top navigation bar.
2. Click **New Strategy**.
3. Click **Bundling > Casual Cross Products**. The Manage Strategy page is displayed.
4. Click on the edit icon to configure model parameters.
5. Indicate the importance of each attribute to be considered by the model while displaying results. You can also indicate the importance of each attribute to be considered for selecting products to form the base model.
6. Indicate whether you want to apply 1:1 affinity-based personalization on the model.
7. If you want to optionally include business rules, click **Add a new business rule**.
8. Click **Done**.

### Recommended for You

This model recommends products considering the customer's behavioral preferences as well as attributes similar to the product currently in view. It enables your customers to discover new products from the catalog and quickens the purchasing decision. Based on various criteria, the model assigns a score for each product, and the products with the highest score are recommended to the customers.

You can configure this model to create various types of recommendation strategies by assigning varied importance to product attributes such as brand, color, and category, customer events such as add-to-cart, buys, page views, etc.

**To Configure Recommended for You:**

1. Choose **Assets > Strategies** from the top navigation bar.
2. Click **New Strategy**.
3. Click **Journey Based > Recommended for You**. The Manage Strategy page is displayed.
4. Click on the edit icon to configure model parameters.
5. Click + to add a Product Attribute and choose an attribute from the drop-down.
6. Drag the slider to indicate how important the product attribute is to the model. The values range from -1 to 1.
7. Select the Lookback Period from the drop-down. This indicates the time period used to determine the product popularity.
8. Configure the importance of user events considered while displaying the products.
9. Click **Next**.
10. Indicate whether you want to apply 1:1 affinity-based personalization on the model.

### Collaborative Filtering Model

![Example Image](https://static.wixstatic.com/media/a57536_c56d706f5d174e82b3fa45eb5b2a00ca~mv2.jpg/v1/fill/w_801,h_507,al_c,q_85,enc_auto/a57536_c56d706f5d174e82b3fa45eb5b2a00ca~mv2.jpg)
![Example Image](https://static.wixstatic.com/media/a57536_292c5e70c6664554815f51141bc0199f~mv2.jpg/v1/fill/w_713,h_531,al_c,q_85,enc_auto/a57536_292c5e70c6664554815f51141bc0199f~mv2.jpg)

Collaborative Filtering is a technique used for recommending products that a user might like based on interactions, data, and preferences collected by the system from other users who have also interacted with similar products. These algorithms

 enable you to harness the wisdom of crowds to drastically increase cross-sales and overall revenue.


There are two classes of Collaborative Filtering:

- **User-based**: Measures similarity between target users and other users.
- **Item-based**: Measures the similarity between the items that target users interact with and other items.

**To Configure Collaborative Filtering:**

1. Choose **Assets > Strategies** from the top navigation bar.
2. Click **New Strategy**.
3. Click **Contextual > Collaborative Filtering**. The Manage Strategy page is displayed.
4. Choose the type of collaborative filtering model from the drop-down.
5. Indicate whether you want to apply 1:1 affinity-based personalization on the model.
6. If you want to optionally include business rules, click **Add a new business rule**.
7. Click **Done**.