# zendesk-react-native-api
A Zendesk API  library for use with react native

# Getting started
add to package.json

`"zendesk-react-native-api":"git+https://github.com/vseprav/zendesk-react-native-api.git"`

for local use clone repository add to package.json

`"zendesk-react-native-api":"file:../zendesk-react-native-api"`

### Create a new API client
```
let config = {  
    url: 'https://{subdomain}.zendesk.com/api/v2',  
    email: 'email_address@gmail.com',  
    token: 'API_TOKEN'  
  };
  
  let zendeskApi new ZenApi(config);
 ```

### Tickets list
```
zendeskApi.tickets.list()
        .then((response) => response.json())      
        .then((responseJson) => console.log(responseJson))           
        .catch((error) => console.error(error));
```   
        
### Create new ticket      
```
let ticket = {ticket: {subject: 'My printer is on fire!', comment: {body: 'The smoke is very colorful.'}}};  
zendeskApi.tickets.create(ticket)     
        .then((response) => response.json())           
        .then((responseJson) => console.log(responseJson))            
        .catch((error) => console.error(error));
```    
        