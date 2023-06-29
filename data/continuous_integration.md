# Continuous Integration

Continuous Integration (CI) is a software development practice where developers integrate code into a shared repository frequently, preferably several times a day. Each integration can then be verified by an automated build and automated tests. While automated testing is not strictly part of CI it is typically implied.

One of the key benefits of integrating regularly is that you can detect errors quickly and locate them more easily. As each change introduced is typically small, pinpointing the specific change that introduced a defect can be done quickly.

In recent years CI has become a best practice for software development and is guided by a set of key principles, which are:

- Maintain a single source repository
- Automate the build
- Make your build self-testing
- Every commit should build on an integration machine
- Keep the build fast
- Test in a clone of the production environment
- Make it easy for anyone to get the latest executable
- Everyone can see what's happening
- Automate deployment

## Maintain a Single Source Repository

In this practice, you use a version control system for your code. Everyone commits to the mainline every day. When teams use a distributed version control system the mainline is more of a conceptual idea where developers think of one of the branches as the main place where work happens.

## Automate the Build

A single command should have the capability to build the system. Many build tools have the capability to do this. This includes compiling, linking, and running any code generators or other preprocessor steps, or anything else that's needed to get a fully executable system runnable from a fresh source check out.

## Make Your Build Self-Testing

Once the build is complete it should be able to run all the tests, unit tests, component tests, integration tests, and so on. This build script should halt and report an error as soon as it encounters any failed tests.

## Every Commit Should Build on an Integration Machine

You need a machine that acts as the integration machine that takes everyone's current changes and integrates them together on that machine. The reason is that it's easy for me to forget to commit a file, or to have a library installed on my machine that isn't installed on yours.

## Keep the Build Fast

The whole point of CI is to provide rapid feedback, so if the build takes a long time, it becomes useless. If you have a large system I'd certainly advise you to make sure you can build and test sub-systems independently of each other.

## Test in a Clone of the Production Environment

You want to catch any environmental bugs early and should build an environment that's a clone of your production environment.

## Make it Easy for Anyone to Get the Latest Executable

Everyone involved in a software project should be able to get the most recent executable and be able to run it: for demonstrations, exploratory testing, or just to see what changed this week.

## Everyone Can See What's Happening

Transparency on what's happening to everyone is important. Use an automated dashboard to broadcast the state of the system and the changes that are happening.

## Automate Deployment

A final stage of the deployment pipeline is the deployment itself. If you have a script that deploys your application, you can easily move your application between environments and ensure that everything you need for deployment is checked into source control.
