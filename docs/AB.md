---
sidebar_position: 4
---

# A/B testing

## What is A/B testing?

A/B testing is an experiment of comparing two or more versions of a customer journey against each other to understand which version performs better against a specific goal. You can conduct an A/B test by splitting the traffic between different versions of customer journeys and use statistical analysis to determine which version performs better for a given conversion goal.

### Why do you need to run an A/B test?

You can:
- Make careful changes to your customer journeys while collecting valuable data on the test results.
- Construct hypotheses and learn better how certain elements of your experiences impact user behavior.
- Run A/B tests to understand if your opinion about the best experience for a given goal holds true. A/B testing can consistently improve a given journey, focusing on a single goal at a time like conversion rate.

For example, if you are an eCommerce manager at a fashion store who wants to identify the right recommendation module that aids conversions. In order to do that, you can try A/B testing two different types of recommendation modules and see which module works the best, by exposing two different user groups to journeys with these two modules with everything else kept constant. This will help gauge the impact of the modules and compare the performance of one against the other.

The potential benefits of A/B testing are:
- Improved conversion rates
- Better User Experience
- Optimized User Journey

There is no single journey that can fit all customers. Testing multiple customer journeys allows you to gain key insights into customer behavior and identify the best-suited journey for the audience. The optimum journey varies based on a range of factors such as user demographics, products available, time spent on the website, and so on. The idea is to continuously experiment with different combinations of experiences with highly customized content across different audiences to maximize your business goal.

Vue.ai supports a frequentist approach to A/B testing where the Vue.ai user is completely in control of executing/monitoring and concluding A/B tests.

## Define A/B Test Goals

### Identify your A/B Testing Goals

Every A/B test should be conducted to solve a business problem and the potential impact of solving this problem should be quantifiable in the form of a KPI such as click-through rate, conversion rate, etc. This metric (goal) should be used to identify whether the A/B test is successful. If you aren't measuring your goals then the result of your experiment is meaningless.

There are different types of goals:

- **Engagement Goals:** Used to identify the Vue.ai module that works best for any given touchpoint. Identify the Vue.ai modules that you want to test and measure the click-through rate on the recommendations.

- **Revenue Goals:** Used to identify the optimal journey that yields higher revenue. To identify the impact of Vue.ai modules on your website, run an A/B test against a no-treatment journey, and measure the uplift in the conversion rates. You can also choose Average Order Value or Revenue per Visit as your goal metric.

### Construct a valid hypothesis

A prediction that you make before running a test is called a hypothesis. It is a statement that clearly states what change you want to make, why you want to do so, and its expected impact. Once a goal is identified, you can begin generating A/B testing ideas and hypotheses to create customer journey variations. A strong hypothesis is made of three components:

- Defining a problem
- Describing a proposed solution
- Setting criteria for success/failure and using metrics to measure results

Some examples of valid hypotheses are listed below:

- Cross Product recommendations on the cart page will nudge users to buy more products and help increase the Average Order Value.
- If the Add To Cart button is the most visible element on the product listing page, it will catch the user's attention and increase Cart Addition Rate.
- Highlighting Similar products recommendations on the product page will help users discover more relevant products and hence convert better, thereby improving the Conversion Rate.

### Identify the traffic split between A/B test groups

It is advisable to allocate the traffic split equally (50% - 50%) for optimal test conditions. However, you can run an experiment with an unequal user allocation (10% - 20% - 70%). It is important to note that the higher the number of groups, the lower the traffic assigned to each variation, hence the longer the test will take to conclude.

## Set up an A/B test

### A/B Testing Best Practices

Some of the best practices for A/B testing are listed below:

- **Duration:** Run the A/B test for a minimum of 2 weeks and until the confidence level is reached.
- **Sample Size:** Ensure that the sample size for each variation in your test is large enough to make your results statistically significant. There are several online sample size calculators that are easy to use and help calculate the sample size along with the minimum detectable effect that you'd expect between the groups for a conversion metric.
- **The integrity of the test:** Do not make changes to a journey when the test is running. It will skew the results and the data and lead to biased results.
- **What to test:** Always try to test one feature at a time. Keeping everything else constant is the golden rule of A/B testing, and it helps gauge the impact of that one feature that you have added/modified/removed.

### Setting up and Executing A/B testing

1. Choose Experiments from the top navigation bar. The All Experiments page is displayed.
2. Click New Experiment.
3. Enter a name for your test.
4. Choose the audience that will be subjected to the test from the drop-down.
5. Select journeys to send traffic from the listing page and click Next.
6. For each journey, toggle On and indicate the traffic split to set up A/B testing for multiple journeys. Traffic allocation across journeys must be equal to 100%.
7. Edit the following test fields:

    - **Test Field:** Description
    - **Goal:** The purpose or goal of conducting A/B testing. Indicates the measurement criteria.
    - **Metric:** The metric to be calculated and analyzed based on the measurement criteria.

    You will be able to track all other metrics regardless of the KPI selected in the Performance Metrics Tab.
8. **Confidence in test results:** Choose the confidence% for your A/B testing from the drop-down. The default confidence%, also considered as a best practice is 95%.
9. Click Publish.

**Note:** Click Save For later to save the testing configuration for future use.

### Pause Experiment

If you choose to temporarily pause a live A/B test, in order to run a campaign or expose all users to another journey, you can do so by doing the following:

1. Choose Experiments from the top navigation bar.
2. Click the pause icon to pause an experiment.

**Note:** While an experiment is in a paused state, the associated audience cannot be assigned to another experiment.

### Resume Experiment

On resuming an A/B test, the journey served to the audience during the paused state is stopped and the A/B test is resumed.

### Stop Experiment

Once the A/B test is conclusive or you wish
