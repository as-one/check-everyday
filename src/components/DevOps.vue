<template>
  <section class="container">
    <div class="row">
      <div class="col-sm-12">
        <h2>Basics</h2>
      </div>
    </div>

    <div class="row">
        <div class="col-sm-12 col-md-4">
          <h3>Categories</h3>
          <table>
            <tr>
              <td>[INT]</td>
              <td>Introduction</td>
            </tr>
            <tr>
              <td>[ARC]</td>
              <td>Architecture</td>
            </tr>
            <tr>
              <td>[INF]</td>
              <td>Infrastructure</td>
            </tr>
            <tr>
              <td>[COM]</td>
              <td>Computing</td>
            </tr>
            <tr>
              <td>[STO]</td>
              <td>Storage</td>
            </tr>
            <tr>
              <td>[NET]</td>
              <td>Networking</td>
            </tr>
            <tr>
              <td>[SEC]</td>
              <td>Security</td>
            </tr>
            <tr>
              <td>[MON]</td>
              <td>Monitoring</td>
            </tr>
            <tr>
              <td>[MIG]</td>
              <td>Migration</td>
            </tr>
            <tr>
              <td>[SLS]</td>
              <td>Serverless</td>
            </tr>
            <tr>
              <td>[ENT]</td>
              <td>Enterprise</td>
            </tr>
            <tr>
              <td>[SUP]</td>
              <td>Support and Billing</td>
            </tr>
            <tr>
              <td>[AI]</td>
              <td>Artificial Intelligence</td>
            </tr>
            <tr>
              <td>[ML]</td>
              <td>Machine Learning</td>
            </tr>
          </table>
        </div>
        <div class="col-sm-12 col-md-8">
          <h3>AWS Services</h3>

          <table>
            <tr>
              <td>[ARC]</td>
              <td></td>
              <td>Well-Architected Framework</td>
              <td>Describes key concepts, design principles, and architectural best practices for designing and running workloads in the cloud. It&#39;s a whitepaper.</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>[INF]</td>
              <td>&#9733;</td>
              <td>CLI</td>
              <td>Command line interface tool.</td>
            </tr>
            <tr>
              <td>[INF]</td>
              <td>&#9733;</td>
              <td>Elastic Beanstalk</td>
              <td>Deploy and scale web applications and services developed with Java, .NET, PHP, Node.js, Python, and more.</td>
            </tr>
            <tr>
              <td>[INF]</td>
              <td>&#9733;</td>
              <td>CloudFormation</td>
              <td>Infrastructure as Code using YML or JSON files.</td>
            </tr>
            <tr>
              <td>[INF]</td>
              <td></td>
              <td>Cloud9</td>
              <td>Cloud-based IDE on the browser.</td>
            </tr>
            <tr>
              <td>[INF]</td>
              <td></td>
              <td>CDK</td>
              <td>Define your cloud application resources.</td>
            </tr>
            <tr>
              <td>[INF]</td>
              <td></td>
              <td>CodeCommit, Build, Deploy, Pipeline</td>
              <td>CodeCommit: AWS Github.</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>CodeBuild: build and testing service in CodePipeline.</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>CodeDeploy: deploy onto EC2 and AWS Lambda.</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>CodePipeline: orchestrate your CICD pipelines.</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>[NET]</td>
              <td>&#9733;</td>
              <td>CloudFront</td>
              <td>CDN (Content Delivery Network).</td>
            </tr>
            <tr>
              <td>[NET]</td>
              <td>&#9733;</td>
              <td>Route53</td>
              <td>DNS (Domain Name System). It lets you translate domain names to IP addresses.</td>
            </tr>
            <tr>
              <td>[NET]</td>
              <td>&#9733;</td>
              <td>VPC</td>
              <td>VPC (Virtual Private Cloud).</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>[COM]</td>
              <td>&#9733;</td>
              <td>EC2</td>
              <td>Create instances of Linux and Windows machines on the cloud. It has the Auto Scaling option.</td>
            </tr>
            <tr>
              <td>[COM]</td>
              <td>&#9733;</td>
              <td>ELB - Elastic Load Balancing</td>
              <td>Automatically distributes incoming application traffic across multiple targets and virtual appliances in one or more Availability Zones (AZs).</td>
            </tr>
            <tr>
              <td>[COM]</td>
              <td></td>
              <td>ECR - Elastic Container Registry</td>
              <td>Docker images repository.</td>
            </tr>
            <tr>
              <td>[COM]</td>
              <td></td>
              <td>ECS - Elastic Container Service</td>
              <td>Docker container management system. Helps with creating micro-services.</td>
            </tr>
            <tr>
              <td>[COM]</td>
              <td></td>
              <td>Fargate</td>
              <td>Serverless compute for containers. Used with ECS (Elastic Container Service).</td>
            </tr>
            <tr>
              <td>[COM]</td>
              <td></td>
              <td>LightSail</td>
              <td>Virtual private server (VPS) instances, containers, storage, databases, and more. Like a GoDaddy service.</td>
            </tr>
            <tr>
              <td>[COM]</td>
              <td></td>
              <td>Batch</td>
              <td>Run hundreds of thousands of batch computing jobs.</td>
            </tr>
            <tr>
              <td>[COM]</td>
              <td></td>
              <td>OpsWorks</td>
              <td>Managed Chef &amp; Puppet.</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>[STO]</td>
              <td>&#9733;</td>
              <td>EC2 EBS (Elastic Block Store)</td>
              <td>Block-storage service designed for Amazon Elastic Compute Cloud (Amazon EC2).</td>
            </tr>
            <tr>
              <td>[STO]</td>
              <td>&#9733;</td>
              <td>EC2 EFS (Elastic File System)</td>
              <td>Elastic file system.</td>
            </tr>
            <tr>
              <td>[STO]</td>
              <td>&#9733;</td>
              <td>S3</td>
              <td>Cloud object storage.</td>
            </tr>
            <tr>
              <td>[STO]</td>
              <td>&#9733;</td>
              <td>Athena</td>
              <td>Analyze data in Amazon S3 using standard SQL.</td>
            </tr>
            <tr>
              <td>[STO]</td>
              <td>&#9733;</td>
              <td>DynamoDB</td>
              <td>Key-value NoSQL database.</td>
            </tr>
            <tr>
              <td>[STO]</td>
              <td>&#9733;</td>
              <td>RDS</td>
              <td>Relational database.</td>
            </tr>
            <tr>
              <td>[STO]</td>
              <td>&#9733;</td>
              <td>Aurora</td>
              <td>Relational database management system (RDBMS) built for the cloud with full MySQL and PostgreSQL compatibility.</td>
            </tr>
            <tr>
              <td>[STO]</td>
              <td></td>
              <td>Timestream</td>
              <td>Time series database.</td>
            </tr>
            <tr>
              <td>[STO]</td>
              <td></td>
              <td>Glue</td>
              <td>ETL (Extract Transform Load) service. Move data from DB(s) to a unified DB (data warehouse).</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>[SEC]</td>
              <td>&#9733;</td>
              <td>IAM</td>
              <td>Access control.</td>
            </tr>
            <tr>
              <td>[SEC]</td>
              <td>&#9733;</td>
              <td>KMS</td>
              <td>Create and control the keys used to encrypt or digitally sign your data.</td>
            </tr>
            <tr>
              <td>[SEC]</td>
              <td></td>
              <td>Organizations</td>
              <td>Hierarchy and centralized management of multiple AWS accounts.</td>
            </tr>
            <tr>
              <td>[SEC]</td>
              <td></td>
              <td>Cognito</td>
              <td>User Sign-Up, Sign-In, and Access Control.</td>
            </tr>
            <tr>
              <td>[SEC]</td>
              <td></td>
              <td>Backup</td>
              <td>Enables you to centralize and automate data protection across on-premises and AWS services.</td>
            </tr>
            <tr>
              <td>[SEC]</td>
              <td></td>
              <td>SSO - Single Sign On</td>
              <td>One login managed by AWS to log in to various business SAML 2.0-compatible applications (Office 365, etc).</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>[MON]</td>
              <td>&#9733;</td>
              <td>CloudWatch</td>
              <td>Monitoring and observability service for AWS Services.</td>
            </tr>
            <tr>
              <td>[MON]</td>
              <td>&#9733;</td>
              <td>CloudTrail</td>
              <td>Monitors and records account activity (what, who, when, where) across your AWS infrastructure.</td>
            </tr>
            <tr>
              <td>[MON]</td>
              <td></td>
              <td>Health Dashboard</td>
              <td>Check the overall health of AWS services.</td>
            </tr>
            <tr>
              <td>[MON]</td>
              <td></td>
              <td>Managed Grafana</td>
              <td>Fully managed service for open source Grafana developed in collaboration with Grafana Labs.</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>[SLS]</td>
              <td>&#9733;</td>
              <td>API Gateway</td>
              <td>APIs.</td>
            </tr>
            <tr>
              <td>[SLS]</td>
              <td>&#9733;</td>
              <td>SNS</td>
              <td>Send notifications.</td>
            </tr>
            <tr>
              <td>[SLS]</td>
              <td>&#9733;</td>
              <td>SQS</td>
              <td>Message queues.</td>
            </tr>
            <tr>
              <td>[SLS]</td>
              <td>&#9733;</td>
              <td>Kinesis</td>
              <td>Real-time data streaming.</td>
            </tr>
            <tr>
              <td>[SLS]</td>
              <td>&#9733;</td>
              <td>Lambda</td>
              <td>Serverless event-driven compute service.</td>
            </tr>
            <tr>
              <td>[SLS]</td>
              <td>&#9733;</td>
              <td>EventBridge</td>
              <td>Serverless event-driven bus that ingests data from your own apps, SaaS apps and AWS services and routes that data to targets.</td>
            </tr>
            <tr>
              <td>[SLS]</td>
              <td>&#9733;</td>
              <td>Step Functions</td>
              <td>Orchestrate coordinate Lambda functions and ECS containers into a workflow.</td>
            </tr>
            <tr>
              <td>[SLS]</td>
              <td></td>
              <td>SAM - Serverless Application Model</td>
              <td>IaaC for serverless applications. Built on top of CloudFormation.</td>
            </tr>
            <tr>
              <td>[SLS]</td>
              <td></td>
              <td>AppSync</td>
              <td>GraphQL as a service on AWS.</td>
            </tr>
            <tr>
              <td>[SLS]</td>
              <td></td>
              <td>MSK</td>
              <td>Apache Kafka service that makes it easy to ingest and process streaming data in real time.</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>[SUP]</td>
              <td>&#9733;</td>
              <td>Billing</td>
              <td>Organize and report your AWS cost and usage based on user-defined methods.</td>
            </tr>
            <tr>
              <td>[SUP]</td>
              <td>&#9733;</td>
              <td>Cost and Usage Report</td>
              <td>Tracks your AWS usage and provides estimated charges associated with your account.</td>
            </tr>
            <tr>
              <td>[SUP]</td>
              <td>&#9733;</td>
              <td>Budgets</td>
              <td>Monitor your AWS spend and be alerted when you exceed or are forecasted to exceed your desired spending limit.</td>
            </tr>
            <tr>
              <td>[SUP]</td>
              <td>&#9733;</td>
              <td>Cost Explorer</td>
              <td>Lets you visualize, understand, and manage your AWS cloud costs and usage over time.</td>
            </tr>
            <tr>
              <td>[SUP]</td>
              <td></td>
              <td>Config</td>
              <td>Assess, audit, and evaluate the configurations of your AWS resources.</td>
            </tr>
            <tr>
              <td>[SUP]</td>
              <td></td>
              <td>Connect</td>
              <td>Easy-to-use omnichannel cloud contact center service offering superior, low-cost customer service using machine learning (ML).</td>
            </tr>
            <tr>
              <td>[SUP]</td>
              <td></td>
              <td>Trusted Advisor</td>
              <td>Tech implementation support. Your team do the work following a checklist.</td>
            </tr>
            <tr>
              <td>[SUP]</td>
              <td></td>
              <td>IQ</td>
              <td>Tech implementation support. Freelancers do the work.</td>
            </tr>
            <tr>
              <td>[SUP]</td>
              <td></td>
              <td>Professional Services</td>
              <td>Tech implementation support. AWS team offers guidance and your team do the work.</td>
            </tr>
            <tr>
              <td>[SUP]</td>
              <td></td>
              <td>Managed Services</td>
              <td>Tech implementation support. AWS team will do the work.</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>[MIG]</td>
              <td></td>
              <td>CAF - Cloud Adoption Framework</td>
              <td>Leverages AWS experience and best practices. It&#39;s a whitepaper.</td>
            </tr>
            <tr>
              <td>[MIG]</td>
              <td></td>
              <td>DMS - Database Migration Service</td>
              <td>Migrate databases to AWS.</td>
            </tr>
            <tr>
              <td>[MIG]</td>
              <td></td>
              <td>ADS - Application Discovery Service</td>
              <td>Gathers information about your source servers to support the migration planning.</td>
            </tr>
            <tr>
              <td>[MIG]</td>
              <td></td>
              <td>EMP - End-of-Support Migration Program for Windows Server</td>
              <td>Migrate your legacy applications running on outdated versions of Windows Server to newer, supported versions on AWS.</td>
            </tr>
            <tr>
              <td>[MIG]</td>
              <td></td>
              <td>MGN - Application Migration Service</td>
              <td>Provides an automated approach for rehosting servers to the AWS cloud.</td>
            </tr>
            <tr>
              <td>[MIG]</td>
              <td></td>
              <td>DataSync</td>
              <td>Automates moving file &amp; object data between on-premises and AWS storage services.</td>
            </tr>
            <tr>
              <td>[MIG]</td>
              <td></td>
              <td>SCT - Schema Conversion Tool</td>
              <td>Performs assessment reports and automatically converts your schema and code objects to a format compatible with your target database engine.</td>
            </tr>
            <tr>
              <td>[MIG]</td>
              <td></td>
              <td>Snowcone</td>
              <td>The smallest member of the AWS Snow family of edge computing and data transfer devices.</td>
            </tr>
            <tr>
              <td>[MIG]</td>
              <td></td>
              <td>Snowball</td>
              <td>Petabyte-scale data transport service that uses secure devices to transfer large amounts of data into and out of the AWS Cloud.</td>
            </tr>
            <tr>
              <td>[MIG]</td>
              <td></td>
              <td>Snowmobile</td>
              <td>Exabyte-scale data transfer truck service used to move extremely large amounts of data to AWS.</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>[ENT]</td>
              <td></td>
              <td>Systems Manager</td>
              <td>Provides an operations console and APIs for centralized application and resource management in hybrid environments.</td>
            </tr>
            <tr>
              <td>[ENT]</td>
              <td></td>
              <td>Launch Wizard</td>
              <td>Offers a guided way of sizing, configuring, and deploying AWS resources for third party applications.</td>
            </tr>
            <tr>
              <td>[ENT]</td>
              <td></td>
              <td>Service Catalog</td>
              <td>Allows organizations to create and manage catalogs of IT services that are approved for use on AWS.</td>
            </tr>
            <tr>
              <td>[ENT]</td>
              <td></td>
              <td>Workspaces</td>
              <td>Virtual Desktop on Demand in the Cloud. Replaces traditional on-premise VDI infrastructure.</td>
            </tr>
            <tr>
              <td>[ENT]</td>
              <td></td>
              <td>Quicksight</td>
              <td>Allows everyone in your organization to understand your data by asking questions in natural language.</td>
            </tr>
            <tr>
              <td>[ENT]</td>
              <td></td>
              <td>Storage Gateway</td>
              <td>Set of hybrid cloud storage services that provide on-premises access to virtually unlimited cloud storage.</td>
            </tr>
            <tr>
              <td>[ENT]</td>
              <td></td>
              <td>License Manager</td>
              <td>Makes it easier to manage your software licenses from vendors such as Microsoft, SAP, Oracle, and IBM across AWS and on-premises.</td>
            </tr>
            <tr>
              <td>[ENT]</td>
              <td></td>
              <td>Outposts</td>
              <td>Run some AWS services locally and connect to a broad range of services available in the local AWS Region.</td>
            </tr>
            <tr>
              <td>[ENT]</td>
              <td></td>
              <td>Transit Gateway Network Manager</td>
              <td>Provides a single global view of your private network.</td>
            </tr>
            <tr>
              <td>[ENT]</td>
              <td></td>
              <td>Direct Connect</td>
              <td>Creates a dedicated network connection to AWS. Private dedicated fiber connection to AWS.</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>[ML]</td>
              <td></td>
              <td>EMR</td>
              <td>Cloud big data platform for running large-scale distributed data processing jobs, interactive SQL queries, and machine learning (ML).</td>
            </tr>
            <tr>
              <td>[ML]</td>
              <td></td>
              <td>Polly</td>
              <td>Turns text into lifelike speech, allowing you to create applications that talk.</td>
            </tr>
            <tr>
              <td>[ML]</td>
              <td></td>
              <td>Comprehend</td>
              <td>Natural-language processing (NLP) service that uses machine learning to uncover valuable insights and connections in text. </td>
            </tr>
            <tr>
              <td>[ML]</td>
              <td></td>
              <td>Macie</td>
              <td>Fully managed data security and data privacy service that uses machine learning and pattern matching to discover and protect your sensitive data in AWS.</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>[AI]</td>
              <td></td>
              <td>?</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>[?]</td>
              <td></td>
              <td>SWF - Simple Workflow Service</td>
              <td>Old way of orchestrating a big workflow.</td>
            </tr>
            <tr>
              <td>[?]</td>
              <td></td>
              <td>ElasticTranscoder</td>
              <td>Managed media (video, music) converter service into various optimized formats</td>
            </tr>
            <tr>
              <td>[?]</td>
              <td></td>
              <td>Toolkit</td>
              <td>Extension for Microsoft Visual Studio running on Microsoft Windows that makes it easier for developers to develop, debug, and deploy</td>
            </tr>
          </table>
        </div>
    </div>

    <div class="row">
      <div class="col-sm-12 col-md-6">
        <h3>AWS Well-Architected Framework</h3>
        <table>
          <tr>
            <td>Pillars</td>
            <td></td>
          </tr>
          <tr>
            <td>Operational Excellence</td>
            <td>
              <ul>
                <li>Perform operations as code</li>
                <li>Make frequent, small, reversible changes</li>
                <li>Refine operations procedures frequently</li>
                <li>Anticipate failure</li>
                <li>Learn from all operational failures</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Security</td>
            <td>
              <ul>
                <li>Implement a strong identity foundation</li>
                <li>Use fine-grained access controls</li>
                <li>Apply security at all layers</li>
                <li>Automate security best practices</li>
                <li>Prepare for security events and automation</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Reliability</td>
            <td>
              <ul>
                <li>Automatically recover from failure</li>
                <li>Test recovery procedures</li>
                <li>Scale horizontally to increase aggregate workload availability</li>
                <li>Stop guessing capacity</li>
                <li>Manage change in automation</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Performance Efficiency</td>
            <td>
              <ul>
                <li>Democratize advanced technologies</li>
                <li>Go global in minutes</li>
                <li>Use serverless architectures</li>
                <li>Experiment more often</li>
                <li>Consider mechanical sympathy</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Cost Optimization</td>
            <td>
              <ul>
                <li>Implement Cloud Financial Management</li>
                <li>Adopt a consumption model</li>
                <li>Measure overall efficiency</li>
                <li>Stop spending money on undifferentiated heavy lifting</li>
                <li>Analyze and attribute expenditure</li>
              </ul>
            </td>
          </tr>
        </table>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <h2>CI/CD</h2>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <h3>CI/CD</h3>
        <table>
          <tr>
            <td></td>
            <td>Automated build<br/>Automated tests</td>
            <td>Auto staging to Test env<br/>Auto staging to QA env</td>
            <td>Automated staging to Prod env</td>
          </tr>
          <tr>
            <td>Continuous Integration</td>
            <td>&#9733;</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Continuous Delivery</td>
            <td>&#9733;</td>
            <td>&#9733;</td>
            <td></td>
          </tr>
          <tr>
            <td>Continuous Deployment</td>
            <td>&#9733;</td>
            <td>&#9733;</td>
            <td>&#9733;</td>
          </tr>
        </table>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <h3>CI/CD Stack</h3>
        <table>
          <tr>
            <td></td>
            <td>1. Code</td>
            <td>2. Build</td>
            <td>3. Test</td>
            <td>4. Deploy</td>
            <td>5. Provision</td>
          </tr>
          <tr>
            <td>AWS</td>
            <td>CodeCommit</td>
            <td>CodeBuild</td>
            <td>CodeBuild</td>
            <td>CodeDeploy<br/>Elastic Beanstalk</td>
            <td>CloudFormation<br/>Elastic Beanstalk</td>
          </tr>
          <tr>
            <td></td>
            <td>GitHub repo</td>
            <td>Github CI<br/>Jenkins CI</td>
            <td>Github CI<br/>Jenkins CI</td>
            <td>Vercel</td>
            <td>Vercel</td>
          </tr>
        </table>
      </div>
    </div>
  </section>
</template>
