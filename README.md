## BUYSKET

### Introdução
Para iniciar o projeto basta iniciar o docker e buildar o container

```cpp
docker-compose up -d
```

## frontend 

- Instalando dependencias
```cpp
npm i
```

- Rodando projeto
```cpp
npm run dev
```

## backend

- Instalando dependencias
```cpp
npm i
```

- Rodando projeto
```cpp
npx prisma migrade dev
```
```cpp
npx prisma generate
```
```cpp
npm run dev
```


# .ENV 
- backend

```cpp
DATABASE_URL="postgresql://[usuario]:[senha]@localhost:5432/postgres?schema=[schema]"
```

- os valores padrões são:
- usuario: postgres
- senha: postgres
- schema: basket (caso não seja alterado)
