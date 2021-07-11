# Básico

## Obtener un valor de una variable

```cpp
llvm::Value* variablePtr;
llvm::Value* variableValue;

variableValue = builder.CreateLoad(variablePtr);
```

## Guardar valor en una variable

```cpp
llvm::Value* variablePtr;
llvm::Value* variableValue;

// ...
builder.CreateStore(variableValue, variablePtr);
```

## Casting

### Castear de entero a entero

* Castear cualquier entero a entero de 8-bit con signo

```cpp
builder.CreateIntCast(value, builder.getInt8Ty(), true);
```

* Castear cualquier entero a entero de 8-bit sin signo

```cpp
builder.CreateIntCast(value, builder.getInt8Ty(), false);
```

* Castear cualquier entero a entero de 16-bit con signo

```cpp
builder.CreateIntCast(value, builder.getInt16Ty(), true);
```

* Castear cualquier entero a entero de 16-bit sin signo

```cpp
builder.CreateIntCast(value, builder.getInt16Ty(), false);
```

* Castear cualquier entero a entero de 32-bit con signo

```cpp
builder.CreateIntCast(value, builder.getInt32Ty(), true);
```

* Castear cualquier entero a entero de 32-bit sin signo

```cpp
builder.CreateIntCast(value, builder.getInt32Ty(), false);
```

* Castear cualquier entero a entero de 64-bit con signo

```cpp
builder.CreateIntCast(value, builder.getInt64Ty(), true);
```

* Castear cualquier entero a entero de 64-bit sin signo

```cpp
builder.CreateIntCast(value, builder.getInt64Ty(), false);
```

### Castear de flotante a entero

* Castear cualquier flotante a un entero de 8-bit con signo

```cpp
builder.CreateFPToSI(value, builder.getInt8Ty());
```

* Castear cualquier flotante a un entero de 8-bit sin signo

```cpp
builder.CreateFPToUI(value, builder.getInt8Ty());
```

* Castear cualquier flotante a un entero de 16-bit con signo

```cpp
builder.CreateFPToSI(value, builder.getInt16Ty());
```

* Castear cualquier flotante a un entero de 16-bit sin signo

```cpp
builder.CreateFPToUI(value, builder.getInt16Ty());
```

* Castear cualquier flotante a un entero de 32-bit con signo

```cpp
builder.CreateFPToSI(value, builder.getInt32Ty());
```

* Castear cualquier flotante a un entero de 32-bit sin signo

```cpp
builder.CreateFPToUI(value, builder.getInt32Ty());
```

* Castear cualquier flotante a un entero de 64-bit con signo

```cpp
builder.CreateFPToSI(value, builder.getInt64Ty());
```

* Castear cualquier flotante a un entero de 64-bit sin signo

```cpp
builder.CreateFPToUI(value, builder.getInt64Ty());
```

### Castear de entero a flotante

* Castear cualquier entero con signo a flotante de 32-bit

```cpp
builder.CreateSIToFP(value, builder.getFloatTy());
```

* Castear cualquier entero sin signo a flotante de 32-bit

```cpp
builder.CreateUIToFP(value, builder.getFloatTy());
```

* Castear cualquier entero con signo a flotante de 64-bit

```cpp
builder.CreateSIToFP(value, builder.getDoubleTy());
```

* Castear cualquier entero sin signo a flotante de 64-bit

```cpp
builder.CreateUIToFP(value, builder.getDoubleTy());
```

### Castear de flotante a flotante

* Castear cualquier flotante a flotante de 32-bit

```cpp
builder.CreateFPCast(value, builder.getFloatTy());
```

* Castear cualquier flotante a flotante de 64-bit

```cpp
builder.CreateFPCast(value, builder.getDoubleTy());
```
