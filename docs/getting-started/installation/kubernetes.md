---
sidebar_position: 2
description: "Deploy Pezzo to production using Kubernetes."
---

# Kubernetes

Pezzo provides a Helm chart for deploying Pezzo to Kubernetes.

First, add the Pezzo Helm repository:
```
helm repo add pezzo https://k8s.pezzo.ai
```

Then, install Pezzo on your cluster:
```
helm install pezzo pezzo/pezzo
```

## Additional Information
You can find the Helm charts and all supported values at [pezzolabs/pezzo-k8s](https://github.com/pezzolabs/pezzo-k8s).


