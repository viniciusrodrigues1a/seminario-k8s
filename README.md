<h1 align="center">
  <img alt="GoStack" src="./.github_assets/kubernetes-logo.png" width="200px" />
</h1>

<h2 align="center">
  Apresentação de Kubernetes
</h2>

<h3 align="center">Projeto apresentado no curso técnico de Desenvolvimento de Sistemas da ETEC Elias Nechar.</h3>

## :page_facing_up: Índice

- [Rodando localmente](#getting_started)
- [Feito com](#built_using)
- [Licença](#license)

## 🏁 Rodando localmente <a name = "getting_started"></a>

Estas instruçōes te darão uma cópia funcional do projeto na sua máquina local para desenvolvimento e testes.

### Pré-requisitos

- [minikube](https://minikube.sigs.k8s.io/docs/start/)
- [kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl)

Iniciando o cluster.
```sh
minikube start
```

Criando o componentes Kubernetes.
```sh
kubectl apply -f kubernetes/deployment.yaml
kubectl apply -f kubernetes/loadbalancer.yaml
```

Fazendo o port-forward para o LoadBalancer.
```sh
kubectl port-forward service/aplicacao-web-service 8080:3333
```

Ao acessar [localhost:8080](http://localhost:8080) no navegador devemos poder ver o seguinte json:
```json
{
  "hello": "world"
}
```

## ⛏️ Feito com <a name = "built_using"></a>

Aplicação web de exemplo feita com [NodeJS](https://nodejs.org). Containers orquestrados usando [Kubernetes](https://kubernetes.io).

## :memo: Licença <a name = "license"></a>

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.