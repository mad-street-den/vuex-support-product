---
sidebar_position: 1
---


# Strategy

Relevant product recommendations require precise strategies that yield right results. You can choose a model from our collection and define your approach to product recommendations. 

Powered by several algorithmic decisions, these Models analyze, learn, and discover patterns in customer, product, and contextual data to present every customer with a personalized experience.

Strategies also support configuring business rules on top of the models to alter the recommendation result. For example, you can set a business rule to display trending dresses priced above $50 in the recommendation result.




**Choose a strategy - VueX Models**



|**Model**|**Description**|**Related Article**|
| :-: | :-: | :-: |
|Similar Products|Recommends products with similar attributes. Matches similarity vectors and picks products from the catalog with attributes similar to the product currently in view|[Similar Products](http://support.vue.ai/support/solutions/articles/81000384747-similar-products-model)|
|Trending Products|Recommends the most popular products on the website based on pre-defined customer triggers |[Trending Products](http://support.vue.ai/support/solutions/articles/81000384754-trending-model)|
|Inspired by Browsing History|Recommends products based on specific customer's search history|[Inspired by Browsing History](http://support.vue.ai/support/solutions/articles/81000384749-inspired-by-browsing-history-model)|
|Recently Engaged|Recommends products that were last engaged with by the customer, with the most recently engaged product appearing first. |[Recently Engaged](http://support.vue.ai/support/solutions/articles/81000384756-recently-engaged-model)|
|Collaborative Filtering|Establishes patterns between customers (creating a group), and recommends products within the group|[Collaborative Filtering](http://support.vue.ai/support/solutions/articles/81000384755-collaborative-filtering-model)|
|Recommended for You|Recommends products considering a combination of customer's behavioral preferences and product currently in view|[Recommended for You](http://support.vue.ai/support/solutions/articles/81000387920-recommended-for-you)|
|Bundling|There are two types of bundling models you can configure on VueX,- Cross Product Bundling - Displays cross-product recommendations, based on the product in view- Product Curations Bundling - Displays a collection of product outfits for a particular theme|[Bundling Models](http://support.vue.ai/support/solutions/articles/81000387922-bundling-model)|

**Create a Strategy**

1. Choose **Assets > Strategies** from the top navigation bar.
1. Click **New Strategy**.
1. Choose a model for your strategy. For example, you can choose **Contextual** and select a model. The **Manage Strategy** page is displayed.
1. Clickto configure model parameters. You can check the articles mentioned against the relevant model,  under 'VueX Models', to know how to customize the model parameter parameters.
1. Once you are done configuring the parameters, click **Next**.
1. Indicate whether you want to apply 1**:1 affinity-based personalization** on the model. You can also apply [business rules ](https://support.vue.ai/en/support/solutions/articles/81000382384)while creating a strategy.




Before business rules, Please add steps for "Configure model parameters" as well

Can we link to the model doc? Since all models are listed?

Link to all models can be added to the above table listing all the models
**Add Business Rules**

### **What is a business rule?**
###
Business Rules are manually configured filtering conditions applied on top of the strategy to target a specific subset of products. Only those products that match the filtering conditions are displayed on the module. You can configure multiple business rules as long as every condition is met and yields results to serve the product recommendations. Business Rules can be set while configuring models and while creating an experience.




For example: 

For Business use case - To display only dresses priced less than or equal to $100 in “Most Popular Dresses” 




Set Filtering Condition: 

**Filter**: Price

**Condition**: less than or equal to

**Value:** 100

**Value Type:** $




Apply To:

**Attribute:** Category

**Condition**: Is

**Value:** Dresses




Warning: Avoid creating conflicting business rules as they can yield inconsistent or no results.



### **Configuring Business Rules**
1. Click **Add a new Business Rule**.
1. Enter a name for your business rule.
1. Click **+** to add a new filtering condition.
1. Edit the following fields to set the filtering conditions for your business rule:




|**Field**|**Description**|
| :- | :- |
|Filter|Choose the product attribute from the drop-down to set the filtering condition. For example, the brand filter lets you limit the range of products included in the recommendation to a particular brand.|
|Condition |Choose the filtering condition for the corresponding filter from the drop-down. For example, you can choose one of the following conditions for brand filter:● Is● Is notWhen applied, these conditions limit the recommendation result to a specific set of products that match the criteria.**Note:** The conditions will vary depending on the type of filter.|
|Value|Choose a value for the corresponding filter. For example, you can enter a numeric value for a price filter or select a brand name for the brand filter.|
|Value Type|The currency type of the filter. If you choose % of source, then only products priced in that price percentage range will be considered. For example, if the source product price is $100 and the filtering rule is set as:Price equals 20 % of the source, then only product priced $20 will be considered.**Note:** This field is applicable only for Price Filter|




1. Click **+ Add additional criteria** to specify the different criteria/attributes on which the filtering conditions are applied. 
1. Click **All** to apply the filtering conditions on all the attributes. Click **Any** to apply the filtering conditions on any one of the attributes.




Edit the following fields to specify additional criteria.



|**Field**|**Description**|
| :- | :- |
|Attribute|Choose the product attribute from the drop-down to specify on which the filtering condition must be applied. For example, you can set a filtering condition Price equals 100 and apply it to category dresses.|
|Condition |Choose the condition for the corresponding attribute from the drop-down.|
|Value|Choose a value for the corresponding attribute. |

