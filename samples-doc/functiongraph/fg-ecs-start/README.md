# FunctionGraph to start ecs instance:

## Build deployment zip

To build the deployment zip, execute following command in
folder: **samples-doc/functiongraph/fg-ecs-start**

```node
npm install

npm pack
```

This will create **deploy.zip** with code and dependencies included.

## Create FunctionGraph function

### Create function

Use [OpentelekomCloud FunctionGraph console](https://console.otc.t-systems.com/functiongraph/) to create a function with following
settings:

| | |
| -- | -- |
| **Create With** | Create from scratch |
| **Basic Information** | 
| *Function Type*| Event Function  
| *Region*|  \<YOUR REGION>  
| *Function Name* | \<YOUR FUNCTION NAME>  
| *Agency* | Specify an agency with policy to start ECS instance  
| *Runtime* | Node.js 16.17

### Upload code

Use **Upload** -> **Local ZIP** and upload **deploy.zip** from previous step.

### Configure function

In **Configuration** -> **Basic Settings** set:

*Handler*:   startECS.handler

In **Configuration** -> **Environment Variables** add following variables:

| Environment variable name | Value | Default
| --           | --                 | -- |
| INSTANCE_ID  | \<ID of ecs instance> |    |
| ECS_ENDPOINT | \<ecs endpoint>       |  ecs.eu-de.otc.t-systems.com

### Create Test Event

In **Code** create a Test Event using "Blank Template" (Event is used in function)

## Test function

Click **Test** to test function.

