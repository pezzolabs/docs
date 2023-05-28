---
sidebar_position: 1
description: "Use Docker Compose to deploy Pezzo on your machine."
---

# Docker Compose

## Quick Installation

To install the latest version of Pezzo using Docker Compose, run the following:

```
curl -s https://raw.githubusercontent.com/pezzolabs/pezzo/main/docker-compose.yaml -o docker-compose.yml && docker compose -f docker-compose.yml -p pezzo up
```

Pezzo is now available at [https://localhost:4200](https://localhost:4200). Have fun! 🚀

## Manual Installation

Clone the [Pezzo GitHub repository](https://github.com/pezzolabs/pezzo):
```
git clone git@github.com:pezzolabs/pezzo.git
cd pezzo
``` 

Run the project using Docker Compose:
```
docker-compose up
```

If you want to make any modifications (ports, image versions etc.) you can modify the `docker-compose.yaml` at the root of the repository.