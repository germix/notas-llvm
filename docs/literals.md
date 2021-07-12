# Literales

## Enteros

### Obtener un entero de 1-bit (booleano)

```cpp
llvm::ConstantInt* integerConstant = llvm::ConstantInt::get(builder.getInt1Ty(), value, isSigned);
```

### Obtener un entero de 8-bit

```cpp
llvm::ConstantInt* integerConstant = llvm::ConstantInt::get(builder.getInt8Ty(), value, isSigned);
```

### Obtener un entero de 16-bit

```cpp
llvm::ConstantInt* integerConstant = llvm::ConstantInt::get(builder.getInt16Ty(), value, isSigned);
```

### Obtener un entero de 32-bit

```cpp
llvm::ConstantInt* integerConstant = llvm::ConstantInt::get(builder.getInt32Ty(), value, isSigned);
```

### Obtener un entero de 64-bit

```cpp
llvm::ConstantInt* integerConstant = llvm::ConstantInt::get(builder.getInt64Ty(), value, isSigned);
```

## Flotantes

### Obtener un flotante de 32-bit

```cpp
llvm::ConstantFP* floatingConstant = llvm::ConstantFP::get(builder.getFloatTy(), value);
```

### Obtener un flotante de 64-bit

```cpp
llvm::ConstantFP* floatingConstant = llvm::ConstantFP::get(builder.getDoubleTy(), value);
```

## Arrays

### Array de enteros de 8-bit

```cpp
std::vector<uint8_t> data;
llvm::Constant* arrayConstant = llvm::ConstantDataArray::get(context, data);
```

### Array de enteros de 16-bit

```cpp
std::vector<uint16_t> data;
llvm::Constant* arrayConstant = llvm::ConstantDataArray::get(context, data);
```

### Array de enteros de 32-bit

```cpp
std::vector<uint32_t> data;
llvm::Constant* arrayConstant = llvm::ConstantDataArray::get(context, data);
```

### Array de enteros de 64-bit

```cpp
std::vector<uint64_t> data;
llvm::Constant* arrayConstant = llvm::ConstantDataArray::get(context, data);
```

### Array de flotantes de 32-bit

```cpp
std::vector<float> data;
llvm::Constant* arrayConstant = llvm::ConstantDataArray::get(context, data);
```

### Array de flotantes de 64-bit

```cpp
std::vector<double> data;
llvm::Constant* arrayConstant = llvm::ConstantDataArray::get(context, data);
```

### Array de caracteres

```cpp
bool addNull = true;            // ¿Agregar terminador nulo ( '\0' ) ?
const char* value = "test";
//const std::string value = "test";

llvm::Constant* stringConstant = llvm::ConstantDataArray::getString(context, value, addNull);
```

----------------------------------------------------------------------------------------------------

## Alternativas para enteros

* Obtener un entero de 1-bit (booleano)

```cpp
builder.getInt1(value);
```

* Obtener un entero de 1-bit (booleano true)

```cpp
builder.getTrue();
```

* Obtener un entero de 1-bit (booleano false)

```cpp
builder.getFalse();
```

* Obtener un entero de 8-bit

```cpp
builder.getInt8(value);
```

* Obtener un entero de 16-bit

```cpp
builder.getInt16(value);
```

* Obtener un entero de 32-bit

```cpp
builder.getInt32(value);
```

* Obtener un entero de 64-bit

```cpp
builder.getInt64(value);
```
