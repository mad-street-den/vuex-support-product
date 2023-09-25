## Integration

Before you can begin building personalized journeys, you need to integrate your online store with the VueX app and upload your catalog. This section provides instructions on how to do it.

**Note**: Please access VueX on a desktop with a Chrome browser for the best experience. You need to install the VueX Chrome extension to enable live preview of experiences.

### Integration via Embed Code

1. Launch Journey Manager from the Homepage or from the left navigation bar.
2. Click on the integration button in the navigation bar.
3. Copy the embed code.
![Example Image](https://d1r1e7xjkfj7nz.cloudfront.net/int1.png)
4. Append the copied code to the `<body>` tag of all your website's pages.
![Example Image](https://d1r1e7xjkfj7nz.cloudfront.net/int2.png)

### Integration via Google Tag Manager

1. Launch Journey Manager from the Homepage or from the left navigation bar.
2. Click on the integration button in the navigation bar.
3. Copy the embed code.
4. Login to your Google Tag Manager workspace.
5. Click on 'Add a New Tag'.
6. Name your Tag (e.g., VueX).
7. Click on 'Tag Configuration'.
8. Choose 'Custom HTML'.
9. Paste the embed code script you copied from the VueX app.
10. Check the box below that says 'Support document write'.
11. Click on 'Triggering'. Choose 'All Pages'.
12. Click on 'Save'.
13. Return to the previous screen. Click on 'Submit'.
14. Name your version and hit 'Publish'.

To integrate via API, please visit the [API documentation site](https://vue.ai/developer/docs/api-reference/recommendations).

## Catalog Ingestion

Catalogs can be ingested in the following ways and formats:

1. Through the VueX app: .csv and .json file formats are accepted.
2. Directly from the server: FTP or pull from API.
3. Directly from the cloud: through a shared Amazon S3 location or AWS.
4. Directly from PIM/DAMS/Databases: push through SQS.

The frequency of ingestion is decided based on your plan and will be stated in your contract. Please contact your Customer Success team for assistance with catalog ingestion.
