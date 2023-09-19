---
sidebar_position: 6
---

# Email personalization


## What is email personalization?

VueMail allows you to configure product recommendations that can be used to display on email touchpoints. These emails are triggered during events that customers engage in the most, such as when the shopping cart is abandoned or when there is a product price drop. You can create product cards with customized content as recommendations to be emailed to customers. You can also combine templates and strategies supported for email touchpoints to form a single or multi-strategy module. VueMail modules are, essentially, strategies (single or multiple) that are rendered through templates.

## Determine a strategy

1. Choose **Assets > Strategies** from the top navigation bar.
2. Click **New Strategy**.
3. Choose a model for your strategy. For example, choose **Contextual** and select a model. The **Manage Strategy** page is displayed.
4. Click to configure model parameters.
5. Visit the articles mentioned against the relevant model, under 'VueX Models', to know how to customize the model parameter parameters.

| Model              | Description                                                                                          | Related Article                                  |
| ------------------ | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| Similar Products   | Recommends products with similar attributes. Matches similarity vectors and picks products from the catalog with attributes similar to the product currently in view | [Similar Products](http://support.vue.ai/support/solutions/articles/81000384747-similar-products-model)   |
| Trending Products  | Recommends the most popular products on the website based on pre-defined customer triggers       | [Trending Products](http://support.vue.ai/support/solutions/articles/81000384754-trending-model)     |
| Inspired by Browsing History | Recommends products based on specific customer's search history | [Inspired by Browsing History](http://support.vue.ai/support/solutions/articles/81000384749-inspired-by-browsing-history-model) |
| Recently Engaged   | Recommends products that were last engaged with by the customer, with the most recently engaged product appearing first | [Recently Engaged](http://support.vue.ai/support/solutions/articles/81000384756-recently-engaged-model) |
| Collaborative Filtering | Establishes patterns between customers (creating a group), and recommends products within the group | [Collaborative Filtering](http://support.vue.ai/support/solutions/articles/81000384755-collaborative-filtering-model) |
| Recommended for You | Recommends products considering a combination of customer's behavioral preferences and product currently in view | [Recommended for You](http://support.vue.ai/support/solutions/articles/81000387920-recommended-for-you) |
| Bundling           | There are two types of bundling models you can configure on VueX: Cross Product Bundling - Displays cross-product recommendations, based on the product in view. Product Curations Bundling - Displays a collection of product outfits for a particular theme | [Bundling Models](http://support.vue.ai/support/solutions/articles/81000387922-bundling-model) |

6. Once you are done configuring the parameters, click **Next**.
7. Indicate whether you want to apply 1:1 affinity-based personalization on the model.
8. You can also apply [business rules](https://support.vue.ai/en/support/solutions/articles/81000382384) while creating a strategy.

## Configure the template

A template is designed to display the products to the customers in a specific way. Apart from the preset templates, the product card template is specifically used for modules. You can configure the height, width, color, alignment, orientation, along with the product details.

### To create a template:

1. Click **Journey Manager > Assets > Templates**. The **All Templates** screen is displayed.
2. Click **New Template** to create a new template.
3. Select **Product Card** to create and customize a new Product Card template. The new product card can be renamed by clicking beside the default name “Untitled”.
4. You can configure various aspects in the product card to customize it:

**Field** | **Description**
--- | ---
*Properties* |
Orientation | Select the card orientation as **Portrait** or **Landscape**.
Product Image Source | Select the type of image to be displayed from the drop-down.
*Product Details* | You can add product attributes to be displayed under the image in the catalog. There are four preset attributes you can choose from, and can add up to ten. For example, you can choose to display the price, display price, and product title in the catalog. You can further add a brand category if required. Select the attributes to be displayed on the same line or you can select different attributes from Price and Title to be displayed in two lines. Enter the title of your image tag in the Image Tag Identifier field. Further customize by typing in text for the tag, selecting the Attribute or icon from the drop-down. Add Filter Conditions for the products if needed.
*Style* | Configure the image, layout, and product details. Border: Select the image border type from the drop-down. Product Title: All product metadata can be customized. For example, you can customize the following for the Product for Product Title. Select Font from the drop-down. Select Font Size from the drop-down. Select Font Weight from the drop-down. Select Font Color from the drop-down. Choose the product title text alignment. Select from Other Formatting Options to further format the text. Choose Trim product title to a single line to display the title as a single line. Choose Display the complete product title to display the entire title.
*Price* | You can customize to display the discounted price along with the actual price struck off.
*Layout Background* | Choose a background color from the color palette.

5. Click **Save**. A prompt to rename the template is displayed. Rename the new product card and save. The new template is displayed in the list of available templates.

## Edit Template

This option allows you to edit a product card/template and revise customizations.

### To edit a template:

1. Click **Journey Manager > Assets > Templates**. The **All Templates** screen is displayed.
2. Click beside the template you want to edit. The selected template is displayed. Edit required details and click **Save**.
3. Click the three dots beside a template and select **Duplicate** to make another copy of the template. A copy of the template is displayed. You can change the name and details to create another custom template.
4. Click the three dots beside a template and select **Archive** to archive the template. Click **Yes Archive** to confirm.

## Create Module

A module is a combination of strategy and template. While you can customize strategy, the only available template when you create a module is a card template. You can view the list of modules, edit and archive them.

### To create a module:

1. Click **Journey Manager > Modules > Manage Modules**. Click **New Module** and choose **via Email** under **How would you like to enable your module?** options.

The below screen is displayed.

2. Select a **Template** from the drop-down. Only **Product Card** templates can be used. The module customization page is displayed.

**Field** | **Description**
--- | ---
Template | The selected template. Product card is the default for the module. The other preset templates are grid, carousel, and carousel with tabs.
Embed via Email | This is the module option selected when creating the new module.
*Layout Configuration* |
Card Height (px) | Configure the height of the product card in px. Changes made are reflected in the preview.
Card Width (px) | Configure the width of the product card in px. Changes made are reflected in the preview.
No. of Rows | Configure the number of rows. Changes made are reflected in the preview.
No. of Columns | Configure the number of columns. Changes made are reflected in the preview. NOTE: The default configurations are: Portrait Mode - H: 350px; W: 275px Landscape Mode - H: 220px to 250px; W: 375px
*Strategy* | Use a single strategy for all product tiles: Opens in the strategy selection screen and displays all strategies that are supported for VueMail. Select a strategy and Save. Use a combination of strategies and/or products: Opens in the strategy assembly screen. You can select more strategies or products to create a combination. Assign static products: You can select static products to be displayed as a strategy.
Email Platform | Choose from the list of preset email platforms: - Sendgrid - Klaviyo - Moengage - Shopify Click Add New Option to add an Email Platform. Enter the following and save: - email platform: Enter the preferred mail platform. - user ID identifier: Enter the unique ID of the user. - product ID identifier: Enter the unique production ID code. - timestamp identifier: Enter the ID that indicates the time when the event occurred.
Module Preview | Preview the template configuration before publishing. This feature enables you to check if the module has been configured as per preference. NOTE: Once the module is created you can click beside a module to copy the HTML code for the module or click Send Test Email to mail the preview to yourself.
Live Toggle | Once you create a module, click the three dots beside a module and select Live to mark the module as live. The Live Toggle on the All Modules page indicates it as Live.

## Edit Module

This option allows you to edit a module and change the required parameters.

### To edit a module:

1. Click **Journey Manager > Modules**. The **All Modules** screen is displayed with a list of available modules.
2. Click beside the module you want to edit. The selected module is displayed. Edit required details and click **Save**.
3. Click the three dots beside a module and select **Duplicate** to make another copy of the module. A copy of the module is displayed. You can change the name and details to create another custom module.
4. Click the three dots beside a module and select **Archive** to archive the module. Click **Yes Archive** to confirm.
5. Click the three dots beside a module and select **Live** to mark the module as live.
