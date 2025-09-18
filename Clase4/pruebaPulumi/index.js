"use strict";
const pulumi = require("@pulumi/pulumi");
const aws = require("@pulumi/aws");
const awsx = require("@pulumi/awsx");

// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.Bucket("my-bucket");

//permsisos

const permisos = new aws.s3.BucketOwnershipControls("ownership-controls", {
    bucket: bucket.id, 
    rule: {
        objectOwnership: "ObjectWriter"
    }
});

// acesso de las acls

const accesos = new aws.s3.BucketPublicAccessBlock("public-access-block", {
    bucket: bucket.id, 
    blockPublicAcls: false
});

//sitio estatico
const website = new aws.s3.BucketWebsiteConfiguration("website", {
    bucket: bucket.id,
    indexDocument: {
        suffix: "index.html", 
    }
})

//asignacion del elemento en el bucket 
const objeto = new aws.s3.BucketObject("index.html", {
    bucket: bucket.id,
    source: new pulumi.asset.FileAsset("./index.html"),
    contentType: "text/html",
    acl: "public-read"
}, {dependsOn: [accesos,permisos,website ]});




// Export the name of the bucket
exports.bucketName = bucket.id;
exports.bucketEndpoint = pulumi.interpolate`http://${website.websiteEndpoint}`