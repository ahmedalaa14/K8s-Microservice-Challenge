# k8s-microserices-challenge

![TASK](https://github.com/ahmedalaa14/K8s-Microservice-Challenge/blob/main/images/kubernetes-challenge.png)
## Steps 
1. Create two applications. In this example, Node.js applications are used.
2. Dockerize these two applications.
3. Create a deployment for each application.
4. Expose these deployments using a service.

## Notes
- The first app works on port 8080. You can use any port instead.
- The second app works on port 8081. You can use any port instead.
- The first app exposes JSON on the route `/json`.
- The second app fetches the exposed JSON via the route `/fetch`.
- In the `API_URL` environment variable, you have to use the second service name followed by the route.