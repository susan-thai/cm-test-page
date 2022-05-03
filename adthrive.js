console.log('%cSLogs', 'background-color:hotpink;padding:2px;color:white;font-size:1.2em)', 'HELLO ADTHRIVE.JS - 6');


adthrive.branch = adthrive.branch || 'master fbb51857';
adthrive.bucket = adthrive.bucket || 'debug';
adthrive.gdpr = 'false'
adthrive.deployment = adthrive.deployment || 'X';

var adthrive = (function () {
	'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	var Reflect$1;
	(function (Reflect) {
	    (function (factory) {
	        var root = typeof commonjsGlobal === "object" ? commonjsGlobal :
	            typeof self === "object" ? self :
	                typeof this === "object" ? this :
	                    Function("return this;")();
	        var exporter = makeExporter(Reflect);
	        if (typeof root.Reflect === "undefined") {
	            root.Reflect = Reflect;
	        }
	        else {
	            exporter = makeExporter(root.Reflect, exporter);
	        }
	        factory(exporter);
	        function makeExporter(target, previous) {
	            return function (key, value) {
	                if (typeof target[key] !== "function") {
	                    Object.defineProperty(target, key, { configurable: true, writable: true, value: value });
	                }
	                if (previous)
	                    previous(key, value);
	            };
	        }
	    })(function (exporter) {
	        var hasOwn = Object.prototype.hasOwnProperty;
	        var supportsSymbol = typeof Symbol === "function";
	        var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
	        var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
	        var supportsCreate = typeof Object.create === "function";
	        var supportsProto = { __proto__: [] } instanceof Array;
	        var downLevel = !supportsCreate && !supportsProto;
	        var HashMap = {
	            create: supportsCreate
	                ? function () { return MakeDictionary(Object.create(null)); }
	                : supportsProto
	                    ? function () { return MakeDictionary({ __proto__: null }); }
	                    : function () { return MakeDictionary({}); },
	            has: downLevel
	                ? function (map, key) { return hasOwn.call(map, key); }
	                : function (map, key) { return key in map; },
	            get: downLevel
	                ? function (map, key) { return hasOwn.call(map, key) ? map[key] : undefined; }
	                : function (map, key) { return map[key]; },
	        };
	        var functionPrototype = Object.getPrototypeOf(Function);
	        var usePolyfill = typeof process === "object" && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
	        var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
	        var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
	        var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
	        var Metadata = new _WeakMap();
	        function decorate(decorators, target, propertyKey, attributes) {
	            if (!IsUndefined(propertyKey)) {
	                if (!IsArray(decorators))
	                    throw new TypeError();
	                if (!IsObject(target))
	                    throw new TypeError();
	                if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
	                    throw new TypeError();
	                if (IsNull(attributes))
	                    attributes = undefined;
	                propertyKey = ToPropertyKey(propertyKey);
	                return DecorateProperty(decorators, target, propertyKey, attributes);
	            }
	            else {
	                if (!IsArray(decorators))
	                    throw new TypeError();
	                if (!IsConstructor(target))
	                    throw new TypeError();
	                return DecorateConstructor(decorators, target);
	            }
	        }
	        exporter("decorate", decorate);
	        function metadata(metadataKey, metadataValue) {
	            function decorator(target, propertyKey) {
	                if (!IsObject(target))
	                    throw new TypeError();
	                if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
	                    throw new TypeError();
	                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
	            }
	            return decorator;
	        }
	        exporter("metadata", metadata);
	        function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
	            if (!IsObject(target))
	                throw new TypeError();
	            if (!IsUndefined(propertyKey))
	                propertyKey = ToPropertyKey(propertyKey);
	            return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
	        }
	        exporter("defineMetadata", defineMetadata);
	        function hasMetadata(metadataKey, target, propertyKey) {
	            if (!IsObject(target))
	                throw new TypeError();
	            if (!IsUndefined(propertyKey))
	                propertyKey = ToPropertyKey(propertyKey);
	            return OrdinaryHasMetadata(metadataKey, target, propertyKey);
	        }
	        exporter("hasMetadata", hasMetadata);
	        function hasOwnMetadata(metadataKey, target, propertyKey) {
	            if (!IsObject(target))
	                throw new TypeError();
	            if (!IsUndefined(propertyKey))
	                propertyKey = ToPropertyKey(propertyKey);
	            return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
	        }
	        exporter("hasOwnMetadata", hasOwnMetadata);
	        function getMetadata(metadataKey, target, propertyKey) {
	            if (!IsObject(target))
	                throw new TypeError();
	            if (!IsUndefined(propertyKey))
	                propertyKey = ToPropertyKey(propertyKey);
	            return OrdinaryGetMetadata(metadataKey, target, propertyKey);
	        }
	        exporter("getMetadata", getMetadata);
	        function getOwnMetadata(metadataKey, target, propertyKey) {
	            if (!IsObject(target))
	                throw new TypeError();
	            if (!IsUndefined(propertyKey))
	                propertyKey = ToPropertyKey(propertyKey);
	            return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
	        }
	        exporter("getOwnMetadata", getOwnMetadata);
	        function getMetadataKeys(target, propertyKey) {
	            if (!IsObject(target))
	                throw new TypeError();
	            if (!IsUndefined(propertyKey))
	                propertyKey = ToPropertyKey(propertyKey);
	            return OrdinaryMetadataKeys(target, propertyKey);
	        }
	        exporter("getMetadataKeys", getMetadataKeys);
	        function getOwnMetadataKeys(target, propertyKey) {
	            if (!IsObject(target))
	                throw new TypeError();
	            if (!IsUndefined(propertyKey))
	                propertyKey = ToPropertyKey(propertyKey);
	            return OrdinaryOwnMetadataKeys(target, propertyKey);
	        }
	        exporter("getOwnMetadataKeys", getOwnMetadataKeys);
	        function deleteMetadata(metadataKey, target, propertyKey) {
	            if (!IsObject(target))
	                throw new TypeError();
	            if (!IsUndefined(propertyKey))
	                propertyKey = ToPropertyKey(propertyKey);
	            var metadataMap = GetOrCreateMetadataMap(target, propertyKey,  false);
	            if (IsUndefined(metadataMap))
	                return false;
	            if (!metadataMap.delete(metadataKey))
	                return false;
	            if (metadataMap.size > 0)
	                return true;
	            var targetMetadata = Metadata.get(target);
	            targetMetadata.delete(propertyKey);
	            if (targetMetadata.size > 0)
	                return true;
	            Metadata.delete(target);
	            return true;
	        }
	        exporter("deleteMetadata", deleteMetadata);
	        function DecorateConstructor(decorators, target) {
	            for (var i = decorators.length - 1; i >= 0; --i) {
	                var decorator = decorators[i];
	                var decorated = decorator(target);
	                if (!IsUndefined(decorated) && !IsNull(decorated)) {
	                    if (!IsConstructor(decorated))
	                        throw new TypeError();
	                    target = decorated;
	                }
	            }
	            return target;
	        }
	        function DecorateProperty(decorators, target, propertyKey, descriptor) {
	            for (var i = decorators.length - 1; i >= 0; --i) {
	                var decorator = decorators[i];
	                var decorated = decorator(target, propertyKey, descriptor);
	                if (!IsUndefined(decorated) && !IsNull(decorated)) {
	                    if (!IsObject(decorated))
	                        throw new TypeError();
	                    descriptor = decorated;
	                }
	            }
	            return descriptor;
	        }
	        function GetOrCreateMetadataMap(O, P, Create) {
	            var targetMetadata = Metadata.get(O);
	            if (IsUndefined(targetMetadata)) {
	                if (!Create)
	                    return undefined;
	                targetMetadata = new _Map();
	                Metadata.set(O, targetMetadata);
	            }
	            var metadataMap = targetMetadata.get(P);
	            if (IsUndefined(metadataMap)) {
	                if (!Create)
	                    return undefined;
	                metadataMap = new _Map();
	                targetMetadata.set(P, metadataMap);
	            }
	            return metadataMap;
	        }
	        function OrdinaryHasMetadata(MetadataKey, O, P) {
	            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
	            if (hasOwn)
	                return true;
	            var parent = OrdinaryGetPrototypeOf(O);
	            if (!IsNull(parent))
	                return OrdinaryHasMetadata(MetadataKey, parent, P);
	            return false;
	        }
	        function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
	            var metadataMap = GetOrCreateMetadataMap(O, P,  false);
	            if (IsUndefined(metadataMap))
	                return false;
	            return ToBoolean(metadataMap.has(MetadataKey));
	        }
	        function OrdinaryGetMetadata(MetadataKey, O, P) {
	            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
	            if (hasOwn)
	                return OrdinaryGetOwnMetadata(MetadataKey, O, P);
	            var parent = OrdinaryGetPrototypeOf(O);
	            if (!IsNull(parent))
	                return OrdinaryGetMetadata(MetadataKey, parent, P);
	            return undefined;
	        }
	        function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
	            var metadataMap = GetOrCreateMetadataMap(O, P,  false);
	            if (IsUndefined(metadataMap))
	                return undefined;
	            return metadataMap.get(MetadataKey);
	        }
	        function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
	            var metadataMap = GetOrCreateMetadataMap(O, P,  true);
	            metadataMap.set(MetadataKey, MetadataValue);
	        }
	        function OrdinaryMetadataKeys(O, P) {
	            var ownKeys = OrdinaryOwnMetadataKeys(O, P);
	            var parent = OrdinaryGetPrototypeOf(O);
	            if (parent === null)
	                return ownKeys;
	            var parentKeys = OrdinaryMetadataKeys(parent, P);
	            if (parentKeys.length <= 0)
	                return ownKeys;
	            if (ownKeys.length <= 0)
	                return parentKeys;
	            var set = new _Set();
	            var keys = [];
	            for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
	                var key = ownKeys_1[_i];
	                var hasKey = set.has(key);
	                if (!hasKey) {
	                    set.add(key);
	                    keys.push(key);
	                }
	            }
	            for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
	                var key = parentKeys_1[_a];
	                var hasKey = set.has(key);
	                if (!hasKey) {
	                    set.add(key);
	                    keys.push(key);
	                }
	            }
	            return keys;
	        }
	        function OrdinaryOwnMetadataKeys(O, P) {
	            var keys = [];
	            var metadataMap = GetOrCreateMetadataMap(O, P,  false);
	            if (IsUndefined(metadataMap))
	                return keys;
	            var keysObj = metadataMap.keys();
	            var iterator = GetIterator(keysObj);
	            var k = 0;
	            while (true) {
	                var next = IteratorStep(iterator);
	                if (!next) {
	                    keys.length = k;
	                    return keys;
	                }
	                var nextValue = IteratorValue(next);
	                try {
	                    keys[k] = nextValue;
	                }
	                catch (e) {
	                    try {
	                        IteratorClose(iterator);
	                    }
	                    finally {
	                        throw e;
	                    }
	                }
	                k++;
	            }
	        }
	        function Type(x) {
	            if (x === null)
	                return 1 ;
	            switch (typeof x) {
	                case "undefined": return 0 ;
	                case "boolean": return 2 ;
	                case "string": return 3 ;
	                case "symbol": return 4 ;
	                case "number": return 5 ;
	                case "object": return x === null ? 1  : 6 ;
	                default: return 6 ;
	            }
	        }
	        function IsUndefined(x) {
	            return x === undefined;
	        }
	        function IsNull(x) {
	            return x === null;
	        }
	        function IsSymbol(x) {
	            return typeof x === "symbol";
	        }
	        function IsObject(x) {
	            return typeof x === "object" ? x !== null : typeof x === "function";
	        }
	        function ToPrimitive(input, PreferredType) {
	            switch (Type(input)) {
	                case 0 : return input;
	                case 1 : return input;
	                case 2 : return input;
	                case 3 : return input;
	                case 4 : return input;
	                case 5 : return input;
	            }
	            var hint = PreferredType === 3  ? "string" : PreferredType === 5  ? "number" : "default";
	            var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
	            if (exoticToPrim !== undefined) {
	                var result = exoticToPrim.call(input, hint);
	                if (IsObject(result))
	                    throw new TypeError();
	                return result;
	            }
	            return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
	        }
	        function OrdinaryToPrimitive(O, hint) {
	            if (hint === "string") {
	                var toString_1 = O.toString;
	                if (IsCallable(toString_1)) {
	                    var result = toString_1.call(O);
	                    if (!IsObject(result))
	                        return result;
	                }
	                var valueOf = O.valueOf;
	                if (IsCallable(valueOf)) {
	                    var result = valueOf.call(O);
	                    if (!IsObject(result))
	                        return result;
	                }
	            }
	            else {
	                var valueOf = O.valueOf;
	                if (IsCallable(valueOf)) {
	                    var result = valueOf.call(O);
	                    if (!IsObject(result))
	                        return result;
	                }
	                var toString_2 = O.toString;
	                if (IsCallable(toString_2)) {
	                    var result = toString_2.call(O);
	                    if (!IsObject(result))
	                        return result;
	                }
	            }
	            throw new TypeError();
	        }
	        function ToBoolean(argument) {
	            return !!argument;
	        }
	        function ToString(argument) {
	            return "" + argument;
	        }
	        function ToPropertyKey(argument) {
	            var key = ToPrimitive(argument, 3 );
	            if (IsSymbol(key))
	                return key;
	            return ToString(key);
	        }
	        function IsArray(argument) {
	            return Array.isArray
	                ? Array.isArray(argument)
	                : argument instanceof Object
	                    ? argument instanceof Array
	                    : Object.prototype.toString.call(argument) === "[object Array]";
	        }
	        function IsCallable(argument) {
	            return typeof argument === "function";
	        }
	        function IsConstructor(argument) {
	            return typeof argument === "function";
	        }
	        function IsPropertyKey(argument) {
	            switch (Type(argument)) {
	                case 3 : return true;
	                case 4 : return true;
	                default: return false;
	            }
	        }
	        function GetMethod(V, P) {
	            var func = V[P];
	            if (func === undefined || func === null)
	                return undefined;
	            if (!IsCallable(func))
	                throw new TypeError();
	            return func;
	        }
	        function GetIterator(obj) {
	            var method = GetMethod(obj, iteratorSymbol);
	            if (!IsCallable(method))
	                throw new TypeError();
	            var iterator = method.call(obj);
	            if (!IsObject(iterator))
	                throw new TypeError();
	            return iterator;
	        }
	        function IteratorValue(iterResult) {
	            return iterResult.value;
	        }
	        function IteratorStep(iterator) {
	            var result = iterator.next();
	            return result.done ? false : result;
	        }
	        function IteratorClose(iterator) {
	            var f = iterator["return"];
	            if (f)
	                f.call(iterator);
	        }
	        function OrdinaryGetPrototypeOf(O) {
	            var proto = Object.getPrototypeOf(O);
	            if (typeof O !== "function" || O === functionPrototype)
	                return proto;
	            if (proto !== functionPrototype)
	                return proto;
	            var prototype = O.prototype;
	            var prototypeProto = prototype && Object.getPrototypeOf(prototype);
	            if (prototypeProto == null || prototypeProto === Object.prototype)
	                return proto;
	            var constructor = prototypeProto.constructor;
	            if (typeof constructor !== "function")
	                return proto;
	            if (constructor === O)
	                return proto;
	            return constructor;
	        }
	        function CreateMapPolyfill() {
	            var cacheSentinel = {};
	            var arraySentinel = [];
	            var MapIterator =  (function () {
	                function MapIterator(keys, values, selector) {
	                    this._index = 0;
	                    this._keys = keys;
	                    this._values = values;
	                    this._selector = selector;
	                }
	                MapIterator.prototype["@@iterator"] = function () { return this; };
	                MapIterator.prototype[iteratorSymbol] = function () { return this; };
	                MapIterator.prototype.next = function () {
	                    var index = this._index;
	                    if (index >= 0 && index < this._keys.length) {
	                        var result = this._selector(this._keys[index], this._values[index]);
	                        if (index + 1 >= this._keys.length) {
	                            this._index = -1;
	                            this._keys = arraySentinel;
	                            this._values = arraySentinel;
	                        }
	                        else {
	                            this._index++;
	                        }
	                        return { value: result, done: false };
	                    }
	                    return { value: undefined, done: true };
	                };
	                MapIterator.prototype.throw = function (error) {
	                    if (this._index >= 0) {
	                        this._index = -1;
	                        this._keys = arraySentinel;
	                        this._values = arraySentinel;
	                    }
	                    throw error;
	                };
	                MapIterator.prototype.return = function (value) {
	                    if (this._index >= 0) {
	                        this._index = -1;
	                        this._keys = arraySentinel;
	                        this._values = arraySentinel;
	                    }
	                    return { value: value, done: true };
	                };
	                return MapIterator;
	            }());
	            return  (function () {
	                function Map() {
	                    this._keys = [];
	                    this._values = [];
	                    this._cacheKey = cacheSentinel;
	                    this._cacheIndex = -2;
	                }
	                Object.defineProperty(Map.prototype, "size", {
	                    get: function () { return this._keys.length; },
	                    enumerable: true,
	                    configurable: true
	                });
	                Map.prototype.has = function (key) { return this._find(key,  false) >= 0; };
	                Map.prototype.get = function (key) {
	                    var index = this._find(key,  false);
	                    return index >= 0 ? this._values[index] : undefined;
	                };
	                Map.prototype.set = function (key, value) {
	                    var index = this._find(key,  true);
	                    this._values[index] = value;
	                    return this;
	                };
	                Map.prototype.delete = function (key) {
	                    var index = this._find(key,  false);
	                    if (index >= 0) {
	                        var size = this._keys.length;
	                        for (var i = index + 1; i < size; i++) {
	                            this._keys[i - 1] = this._keys[i];
	                            this._values[i - 1] = this._values[i];
	                        }
	                        this._keys.length--;
	                        this._values.length--;
	                        if (key === this._cacheKey) {
	                            this._cacheKey = cacheSentinel;
	                            this._cacheIndex = -2;
	                        }
	                        return true;
	                    }
	                    return false;
	                };
	                Map.prototype.clear = function () {
	                    this._keys.length = 0;
	                    this._values.length = 0;
	                    this._cacheKey = cacheSentinel;
	                    this._cacheIndex = -2;
	                };
	                Map.prototype.keys = function () { return new MapIterator(this._keys, this._values, getKey); };
	                Map.prototype.values = function () { return new MapIterator(this._keys, this._values, getValue); };
	                Map.prototype.entries = function () { return new MapIterator(this._keys, this._values, getEntry); };
	                Map.prototype["@@iterator"] = function () { return this.entries(); };
	                Map.prototype[iteratorSymbol] = function () { return this.entries(); };
	                Map.prototype._find = function (key, insert) {
	                    if (this._cacheKey !== key) {
	                        this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
	                    }
	                    if (this._cacheIndex < 0 && insert) {
	                        this._cacheIndex = this._keys.length;
	                        this._keys.push(key);
	                        this._values.push(undefined);
	                    }
	                    return this._cacheIndex;
	                };
	                return Map;
	            }());
	            function getKey(key, _) {
	                return key;
	            }
	            function getValue(_, value) {
	                return value;
	            }
	            function getEntry(key, value) {
	                return [key, value];
	            }
	        }
	        function CreateSetPolyfill() {
	            return  (function () {
	                function Set() {
	                    this._map = new _Map();
	                }
	                Object.defineProperty(Set.prototype, "size", {
	                    get: function () { return this._map.size; },
	                    enumerable: true,
	                    configurable: true
	                });
	                Set.prototype.has = function (value) { return this._map.has(value); };
	                Set.prototype.add = function (value) { return this._map.set(value, value), this; };
	                Set.prototype.delete = function (value) { return this._map.delete(value); };
	                Set.prototype.clear = function () { this._map.clear(); };
	                Set.prototype.keys = function () { return this._map.keys(); };
	                Set.prototype.values = function () { return this._map.values(); };
	                Set.prototype.entries = function () { return this._map.entries(); };
	                Set.prototype["@@iterator"] = function () { return this.keys(); };
	                Set.prototype[iteratorSymbol] = function () { return this.keys(); };
	                return Set;
	            }());
	        }
	        function CreateWeakMapPolyfill() {
	            var UUID_SIZE = 16;
	            var keys = HashMap.create();
	            var rootKey = CreateUniqueKey();
	            return  (function () {
	                function WeakMap() {
	                    this._key = CreateUniqueKey();
	                }
	                WeakMap.prototype.has = function (target) {
	                    var table = GetOrCreateWeakMapTable(target,  false);
	                    return table !== undefined ? HashMap.has(table, this._key) : false;
	                };
	                WeakMap.prototype.get = function (target) {
	                    var table = GetOrCreateWeakMapTable(target,  false);
	                    return table !== undefined ? HashMap.get(table, this._key) : undefined;
	                };
	                WeakMap.prototype.set = function (target, value) {
	                    var table = GetOrCreateWeakMapTable(target,  true);
	                    table[this._key] = value;
	                    return this;
	                };
	                WeakMap.prototype.delete = function (target) {
	                    var table = GetOrCreateWeakMapTable(target,  false);
	                    return table !== undefined ? delete table[this._key] : false;
	                };
	                WeakMap.prototype.clear = function () {
	                    this._key = CreateUniqueKey();
	                };
	                return WeakMap;
	            }());
	            function CreateUniqueKey() {
	                var key;
	                do
	                    key = "@@WeakMap@@" + CreateUUID();
	                while (HashMap.has(keys, key));
	                keys[key] = true;
	                return key;
	            }
	            function GetOrCreateWeakMapTable(target, create) {
	                if (!hasOwn.call(target, rootKey)) {
	                    if (!create)
	                        return undefined;
	                    Object.defineProperty(target, rootKey, { value: HashMap.create() });
	                }
	                return target[rootKey];
	            }
	            function FillRandomBytes(buffer, size) {
	                for (var i = 0; i < size; ++i)
	                    buffer[i] = Math.random() * 0xff | 0;
	                return buffer;
	            }
	            function GenRandomBytes(size) {
	                if (typeof Uint8Array === "function") {
	                    if (typeof crypto !== "undefined")
	                        return crypto.getRandomValues(new Uint8Array(size));
	                    if (typeof msCrypto !== "undefined")
	                        return msCrypto.getRandomValues(new Uint8Array(size));
	                    return FillRandomBytes(new Uint8Array(size), size);
	                }
	                return FillRandomBytes(new Array(size), size);
	            }
	            function CreateUUID() {
	                var data = GenRandomBytes(UUID_SIZE);
	                data[6] = data[6] & 0x4f | 0x40;
	                data[8] = data[8] & 0xbf | 0x80;
	                var result = "";
	                for (var offset = 0; offset < UUID_SIZE; ++offset) {
	                    var byte = data[offset];
	                    if (offset === 4 || offset === 6 || offset === 8)
	                        result += "-";
	                    if (byte < 16)
	                        result += "0";
	                    result += byte.toString(16).toLowerCase();
	                }
	                return result;
	            }
	        }
	        function MakeDictionary(obj) {
	            obj.__ = undefined;
	            delete obj.__;
	            return obj;
	        }
	    });
	})(Reflect$1 || (Reflect$1 = {}));

	var Lifecycle;
	(function (Lifecycle) {
	    Lifecycle[Lifecycle["Transient"] = 0] = "Transient";
	    Lifecycle[Lifecycle["Singleton"] = 1] = "Singleton";
	    Lifecycle[Lifecycle["ResolutionScoped"] = 2] = "ResolutionScoped";
	    Lifecycle[Lifecycle["ContainerScoped"] = 3] = "ContainerScoped";
	})(Lifecycle || (Lifecycle = {}));
	var Lifecycle$1 = Lifecycle;

	var extendStatics = function(d, b) {
	    extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return extendStatics(d, b);
	};
	function __extends(d, b) {
	    extendStatics(d, b);
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	}
	function __values(o) {
	    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
	    if (m) return m.call(o);
	    if (o && typeof o.length === "number") return {
	        next: function () {
	            if (o && i >= o.length) o = void 0;
	            return { value: o && o[i++], done: !o };
	        }
	    };
	    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
	}
	function __read(o, n) {
	    var m = typeof Symbol === "function" && o[Symbol.iterator];
	    if (!m) return o;
	    var i = m.call(o), r, ar = [], e;
	    try {
	        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
	    }
	    catch (error) { e = { error: error }; }
	    finally {
	        try {
	            if (r && !r.done && (m = i["return"])) m.call(i);
	        }
	        finally { if (e) throw e.error; }
	    }
	    return ar;
	}
	function __spread() {
	    for (var ar = [], i = 0; i < arguments.length; i++)
	        ar = ar.concat(__read(arguments[i]));
	    return ar;
	}

	var INJECTION_TOKEN_METADATA_KEY = "injectionTokens";
	function getParamInfo(target) {
	    var params = Reflect.getMetadata("design:paramtypes", target) || [];
	    var injectionTokens = Reflect.getOwnMetadata(INJECTION_TOKEN_METADATA_KEY, target) || {};
	    Object.keys(injectionTokens).forEach(function (key) {
	        params[+key] = injectionTokens[key];
	    });
	    return params;
	}
	function defineInjectionTokenMetadata(data, transform) {
	    return function (target, _propertyKey, parameterIndex) {
	        var descriptors = Reflect.getOwnMetadata(INJECTION_TOKEN_METADATA_KEY, target) || {};
	        descriptors[parameterIndex] = transform
	            ? {
	                token: data,
	                transform: transform.transformToken,
	                transformArgs: transform.args || []
	            }
	            : data;
	        Reflect.defineMetadata(INJECTION_TOKEN_METADATA_KEY, descriptors, target);
	    };
	}

	function isClassProvider(provider) {
	    return !!provider.useClass;
	}

	function isFactoryProvider(provider) {
	    return !!provider.useFactory;
	}

	var DelayedConstructor = (function () {
	    function DelayedConstructor(wrap) {
	        this.wrap = wrap;
	        this.reflectMethods = [
	            "get",
	            "getPrototypeOf",
	            "setPrototypeOf",
	            "getOwnPropertyDescriptor",
	            "defineProperty",
	            "has",
	            "set",
	            "deleteProperty",
	            "apply",
	            "construct"
	        ];
	    }
	    DelayedConstructor.prototype.createProxy = function (createObject) {
	        var _this = this;
	        var target = {};
	        var init = false;
	        var value;
	        var delayedObject = function () {
	            if (!init) {
	                value = createObject(_this.wrap());
	                init = true;
	            }
	            return value;
	        };
	        return new Proxy(target, this.createHandler(delayedObject));
	    };
	    DelayedConstructor.prototype.createHandler = function (delayedObject) {
	        var handler = {};
	        var install = function (name) {
	            handler[name] = function () {
	                var args = [];
	                for (var _i = 0; _i < arguments.length; _i++) {
	                    args[_i] = arguments[_i];
	                }
	                args[0] = delayedObject();
	                var method = Reflect[name];
	                return method.apply(void 0, __spread(args));
	            };
	        };
	        this.reflectMethods.forEach(install);
	        return handler;
	    };
	    return DelayedConstructor;
	}());

	function isNormalToken(token) {
	    return typeof token === "string" || typeof token === "symbol";
	}
	function isTokenDescriptor(descriptor) {
	    return (typeof descriptor === "object" &&
	        "token" in descriptor &&
	        "multiple" in descriptor);
	}
	function isTransformDescriptor(descriptor) {
	    return (typeof descriptor === "object" &&
	        "token" in descriptor &&
	        "transform" in descriptor);
	}
	function isConstructorToken(token) {
	    return typeof token === "function" || token instanceof DelayedConstructor;
	}

	function isTokenProvider(provider) {
	    return !!provider.useToken;
	}

	function isValueProvider(provider) {
	    return provider.useValue != undefined;
	}

	function isProvider(provider) {
	    return (isClassProvider(provider) ||
	        isValueProvider(provider) ||
	        isTokenProvider(provider) ||
	        isFactoryProvider(provider));
	}

	var RegistryBase = (function () {
	    function RegistryBase() {
	        this._registryMap = new Map();
	    }
	    RegistryBase.prototype.entries = function () {
	        return this._registryMap.entries();
	    };
	    RegistryBase.prototype.getAll = function (key) {
	        this.ensure(key);
	        return this._registryMap.get(key);
	    };
	    RegistryBase.prototype.get = function (key) {
	        this.ensure(key);
	        var value = this._registryMap.get(key);
	        return value[value.length - 1] || null;
	    };
	    RegistryBase.prototype.set = function (key, value) {
	        this.ensure(key);
	        this._registryMap.get(key).push(value);
	    };
	    RegistryBase.prototype.setAll = function (key, value) {
	        this._registryMap.set(key, value);
	    };
	    RegistryBase.prototype.has = function (key) {
	        this.ensure(key);
	        return this._registryMap.get(key).length > 0;
	    };
	    RegistryBase.prototype.clear = function () {
	        this._registryMap.clear();
	    };
	    RegistryBase.prototype.ensure = function (key) {
	        if (!this._registryMap.has(key)) {
	            this._registryMap.set(key, []);
	        }
	    };
	    return RegistryBase;
	}());

	var Registry = (function (_super) {
	    __extends(Registry, _super);
	    function Registry() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    return Registry;
	}(RegistryBase));

	var ResolutionContext = (function () {
	    function ResolutionContext() {
	        this.scopedResolutions = new Map();
	    }
	    return ResolutionContext;
	}());

	function formatDependency(params, idx) {
	    if (params === null) {
	        return "at position #" + idx;
	    }
	    var argName = params.split(",")[idx].trim();
	    return "\"" + argName + "\" at position #" + idx;
	}
	function composeErrorMessage(msg, e, indent) {
	    if (indent === void 0) { indent = "    "; }
	    return __spread([msg], e.message.split("\n").map(function (l) { return indent + l; })).join("\n");
	}
	function formatErrorCtor(ctor, paramIdx, error) {
	    var _a = __read(ctor.toString().match(/constructor\(([\w, ]+)\)/) || [], 2), _b = _a[1], params = _b === void 0 ? null : _b;
	    var dep = formatDependency(params, paramIdx);
	    return composeErrorMessage("Cannot inject the dependency " + dep + " of \"" + ctor.name + "\" constructor. Reason:", error);
	}

	var PreResolutionInterceptors = (function (_super) {
	    __extends(PreResolutionInterceptors, _super);
	    function PreResolutionInterceptors() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    return PreResolutionInterceptors;
	}(RegistryBase));
	var PostResolutionInterceptors = (function (_super) {
	    __extends(PostResolutionInterceptors, _super);
	    function PostResolutionInterceptors() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    return PostResolutionInterceptors;
	}(RegistryBase));
	var Interceptors = (function () {
	    function Interceptors() {
	        this.preResolution = new PreResolutionInterceptors();
	        this.postResolution = new PostResolutionInterceptors();
	    }
	    return Interceptors;
	}());

	var typeInfo = new Map();
	var InternalDependencyContainer = (function () {
	    function InternalDependencyContainer(parent) {
	        this.parent = parent;
	        this._registry = new Registry();
	        this.interceptors = new Interceptors();
	    }
	    InternalDependencyContainer.prototype.register = function (token, providerOrConstructor, options) {
	        if (options === void 0) { options = { lifecycle: Lifecycle$1.Transient }; }
	        var provider;
	        if (!isProvider(providerOrConstructor)) {
	            provider = { useClass: providerOrConstructor };
	        }
	        else {
	            provider = providerOrConstructor;
	        }
	        if (isTokenProvider(provider)) {
	            var path = [token];
	            var tokenProvider = provider;
	            while (tokenProvider != null) {
	                var currentToken = tokenProvider.useToken;
	                if (path.includes(currentToken)) {
	                    throw new Error("Token registration cycle detected! " + __spread(path, [currentToken]).join(" -> "));
	                }
	                path.push(currentToken);
	                var registration = this._registry.get(currentToken);
	                if (registration && isTokenProvider(registration.provider)) {
	                    tokenProvider = registration.provider;
	                }
	                else {
	                    tokenProvider = null;
	                }
	            }
	        }
	        if (options.lifecycle === Lifecycle$1.Singleton ||
	            options.lifecycle == Lifecycle$1.ContainerScoped ||
	            options.lifecycle == Lifecycle$1.ResolutionScoped) {
	            if (isValueProvider(provider) || isFactoryProvider(provider)) {
	                throw new Error("Cannot use lifecycle \"" + Lifecycle$1[options.lifecycle] + "\" with ValueProviders or FactoryProviders");
	            }
	        }
	        this._registry.set(token, { provider: provider, options: options });
	        return this;
	    };
	    InternalDependencyContainer.prototype.registerType = function (from, to) {
	        if (isNormalToken(to)) {
	            return this.register(from, {
	                useToken: to
	            });
	        }
	        return this.register(from, {
	            useClass: to
	        });
	    };
	    InternalDependencyContainer.prototype.registerInstance = function (token, instance) {
	        return this.register(token, {
	            useValue: instance
	        });
	    };
	    InternalDependencyContainer.prototype.registerSingleton = function (from, to) {
	        if (isNormalToken(from)) {
	            if (isNormalToken(to)) {
	                return this.register(from, {
	                    useToken: to
	                }, { lifecycle: Lifecycle$1.Singleton });
	            }
	            else if (to) {
	                return this.register(from, {
	                    useClass: to
	                }, { lifecycle: Lifecycle$1.Singleton });
	            }
	            throw new Error('Cannot register a type name as a singleton without a "to" token');
	        }
	        var useClass = from;
	        if (to && !isNormalToken(to)) {
	            useClass = to;
	        }
	        return this.register(from, {
	            useClass: useClass
	        }, { lifecycle: Lifecycle$1.Singleton });
	    };
	    InternalDependencyContainer.prototype.resolve = function (token, context) {
	        if (context === void 0) { context = new ResolutionContext(); }
	        var registration = this.getRegistration(token);
	        if (!registration && isNormalToken(token)) {
	            throw new Error("Attempted to resolve unregistered dependency token: \"" + token.toString() + "\"");
	        }
	        this.executePreResolutionInterceptor(token, "Single");
	        if (registration) {
	            var result = this.resolveRegistration(registration, context);
	            this.executePostResolutionInterceptor(token, result, "Single");
	            return result;
	        }
	        if (isConstructorToken(token)) {
	            var result = this.construct(token, context);
	            this.executePostResolutionInterceptor(token, result, "Single");
	            return result;
	        }
	        throw new Error("Attempted to construct an undefined constructor. Could mean a circular dependency problem. Try using `delay` function.");
	    };
	    InternalDependencyContainer.prototype.executePreResolutionInterceptor = function (token, resolutionType) {
	        var e_1, _a;
	        if (this.interceptors.preResolution.has(token)) {
	            var remainingInterceptors = [];
	            try {
	                for (var _b = __values(this.interceptors.preResolution.getAll(token)), _c = _b.next(); !_c.done; _c = _b.next()) {
	                    var interceptor = _c.value;
	                    if (interceptor.options.frequency != "Once") {
	                        remainingInterceptors.push(interceptor);
	                    }
	                    interceptor.callback(token, resolutionType);
	                }
	            }
	            catch (e_1_1) { e_1 = { error: e_1_1 }; }
	            finally {
	                try {
	                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
	                }
	                finally { if (e_1) throw e_1.error; }
	            }
	            this.interceptors.preResolution.setAll(token, remainingInterceptors);
	        }
	    };
	    InternalDependencyContainer.prototype.executePostResolutionInterceptor = function (token, result, resolutionType) {
	        var e_2, _a;
	        if (this.interceptors.postResolution.has(token)) {
	            var remainingInterceptors = [];
	            try {
	                for (var _b = __values(this.interceptors.postResolution.getAll(token)), _c = _b.next(); !_c.done; _c = _b.next()) {
	                    var interceptor = _c.value;
	                    if (interceptor.options.frequency != "Once") {
	                        remainingInterceptors.push(interceptor);
	                    }
	                    interceptor.callback(token, result, resolutionType);
	                }
	            }
	            catch (e_2_1) { e_2 = { error: e_2_1 }; }
	            finally {
	                try {
	                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
	                }
	                finally { if (e_2) throw e_2.error; }
	            }
	            this.interceptors.postResolution.setAll(token, remainingInterceptors);
	        }
	    };
	    InternalDependencyContainer.prototype.resolveRegistration = function (registration, context) {
	        if (registration.options.lifecycle === Lifecycle$1.ResolutionScoped &&
	            context.scopedResolutions.has(registration)) {
	            return context.scopedResolutions.get(registration);
	        }
	        var isSingleton = registration.options.lifecycle === Lifecycle$1.Singleton;
	        var isContainerScoped = registration.options.lifecycle === Lifecycle$1.ContainerScoped;
	        var returnInstance = isSingleton || isContainerScoped;
	        var resolved;
	        if (isValueProvider(registration.provider)) {
	            resolved = registration.provider.useValue;
	        }
	        else if (isTokenProvider(registration.provider)) {
	            resolved = returnInstance
	                ? registration.instance ||
	                    (registration.instance = this.resolve(registration.provider.useToken, context))
	                : this.resolve(registration.provider.useToken, context);
	        }
	        else if (isClassProvider(registration.provider)) {
	            resolved = returnInstance
	                ? registration.instance ||
	                    (registration.instance = this.construct(registration.provider.useClass, context))
	                : this.construct(registration.provider.useClass, context);
	        }
	        else if (isFactoryProvider(registration.provider)) {
	            resolved = registration.provider.useFactory(this);
	        }
	        else {
	            resolved = this.construct(registration.provider, context);
	        }
	        if (registration.options.lifecycle === Lifecycle$1.ResolutionScoped) {
	            context.scopedResolutions.set(registration, resolved);
	        }
	        return resolved;
	    };
	    InternalDependencyContainer.prototype.resolveAll = function (token, context) {
	        var _this = this;
	        if (context === void 0) { context = new ResolutionContext(); }
	        var registrations = this.getAllRegistrations(token);
	        if (!registrations && isNormalToken(token)) {
	            throw new Error("Attempted to resolve unregistered dependency token: \"" + token.toString() + "\"");
	        }
	        this.executePreResolutionInterceptor(token, "All");
	        if (registrations) {
	            var result_1 = registrations.map(function (item) {
	                return _this.resolveRegistration(item, context);
	            });
	            this.executePostResolutionInterceptor(token, result_1, "All");
	            return result_1;
	        }
	        var result = [this.construct(token, context)];
	        this.executePostResolutionInterceptor(token, result, "All");
	        return result;
	    };
	    InternalDependencyContainer.prototype.isRegistered = function (token, recursive) {
	        if (recursive === void 0) { recursive = false; }
	        return (this._registry.has(token) ||
	            (recursive &&
	                (this.parent || false) &&
	                this.parent.isRegistered(token, true)));
	    };
	    InternalDependencyContainer.prototype.reset = function () {
	        this._registry.clear();
	        this.interceptors.preResolution.clear();
	        this.interceptors.postResolution.clear();
	    };
	    InternalDependencyContainer.prototype.clearInstances = function () {
	        var e_3, _a;
	        try {
	            for (var _b = __values(this._registry.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
	                var _d = __read(_c.value, 2), token = _d[0], registrations = _d[1];
	                this._registry.setAll(token, registrations
	                    .filter(function (registration) { return !isValueProvider(registration.provider); })
	                    .map(function (registration) {
	                    registration.instance = undefined;
	                    return registration;
	                }));
	            }
	        }
	        catch (e_3_1) { e_3 = { error: e_3_1 }; }
	        finally {
	            try {
	                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
	            }
	            finally { if (e_3) throw e_3.error; }
	        }
	    };
	    InternalDependencyContainer.prototype.createChildContainer = function () {
	        var e_4, _a;
	        var childContainer = new InternalDependencyContainer(this);
	        try {
	            for (var _b = __values(this._registry.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
	                var _d = __read(_c.value, 2), token = _d[0], registrations = _d[1];
	                if (registrations.some(function (_a) {
	                    var options = _a.options;
	                    return options.lifecycle === Lifecycle$1.ContainerScoped;
	                })) {
	                    childContainer._registry.setAll(token, registrations.map(function (registration) {
	                        if (registration.options.lifecycle === Lifecycle$1.ContainerScoped) {
	                            return {
	                                provider: registration.provider,
	                                options: registration.options
	                            };
	                        }
	                        return registration;
	                    }));
	                }
	            }
	        }
	        catch (e_4_1) { e_4 = { error: e_4_1 }; }
	        finally {
	            try {
	                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
	            }
	            finally { if (e_4) throw e_4.error; }
	        }
	        return childContainer;
	    };
	    InternalDependencyContainer.prototype.beforeResolution = function (token, callback, options) {
	        if (options === void 0) { options = { frequency: "Always" }; }
	        this.interceptors.preResolution.set(token, {
	            callback: callback,
	            options: options
	        });
	    };
	    InternalDependencyContainer.prototype.afterResolution = function (token, callback, options) {
	        if (options === void 0) { options = { frequency: "Always" }; }
	        this.interceptors.postResolution.set(token, {
	            callback: callback,
	            options: options
	        });
	    };
	    InternalDependencyContainer.prototype.getRegistration = function (token) {
	        if (this.isRegistered(token)) {
	            return this._registry.get(token);
	        }
	        if (this.parent) {
	            return this.parent.getRegistration(token);
	        }
	        return null;
	    };
	    InternalDependencyContainer.prototype.getAllRegistrations = function (token) {
	        if (this.isRegistered(token)) {
	            return this._registry.getAll(token);
	        }
	        if (this.parent) {
	            return this.parent.getAllRegistrations(token);
	        }
	        return null;
	    };
	    InternalDependencyContainer.prototype.construct = function (ctor, context) {
	        var _this = this;
	        if (ctor instanceof DelayedConstructor) {
	            return ctor.createProxy(function (target) {
	                return _this.resolve(target, context);
	            });
	        }
	        var paramInfo = typeInfo.get(ctor);
	        if (!paramInfo || paramInfo.length === 0) {
	            if (ctor.length === 0) {
	                return new ctor();
	            }
	            else {
	                throw new Error("TypeInfo not known for \"" + ctor.name + "\"");
	            }
	        }
	        var params = paramInfo.map(this.resolveParams(context, ctor));
	        return new (ctor.bind.apply(ctor, __spread([void 0], params)))();
	    };
	    InternalDependencyContainer.prototype.resolveParams = function (context, ctor) {
	        var _this = this;
	        return function (param, idx) {
	            var _a, _b, _c;
	            try {
	                if (isTokenDescriptor(param)) {
	                    if (isTransformDescriptor(param)) {
	                        return param.multiple
	                            ? (_a = _this.resolve(param.transform)).transform.apply(_a, __spread([_this.resolveAll(param.token)], param.transformArgs)) : (_b = _this.resolve(param.transform)).transform.apply(_b, __spread([_this.resolve(param.token, context)], param.transformArgs));
	                    }
	                    else {
	                        return param.multiple
	                            ? _this.resolveAll(param.token)
	                            : _this.resolve(param.token, context);
	                    }
	                }
	                else if (isTransformDescriptor(param)) {
	                    return (_c = _this.resolve(param.transform, context)).transform.apply(_c, __spread([_this.resolve(param.token, context)], param.transformArgs));
	                }
	                return _this.resolve(param, context);
	            }
	            catch (e) {
	                throw new Error(formatErrorCtor(ctor, idx, e));
	            }
	        };
	    };
	    return InternalDependencyContainer;
	}());
	var instance = new InternalDependencyContainer();

	function inject(token) {
	    return defineInjectionTokenMetadata(token);
	}

	function injectable() {
	    return function (target) {
	        typeInfo.set(target, getParamInfo(target));
	    };
	}

	function singleton() {
	    return function (target) {
	        injectable()(target);
	        instance.registerSingleton(target);
	    };
	}

	if (typeof Reflect === "undefined" || !Reflect.getMetadata) {
	    throw new Error("tsyringe requires a reflect polyfill. Please add 'import \"reflect-metadata\"' to the top of your entry point.");
	}

	function __decorate(decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	}
	function __param(paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	}
	function __metadata(metadataKey, metadataValue) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
	}

	class DebounceByKey {
	    constructor(_wait) {
	        this._wait = _wait;
	        this._timeouts = new Map();
	    }
	    async limit(key) {
	        return new Promise(resolve => {
	            if (this._timeouts.has(key)) {
	                window.clearTimeout(this._timeouts.get(key));
	            }
	            const cancel = window.setTimeout(() => {
	                resolve();
	            }, this._wait);
	            this._timeouts.set(key, cancel);
	        });
	    }
	}

	class Emitter {
	    constructor() {
	        this._listeners = new Set();
	        this._emitted = 0;
	    }
	    on(listener) {
	        this._listeners.add(listener);
	        return () => {
	            this.off(listener);
	        };
	    }
	    off(listener) {
	        this._listeners.delete(listener);
	    }
	    once() {
	        return new Promise(resolve => {
	            const off = this.on((...args) => {
	                off();
	                return resolve(args);
	            });
	        });
	    }
	    async emit(value) {
	        return Promise.all([...this._listeners].map(listener => listener(value))).then(result => {
	            this._emitted++;
	            return result;
	        });
	    }
	    clear() {
	        this._listeners.clear();
	    }
	    get count() {
	        return this._listeners.size;
	    }
	    get emitted() {
	        return this._emitted;
	    }
	}

	let Logger = class Logger {
	    constructor() {
	        this.sending = new Emitter();
	        this.logQueue = [];
	        this.supressedEventLogNames = new Map([['SlotRenderEnded', 'adImpression']]);
	        this.disableLogging = false;
	        this.queueLogs = false;
	    }
	    init(adthrive) {
	        this.logFilter = adthrive.loggerFilters || [];
	        this.siteId = adthrive.siteAds.siteId;
	        this.siteName = adthrive.siteAds.siteName;
	        this.bucket = adthrive.bucket;
	        this.branch = adthrive.branch;
	        this.deployment = adthrive.deployment;
	        this.debug = adthrive.debug;
	    }
	    log(className, methodName, ...args) {
	        // this.call(console.log, className, methodName, ...args);
	    }
	    info(className, methodName, ...args) {
	        // this.call(console.info, className, methodName, ...args);
	    }
	    warn(className, methodName, ...args) {
	        // this.call(console.warn, className, methodName, ...args);
	    }
	    error(className, methodName, ...args) {
	        this.call(console.error, className, methodName, ...args);
	        this.makeRequest('send', 'error', className, methodName, ...args).catch(err => {
	            console.error(err);
	        });
	    }
	    event(className, methodName, ...args) {
	        const shouldLog = this.debug || !this.supressedEventLogNames.has(className) || this.supressedEventLogNames.get(className) !== methodName;
	        if (shouldLog) {
	            this.call(console.log, className, methodName, ...args);
	        }
	        this.makeRequest('send', 'event', className, methodName, ...args).catch(err => {
	            console.error(err);
	        });
	    }
	    fetchEvent(className, methodName, ...args) {
	        this.call(console.log, className, methodName, ...args);
	        this.makeRequest('fetch', 'event', className, methodName, ...args).catch(err => {
	            console.error(err);
	        });
	    }
	    call(logFunction, className, methodName, ...args) {
	        const filter = this.logFilter;
	        if (filter && filter.length && filter.indexOf(className) > -1) {
	            return;
	        }
	        const message = [`%c${className}::${methodName} `];
	        const params = ['color: #999; font-weight: bold;'];
	        if (args.length > 0 && typeof args[0] === 'string') {
	            message.push(args.shift());
	        }
	        params.push(...args);
	        try {
	            Function.prototype.apply.call(logFunction, console, [message.join(''), ...params]);
	        }
	        catch (err) {
	            console.error(err);
	            return;
	        }
	    }
	    buildRequestUrl(type, className, methodName, args) {
	        const baseUrl = `https://logger.adthrive.com/${type}`;
	        const message = [`${className}::${methodName} `];
	        if (args.length > 0 && typeof args[0] === 'string') {
	            message.push(args.shift());
	        }
	        const body = args.map(arg => {
	            if (arg && arg.error) {
	                arg = arg.error;
	            }
	            if (arg instanceof Error) {
	                arg = {
	                    name: arg.name,
	                    message: arg.message,
	                    stack: arg.stack,
	                };
	            }
	            return arg;
	        });
	        if (this.data) {
	            body.push(this.data);
	        }
	        const payload = [
	            `siteId=${encodeURIComponent(this.siteId || '')}`,
	            `siteName=${encodeURIComponent(this.siteName || '')}`,
	            `bucket=${encodeURIComponent(this.bucket || '')}`,
	            `branch=${encodeURIComponent(this.branch || '')}`,
	            `deployment=${encodeURIComponent(this.deployment || '')}`,
	            `message=${encodeURIComponent(message.join('').trim())}`,
	            `pageurl=${encodeURIComponent(window.location.origin + window.location.pathname)}`,
	            `body=${encodeURIComponent(JSON.stringify(body))}`,
	        ];
	        return `${baseUrl}?${payload.join('&')}`;
	    }
	    clearLogQueue(sendLogs) {
	        this.info('Logger', 'gdprEnforcement', 'clearLogQueue', sendLogs);
	        if (sendLogs) {
	            this.logQueue.forEach(log => {
	                if (log.action === 'send') {
	                    this.sendRequest(log.type, log.className, log.methodName, ...log.args).catch(() => { });
	                }
	                if (log.action === 'fetch') {
	                    this.fetchRequest(log.type, log.className, log.methodName, ...log.args).catch(() => { });
	                }
	            });
	        }
	        this.logQueue = [];
	        this.queueLogs = false;
	    }
	    async makeRequest(action, type, className, methodName, ...args) {
	        if (this.disableLogging) {
	            this.info('Logger', 'gdprEnforcement', 'logging disabled');
	            return Promise.resolve(false);
	        }
	        if (this.queueLogs) {
	            const log = { action, type, className, methodName, args };
	            this.logQueue.push(log);
	            this.info('Logger', 'gdprEnforcement', 'log queued');
	            return Promise.resolve(true);
	        }
	        if (action === 'send') {
	            return this.sendRequest(type, className, methodName, ...args);
	        }
	        else {
	            return this.fetchRequest(type, className, methodName, ...args);
	        }
	    }
	    async sendRequest(type, className, methodName, ...args) {
	        this.sending.emit().catch(() => { });
	        const requestUrl = this.buildRequestUrl(type, className, methodName, args);
	        const maxCloudFrontUrlSize = 8192;
	        if (requestUrl.length > maxCloudFrontUrlSize) {
	            return this.sendRequest(type, className, methodName, 'Error query too large').catch(err => {
	                console.error(err);
	            });
	        }
	        return new Promise((resolve, reject) => {
	            const request = new XMLHttpRequest();
	            request.open('get', requestUrl);
	            request.addEventListener('load', () => {
	                if (request.status !== 200) {
	                    return reject(new Error(`Logger send request failed ${request.status}`));
	                }
	                return resolve(request.responseText);
	            });
	            request.addEventListener('error', () => {
	                return reject(new Error('Logger send request failed'));
	            });
	            request.send();
	        });
	    }
	    async fetchRequest(type, className, methodName, ...args) {
	        this.sending.emit().catch(() => { });
	        const requestUrl = this.buildRequestUrl(type, className, methodName, args);
	        return fetch(requestUrl, { method: 'GET', keepalive: true, referrerPolicy: 'no-referrer-when-downgrade' });
	    }
	};
	Logger = __decorate([
	    injectable()
	], Logger);
	const logger = new Logger();

	const adjustCpm = (bidderCpmConfig, bidCpm) => {
	    if (bidderCpmConfig) {
	        return bidderCpmConfig.type === 'flat' ? bidCpm - bidderCpmConfig.value : bidderCpmConfig.value * bidCpm;
	    }
	    return bidCpm;
	};
	const getConfigFromMediaType = (_config, bidderName, bidResponse) => {
	    const instreamBid = _config.video.instreamAdUnits.has(bidResponse === null || bidResponse === void 0 ? void 0 : bidResponse.adUnitCode);
	    const stickyOutstreamBid = bidResponse.adUnitCode && bidResponse.adUnitCode.indexOf('Video_StickyOutstream') > -1;
	    const outstreamBid = !instreamBid && !stickyOutstreamBid && ('vastUrl' in bidResponse || 'vastXml' in bidResponse);
	    const name = instreamBid ? 'instream' : stickyOutstreamBid ? 'stickyOutstream' : outstreamBid ? 'outstream' : 'default';
	    return _config.partners.getBidderConfig(bidderName).cpmMap.get(_config.partners.getBidderConfig(bidderName).cpmMap.has(name) ? name : 'default');
	};
	const adjustCpmFromBidResponse = (_config, bidCpm, bidderName, bidResponse) => {
	    var _a;
	    const dealId = bidResponse === null || bidResponse === void 0 ? void 0 : bidResponse.dealId;
	    const pmpConfig = _config.partners.getBidderConfig(bidderName).cpmMap.get('pmp');
	    if (dealId && pmpConfig) {
	        const dealConfig = (_a = pmpConfig.deals) === null || _a === void 0 ? void 0 : _a.filter(configDeal => configDeal.name === dealId.toString())[0];
	        if (!dealConfig) {
	            return adjustCpm(pmpConfig, bidCpm);
	        }
	        return pmpConfig.type === 'flat' ? adjustCpm(dealConfig, bidCpm) : pmpConfig.value * adjustCpm(dealConfig, bidCpm);
	    }
	    else {
	        const mediatypeConfig = getConfigFromMediaType(_config, bidderName, bidResponse);
	        return adjustCpm(mediatypeConfig, bidCpm);
	    }
	};

	const navUserAgent = navigator.userAgent;
	const navVendor = navigator.vendor;
	const isChrome = (userAgent, vendor) => {
	    return /Chrom/.test(userAgent || navUserAgent) && /Google/.test(vendor || navVendor) && !isEdge(userAgent) && !isOpera(userAgent);
	};
	const isSafari = (userAgent, vendor) => {
	    return /Safari/.test(userAgent || navUserAgent) && /Apple Computer/.test(vendor || navVendor) && !isEdge(userAgent) && !isOpera(userAgent);
	};
	const isEdge = (userAgent) => {
	    return /Edge\/|Edg\//.test(userAgent || navUserAgent);
	};
	const isFirefox = (userAgent) => {
	    return /Firefox/.test(userAgent || navUserAgent);
	};
	const isInternetExplorer = (userAgent) => {
	    return /Trident|MSIE/.test(userAgent || navUserAgent);
	};
	const isOpera = (userAgent) => {
	    return /Opera|OPR/.test(userAgent || navUserAgent);
	};
	const getBrowserName = (userAgent, vendor) => {
	    if (isChrome(userAgent, vendor)) {
	        return 'Chrome';
	    }
	    if (isSafari(userAgent, vendor)) {
	        return 'Safari';
	    }
	    if (isEdge(userAgent)) {
	        return 'Edge';
	    }
	    if (isFirefox(userAgent)) {
	        return 'Firefox';
	    }
	    if (isOpera(userAgent)) {
	        return 'Opera';
	    }
	    if (isInternetExplorer(userAgent)) {
	        return 'IE';
	    }
	    return 'Others';
	};

	const calculateFooterBottom = () => {
	    const footerAd = document.querySelector('.adthrive-footer');
	    let footerBottom = 52;
	    if (footerAd && footerAd.style.display === 'none') {
	        footerBottom = 102;
	    }
	    else if (footerAd) {
	        footerBottom = Math.max(footerAd.getBoundingClientRect().height, footerBottom);
	    }
	    return footerBottom;
	};

	const defaultTo = (value, defaultValue) => {
	    return value == null || value !== value ? defaultValue : value;
	};

	const delay = (duration) => {
	    return new Promise(resolve => {
	        setTimeout(resolve, duration);
	    });
	};

	const deviceByBreakpoint = (tablet, desktop) => {
	    const width = window.innerWidth;
	    if (width >= desktop) {
	        return 'desktop';
	    }
	    if (width >= tablet) {
	        return 'tablet';
	    }
	    return 'phone';
	};

	const domReady = () => {
	    return new Promise(resolve => {
	        if (document.readyState === 'interactive' || document.readyState === 'complete') {
	            return resolve();
	        }
	        document.addEventListener('DOMContentLoaded', () => resolve());
	    });
	};

	const elementBoundingRect = (element) => {
	    const rect = element.getBoundingClientRect();
	    return {
	        top: rect.top + window.pageYOffset,
	        left: rect.left + window.pageXOffset,
	        bottom: rect.bottom + window.pageYOffset,
	        right: rect.right + window.pageXOffset,
	        width: rect.right - rect.left,
	        height: rect.bottom - rect.top,
	    };
	};

	const elementInnerWidth = (element) => {
	    let width = element.clientWidth;
	    if (getComputedStyle) {
	        const cs = getComputedStyle(element, null);
	        width -= parseFloat(cs.paddingLeft || '0') + parseFloat(cs.paddingRight || '0');
	    }
	    return width;
	};

	const elementOffset = (element) => {
	    const height = element.offsetHeight;
	    const width = element.offsetWidth;
	    const boundingClientRectangle = element.getBoundingClientRect();
	    const bodyEl = document.body;
	    const docEl = document.documentElement;
	    const scrollTop = window.pageYOffset || docEl.scrollTop || bodyEl.scrollTop;
	    const scrollLeft = window.pageXOffset || docEl.scrollLeft || bodyEl.scrollLeft;
	    const clientTop = docEl.clientTop || bodyEl.clientTop || 0;
	    const clientLeft = docEl.clientLeft || bodyEl.clientLeft || 0;
	    const top = Math.round(boundingClientRectangle.top + scrollTop - clientTop);
	    const left = Math.round(boundingClientRectangle.left + scrollLeft - clientLeft);
	    return {
	        top,
	        left,
	        bottom: top + height,
	        right: left + width,
	        width,
	        height,
	    };
	};

	const isElementInViewport = (element) => {
	    const bounding = element.getBoundingClientRect();
	    return (bounding.top >= 0 &&
	        bounding.left >= 0 &&
	        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
	        bounding.right <= (window.innerWidth || document.documentElement.clientWidth));
	};
	const isElementOffScreenAboveScrolled = (element) => {
	    return window.pageYOffset > element.getBoundingClientRect().top + window.pageYOffset;
	};
	const isElementWithinXScreenHeights = (element, screens) => {
	    return window.pageYOffset - (element.getBoundingClientRect().top + window.pageYOffset) < window.innerHeight + window.innerHeight * screens;
	};

	const checkEmail = (value) => {
	    const matched = value.match(/([a-zA-Z0-9._!#$%+^&*()[\]<>-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
	    if (!matched) {
	        return '';
	    }
	    return matched[0];
	};
	const trimInput = (value) => {
	    return value.replace(/\s/g, '');
	};
	const validateEmail = (value) => {
	    return checkEmail(trimInput(value.toLowerCase()));
	};

	const filterUnique = (value, index, self) => {
	    return self.indexOf(value) === index;
	};

	const getMainArticle = () => {
	    const articles = document.querySelectorAll('article');
	    if (articles.length === 0) {
	        return null;
	    }
	    let content = articles.item(0);
	    articles.forEach(article => {
	        if (article.offsetHeight > content.offsetHeight) {
	            content = article;
	        }
	    });
	    if (content && content.offsetHeight > window.innerHeight * 1.5) {
	        return content;
	    }
	    return null;
	};

	const getClsGlobal = () => window.adthriveCLS;

	const getJSON = (url) => {
	    return new Promise((resolve, reject) => {
	        fetch(url)
	            .then(result => {
	            result
	                .json()
	                .then(json => resolve(json))
	                .catch(() => reject(false));
	        })
	            .catch(() => reject(false));
	    });
	};

	const removeSessionValue = (key) => {
	    sessionStorage.removeItem(`adthrive_${key.toLowerCase()}`);
	};
	const getSessionValue = (key, timeout, rolling = false) => {
	    try {
	        const item = sessionStorage.getItem(`adthrive_${key.toLowerCase()}`);
	        if (item) {
	            const parsed = JSON.parse(item);
	            const expired = timeout !== undefined && Date.now() - parsed.created >= timeout;
	            if (parsed && !expired) {
	                if (rolling) {
	                    setSessionValue(key, parsed.value);
	                }
	                return parsed.value;
	            }
	        }
	    }
	    catch (err) {
	    }
	    return null;
	};
	const setSessionValue = (key, value) => {
	    try {
	        const item = { value, created: Date.now() };
	        sessionStorage.setItem(`adthrive_${key.toLowerCase()}`, JSON.stringify(item));
	    }
	    catch (err) {
	    }
	};
	const getOrSetSessionValue = (key, getValue, timeout, rolling = true) => {
	    const saved = getSessionValue(key, timeout, rolling);
	    if (saved !== null) {
	        return saved;
	    }
	    const value = getValue();
	    setSessionValue(key, value);
	    return value;
	};

	const getReferrer = (timeout = 1800000) => {
	    const saved = getSessionValue('referrer', timeout);
	    const current = getExternalReferrerHostname();
	    return defaultTo(current, saved);
	};
	const getExternalReferrerHostname = () => {
	    if (document.referrer && document.referrer.length) {
	        const referrerHostname = getHostname(document.referrer);
	        const referrerDomain = getRootDomain(referrerHostname);
	        const locationDomain = getRootDomain(window.location.hostname);
	        if (referrerDomain !== locationDomain) {
	            return referrerHostname;
	        }
	    }
	    return undefined;
	};
	const getHostname = (href) => {
	    const element = document.createElement('a');
	    element.href = href;
	    return element.hostname;
	};
	const getRootDomain = (domain) => {
	    const splitArr = domain.split('.');
	    const arrLen = splitArr.length;
	    if (arrLen > 2) {
	        domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1];
	        if ((splitArr[arrLen - 2].length === 2 || splitArr[arrLen - 2].length === 3) && splitArr[arrLen - 1].length === 2) {
	            domain = splitArr[arrLen - 3] + '.' + domain;
	        }
	    }
	    return domain;
	};

	const getViewportDimensions = () => {
	    const width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
	    const height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
	    return {
	        width,
	        height,
	    };
	};

	const getVastXML = (url) => {
	    return new Promise((resolve, reject) => {
	        fetch(url)
	            .then(result => {
	            result
	                .text()
	                .then(xml => {
	                typeof xml === 'string' ? resolve(xml) : reject('Vast XML not in proper format');
	            })
	                .catch(err => {
	                reject(err);
	            });
	        })
	            .catch(err => reject(err));
	    });
	};

	const importScript = (src, append = false, defer = false) => {
	    return new Promise((resolve, reject) => {
	        const script = document.createElement('script');
	        script.addEventListener('error', () => {
	            return reject(new Error(`Failed to import script ${src}`));
	        });
	        script.addEventListener('load', () => {
	            return resolve(script);
	        });
	        script.type = 'text/javascript';
	        script.src = src;
	        script.defer = defer;
	        insertOrAppend(script, append);
	    });
	};
	const insertOrAppend = (script, append) => {
	    const node = document.getElementsByTagName('script')[0];
	    if (node && node.parentNode && !append) {
	        node.parentNode.insertBefore(script, node);
	    }
	    else {
	        document.body.appendChild(script);
	    }
	};

	const importStyle = (src) => {
	    const stylesheet = document.createElement('link');
	    stylesheet.rel = 'stylesheet';
	    stylesheet.type = 'text/css';
	    stylesheet.href = src;
	    document.head.appendChild(stylesheet);
	};

	const firstPartyDataKeyOrder = ['Refresh', 'PD', 'Source', 'Browser', 'Topic', 'MCMP', 'Sens'];
	const setIXFirstPartyData = (firstPartyData, prebidMethods) => {
	    prebidMethods.addToQueue(() => {
	        const ixConfig = prebidMethods.getConfig('ix') || { firstPartyData: {} };
	        const combinedFirstPartyData = {
	            ...ixConfig.firstPartyData,
	            ...firstPartyData,
	        };
	        const newFirstPartyData = {};
	        firstPartyDataKeyOrder.forEach(keyName => {
	            if (keyName in combinedFirstPartyData) {
	                newFirstPartyData[keyName] = combinedFirstPartyData[keyName];
	            }
	        });
	        for (const key in combinedFirstPartyData) {
	            if (firstPartyDataKeyOrder.indexOf(key) === -1) {
	                newFirstPartyData[key] = combinedFirstPartyData[key];
	            }
	        }
	        ixConfig.firstPartyData = newFirstPartyData;
	        prebidMethods.setConfig({ ix: ixConfig });
	    });
	};
	const getStandardSource = (referrer) => {
	    const standardSources = {
	        google: 'google',
	        facebook: 'facebook',
	        instagram: 'instagram',
	        pinterest: 'pinterest',
	    };
	    const standardSource = referrer.split('.').filter(val => standardSources[val])[0];
	    return standardSource || 'other';
	};
	const standardizeTrafficSources = (referrer) => {
	    if (!referrer) {
	        return 'direct';
	    }
	    return getStandardSource(referrer);
	};

	const isAdXAd = ({ event, ignoreOtherCompanyIds = false }) => {
	    const _adxCampaignIds = new Set([-1, 0, 1, 199612376, 2143809321]);
	    const _notAdxCompanyIds = new Set([
	        4455444655, 4460609902, 4463579729, 4464180925, 4466143841, 4550726766, 4623743690, 4623743882, 4634020290, 4642901988, 4697115760, 4801442281,
	        4802163255, 4805985973, 4807636548, 4867316569,
	    ]);
	    const adxMatch = !event.campaignId || _adxCampaignIds.has(event.campaignId);
	    const ebdaMatch = !event.companyIds || (event.companyIds && !event.companyIds.some(companyId => _notAdxCompanyIds.has(companyId)));
	    if (ignoreOtherCompanyIds) {
	        return adxMatch;
	    }
	    return adxMatch && ebdaMatch;
	};

	const isUserAgentInvalid = () => {
	    return /python|apis|googleweblight|spider|crawler|curl|wget|ia_archiver|insights|baidu|bot|monitor|scraper|A6-Indexer|addthis|admantx|agentslug|alexa|anderspink|apache-httpclient|apachebench|apis-google|appengine-google|ask jeeves|asynchttpclient|awe.sm|baidu|barkrowler|biglotron|bingpreview|brandverify|bubing|butterfly|buzztalk|cf-uc|check_http|cloudflare|cmradar\/0.1|coldfusion|comodo ssl checker|convera|copypants|crowsnest|curl|dap\/nethttp|daumoa|developers.google.com\/\+\/web\/snippet\/|digitalpersona fingerprint software|drupact|duckduck|elb-healthchecker|embedly|eoaagent|europarchive|eventmachine httpclient|evrinid|exaleadcloudview|ezooms|ez publish|facebookexternalhit|feedburner|feedfetcher-google|findlink|findthatfile|flipboardproxy|garlik|genieo|getprismatic.com|ghost|gigablast|go http package|google( page speed insights| web preview|google-site-verification|-structured-data-testing-tool|-structureddatatestingtool)|hatena|headless|heritrix|htmlparser|http(_request2|client|s|unit)|httrack|hubspot|ichiro|icoreservice|idmarch|in(agist|sieve|stapaper)|ips-agent|jack|jakarta commons|java|jetslide|jobseeker|js-kit|kimengi|knows.is|kraken|laconica|libwww|lighthouse|linode|lipperhey|longurl|ltx71|lwp-trivial|mappydata|mastodon|mediapartners-google|megaindex.ru|metauri|mfe_expand|mixnode|mon(tastic|tools)|moreover|mrchrome|nberta|net(craft|researchserver|state|vibes)|newrelicpinger|newspaper|newsme|ning|nmap|nutch|online-domain-tools|paessler|page(peek|sinventory|thing)|panopta|peerindex|phantomjs|pingdom|plukkie|proximic|pu_in|publiclibraryarchive.org|python-(httplib2|requests|urllib)|quanti|queryseeker|quicklook|qwanti|re-animator|readability|rebelmouse|relateiq|riddler|rssmicro|ruby|scrapy|seo-audit|seodiver|seokicks|shopwiki|shortlinktranslate|siege|sistrix|site24x7|siteexplorer|skypeuripreview|slack|slurp|socialrank|sogou|spinn3r|squider|statuscake|stripe|summify|teeraid|teoma|test certificate info|tineye|traackr|tweetedtimes|twikle|twitjobsearch|twitmunin|twurly|typhoeus|unwindfetch|uptim(e|ia)|uptm.io|vagabondo|vb project|vigil|vkshare|wappalyzer|watchsumo|webceo|webdatascout|webmon|webscout|wesee|wget|whatsapp|whatweb|wikido|wordpress|wormly|wotbox|xenu link sleuth|xing-contenttabreceiver|yandex|yanga|yeti|yff35|yourls|zelist.ro|zibb|^Mozilla\/5\.0$|Viv\/2/i.test(window.navigator.userAgent);
	};

	const webdriverValidation = () => {
	    if (navigator && navigator.webdriver) {
	        return 'wdv';
	    }
	    return;
	};
	const hardwareValidation = () => {
	    if (navigator && navigator.hardwareConcurrency > 16) {
	        return 'hwv';
	    }
	    return;
	};
	const userAgentValidation = () => {
	    if (navigator && navigator.userAgent && isUserAgentInvalid()) {
	        return 'uav';
	    }
	    return;
	};
	const viewportValidation = () => {
	    const dimensions = getViewportDimensions();
	    if (dimensions.width > 5000 || dimensions.height > 5000) {
	        return 'vpv';
	    }
	    return;
	};
	const webGLValidator = () => {
	    const canvas = document.createElement('canvas');
	    const gl = canvas.getContext && canvas.getContext('webgl');
	    const debugInfo = gl && gl.getExtension && gl.getExtension('WEBGL_debug_renderer_info');
	    if (debugInfo && debugInfo.UNMASKED_RENDERER_WEBGL) {
	        const renderer = gl && gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
	        if (renderer === 'Google SwiftShader') {
	            return 'wglv';
	        }
	    }
	    return;
	};
	const isBotTraffic = () => {
	    const botArray = [viewportValidation(), webdriverValidation(), userAgentValidation(), hardwareValidation(), webGLValidator()].filter((value) => !!value);
	    return botArray.length ? botArray : undefined;
	};

	const isDesktop = () => {
	    return /Windows NT|Macintosh/i.test(navigator.userAgent);
	};

	const isVisible = (element) => {
	    return !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
	};

	const isHidden = (element) => {
	    return !isVisible(element);
	};

	const isHighlyViewableSlot = (slot, threshold) => {
	    return slot.viewability >= threshold || slot.lazy || slot.refreshCount > 0;
	};

	const isMobile = () => {
	    const userAgent = navigator.userAgent;
	    const excluded = /Tablet|iPad|Playbook|Nook|webOS|Kindle|Android (?!.*Mobile).*Safari/i.test(userAgent);
	    const mobile = /Mobi|iP(hone|od)|Opera Mini/i.test(userAgent);
	    return mobile && !excluded;
	};

	const linearInterpolation = (arr, p) => {
	    if (arr.length <= 1) {
	        return 0;
	    }
	    arr.sort((a, b) => a - b);
	    if (p <= 0) {
	        return arr[0];
	    }
	    if (p >= 1) {
	        return arr[arr.length - 1];
	    }
	    const rank = p * (arr.length + 1);
	    const lower = Math.floor(rank) - 1;
	    const upper = lower + 1;
	    const weight = Number((rank % 1).toFixed(1));
	    if (rank < 1) {
	        return arr[0];
	    }
	    if (upper >= arr.length) {
	        return arr[lower];
	    }
	    return arr[lower] + weight * (arr[upper] - arr[lower]);
	};

	const setCrossDomainMessaging = (expectedOrigin, dataToSend) => {
	    const receiveMessage = (evt) => {
	        try {
	            const { origin, source } = evt;
	            const data = JSON.parse(evt.data);
	            const messageMatches = data && data.message === dataToSend.message;
	            const originMatches = origin && origin.match(expectedOrigin);
	            if (!originMatches || !messageMatches) {
	                return;
	            }
	            source.postMessage(JSON.stringify(dataToSend), origin);
	        }
	        catch (e) {
	            return;
	        }
	    };
	    window.addEventListener('message', receiveMessage);
	};

	const now$2 = () => {
	    try {
	        return Math.round(window.performance.now());
	    }
	    catch (err) {
	        return 0;
	    }
	};

	const obfuscate = (value, rdx) => {
	    return Math.floor(value * 100000).toString(rdx);
	};
	const deobfuscate = (value, rdx) => {
	    return parseInt(value, rdx) / 100000;
	};
	const deobfuscateBidCpms = (values, rdx = 33) => {
	    const floors = Object.keys(values).reduce((prevVal, currentVal) => {
	        const deobfuscated = values[currentVal].map(cv => deobfuscate(cv, rdx));
	        return { ...prevVal, ...{ [currentVal]: [...deobfuscated] } };
	    }, {});
	    return floors;
	};
	const obfuscateBidCpms = (floors, rdx = 33) => {
	    const obfuscatedFloors = Object.keys(floors).reduce((prevVal, currentVal) => {
	        const mapped = floors[currentVal].map(cv => obfuscate(cv, rdx));
	        return { ...prevVal, [currentVal]: mapped };
	    }, {});
	    return obfuscatedFloors;
	};

	const pageLoaded = () => {
	    return new Promise(resolve => {
	        if (document.readyState === 'complete') {
	            return resolve();
	        }
	        window.addEventListener('load', () => resolve());
	    });
	};

	const parseQueryString = () => {
	    return window.location.search
	        .slice(1)
	        .split('&')
	        .reduce((queryMap, param) => {
	        const [key, value] = param.split('=');
	        queryMap.set(key, value);
	        return queryMap;
	    }, new Map());
	};
	const createQueryString = (params) => {
	    return Object.keys(params)
	        .map(key => `${key}=${encodeURIComponent(params[key])}`)
	        .join('&');
	};

	const randomFloat = (min, max) => {
	    return Math.random() * (max - min) + min;
	};
	const randomInteger = (min, max) => {
	    return Math.floor(randomFloat(Math.ceil(min), Math.floor(max)));
	};
	const random = () => {
	    if (window.crypto) {
	        const buffer = new Uint8Array(1);
	        crypto.getRandomValues(buffer);
	        return buffer[0] / 0xff;
	    }
	    return Math.random();
	};

	const removeRandomElement = (array, threshold) => {
	    if (array.length >= threshold) {
	        array.splice(Math.floor(Math.random() * array.length), 1);
	    }
	};

	const readCookie = (key) => {
	    const value = RegExp('(^|[^;]+)\\s*' + key + '\\s*=\\s*([^;]+)').exec(document.cookie);
	    return value ? value.pop() : '';
	};

	const stdTimezoneOffset = () => {
	    const jan = new Date(new Date().getFullYear(), 0, 1);
	    const jul = new Date(new Date().getFullYear(), 6, 1);
	    return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
	};
	const isDstObserved = () => {
	    return new Date().getTimezoneOffset() < stdTimezoneOffset();
	};
	const getTimezone = () => {
	    return Intl.DateTimeFormat().resolvedOptions().timeZone;
	};
	const locationCheck = (ianaTimezones, offsets) => {
	    if ('Intl' in window) {
	        const ianaTimezone = getTimezone();
	        return ianaTimezones.some(tz => ianaTimezone === tz);
	    }
	    else {
	        return offsets.some(ofs => {
	            const offset = new Date().getTimezoneOffset();
	            const targetOffset = isDstObserved() ? ofs - 60 : ofs;
	            return offset === targetOffset;
	        });
	    }
	};
	const isPacific = () => {
	    return locationCheck(['America/Los_Angeles'], [480]);
	};
	const isNewZealand = () => {
	    return locationCheck(['Pacific/Auckland'], [-720]);
	};
	const isHawaii = () => {
	    return locationCheck(['Pacific/Honolulu'], [600]);
	};
	const isPhoenix = () => {
	    return locationCheck(['America/Phoenix'], [420]);
	};

	const defined = (input) => input !== undefined;
	const hasProperty = (x, property) => {
	    return !!(x && typeof x === 'object' && property in x);
	};
	const tryToAccessProperty = (x, property) => {
	    if (hasProperty(x, property)) {
	        return x[property];
	    }
	    return null;
	};

	const urlMatch = (patterns) => {
	    const url = window.location.href;
	    return patterns.some(pattern => {
	        const re = new RegExp(pattern, 'i');
	        return re.test(url);
	    });
	};

	const getUIDForSource = (source, isPrebidLoaded) => {
	    if (isPrebidLoaded) {
	        for (const eid of pbjs.getUserIdsAsEids()) {
	            if (eid.source && eid.source === source && eid.uids && eid.uids.length > 0 && eid.uids[0].id) {
	                return eid.uids[0].id;
	            }
	        }
	    }
	    return null;
	};

	const validCssSelector = (selector) => {
	    try {
	        return { valid: true, elements: document.querySelectorAll(selector) };
	    }
	    catch (err) {
	        return { valid: false, ...err };
	    }
	};
	const allowablePageSelector = (selector) => {
	    if (selector === '') {
	        return { valid: true };
	    }
	    return validCssSelector(selector);
	};

	const write = (className, methodName, args, result, start, end) => {
	    const duration = Math.round(end - start);
	    const message = [];
	    const params = [];
	    message.push('(', args.map(() => '%o').join(', '), ')');
	    params.push(...args);
	    if (result !== undefined) {
	        message.push(` => %o`);
	        params.push(result);
	    }
	    message.push(` %c(${duration}ms)`);
	    params.push('color: #999;');
	    logger.info(className, methodName, message.join(''), ...params);
	};
	const wrapMethod = (className, key, descriptor) => {
	    const method = descriptor.get !== undefined ? descriptor.get : descriptor.value;
	    return function (...args) {
	        try {
	            const start = now$2();
	            const result = method.apply(this, args);
	            if (result instanceof Promise) {
	                return result
	                    .then(value => {
	                    const end = now$2();
	                    write(className, key, args, value, start, end);
	                    return Promise.resolve(value);
	                })
	                    .catch(err => {
	                    if (!err.logged) {
	                        logger.error(className, key, err);
	                        err.logged = true;
	                    }
	                    throw err;
	                });
	            }
	            else {
	                const end = now$2();
	                write(className, key, args, result, start, end);
	                return result;
	            }
	        }
	        catch (err) {
	            if (!err.logged) {
	                logger.error(className, key, err);
	                err.logged = true;
	            }
	            throw err;
	        }
	    };
	};
	const log = (className, includePrivate = false) => {
	    return (constructor) => {
	        const propertyNames = Object.getOwnPropertyNames(constructor.prototype);
	        const properties = propertyNames
	            .filter(key => includePrivate || key.indexOf('_') !== 0)
	            .map(key => [key, Object.getOwnPropertyDescriptor(constructor.prototype, key)]);
	        for (const [key, descriptor] of properties) {
	            if (descriptor !== undefined && typeof descriptor.value === 'function') {
	                constructor.prototype[key] = wrapMethod(className, key, descriptor);
	            }
	            else if (descriptor !== undefined && descriptor.get !== undefined && typeof descriptor.get === 'function') {
	                Object.defineProperty(constructor.prototype, key, {
	                    ...descriptor,
	                    get: wrapMethod(className, key, descriptor),
	                });
	            }
	        }
	    };
	};

	const sticky = () => {
	    return (_target, _propertyKey, descriptor) => {
	        const method = descriptor.value;
	        if (method) {
	            descriptor.value = function (...args) {
	                var _a;
	                const key = this.key;
	                if (((_a = getSessionValue('branch')) === null || _a === void 0 ? void 0 : _a.enabled) === false) {
	                    removeSessionValue(key);
	                }
	                return getOrSetSessionValue(key, () => method.apply(this, args), 1800000);
	            };
	        }
	    };
	};

	const createError = (message) => {
	    const err = new Error(message);
	    err.source = 'ulid';
	    return err;
	};
	const ENCODING = '0123456789ABCDEFGHJKMNPQRSTVWXYZ';
	const ENCODING_LEN = ENCODING.length;
	const TIME_MAX = Math.pow(2, 48) - 1;
	const TIME_LEN = 10;
	const RANDOM_LEN = 16;
	const randomChar = (prng) => {
	    let rand = Math.floor(prng() * ENCODING_LEN);
	    if (rand === ENCODING_LEN) {
	        rand = ENCODING_LEN - 1;
	    }
	    return ENCODING.charAt(rand);
	};
	const encodeTime = (now, len) => {
	    if (isNaN(now)) {
	        throw new Error(`${now} must be a number`);
	    }
	    if (now > TIME_MAX) {
	        throw createError(`cannot encode time greater than ${TIME_MAX}`);
	    }
	    let mod;
	    let str = '';
	    for (; len > 0; len--) {
	        mod = now % ENCODING_LEN;
	        str = ENCODING.charAt(mod) + str;
	        now = (now - mod) / ENCODING_LEN;
	    }
	    return str;
	};
	const encodeRandom = (len, prng) => {
	    let str = '';
	    for (; len > 0; len--) {
	        str = randomChar(prng) + str;
	    }
	    return str;
	};
	const ulid = () => {
	    return encodeTime(Date.now(), TIME_LEN) + encodeRandom(RANDOM_LEN, () => random());
	};

	let ABGroup = class ABGroup {
	    constructor() {
	        this._map = new Map();
	        this.setAbGroup = !parseQueryString().has('at_features');
	    }
	    set(key, value) {
	        if (this.setAbGroup) {
	            this._map.set(key, value);
	        }
	    }
	    get(key) {
	        return this._map.get(key);
	    }
	    get groups() {
	        const groups = [];
	        for (const [k, v] of this._map) {
	            groups.push(`${k}:${v}`);
	        }
	        return groups;
	    }
	    get groupsAsObject() {
	        const groups = {};
	        for (const k of this._map.keys()) {
	            const v = this._map.get(k);
	            if (v) {
	                groups[k] = v;
	            }
	        }
	        return groups;
	    }
	};
	ABGroup = __decorate([
	    singleton(),
	    __metadata("design:paramtypes", [])
	], ABGroup);

	let ExperimentOverrides = class ExperimentOverrides {
	    constructor() {
	        this.adthriveExperimentOverrides = this.getExperimentOverrides();
	    }
	    getExperimentOverrides() {
	        let atFeaturesMap = {};
	        const atFeatures = parseQueryString().get('at_features');
	        if (atFeatures) {
	            try {
	                const decodedAtFeatures = decodeURIComponent(atFeatures);
	                atFeaturesMap = JSON.parse(decodedAtFeatures);
	                logger.event('ExperimentOverrides', 'getExperimentOverrides', 'at_features', atFeaturesMap);
	            }
	            catch (error) {
	                const message = error instanceof URIError ? 'Invalid URL encoded parameters' : 'Invalid JSON experiment overrides';
	                logger.info('ExperimentOverrides', 'getExperimentOverrides', message, error);
	            }
	        }
	        return atFeaturesMap;
	    }
	    hasValidOverride(key, validVals) {
	        if (key in this.adthriveExperimentOverrides) {
	            const overrideVal = this.adthriveExperimentOverrides[key];
	            const isValid = this.isValidExperimentOverride(validVals, overrideVal);
	            logger.info('ExperimentOverrides', 'override', isValid ? 'valid' : 'invalid', key, overrideVal);
	            return isValid;
	        }
	        return false;
	    }
	    useOverride(key) {
	        return this.adthriveExperimentOverrides[key];
	    }
	    isValidExperimentOverride(validVals, overrideVal) {
	        if (validVals.length === 0) {
	            return false;
	        }
	        const experimentType = Array.isArray(validVals[0]) ? 'array' : typeof validVals[0];
	        if (experimentType === 'array') {
	            if (!Array.isArray(overrideVal)) {
	                return false;
	            }
	            if (overrideVal.some(value => validVals.indexOf(value) === -1) &&
	                overrideVal.map(item => '[' + JSON.stringify(item) + ']').some(value => validVals.map(item => JSON.stringify(item)).indexOf(value) === -1) &&
	                validVals.map(item => JSON.stringify(item)).indexOf(JSON.stringify(overrideVal)) === -1) {
	                return false;
	            }
	        }
	        else if (experimentType === 'object') {
	            if (validVals.map(validVal => JSON.stringify(validVal)).indexOf(JSON.stringify(overrideVal)) === -1) {
	                return false;
	            }
	        }
	        else if (validVals.indexOf(overrideVal) === -1) {
	            return false;
	        }
	        return true;
	    }
	};
	ExperimentOverrides = __decorate([
	    singleton(),
	    __metadata("design:paramtypes", [])
	], ExperimentOverrides);

	class Experiment {
	    constructor() {
	        const originalMethod = this.run.bind(this);
	        this.run = () => {
	            const experimentOverrides = instance.resolve(ExperimentOverrides);
	            const validVals = this._choices.map(validOption => validOption.choice);
	            if (experimentOverrides.hasValidOverride(this.key, validVals)) {
	                return experimentOverrides.useOverride(this.key);
	            }
	            return originalMethod();
	        };
	    }
	}

	class Operation {
	}

	class BernoulliTrial extends Operation {
	    constructor(_probability) {
	        super();
	        this._probability = _probability;
	    }
	    get() {
	        if (this._probability < 0 || this._probability > 1) {
	            throw new Error('Invalid probability');
	        }
	        return Math.random() < this._probability;
	    }
	}

	class UniformChoice extends Operation {
	    constructor(_choices = []) {
	        super();
	        this._choices = _choices;
	    }
	    addChoice(choice) {
	        this._choices.push(choice);
	    }
	    get() {
	        const index = randomInteger(0, this._choices.length);
	        return this._choices[index];
	    }
	}

	class WeightedChoice extends Operation {
	    constructor(_choices = [], _default) {
	        super();
	        this._choices = _choices;
	        this._default = _default;
	    }
	    static fromArray(choices, _default) {
	        return new WeightedChoice(choices.map(([choice, weight]) => ({ choice, weight })), _default);
	    }
	    addChoice(choice, weight) {
	        this._choices.push({ choice, weight });
	    }
	    get() {
	        const threshold = randomFloat(0, 100);
	        let cumWeight = 0;
	        for (const { choice, weight } of this._choices) {
	            cumWeight += weight;
	            if (cumWeight >= threshold) {
	                return choice;
	            }
	        }
	        return this._default;
	    }
	    get totalWeight() {
	        return this._choices.reduce((total, { weight }) => total + weight, 0);
	    }
	}

	let InterstitialExperiment = class InterstitialExperiment extends Experiment {
	    constructor(_adthrive, abgroup) {
	        super();
	        this._adthrive = _adthrive;
	        this._result = 'off';
	        this.key = 'inters';
	        this._choices = [
	            { choice: 'all', weight: 0 },
	            { choice: 'adx', weight: 95 },
	            { choice: 'off', weight: 5 },
	        ];
	        if (this.canDisplayInterstitial() &&
	            ((isMobile() && defaultTo(this._adthrive.siteAds.adOptions.mobileInterstitial, false)) ||
	                (!isMobile() && defaultTo(this._adthrive.siteAds.adOptions.desktopInterstitial, false)))) {
	            this._result = this.run();
	            abgroup.set(this.key, this._result);
	        }
	    }
	    canDisplayInterstitial() {
	        try {
	            const googleInstlFlag = window.localStorage.getItem('__lsv__');
	            const timestamp = googleInstlFlag ? JSON.parse(decodeURIComponent(googleInstlFlag)) : [];
	            if (timestamp.length) {
	                const oneHourInMs = 60 * 60 * 1000;
	                const now = new Date().getTime();
	                const lastSeen = timestamp[0];
	                const diff = now - lastSeen;
	                return diff > oneHourInMs;
	            }
	            else {
	                return true;
	            }
	        }
	        catch (err) {
	            logger.error('InterstitialExperiment', 'canDisplayInterstitial', { message: err.message });
	            return false;
	        }
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new WeightedChoice(this._choices).get();
	    }
	};
	InterstitialExperiment = __decorate([
	    log('InterstitialExperiment'),
	    singleton(),
	    __param(0, inject('AdThrive')),
	    __metadata("design:paramtypes", [Object, ABGroup])
	], InterstitialExperiment);

	let AdOptions = class AdOptions {
	    constructor(adthrive, _interstitialExperiment) {
	        this._interstitialExperiment = _interstitialExperiment;
	        this.footerCloseButtonMigrated = false;
	        const { allowSmallerAdSizes, footerCloseButton, footerCloseButtonMobile, footerCloseButtonDesktop, footerSelector, infiniteScroll, infiniteScrollOptions, infiniteScrollRefresh, pmp, targetaff, } = adthrive.siteAds.adOptions;
	        this.allowSmallerAdSizes = defaultTo(allowSmallerAdSizes, true);
	        if (footerCloseButtonMobile !== undefined && footerCloseButtonDesktop !== undefined) {
	            this.footerCloseButtonMigrated = true;
	        }
	        this.interstitial = {
	            gam: this._interstitialExperiment.result !== 'off' ? true : false,
	            prebid: this._interstitialExperiment.result === 'all' ? true : false,
	        };
	        this.footerCloseButton = defaultTo(footerCloseButton, true);
	        this.footerCloseButtonMobile = defaultTo(footerCloseButtonMobile, true);
	        this.footerCloseButtonDesktop = defaultTo(footerCloseButtonDesktop, true);
	        this.footerSelector = defaultTo(footerSelector, '');
	        this.pmp = defaultTo(pmp, true);
	        this.infiniteScroll = defaultTo(infiniteScroll, false);
	        this.infiniteScrollOptions = defaultTo(infiniteScrollOptions, {});
	        this.infiniteScrollRefresh = defaultTo(infiniteScrollRefresh, true);
	        this.targetAff = defaultTo(targetaff, false);
	    }
	};
	AdOptions = __decorate([
	    singleton(),
	    __param(0, inject('AdThrive')),
	    __metadata("design:paramtypes", [Object, InterstitialExperiment])
	], AdOptions);

	let AdTypes = class AdTypes {
	    constructor(adthrive) {
	        const adTypes = adthrive.siteAds.adTypes || {};
	        this.animatedFooter = defaultTo(adTypes.animatedFooter, true);
	        this.expandableFooter = defaultTo(adTypes.expandableFooter, true);
	        this.interscroller = defaultTo(adTypes.interscroller, true);
	        this.miniscroller = defaultTo(adTypes.miniscroller, true);
	        this.nativeMobileContent = defaultTo(adTypes.nativeMobileContent, true);
	        this.nativeDesktopContent = defaultTo(adTypes.nativeDesktopContent, true);
	        this.nativeDesktopSidebar = defaultTo(adTypes.nativeDesktopSidebar, true);
	        this.nativeDesktopRecipe = defaultTo(adTypes.nativeDesktopRecipe, true);
	        this.nativeMobileRecipe = defaultTo(adTypes.nativeMobileRecipe, true);
	        this.outstreamDesktop = defaultTo(adTypes.outstreamDesktop, true);
	        this.outstreamMobile = defaultTo(adTypes.outstreamMobile, true);
	    }
	    has(name) {
	        return this[name] && this[name] === true;
	    }
	    get enabled() {
	        return Object.keys(this).filter(key => this[key] === true);
	    }
	    get enabledMinified() {
	        const adTypeMinified = {
	            outstreamDesktop: { min: 'od', val: this.outstreamDesktop },
	            outstreamMobile: { min: 'om', val: this.outstreamMobile },
	        };
	        return this.enabled
	            .filter(adType => Object.keys(adTypeMinified).indexOf(adType) !== -1 && adTypeMinified[adType].val)
	            .map(adType => adTypeMinified[adType].min);
	    }
	    get outstreamEnabled() {
	        return isMobile() ? this.outstreamMobile === true : this.outstreamDesktop === true;
	    }
	};
	AdTypes = __decorate([
	    singleton(),
	    __param(0, inject('AdThrive')),
	    __metadata("design:paramtypes", [Object])
	], AdTypes);

	let AmazonHoldLoadExperiment = class AmazonHoldLoadExperiment extends Experiment {
	    constructor(abgroup) {
	        super();
	        this.key = 'amzn_hold_load';
	        this._choices = [{ choice: true }, { choice: false }];
	        this._result = this.run();
	        abgroup.set(this.key, this._result ? 'on' : 'off');
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new BernoulliTrial(0.5).get();
	    }
	};
	__decorate([
	    sticky(),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", []),
	    __metadata("design:returntype", void 0)
	], AmazonHoldLoadExperiment.prototype, "run", null);
	AmazonHoldLoadExperiment = __decorate([
	    log('AmazonLibraryExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup])
	], AmazonHoldLoadExperiment);

	let AmazonExperiment = class AmazonExperiment extends Experiment {
	    constructor(abgroup) {
	        super();
	        this.key = 'amzn';
	        this._choices = [{ choice: true }, { choice: false }];
	        this._result = this.run();
	        abgroup.set(this.key, this._result ? 'on' : 'off');
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new BernoulliTrial(0.995).get();
	    }
	};
	__decorate([
	    sticky(),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", []),
	    __metadata("design:returntype", void 0)
	], AmazonExperiment.prototype, "run", null);
	AmazonExperiment = __decorate([
	    log('AmazonExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup])
	], AmazonExperiment);

	let WebVitalsExperiment = class WebVitalsExperiment extends Experiment {
	    constructor(abgroup) {
	        super();
	        this._result = false;
	        this.key = 'wvtls';
	        this._choices = [{ choice: true }, { choice: false }];
	        if (isChrome()) {
	            this._result = this.run();
	            abgroup.set(this.key, this.result ? 'on' : 'off');
	        }
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new BernoulliTrial(0.25).get();
	    }
	};
	WebVitalsExperiment = __decorate([
	    log('WebVitalsExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup])
	], WebVitalsExperiment);

	let BootstrapConfig = class BootstrapConfig {
	    constructor(adthrive, amazonExperiment, webVitalsExperiment) {
	        var _a;
	        this.amazonEnabled = amazonExperiment.result;
	        this.webVitalsEnabled = webVitalsExperiment.result;
	        this.gptLibFailed = false;
	        this.liveRamp = defaultTo(adthrive.siteAds.adOptions.liveRamp, true);
	        this.liveRampId = defaultTo(adthrive.siteAds.adOptions.liveRampId, '7f035220-1751-4684-bb7f-a1c0d45657df');
	        if (this.liveRampId.length !== 36) {
	            this.liveRampId = '7f035220-1751-4684-bb7f-a1c0d45657df';
	        }
	        if (((_a = adthrive === null || adthrive === void 0 ? void 0 : adthrive.core) === null || _a === void 0 ? void 0 : _a.country) === 'FR') {
	            this.liveRampId = '34233849-5500-4e44-8601-5006ae8d13fe';
	        }
	        this._baseUrl = adthrive.baseUrl;
	    }
	    get baseUrl() {
	        return this._baseUrl;
	    }
	    get recencyFrequencyIframeLocation() {
	        return `${this._baseUrl}/html/recency-and-frequency.html`;
	    }
	};
	BootstrapConfig = __decorate([
	    log('BootstrapConfig'),
	    singleton(),
	    __param(0, inject('AdThrive')),
	    __metadata("design:paramtypes", [Object, AmazonExperiment,
	        WebVitalsExperiment])
	], BootstrapConfig);

	let AmazonBootstrap = class AmazonBootstrap {
	    constructor(adthrive, _bootstrapConfig) {
	        this.adthrive = adthrive;
	        this._bootstrapConfig = _bootstrapConfig;
	        this._url = 'https://c.amazon-adsystem.com/aax2/apstag.js';
	    }
	    async load() {
	        if (this._bootstrapConfig.amazonEnabled && this.adthrive.siteAds.adOptions.amazonUAM) {
	            this.init();
	            const fastAds = this.adthrive.fastAds;
	            if (fastAds && fastAds.amazon) {
	                return fastAds.amazon.promise.then(() => true).catch(() => importScript(this._url).then(() => true));
	            }
	            return importScript(this._url).then(() => true);
	        }
	        else {
	            return Promise.resolve(false);
	        }
	    }
	    init() {
	        if (window.apstag) {
	            return;
	        }
	        const q = (c, r) => {
	            window.apstag._Q.push([c, r]);
	        };
	        window.apstag = {
	            init() {
	                q('i', arguments);
	            },
	            fetchBids() {
	                q('f', arguments);
	            },
	            setDisplayBids() {
	                return;
	            },
	            targetingKeys() {
	                return [];
	            },
	            _Q: [],
	        };
	    }
	};
	AmazonBootstrap = __decorate([
	    log('AmazonBootstrap'),
	    injectable(),
	    __param(0, inject('AdThrive')),
	    __metadata("design:paramtypes", [Object, BootstrapConfig])
	], AmazonBootstrap);

	let GAMBootstrap = class GAMBootstrap {
	    constructor(_adthrive) {
	        this._adthrive = _adthrive;
	        this._url = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
	    }
	    async load() {
	        window.googletag = window.googletag || {};
	        window.googletag.cmd = window.googletag.cmd || [];
	        return this.import();
	    }
	    sendScript() {
	        return importScript(this._url).then(() => true);
	    }
	    import() {
	        const fastAds = this._adthrive.fastAds;
	        if (!fastAds || !fastAds.gam) {
	            return this.sendScript();
	        }
	        return fastAds.gam.promise.then(() => true).catch(() => this.sendScript());
	    }
	};
	GAMBootstrap = __decorate([
	    log('GAMBootstrap'),
	    injectable(),
	    __param(0, inject('AdThrive')),
	    __metadata("design:paramtypes", [Object])
	], GAMBootstrap);

	let RecencyFrequencyIframeInsertionExperiment = class RecencyFrequencyIframeInsertionExperiment extends Experiment {
	    constructor(abgroup) {
	        super();
	        this._result = false;
	        this.key = 'rfii';
	        this._choices = [{ choice: true }, { choice: false }];
	        this._result = this.run();
	        abgroup.set(this.key, this.result ? 'on' : 'off');
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new BernoulliTrial(0).get();
	    }
	};
	RecencyFrequencyIframeInsertionExperiment = __decorate([
	    log('RecencyFrequencyIframeInsertionExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup])
	], RecencyFrequencyIframeInsertionExperiment);

	let MarmaladeBootstrap = class MarmaladeBootstrap {
	    constructor(bootstrapConfig, rfiiExperiment) {
	        this.bootstrapConfig = bootstrapConfig;
	        this.rfiiExperiment = rfiiExperiment;
	        this._marmaladeFinishedTimeout = 3000;
	        this._frame = document.createElement('IFRAME');
	    }
	    async get() {
	        if (window.adthrive.marmalade) {
	            return window.adthrive.marmalade.then(async (marmaladeData) => {
	                if (isRecencyAndFrequencyDataPresent(marmaladeData) || this.rfiiExperiment.result) {
	                    await addIframeToPage(this._frame, this.bootstrapConfig.recencyFrequencyIframeLocation).then(() => {
	                        logger.event('MarmaladeBootstrap', 'recencyFrequencyIframeAdded');
	                    });
	                }
	                return marmaladeData;
	            });
	        }
	        const marmaladeFinished = new Promise(resolve => {
	            window.adthrive.marmaladeFinished = resolve;
	        });
	        const timeout = new Promise(resolve => {
	            const id = setTimeout(() => {
	                clearTimeout(id);
	                resolve({});
	            }, this._marmaladeFinishedTimeout);
	        });
	        return Promise.race([marmaladeFinished, timeout]);
	    }
	};
	MarmaladeBootstrap = __decorate([
	    log('MarmaladeBootstrap'),
	    injectable(),
	    __metadata("design:paramtypes", [BootstrapConfig, RecencyFrequencyIframeInsertionExperiment])
	], MarmaladeBootstrap);
	const addIframeToPage = (frame, src) => {
	    let resolveIframeLoadedPromise;
	    const iframeLoadedPromise = new Promise(resolve => {
	        resolveIframeLoadedPromise = resolve;
	    });
	    frame.onload = () => {
	        resolveIframeLoadedPromise();
	    };
	    frame.src = src;
	    frame.id = 'adthrive-mcmp';
	    frame.style.display = 'none';
	    document.body.appendChild(frame);
	    return iframeLoadedPromise;
	};
	const isRecencyAndFrequencyDataPresent = (marmaladeData) => {
	    return 'mcmp' in marmaladeData;
	};

	let PrebidBootstrap = class PrebidBootstrap {
	    constructor({ baseUrl }) {
	        this._url = `${baseUrl}/vendor/prebid/prebid.min.js`;
	    }
	    async load() {
	        this.init();
	        return await importScript(this._url).then(() => true);
	    }
	    init() {
	        window.pbjs = window.pbjs || {};
	        window.pbjs.que = window.pbjs.que || [];
	    }
	};
	PrebidBootstrap = __decorate([
	    log('PrebidBootstrap'),
	    injectable(),
	    __metadata("design:paramtypes", [BootstrapConfig])
	], PrebidBootstrap);

	let WebVitalsBootstrap = class WebVitalsBootstrap {
	    constructor(_bootstrapConfig) {
	        this._bootstrapConfig = _bootstrapConfig;
	        this._url = 'https://unpkg.com/web-vitals@2.0.1/dist/web-vitals.umd.js';
	    }
	    load() {
	        if (this._bootstrapConfig.webVitalsEnabled) {
	            return this.import();
	        }
	        else {
	            return Promise.resolve(true);
	        }
	    }
	    async import() {
	        return await importScript(this._url, false, true);
	    }
	};
	WebVitalsBootstrap = __decorate([
	    log('WebVitalsBootstrap'),
	    injectable(),
	    __metadata("design:paramtypes", [BootstrapConfig])
	], WebVitalsBootstrap);

	let Bootstrap = class Bootstrap {
	    constructor(bootstrapConfig, _amazon, _waitForAmazon, _gam, _marmalade, _prebid, _webVitals) {
	        this.bootstrapConfig = bootstrapConfig;
	        this._amazon = _amazon;
	        this._waitForAmazon = _waitForAmazon;
	        this._gam = _gam;
	        this._marmalade = _marmalade;
	        this._prebid = _prebid;
	        this._webVitals = _webVitals;
	    }
	    async run() {
	        let webVitalLoader;
	        let marmaladeRes;
	        return Promise.all([
	            this._run(() => this._amazon.load(), { wait: this._waitForAmazon.result }),
	            this._run(() => this._gam.load(), { required: true }).catch(error => this.gamFallback(error && error.result, webVitalLoader, marmaladeRes)),
	            (marmaladeRes = this._run(() => this._marmalade.get())),
	            this._run(() => this._prebid.load()),
	            this._run(() => {
	                webVitalLoader = this._webVitals.load();
	                return webVitalLoader;
	            }, { wait: false }),
	            domReady(),
	        ]).then(([amazon, gam, marmalade, prebid, webvitals]) => ({
	            amazon,
	            gam,
	            marmalade,
	            prebid,
	            webvitals,
	        }));
	    }
	    gamFallback(message, webvitals, marmalade) {
	        this.bootstrapConfig.gptLibFailed = true;
	        if (!this.bootstrapConfig.webVitalsEnabled) {
	            this.bootstrapConfig.webVitalsEnabled = true;
	            webvitals = this._webVitals.load();
	        }
	        return webvitals.then(() => marmalade.then(result => Promise.reject({ message, marmalade: result })));
	    }
	    _run(fn, { required = false, wait = true } = {}) {
	        const started = now$2();
	        const done = (result) => {
	            const finished = now$2();
	            return {
	                result,
	                started,
	                finished,
	                duration: finished - started,
	            };
	        };
	        const timed = fn().then(done, err => {
	            return required ? Promise.reject(done(err.message)) : done(err.message);
	        });
	        return wait ? timed : Promise.resolve(done(true));
	    }
	};
	Bootstrap = __decorate([
	    injectable(),
	    __metadata("design:paramtypes", [BootstrapConfig,
	        AmazonBootstrap,
	        AmazonHoldLoadExperiment,
	        GAMBootstrap,
	        MarmaladeBootstrap,
	        PrebidBootstrap,
	        WebVitalsBootstrap])
	], Bootstrap);

	let Amazon = class Amazon {
	    constructor(adthrive, bootstrapConfig) {
	        this.pubId = '4fbba76f-7987-4fa2-9733-c27eb3a2170b';
	        this.adUnitExclusions = new Set(['Video_StickyOutstream', 'Interstitial']);
	        const amazonEnabled = bootstrapConfig.amazonEnabled;
	        this.enabled = amazonEnabled && adthrive.siteAds.adOptions.amazonUAM === true;
	    }
	};
	Amazon = __decorate([
	    singleton(),
	    __param(0, inject('AdThrive')),
	    __metadata("design:paramtypes", [Object, BootstrapConfig])
	], Amazon);

	let AuctionOptions = class AuctionOptions {
	    constructor() {
	        this.bidders = ['unruly', 'districtm', 'undertone', '33across'];
	    }
	};
	AuctionOptions = __decorate([
	    singleton()
	], AuctionOptions);

	let CCPA = class CCPA {
	    constructor() {
	        this.nonCompliantBidders = ['unruly'];
	        this.ccpaNotApplicable = '1---';
	        this.ccpaOptIn = '1YNY';
	        this.ccpaOptOut = '1YYY';
	        this.required = isPacific();
	        this.required = isPacific();
	        this.privacyString = readCookie('usprivacy');
	        this.gpcEnabled = localStorage.getItem('adthrive_gpc');
	        this.userOptedOut = this.privacyString === this.ccpaOptOut ? true : false;
	        if (this.required) {
	            this.comscoreParams = this.userOptedOut ? '0' : '1';
	        }
	    }
	    get enabled() {
	        return this.required && this.userOptedOut;
	    }
	};
	CCPA = __decorate([
	    singleton(),
	    __metadata("design:paramtypes", [])
	], CCPA);

	class ClsOptions {
	    constructor() {
	        this._clsGlobalData = getClsGlobal();
	    }
	    get enabled() {
	        return this._clsGlobalData && this._clsGlobalData.siteAds;
	    }
	    set siteAds(data) {
	        this._clsGlobalData.siteAds = data;
	    }
	    get siteAds() {
	        return this._clsGlobalData.siteAds;
	    }
	    set disableAds(data) {
	        this._clsGlobalData.disableAds = data;
	    }
	    get disableAds() {
	        return this._clsGlobalData.disableAds;
	    }
	    set enabledLocations(data) {
	        this._clsGlobalData.enabledLocations = data;
	    }
	    get enabledLocations() {
	        return this._clsGlobalData.enabledLocations;
	    }
	    get injectedFromPlugin() {
	        return this._clsGlobalData.injectedFromPlugin;
	    }
	    set injectedFromPlugin(status) {
	        this._clsGlobalData.injectedFromPlugin = status;
	    }
	    get injectedFromSiteAds() {
	        return this._clsGlobalData.injectedFromSiteAds;
	    }
	    set injectedFromSiteAds(status) {
	        this._clsGlobalData.injectedFromSiteAds = status;
	    }
	    overwriteInjectedSlots(slots) {
	        this._clsGlobalData.injectedSlots = slots;
	    }
	    setInjectedSlots(slot) {
	        this._clsGlobalData.injectedSlots.push(slot);
	    }
	    get injectedSlots() {
	        return this._clsGlobalData.injectedSlots;
	    }
	    setInjectedScripts(script) {
	        this._clsGlobalData.injectedScripts = this._clsGlobalData.injectedScripts || [];
	        this._clsGlobalData.injectedScripts.push(script);
	    }
	    get getInjectedScripts() {
	        return this._clsGlobalData.injectedScripts;
	    }
	    setExperiment(key, val) {
	        this._clsGlobalData.experiments = this._clsGlobalData.experiments || [];
	        this._clsGlobalData.experiments[key] = val;
	    }
	    getExperiment(key) {
	        return this._clsGlobalData.experiments && this._clsGlobalData.experiments[key];
	    }
	    get branch() {
	        return this._clsGlobalData.branch;
	    }
	    get bucket() {
	        return this._clsGlobalData.bucket;
	    }
	    set videoDisabledFromPlugin(status) {
	        this._clsGlobalData.videoDisabledFromPlugin = status;
	    }
	    get videoDisabledFromPlugin() {
	        return this._clsGlobalData.videoDisabledFromPlugin;
	    }
	    set targetDensityLog(data) {
	        this._clsGlobalData.targetDensityLog = data;
	    }
	    get targetDensityLog() {
	        return this._clsGlobalData.targetDensityLog;
	    }
	}

	let Context = class Context {
	    constructor(adthrive) {
	        this.connectionTargeting = [];
	        const { bucket, plugin, branch, debug, deployment, baseUrl, fastAds, siteAds, styleUrl, invalidTraffic, integration } = adthrive;
	        const { tablet, desktop } = siteAds.breakpoints;
	        this.baseUrl = baseUrl;
	        this.branch = branch;
	        this.bucket = bucket;
	        this.plugin = plugin;
	        this.fastAds = fastAds;
	        this.invalidTraffic = invalidTraffic;
	        this.deployment = deployment;
	        this.domain = window.location.host;
	        this.device = deviceByBreakpoint(tablet, desktop);
	        this.pageUrl = window.location.href;
	        this.pageviewKey = ulid();
	        this.querystring = parseQueryString();
	        this.sessionKey = getOrSetSessionValue('session_key', () => ulid(), 1800000);
	        this.styleUrl = styleUrl;
	        this.debug = debug;
	        this.integration = integration;
	        const adsMinPerformance = window.performance
	            .getEntriesByType('resource')
	            .filter(resource => resource.name.indexOf('ads.min.js') > -1 && resource.name.indexOf('ads.adthrive.com') > -1)[0];
	        if (adsMinPerformance) {
	            const durationStr = Math.round(adsMinPerformance.responseEnd - adsMinPerformance.startTime).toString();
	            if (durationStr !== 'NaN') {
	                this.adsMinLoadDuration = [durationStr];
	            }
	        }
	        const connection = window.navigator && (window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection);
	        if (connection) {
	            if (connection.effectiveType) {
	                this.connectionTargeting.push(`niet:${connection.effectiveType}`);
	            }
	            if (connection.downlink || connection.bandwidth) {
	                this.connectionTargeting.push(`dl:${connection.downlink || connection.bandwidth}`);
	            }
	        }
	    }
	};
	Context = __decorate([
	    singleton(),
	    __param(0, inject('AdThrive')),
	    __metadata("design:paramtypes", [Object])
	], Context);

	const standardUnitHeight = 250;
	const mobileAsideUnitHeight = 50;
	const desktopAsideUnitHeight = 90;
	let CLSOptimizedAds = class CLSOptimizedAds {
	    constructor(adthrive, _context, _abgroup, _clsOptions) {
	        this.adthrive = adthrive;
	        this._context = _context;
	        this._abgroup = _abgroup;
	        this._clsOptions = _clsOptions;
	        this._defaultHeight = standardUnitHeight;
	        this._map = new Map([
	            [
	                'phone',
	                {
	                    Content: standardUnitHeight,
	                    Recipe: standardUnitHeight,
	                    Header: mobileAsideUnitHeight,
	                    Footer: mobileAsideUnitHeight,
	                    Below_Post: standardUnitHeight,
	                    Sidebar: standardUnitHeight,
	                },
	            ],
	            [
	                'tablet',
	                {
	                    Content: standardUnitHeight,
	                    Recipe: standardUnitHeight,
	                    Header: desktopAsideUnitHeight,
	                    Footer: desktopAsideUnitHeight,
	                    Below_post: standardUnitHeight,
	                    Sidebar: standardUnitHeight,
	                },
	            ],
	            [
	                'desktop',
	                {
	                    Content: standardUnitHeight,
	                    Recipe: standardUnitHeight,
	                    Header: desktopAsideUnitHeight,
	                    Footer: desktopAsideUnitHeight,
	                    Below_Post: standardUnitHeight,
	                    Sidebar: standardUnitHeight,
	                },
	            ],
	        ]);
	        if (this._clsOptions.enabled) {
	            const clsSiteSpecificExperimentKey = 'clsins_ss';
	            const clsExperimentResult = this._clsOptions.getExperiment(clsSiteSpecificExperimentKey);
	            if (clsExperimentResult) {
	                this._abgroup.set(clsSiteSpecificExperimentKey, clsExperimentResult);
	            }
	            const clsScriptsOnPage = ['cls-insertion', 'cls-header-insertion', 'cls-disable-ads'];
	            clsScriptsOnPage
	                .filter(clsScript => {
	                if (this._clsOptions.branch) {
	                    const elementId = `${clsScript}-${this._clsOptions.branch}`;
	                    const selector = 'script[id^=' + elementId + ']';
	                    return document.querySelectorAll(selector).length > 0;
	                }
	                return false;
	            })
	                .forEach(insertedScriptName => this._clsOptions.setInjectedScripts(insertedScriptName));
	        }
	    }
	    get enabled() {
	        return (this.adthrive.siteAds.adOptions.clsOptimizedAds ||
	            (this._clsOptions.enabled && (this._clsOptions.injectedFromPlugin || this._clsOptions.injectedFromSiteAds)));
	    }
	    getDivHeight(adUnitLocation, device) {
	        const adUnitsByDevice = this._map.get(device);
	        return (adUnitsByDevice && adUnitsByDevice[adUnitLocation]) || this._defaultHeight;
	    }
	    setStyle(element, location) {
	        if (location === 'Footer' || (this.enabled && this._map.get(this._context.device)[location])) {
	            element.style.minHeight = `${this._map.get(this._context.device)[location]}px`;
	            element.classList.add('adthrive-ad-cls');
	        }
	    }
	};
	CLSOptimizedAds = __decorate([
	    singleton(),
	    __param(0, inject('AdThrive')),
	    __metadata("design:paramtypes", [Object, Context,
	        ABGroup,
	        ClsOptions])
	], CLSOptimizedAds);

	let Comscore = class Comscore {
	    constructor(adthrive) {
	        this.tracker = true;
	        this.gdpr = false;
	        this._footerMessages = new Map([
	            ['FamilyParenting', 'CafeMedia Family & Parenting'],
	            ['Finance', 'CafeMedia Finance'],
	            ['Food', 'CafeMedia Food'],
	            ['General', 'CafeMedia'],
	            ['HomeDIY', 'CafeMedia Home/DIY'],
	            ['Lifestyle', 'CafeMedia Lifestyle'],
	            ['Pets', 'CafeMedia Pets'],
	            ['Tech', 'CafeMedia Tech'],
	            ['Travel', 'CafeMedia Travel'],
	        ]);
	        const { comscore, comscoreFooter } = adthrive.siteAds.adOptions;
	        this.category = defaultTo(comscore, 'General');
	        this.comscore = defaultTo(comscoreFooter, true);
	        this.comscoreMessage = defaultTo(this._footerMessages.get(this.category), 'CafeMedia');
	    }
	};
	Comscore = __decorate([
	    singleton(),
	    __param(0, inject('AdThrive')),
	    __metadata("design:paramtypes", [Object])
	], Comscore);

	let DisableAds = class DisableAds {
	    constructor(adthrive, _clsOptions) {
	        this.adthrive = adthrive;
	        this._clsOptions = _clsOptions;
	        this.all = false;
	        this.content = false;
	        this.recipe = false;
	        this.video = false;
	        this.locations = new Set();
	        this.reasons = new Set();
	        this._clsDivs = ['adthrive-below-post', 'adthrive-content', 'adthrive-header', 'adthrive-recipe', 'adthrive-sidebar'];
	        if (this.urlHasEmail(window.location.href) || this.urlHasEmail(window.document.referrer)) {
	            this.all = true;
	            this.reasons.add('all_email');
	            this.removeClsDivs(this._clsDivs);
	        }
	        try {
	            if (document.body.classList.contains('adthrive-disable-all')) {
	                this.all = true;
	                this.reasons.add('all_plugin');
	            }
	            if (document.body.classList.contains('adthrive-disable-content')) {
	                this.content = true;
	                this.recipe = true;
	                this.locations.add('Content');
	                this.locations.add('Recipe');
	                this.reasons.add('content_plugin');
	            }
	            if (document.querySelector('.tag-novideo') !== null) {
	                this.video = true;
	                this.locations.add('Video');
	                this.reasons.add('video_tag');
	            }
	            if (document.body.classList.contains('adthrive-disable-video')) {
	                this.video = true;
	                this.locations.add('Video');
	                this.reasons.add('video_plugin');
	            }
	        }
	        catch (err) {
	            logger.error('DisableAds', 'constructor', { message: err.message });
	            const support = 'classList' in document.createElement('_');
	            logger.error('BodyDeviceClassComponent', 'init.support', { support });
	            const supportBody = 'classList' in document.body;
	            logger.error('BodyDeviceClassComponent', 'init.supportBody', { supportBody });
	        }
	    }
	    removeClsDivs(selectors) {
	        if (!this._clsOptions.enabled) {
	            return;
	        }
	        const filteredSlots = this._clsOptions.injectedSlots.filter((slot) => {
	            const currentAdUnit = slot.element;
	            let shouldFilter = false;
	            if (currentAdUnit.parentNode && selectors.some(selector => currentAdUnit.classList.contains(selector))) {
	                currentAdUnit.parentNode.removeChild(currentAdUnit);
	                shouldFilter = true;
	            }
	            return !shouldFilter;
	        });
	        this._clsOptions.overwriteInjectedSlots(filteredSlots);
	    }
	    disableAllAds(patterns) {
	        if (!patterns || urlMatch(patterns)) {
	            this.all = true;
	            this.reasons.add('all_page');
	            this.removeClsDivs(this._clsDivs);
	        }
	    }
	    disableContentAds(patterns) {
	        if (!patterns || urlMatch(patterns)) {
	            this.content = true;
	            this.recipe = true;
	            this.locations.add('Content');
	            this.locations.add('Recipe');
	            this.reasons.add('content_page');
	            this.removeClsDivs(['adthrive-content', 'adthrive-recipe']);
	        }
	    }
	    disablePlaylistPlayers(patterns) {
	        if (!patterns || urlMatch(patterns)) {
	            this.video = true;
	            this.locations.add('Video');
	            this.reasons.add('video_page');
	            this.adthrive.siteAds.videoPlayers ? this._removeCLSVideoPlayers() : this._removeLegacyCLSVideoPlayers();
	        }
	    }
	    _removeCLSVideoPlayers() {
	        var _a;
	        (_a = this.adthrive.siteAds.videoPlayers) === null || _a === void 0 ? void 0 : _a.players.filter(player => player.type === "stickyPlaylist"  || player.type === "sekindo" ).map(player => document.querySelectorAll(`#cls-video-container-${player.playlistId}`)).forEach(clsElements => {
	            var _a;
	            for (let i = 0; i < clsElements.length; i++) {
	                const currentAdUnit = clsElements[i];
	                (_a = currentAdUnit.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(currentAdUnit);
	            }
	        });
	    }
	    _removeLegacyCLSVideoPlayers() {
	        var _a, _b;
	        const playlistPlayerId = (_a = this.adthrive.siteAds.video) === null || _a === void 0 ? void 0 : _a.jwPlaylistId;
	        if (playlistPlayerId) {
	            const clsAdUnits = document.querySelectorAll(`#cls-video-container-${playlistPlayerId}`);
	            for (let i = 0; i < clsAdUnits.length; i++) {
	                const currentAdUnit = clsAdUnits[i];
	                (_b = currentAdUnit.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(currentAdUnit);
	            }
	        }
	    }
	    urlHasEmail(url) {
	        if (!url) {
	            return false;
	        }
	        const hasAnEmail = /([A-Z0-9._%+-]+(@|%(25)*40)[A-Z0-9.-]+\.[A-Z]{2,})/i;
	        return hasAnEmail.exec(url) !== null;
	    }
	};
	DisableAds = __decorate([
	    singleton(),
	    __param(0, inject('AdThrive')),
	    __metadata("design:paramtypes", [Object, ClsOptions])
	], DisableAds);

	let RemoveLargeSizeExperiment = class RemoveLargeSizeExperiment extends Experiment {
	    constructor(abgroup) {
	        super();
	        this._result = false;
	        this._choices = [{ choice: true }, { choice: false }];
	        this.key = 'smhd100';
	        const cls = window.adthriveCLS;
	        const clsExperiments = cls && cls.experiments;
	        this._result = clsExperiments && this.key in clsExperiments ? clsExperiments[this.key] : this.run();
	        abgroup.set(this.key, this._result ? 'on' : 'off');
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new BernoulliTrial(0.1).get();
	    }
	};
	RemoveLargeSizeExperiment = __decorate([
	    log('RemoveLargeSizeExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup])
	], RemoveLargeSizeExperiment);

	let RemoveLargeSidebarExperiment = class RemoveLargeSidebarExperiment extends Experiment {
	    constructor(abgroup) {
	        super();
	        this._result = false;
	        this.key = 'smad300';
	        this._choices = [{ choice: true }, { choice: false }];
	        this._result = this.run();
	        abgroup.set(this.key, this._result ? 'on' : 'off');
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new BernoulliTrial(1).get();
	    }
	};
	RemoveLargeSidebarExperiment = __decorate([
	    log('RemoveLargeSidebarExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup])
	], RemoveLargeSidebarExperiment);

	let DynamicAdsMapper = class DynamicAdsMapper {
	    constructor(_adthrive, _adOptions, _removeLargeSizeExperiment, _removeLargeSidebarExperiment) {
	        this._adthrive = _adthrive;
	        this._adOptions = _adOptions;
	        this._removeLargeSizeExperiment = _removeLargeSizeExperiment;
	        this._removeLargeSidebarExperiment = _removeLargeSidebarExperiment;
	        this._stickyOutstreamEnabled = false;
	        this._supportedSizes = [
	            [728, 90],
	            [300, 250],
	            [300, 600],
	            [320, 50],
	            [970, 250],
	            [160, 600],
	            [300, 1050],
	            [336, 280],
	            [970, 90],
	            [300, 50],
	            [320, 100],
	            [468, 60],
	            [250, 250],
	            [120, 240],
	            [1, 1],
	            [300, 300],
	            [552, 334],
	            [300, 420],
	            [728, 250],
	            [320, 300],
	            [300, 390],
	        ];
	        this._interstitialSupportedSizes = [
	            [320, 50],
	            [300, 250],
	            [300, 600],
	            [336, 280],
	            [320, 480],
	            [1, 1],
	        ];
	        this._adUnitAuctionPriorityMap = new Map([
	            ['Footer', 1],
	            ['Header', 2],
	            ['Sidebar', 3],
	            ['Content', 4],
	            ['Recipe', 5],
	            ['Sidebar_sticky', 6],
	            ['Below Post', 7],
	        ]);
	        this._adUnitSettingTemplate = {
	            auctionPriority: 8,
	            autosize: true,
	            classNames: [],
	            devices: ['tablet', 'phone', 'desktop'],
	            elementSelector: 'body',
	            every: 1,
	            lazy: false,
	            lazyMax: 0,
	            lazyMaxDefaulted: false,
	            location: '',
	            max: 1,
	            pageSelector: '',
	            position: 'beforebegin',
	            sequence: 1,
	            sizes: [],
	            skip: 0,
	            spacing: 0,
	            special: [],
	            sticky: false,
	            stickyOverlapSelector: '',
	        };
	        const { tablet, desktop } = _adthrive.siteAds.breakpoints;
	        this._device = deviceByBreakpoint(tablet, desktop);
	        this._adthriveSiteAds = this._adthrive.siteAds;
	        this._adthriveOptions = this._adthriveSiteAds.adOptions;
	        this.setupStickyOutstreamSettings();
	        this.setupInterstitialSettings();
	    }
	    setupStickyOutstreamSettings() {
	        const legacyOptions = this._adthriveSiteAds.video && this._adthriveSiteAds.video.partners && this._adthriveSiteAds.video.partners.stickyOutstream;
	        const newOptions = this._adthriveSiteAds.videoPlayers &&
	            this._adthriveSiteAds.videoPlayers.partners &&
	            this._adthriveSiteAds.videoPlayers.partners.stickyOutstream;
	        const stickyVideoOptions = legacyOptions || newOptions;
	        const stickyAdOptions = defaultTo((this._adthriveOptions && this._adthriveOptions.stickyOutstream) || stickyVideoOptions, null);
	        const stickyOutstreamConfig = stickyAdOptions && (this._device === 'phone' ? stickyAdOptions.mobile : stickyAdOptions.desktop);
	        if (stickyAdOptions && stickyOutstreamConfig) {
	            this._stickyOutstreamEnabled = stickyOutstreamConfig.enabled;
	            const dynamicAd = { ...this._adUnitSettingTemplate };
	            dynamicAd.sticky = true;
	            dynamicAd.location = 'Video_StickyOutstream';
	            dynamicAd.position = 'beforeend';
	            dynamicAd.pageSelector = defaultTo(stickyVideoOptions && stickyVideoOptions.blockedPageSelectors, '');
	            dynamicAd.sizes = this._device === 'phone' ? [[300, 50]] : [[300, 250]];
	            this._stickyOutstreamSettingTemplate = dynamicAd;
	        }
	    }
	    setupInterstitialSettings() {
	        const dynamicAd = { ...this._adUnitSettingTemplate };
	        const adOptions = this._adthriveOptions;
	        dynamicAd.location = 'Interstitial';
	        dynamicAd.sizes = this.interstitalSupportedSizes();
	        dynamicAd.pageSelector = defaultTo(adOptions.interstitialBlockedPageSelectors || adOptions.mobileInterstitialBlockedPageSelectors, '');
	        this._interstitialSettingTemplate = dynamicAd;
	    }
	    get() {
	        this._adthriveOptions;
	        this._adthrive.siteAds.adUnits.sort((a, b) => {
	            const aLocationName = a.location === 'Sidebar' && a.sticky ? a.location + '_sticky' : a.location;
	            const bLocationName = b.location === 'Sidebar' && b.sticky ? b.location + '_sticky' : b.location;
	            return this._adUnitAuctionPriorityMap.get(aLocationName) - this._adUnitAuctionPriorityMap.get(bLocationName);
	        });
	        const dynamicAds = this._adthrive.siteAds.adUnits
	            .filter((adUnit) => adUnit.dynamic !== undefined && adUnit.dynamic.enabled)
	            .map(adUnit => {
	            const location = adUnit.location.replace(/\s+/g, '_');
	            return {
	                auctionPriority: this._adUnitAuctionPriorityMap.get(location) || 8,
	                location,
	                sequence: defaultTo(adUnit.sequence, 1),
	                sizes: this.onlySupportedAdSizes(adUnit.adSizes).filter(size => this.excludeTallSizes(adUnit.location, size, adUnit.sequence, adUnit.adSizes)),
	                devices: adUnit.devices,
	                pageSelector: defaultTo(adUnit.dynamic.pageSelector, '').trim(),
	                elementSelector: defaultTo(adUnit.dynamic.elementSelector, '').trim(),
	                position: defaultTo(adUnit.dynamic.position, 'beforebegin'),
	                max: Math.floor(defaultTo(adUnit.dynamic.max, 0)),
	                spacing: defaultTo(adUnit.dynamic.spacing, 0),
	                skip: Math.floor(defaultTo(adUnit.dynamic.skip, 0)),
	                every: Math.max(Math.floor(defaultTo(adUnit.dynamic.every, 1)), 1),
	                classNames: adUnit.dynamic.classNames || [],
	                sticky: adUnit.location === 'Footer' ? true : adUnit.sticky,
	                stickyOverlapSelector: defaultTo(adUnit.stickyOverlapSelector, '').trim(),
	                autosize: adUnit.autosize,
	                special: defaultTo(adUnit.targeting, [])
	                    .filter((targeting) => targeting.key === 'special')
	                    .reduce((values, targeting) => values.concat(...targeting.value), []),
	                lazy: defaultTo(adUnit.dynamic.lazy, false),
	                lazyMax: defaultTo(adUnit.dynamic.lazyMax, 2),
	                lazyMaxDefaulted: adUnit.dynamic.lazyMax === 0 ? false : !adUnit.dynamic.lazyMax,
	            };
	        });
	        if (this._stickyOutstreamEnabled && this._stickyOutstreamSettingTemplate) {
	            dynamicAds.push(this._stickyOutstreamSettingTemplate);
	        }
	        if (this._adOptions.interstitial.gam && this._interstitialSettingTemplate) {
	            dynamicAds.push(this._interstitialSettingTemplate);
	        }
	        return dynamicAds;
	    }
	    onlySupportedAdSizes(sizes) {
	        return this._supportedSizes.filter(([w1, h1]) => {
	            return sizes.some(([w2, h2]) => w1 === w2 && h1 === h2);
	        });
	    }
	    interstitalSupportedSizes() {
	        return this._interstitialSupportedSizes.filter(([w1, h1]) => {
	            if (this._device !== 'phone' && `${w1},${h1}` === '320,50') {
	                return false;
	            }
	            return true;
	        });
	    }
	    excludeTallSizes(location, [w1, h1], sequence, adSizes) {
	        return !((location === 'Footer' && this._device === 'phone' && w1 === 320 && h1 === 100) ||
	            (location === 'Header' && h1 > 100 && this._removeLargeSizeExperiment.result) ||
	            (location === 'Sidebar' &&
	                sequence !== 9 &&
	                adSizes.some(([w1, h1]) => h1 <= 300) &&
	                h1 > 300 &&
	                this._removeLargeSidebarExperiment.result));
	    }
	};
	DynamicAdsMapper = __decorate([
	    injectable(),
	    __param(0, inject('AdThrive')),
	    __metadata("design:paramtypes", [Object, AdOptions,
	        RemoveLargeSizeExperiment,
	        RemoveLargeSidebarExperiment])
	], DynamicAdsMapper);

	let EBHOExperiment = class EBHOExperiment extends Experiment {
	    constructor(abgroup) {
	        super();
	        this.key = 'ebho';
	        this._choices = [
	            { choice: { name: 'ix_ebda', weight: 0.5 } },
	            { choice: { name: 'medianet_ebda', weight: 1 } },
	            { choice: { name: 'openx_ebda', weight: 0.5 } },
	            { choice: { name: 'pubmatic_ebda', weight: 1 } },
	            { choice: { name: 'rhythmone_ebda', weight: 1 } },
	            { choice: { name: 'rubicon_ebda', weight: 0.5 } },
	            { choice: { name: 'sharethrough_ebda', weight: 10 } },
	            { choice: { name: 'smart_ebda', weight: 1 } },
	            { choice: { name: 'sonobi_ebda', weight: 1 } },
	            { choice: { name: 'sovrn_ebda', weight: 10 } },
	            { choice: { name: 'emx_ebda', weight: 1 } },
	            { choice: { name: 'triplelift_ebda', weight: 1 } },
	            { choice: { name: 'verizon_ebda', weight: 10 } },
	            { choice: { name: 'yieldmo_ebda', weight: 10 } },
	        ];
	        this._result = this.run();
	        abgroup.set(this.key, this._result ? this._result.name : 'off');
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        const choices = this._choices
	            .map(item => item.choice)
	            .map(bidder => ({
	            choice: bidder,
	            weight: bidder.weight,
	        }));
	        const holdoutChoices = new WeightedChoice(choices);
	        if (holdoutChoices.totalWeight > 90) {
	            logger.warn('EBHOExperiment', 'constructor', 'Holdout experiment percentages totaled over 90');
	        }
	        return holdoutChoices.get();
	    }
	};
	__decorate([
	    sticky(),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", []),
	    __metadata("design:returntype", Object)
	], EBHOExperiment.prototype, "run", null);
	EBHOExperiment = __decorate([
	    log('EBHOExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup])
	], EBHOExperiment);

	let EBHO = class EBHO {
	    constructor(ebhoExperiment) {
	        this.bidder = ebhoExperiment.result;
	    }
	};
	EBHO = __decorate([
	    singleton(),
	    __metadata("design:paramtypes", [EBHOExperiment])
	], EBHO);

	let ImpressionLogExperiment = class ImpressionLogExperiment extends Experiment {
	    constructor(abgroup) {
	        super();
	        this._choices = [
	            { choice: 0, weight: 98.8 },
	            { choice: 1, weight: 0.2 },
	            { choice: 2, weight: 1 },
	        ];
	        this.key = 'loglevel';
	        this._result = this.run();
	        abgroup.set(this.key, this._result ? (this._result === 1 ? 'on' : 'log') : 'off');
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new WeightedChoice(this._choices).get();
	    }
	};
	__decorate([
	    sticky(),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", []),
	    __metadata("design:returntype", void 0)
	], ImpressionLogExperiment.prototype, "run", null);
	ImpressionLogExperiment = __decorate([
	    log('EventLogExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup])
	], ImpressionLogExperiment);

	let ImpressionLog = class ImpressionLog {
	    constructor(impressionLogExperiment) {
	        this.enabled = impressionLogExperiment.result;
	    }
	};
	ImpressionLog = __decorate([
	    singleton(),
	    __metadata("design:paramtypes", [ImpressionLogExperiment])
	], ImpressionLog);

	let Footer = class Footer {
	    constructor() {
	        this.elements = [];
	    }
	};
	Footer = __decorate([
	    singleton()
	], Footer);

	let GAM = class GAM {
	    constructor(adthrive) {
	        this.prefix = 'AdThrive';
	        this.networkCode = '18190176';
	        this._gamMCMEnabled = defaultTo(adthrive.siteAds.adOptions.gamMCMEnabled, false);
	        this._gamMCMChildNetworkCode = defaultTo(adthrive.siteAds.adOptions.gamMCMChildNetworkCode, '');
	        this.account =
	            this._gamMCMEnabled && this._gamMCMChildNetworkCode !== '' ? `${this.networkCode},${this._gamMCMChildNetworkCode}` : this.networkCode;
	        const excluded = new Set(['service', 'bidding', 'dynamicVersion']);
	        this.targeting = adthrive.siteAds.targeting
	            .filter(({ key }) => !excluded.has(key))
	            .map(({ key, value }) => {
	            if (typeof value === 'boolean') {
	                value = String(value);
	            }
	            return { key, value };
	        });
	    }
	};
	GAM = __decorate([
	    singleton(),
	    __param(0, inject('AdThrive')),
	    __metadata("design:paramtypes", [Object])
	], GAM);

	let GDPR = class GDPR {
	    constructor(adthrive) {
	        this.cafeMediaVendorId = 996;
	        this.nonCompliantBidders = ['deepintent', 'roundel', 'yahoossp'];
	        this.isRequired = adthrive.gdpr === 'true' ? true : false;
	    }
	    get enabled() {
	        return this.isRequired;
	    }
	};
	GDPR = __decorate([
	    singleton(),
	    __param(0, inject('AdThrive')),
	    __metadata("design:paramtypes", [Object])
	], GDPR);

	let HBHOExperiment = class HBHOExperiment extends Experiment {
	    constructor() {
	        super();
	        this.biddersHeldOut = [];
	        this.key = 'hbho';
	        this._result = [];
	        this._choices = [
	            { choice: ['33across'], threshold: 0.1 },
	            { choice: ['appnexus'], threshold: 0.01 },
	            { choice: ['brightroll'], threshold: 0.01 },
	            { choice: ['concert'], threshold: 0.05 },
	            { choice: ['conversant'], threshold: 0.1 },
	            { choice: ['criteo'], threshold: 0.01 },
	            { choice: ['deepIntent'], threshold: 0.01 },
	            { choice: ['districtm'], threshold: 0.35 },
	            { choice: ['districtmDMX'], threshold: 0.25 },
	            { choice: ['grid'], threshold: 0.005 },
	            { choice: ['gumgum'], threshold: 0.01 },
	            { choice: ['kargo'], threshold: 0.01 },
	            { choice: ['ix'], threshold: 0.005 },
	            { choice: ['nativo'], threshold: 0.1 },
	            { choice: ['openx'], threshold: 0.01 },
	            { choice: ['pubmatic'], threshold: 0.01 },
	            { choice: ['roundel'], threshold: 0.1 },
	            { choice: ['rubicon'], threshold: 0.01 },
	            { choice: ['sharethrough'], threshold: 0.1 },
	            { choice: ['teads'], threshold: 0.01 },
	            { choice: ['triplelift'], threshold: 0.005 },
	            { choice: ['ttd'], threshold: 0.01 },
	            { choice: ['undertone'], threshold: 0.01 },
	            { choice: ['unruly'], threshold: 0.1 },
	            { choice: ['verizon'], threshold: 0.01 },
	            { choice: ['yahoossp'], threshold: 0.01 },
	            { choice: ['yieldmo'], threshold: 0.01 },
	        ];
	        this._result = this.run();
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return this._choices.filter(({ threshold }) => new BernoulliTrial(threshold).get()).map(({ choice }) => choice[0]);
	    }
	};
	__decorate([
	    sticky(),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", []),
	    __metadata("design:returntype", void 0)
	], HBHOExperiment.prototype, "run", null);
	HBHOExperiment = __decorate([
	    log('HBHOExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [])
	], HBHOExperiment);

	let HBHO = class HBHO {
	    constructor(hbhoExperiment) {
	        this.bidders = hbhoExperiment.result;
	    }
	};
	HBHO = __decorate([
	    singleton(),
	    __metadata("design:paramtypes", [HBHOExperiment])
	], HBHO);

	let IdentityApi = class IdentityApi {
	    constructor(adthrive) {
	        this.adthrive = adthrive;
	        this.apiReady = new Emitter();
	        this.optIn = new Emitter();
	    }
	    get enabled() {
	        return defaultTo(this.adthrive.siteAds.adOptions.liveRampATS, false);
	    }
	};
	IdentityApi = __decorate([
	    singleton(),
	    __param(0, inject('AdThrive')),
	    __metadata("design:paramtypes", [Object])
	], IdentityApi);

	let IDHOExperiment = class IDHOExperiment extends Experiment {
	    constructor(abgroup) {
	        super();
	        this._choices = [
	            { choice: { name: 'id5Id', weight: 5 } },
	            { choice: { name: 'identityLink', weight: 1 } },
	            { choice: { name: 'unifiedId', weight: 1 } },
	            { choice: { name: 'pubCommonId', weight: 5 } },
	            { choice: { name: 'criteo', weight: 25 } },
	            { choice: { name: 'connectId', weight: 5 } },
	        ];
	        this.key = 'idho';
	        this._result = this.run();
	        abgroup.set(this.key, this.result ? this.result.name : 'off');
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        const choices = this._choices
	            .map(item => item.choice)
	            .map(bidder => ({
	            choice: bidder,
	            weight: bidder.weight,
	        }));
	        const holdoutChoices = new WeightedChoice(choices);
	        if (holdoutChoices.totalWeight > 90) {
	            logger.warn('IDHOExperiment', 'constructor', 'Holdout experiment percentages totaled over 90');
	        }
	        return holdoutChoices.get();
	    }
	};
	__decorate([
	    sticky(),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", []),
	    __metadata("design:returntype", Object)
	], IDHOExperiment.prototype, "run", null);
	IDHOExperiment = __decorate([
	    log('IDHOExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup])
	], IDHOExperiment);

	let IDHO = class IDHO {
	    constructor(idhoExperiment) {
	        this.subModule = idhoExperiment.result;
	    }
	};
	IDHO = __decorate([
	    singleton(),
	    __metadata("design:paramtypes", [IDHOExperiment])
	], IDHO);

	let InfiniteScroll = class InfiniteScroll {
	    constructor() {
	        this.refreshSlots = new Set(['Footer']);
	        this.ajaxType = false;
	    }
	};
	InfiniteScroll = __decorate([
	    singleton()
	], InfiniteScroll);

	let BelowPostMarginExperiment = class BelowPostMarginExperiment extends Experiment {
	    constructor(abgroup) {
	        super();
	        this.key = 'lzbpvp';
	        this._choices = [
	            { choice: 0.75, weight: 40 },
	            { choice: 0.25, weight: 20 },
	            { choice: 0.125, weight: 20 },
	            { choice: 0, weight: 20 },
	        ];
	        this._result = this.run();
	        abgroup.set(this.key, String(this._result));
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new WeightedChoice(this._choices).get();
	    }
	};
	__decorate([
	    sticky(),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", []),
	    __metadata("design:returntype", Number)
	], BelowPostMarginExperiment.prototype, "run", null);
	BelowPostMarginExperiment = __decorate([
	    log('BelowPostMarginExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup])
	], BelowPostMarginExperiment);

	let ContentMarginExperiment = class ContentMarginExperiment extends Experiment {
	    constructor(abgroup) {
	        super();
	        this.key = 'lzcvp';
	        this._choices = [
	            { choice: 2, weight: 60 },
	            { choice: 1.25, weight: 10 },
	            { choice: 1, weight: 10 },
	            { choice: 0.75, weight: 10 },
	            { choice: 0.5, weight: 10 },
	        ];
	        this._result = this.run();
	        abgroup.set(this.key, String(this._result));
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new WeightedChoice(this._choices).get();
	    }
	};
	__decorate([
	    sticky(),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", []),
	    __metadata("design:returntype", Number)
	], ContentMarginExperiment.prototype, "run", null);
	ContentMarginExperiment = __decorate([
	    log('ContentMarginExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup])
	], ContentMarginExperiment);

	let LZHBExperiment = class LZHBExperiment extends Experiment {
	    constructor(abgroup) {
	        super();
	        this.key = 'lzhb';
	        this._choices = [{ choice: true }, { choice: false }];
	        this._result = this.run();
	        abgroup.set(this.key, this._result ? 'on' : 'off');
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new BernoulliTrial(0.9).get();
	    }
	};
	__decorate([
	    sticky(),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", []),
	    __metadata("design:returntype", void 0)
	], LZHBExperiment.prototype, "run", null);
	LZHBExperiment = __decorate([
	    log('LZHBExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup])
	], LZHBExperiment);

	let LazyLoad = class LazyLoad {
	    constructor(lzhb, contentMargin, belowPostMargin) {
	        this._defaultViewPort = 2;
	        this._infScrollViewPort = 4;
	        this.googleLazyLoadSettings = {
	            disabled: {
	                fetchMarginPercent: -1,
	                renderMarginPercent: -1,
	                mobileScaling: -1,
	            },
	            gam: {
	                fetchMarginPercent: 600,
	                renderMarginPercent: 100,
	                mobileScaling: 1.5,
	            },
	            hbMarginPercent: 700,
	        };
	        this.lzhb = lzhb.result;
	        this.viewports = {
	            content: contentMargin.result,
	            belowPost: belowPostMargin.result,
	            default: this._defaultViewPort,
	            infScroll: this._infScrollViewPort,
	        };
	    }
	};
	LazyLoad = __decorate([
	    singleton(),
	    __metadata("design:paramtypes", [LZHBExperiment, ContentMarginExperiment, BelowPostMarginExperiment])
	], LazyLoad);

	let LiveRampAts = class LiveRampAts {
	    constructor(adthrive) {
	        this._url = 'https://ats.rlcdn.com/ats.js';
	        this._config = {
	            placementID: 111,
	            storageType: 'localStorage',
	            detectionType: 'direct',
	            logging: 'error',
	        };
	        this.enabled = defaultTo(adthrive.siteAds.adOptions.liveRampATS, true);
	    }
	};
	LiveRampAts = __decorate([
	    singleton(),
	    __param(0, inject('AdThrive')),
	    __metadata("design:paramtypes", [Object])
	], LiveRampAts);

	const marmaladeAdUnits = {
	    AS: {
	        location: 'Sponsor_Tile',
	        selectors: ['h1.entry-title', 'h1.post-title', 'h1.posttitle', 'h1.story-title', 'h1.heading', '.post > .post-title'],
	        size: [
	            [300, 55],
	            [234, 60],
	        ],
	        position: 'afterend',
	        classNames: ['adthrive-sponsor-tile'],
	        find: (selector) => document.querySelector(selector),
	        requireSelectorMatch: true,
	        lazy: false,
	    },
	    NR: {
	        location: 'Native_Recipe',
	        sequence: 1,
	        selectors: [
	            '[itemscope][itemtype$="//schema.org/Recipe"] [itemprop="recipeIngredient"]:last-child',
	            '[itemscope][itemtype$="//schema.org/Recipe"] [itemprop="ingredients"]:last-child',
	            '[itemscope][itemtype$="//schema.org/Recipe"] .ingredient:last-child',
	            '.wprm-recipe-ingredient:last-child',
	            '#recipe .ingredients',
	            '.wprm-recipe-ingredients-container',
	            '.tasty-recipe-ingredients',
	            '[class*="recipe"] [class*="ingredient"] ul li:last-child',
	            '[class*="create-ingredient"] ul li:last-child',
	            '[class*="tasty-recipe"] [class*="ingredient"] p:last-child',
	            '[class*=recipe] [class*=recipe] ~ p + ul li:last-child',
	        ],
	        size: [
	            [225, 65],
	            [234, 60],
	            [300, 100],
	        ],
	        position: 'afterend',
	        classNames: ['adthrive-native-recipe'],
	        find: (selector) => {
	            const matches = document.querySelectorAll(selector);
	            if (matches.length > 0) {
	                return matches[matches.length - 1];
	            }
	            return null;
	        },
	        requireSelectorMatch: false,
	        lazy: true,
	    },
	};

	let Marmalade = class Marmalade {
	    constructor(response) {
	        this.loaded = false;
	        this.campaigns = [];
	        this.siteCodes = [];
	        this.adViewability = [];
	        this.speed = navigator.connection && navigator.connection.effectiveType === '4g' ? '1' : '0';
	        this.adUnits = marmaladeAdUnits;
	        this.selectorMatches = [];
	        this.ortbSegments = new Map();
	        this.hvThreshold = 0.6;
	        this.mcmp = [];
	        this.flpProdIds = [];
	        this.activeCampaign = (campaign) => {
	            const now = Date.now();
	            return now >= this.parseDate(campaign.start_date).getTime() && now <= this.parseDate(campaign.expiration_date).getTime();
	        };
	        if (response) {
	            this.loaded = true;
	            const { host, page, adViewability } = response;
	            if (host && host.length) {
	                this.siteCodes = host[0].site_codes || [];
	            }
	            if (page && page.length) {
	                const campaigns = page[0].campaigns || [];
	                this.campaigns = campaigns.filter(this.activeCampaign);
	            }
	            if (adViewability && adViewability.length) {
	                this.adViewability = adViewability;
	            }
	            const marmladeData = this.getMcmpFlpIds();
	            this.mcmp = marmladeData.mcmp || [];
	            this.flpProdIds = marmladeData.flpProdIds || [];
	            this.ortbSegments = this.campaigns.reduce((acc, val) => {
	                const re = new RegExp(/(^iab(a|c))_(\d*)/);
	                const [, ortbType, , ortbSegmentId] = re.exec(val.dfp_id) || [];
	                const segment = acc.get(ortbType) || [];
	                segment.push({ id: ortbSegmentId });
	                acc.set(ortbType, segment);
	                return acc;
	            }, new Map());
	        }
	    }
	    isValidMarmaladeCampaign(campaign) {
	        const adUnitType = campaign.dfp_id.substring(0, 2);
	        const adUnit = this.adUnits[adUnitType];
	        if (adUnit) {
	            const match = adUnit.find(adUnit.selectors.join(','));
	            if (match) {
	                this.selectorMatches.push({ adUnit, match });
	            }
	            return !adUnit.requireSelectorMatch || !!match;
	        }
	        else {
	            return true;
	        }
	    }
	    getMcmpFlpIds() {
	        return this.campaigns
	            .filter(campaign => this.isValidMarmaladeCampaign(campaign))
	            .reduce((acc, campaign) => {
	            acc.mcmp.push(campaign.dfp_id);
	            campaign.flp_prod_id && acc.flpProdIds.push(...JSON.parse(campaign.flp_prod_id));
	            return acc;
	        }, { mcmp: [], flpProdIds: [] });
	    }
	    parseDate(input) {
	        const parts = input.split('-');
	        return new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
	    }
	};
	Marmalade = __decorate([
	    singleton(),
	    __param(0, inject('MarmaladeResponse')),
	    __metadata("design:paramtypes", [Object])
	], Marmalade);

	let Partners = class Partners {
	    constructor(adthrive) {
	        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8;
	        this._biddersConfig = new Map();
	        (_a = adthrive === null || adthrive === void 0 ? void 0 : adthrive.core) === null || _a === void 0 ? void 0 : _a.partners.forEach(bidderCoreConfig => {
	            if (bidderCoreConfig.bidder_name) {
	                const enabled = defaultTo(bidderCoreConfig.enabled, true);
	                const cpmMap = new Map();
	                if (bidderCoreConfig.cpm && bidderCoreConfig.cpm.length) {
	                    bidderCoreConfig.cpm.forEach((bidderCPM) => {
	                        cpmMap.set(bidderCPM.name, bidderCPM);
	                    });
	                }
	                this._biddersConfig.set(bidderCoreConfig.bidder_name, { bidder_name: bidderCoreConfig.bidder_name, enabled, cpmMap });
	            }
	        });
	        const adOptions = adthrive.siteAds.adOptions;
	        this.appNexus = adOptions.appNexus && defaultTo((_b = this._biddersConfig.get('appnexus')) === null || _b === void 0 ? void 0 : _b.enabled, true);
	        this.brightroll = defaultTo(adOptions.brightroll, true) && defaultTo((_c = this._biddersConfig.get('brightroll')) === null || _c === void 0 ? void 0 : _c.enabled, true);
	        this.concert = defaultTo(adOptions.concert, false) && defaultTo((_d = this._biddersConfig.get('concert')) === null || _d === void 0 ? void 0 : _d.enabled, false);
	        this.conversant = adOptions.conversant && defaultTo((_e = this._biddersConfig.get('conversant')) === null || _e === void 0 ? void 0 : _e.enabled, false);
	        this.criteo = defaultTo(adOptions.criteo, true) && defaultTo((_f = this._biddersConfig.get('criteo')) === null || _f === void 0 ? void 0 : _f.enabled, true);
	        this.deepIntent = defaultTo(adOptions.deepIntent, true) && defaultTo((_g = this._biddersConfig.get('deepintent')) === null || _g === void 0 ? void 0 : _g.enabled, true);
	        this.districtM = adOptions.districtM && defaultTo((_h = this._biddersConfig.get('districtm')) === null || _h === void 0 ? void 0 : _h.enabled, true);
	        this.districtMDMX = adOptions.districtM && defaultTo((_j = this._biddersConfig.get('districtmDMX')) === null || _j === void 0 ? void 0 : _j.enabled, true);
	        this.districtMDMXVideo = adOptions.districtM && defaultTo((_k = this._biddersConfig.get('districtmDMX')) === null || _k === void 0 ? void 0 : _k.enabled, true);
	        this.indexExchange = adOptions.indexExchange && defaultTo((_l = this._biddersConfig.get('ix')) === null || _l === void 0 ? void 0 : _l.enabled, true);
	        this.gumgum = defaultTo(adOptions.gumgum, true) && defaultTo((_m = this._biddersConfig.get('gumgum')) === null || _m === void 0 ? void 0 : _m.enabled, true);
	        this.kargo = defaultTo(adOptions.kargo, true) && defaultTo((_o = this._biddersConfig.get('kargo')) === null || _o === void 0 ? void 0 : _o.enabled, true);
	        this.mediaGrid = defaultTo(adOptions.mediaGrid, true) && defaultTo((_p = this._biddersConfig.get('grid')) === null || _p === void 0 ? void 0 : _p.enabled, true);
	        this.mediaGridVideo = defaultTo(adOptions.mediaGrid, true) && defaultTo((_q = this._biddersConfig.get('gridvid')) === null || _q === void 0 ? void 0 : _q.enabled, true);
	        this.nativo = defaultTo(adOptions.nativo, true) && defaultTo((_r = this._biddersConfig.get('nativo')) === null || _r === void 0 ? void 0 : _r.enabled, true);
	        this.openx = adOptions.openx && defaultTo((_s = this._biddersConfig.get('openx')) === null || _s === void 0 ? void 0 : _s.enabled, true);
	        this.pubMatic = defaultTo(adOptions.pubMatic, true) && defaultTo((_t = this._biddersConfig.get('pubmatic')) === null || _t === void 0 ? void 0 : _t.enabled, true);
	        this.rubicon = defaultTo(adOptions.rubicon, true) && defaultTo((_u = this._biddersConfig.get('rubicon')) === null || _u === void 0 ? void 0 : _u.enabled, true);
	        this.sharethrough = defaultTo(adOptions.sharethrough, true) && defaultTo((_v = this._biddersConfig.get('sharethrough')) === null || _v === void 0 ? void 0 : _v.enabled, true);
	        this.spotx = defaultTo((_w = this._biddersConfig.get('spotx')) === null || _w === void 0 ? void 0 : _w.enabled, true);
	        this.teads = defaultTo(adOptions.teads, true) && defaultTo((_x = this._biddersConfig.get('teads')) === null || _x === void 0 ? void 0 : _x.enabled, true);
	        this.roundel = defaultTo(adOptions.roundel, true) && defaultTo((_y = this._biddersConfig.get('roundel')) === null || _y === void 0 ? void 0 : _y.enabled, true);
	        this.telaria = defaultTo((_z = this._biddersConfig.get('telaria')) === null || _z === void 0 ? void 0 : _z.enabled, true);
	        this.thirtyThreeAcross = defaultTo(adOptions.thirtyThreeAcross, true) && defaultTo((_0 = this._biddersConfig.get('33across')) === null || _0 === void 0 ? void 0 : _0.enabled, true);
	        this.tripleLift = defaultTo(adOptions.tripleLift, true) && defaultTo((_1 = this._biddersConfig.get('triplelift')) === null || _1 === void 0 ? void 0 : _1.enabled, true);
	        this.ttd = defaultTo(adOptions.theTradeDesk, true) && defaultTo((_2 = this._biddersConfig.get('ttd')) === null || _2 === void 0 ? void 0 : _2.enabled, true);
	        this.undertone = defaultTo(adOptions.undertone, true) && defaultTo((_3 = this._biddersConfig.get('undertone')) === null || _3 === void 0 ? void 0 : _3.enabled, true);
	        this.unruly = defaultTo(adOptions.unruly, true) && defaultTo((_4 = this._biddersConfig.get('unruly')) === null || _4 === void 0 ? void 0 : _4.enabled, true);
	        this.verizon = defaultTo(adOptions.verizon, true) && defaultTo((_5 = this._biddersConfig.get('verizon')) === null || _5 === void 0 ? void 0 : _5.enabled, true);
	        this.oneVideo = defaultTo(adOptions.oneVideo, true) && defaultTo((_6 = this._biddersConfig.get('oneVideo')) === null || _6 === void 0 ? void 0 : _6.enabled, true);
	        this.yahoossp = defaultTo(adOptions.yahoossp, true) && defaultTo((_7 = this._biddersConfig.get('yahoossp')) === null || _7 === void 0 ? void 0 : _7.enabled, true);
	        this.yieldmo = defaultTo(adOptions.yieldmo, true) && defaultTo((_8 = this._biddersConfig.get('yieldmo')) === null || _8 === void 0 ? void 0 : _8.enabled, true);
	        this.amazonUAM = adOptions.amazonUAM;
	        const maybeNewPartners = adthrive.siteAds.videoPlayers && adthrive.siteAds.videoPlayers.partners;
	        const maybeLegacyPartners = adthrive.siteAds.video && adthrive.siteAds.video.partners;
	        const videoPartners = maybeNewPartners || maybeLegacyPartners || {};
	        this.video = {
	            amazonUAM: defaultTo(videoPartners.amazonUAM, true) && this.amazonUAM,
	            appNexus: defaultTo(videoPartners.appNexus, true) && this.appNexus,
	            conversant: defaultTo(videoPartners.conversant, false) && this.conversant,
	            criteo: defaultTo(videoPartners.criteo, true) && this.criteo,
	            districtM: defaultTo(videoPartners.districtM, true) && this.districtM,
	            districtMDMXVideo: defaultTo(videoPartners.districtM, true) && this.districtMDMXVideo,
	            gumgum: defaultTo(videoPartners.gumgum, true) && this.gumgum,
	            indexExchange: defaultTo(videoPartners.indexExchange, true) && this.indexExchange,
	            mediaGridVideo: defaultTo(videoPartners.mediaGrid, true) && this.mediaGridVideo,
	            oneVideo: defaultTo(videoPartners.oneVideo, true) && this.oneVideo,
	            openx: defaultTo(videoPartners.openx, true) && this.openx,
	            pubMatic: defaultTo(videoPartners.pubMatic, true) && this.pubMatic,
	            rubicon: defaultTo(videoPartners.rubicon, true) && this.rubicon,
	            sharethrough: defaultTo(videoPartners.sharethrough, true) && this.sharethrough,
	            spotx: defaultTo(videoPartners.spotx, true) && this.spotx,
	            telaria: defaultTo(videoPartners.telaria, false) && this.telaria,
	            tripleLift: defaultTo(videoPartners.tripleLift, true) && this.tripleLift,
	            ttd: defaultTo(videoPartners.ttd, true) && this.ttd,
	            yahoossp: defaultTo(videoPartners.yahoossp, true) && this.yahoossp,
	        };
	    }
	    getBidderConfig(name) {
	        return defaultTo(this._biddersConfig.get(name), { bidder_name: name, enabled: true, cpmMap: new Map() });
	    }
	};
	Partners = __decorate([
	    singleton(),
	    __param(0, inject('AdThrive')),
	    __metadata("design:paramtypes", [Object])
	], Partners);

	let SensOffExperiment = class SensOffExperiment extends Experiment {
	    constructor(adthrive) {
	        super();
	        this.key = 'SensOffExperiment';
	        this._choices = [];
	        this._sensCategories = defaultTo(adthrive.siteAds.adOptions.sensitiveCategories, []);
	        this._choices = this._sensCategories.map(item => {
	            return {
	                choice: [item],
	            };
	        });
	        this._result = this.run();
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return this._sensCategories.filter(() => new BernoulliTrial(0.01).get());
	    }
	};
	SensOffExperiment = __decorate([
	    log('SensOffExperiment'),
	    singleton(),
	    __param(0, inject('AdThrive')),
	    __metadata("design:paramtypes", [Object])
	], SensOffExperiment);

	let Site = class Site {
	    constructor(adthrive, _sensOffExperiment) {
	        this._sensOffExperiment = _sensOffExperiment;
	        this.id = adthrive.siteAds.siteId;
	        this.name = adthrive.siteAds.siteName;
	        this.verticals = adthrive.siteAds.adOptions.verticals;
	        this.sensitiveCategories = defaultTo(adthrive.siteAds.adOptions.sensitiveCategories, []);
	        this.sensCategoriesOff = this._sensOffExperiment.result;
	        this.filteredSensitiveCategories = this.sensitiveCategories.filter(category => this.sensCategoriesOff.indexOf(category) === -1);
	        this.breakpoints = adthrive.siteAds.breakpoints;
	        this.style = adthrive.style;
	    }
	};
	Site = __decorate([
	    singleton(),
	    __param(0, inject('AdThrive')),
	    __metadata("design:paramtypes", [Object, SensOffExperiment])
	], Site);

	let RubiconExperiment = class RubiconExperiment extends Experiment {
	    constructor(abgroup) {
	        super();
	        this._choices = [
	            { choice: 'both', weight: 90 },
	            { choice: 'client', weight: 9 },
	            { choice: 'server', weight: 1 },
	        ];
	        this.key = 'magnitedr';
	        this._result = this.run();
	        abgroup.set(this.key, this._result);
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new WeightedChoice(this._choices).get();
	    }
	};
	__decorate([
	    sticky(),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", []),
	    __metadata("design:returntype", void 0)
	], RubiconExperiment.prototype, "run", null);
	RubiconExperiment = __decorate([
	    log('RubiconExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup])
	], RubiconExperiment);

	let TripleLiftExperiment = class TripleLiftExperiment extends Experiment {
	    constructor(abgroup) {
	        super();
	        this._choices = [
	            { choice: 'both', weight: 99 },
	            { choice: 'client', weight: 1 },
	            { choice: 'server', weight: 0 },
	        ];
	        this.key = 'tripleliftdr';
	        this._result = this.run();
	        abgroup.set(this.key, this._result);
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new WeightedChoice(this._choices).get();
	    }
	};
	__decorate([
	    sticky(),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", []),
	    __metadata("design:returntype", void 0)
	], TripleLiftExperiment.prototype, "run", null);
	TripleLiftExperiment = __decorate([
	    log('TripleLiftExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup])
	], TripleLiftExperiment);

	let S2SExperiment = class S2SExperiment extends Experiment {
	    constructor(abgroup, tripleliftExperiment, rubiconExperiment) {
	        super();
	        this._result = ['33across', 'brightroll', 'conversant', 'deepintent', 'districtm', 'pubm_ss', 'yieldmo'];
	        this._choices = [
	            { choice: ['appnexus'], threshold: 0.05 },
	            { choice: ['grid'], threshold: 0.9 },
	            { choice: ['gumgum'], threshold: 0.02 },
	        ];
	        this.key = 'pbs2s';
	        this.addToS2SBidders('tripl_ss', tripleliftExperiment);
	        this.addToS2SBidders('rubi_ss', rubiconExperiment);
	        const active = this.run();
	        this._choices.forEach(({ choice }) => {
	            const bidder = choice[0];
	            if (active.indexOf(bidder) !== -1) {
	                this._result.push(bidder);
	                abgroup.set('pbs2s_' + bidder, 'on');
	            }
	            else {
	                abgroup.set('pbs2s_' + bidder, 'off');
	            }
	        });
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return this._choices.filter(({ threshold }) => new BernoulliTrial(threshold).get()).map(({ choice }) => choice[0]);
	    }
	    addToS2SBidders(bidder, experiment) {
	        if (experiment.result === 'both' || experiment.result === 'server') {
	            this._result.push(bidder);
	        }
	    }
	};
	__decorate([
	    sticky(),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", []),
	    __metadata("design:returntype", void 0)
	], S2SExperiment.prototype, "run", null);
	S2SExperiment = __decorate([
	    log('S2SExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup, TripleLiftExperiment, RubiconExperiment])
	], S2SExperiment);

	let Prebid = class Prebid {
	    constructor(s2sExperiment, _gam, _site) {
	        this._gam = _gam;
	        this._site = _site;
	        this.deals = [];
	        this.targetingKeys = [
	            'ADOMAIN',
	            'AD_ID',
	            'BIDDER',
	            'CACHE_ID',
	            'CACHE_HOST',
	            'DEAL',
	            'FORMAT',
	            'PRICE_BUCKET',
	            'SIZE',
	            'SOURCE',
	            'UUID',
	            'INTERSTITIAL',
	        ];
	        this.sendAllBidsTargetingKeys = this.targetingKeys.filter(key => ['ADOMAIN', 'BIDDER', 'INTERSTITIAL'].indexOf(key) === -1);
	        this.interstitialAdUnitCode = `gpt_unit_/${this._gam.account}/AdThrive_Interstitial_1/${this._site.id}_0`;
	        this.s2s = this.s2s = {
	            bidders: s2sExperiment.result,
	        };
	    }
	};
	Prebid = __decorate([
	    singleton(),
	    __metadata("design:paramtypes", [S2SExperiment, GAM, Site])
	], Prebid);

	let TargetDensityExperiment = class TargetDensityExperiment extends Experiment {
	    constructor(adthrive, abgroup) {
	        super();
	        this.adthrive = adthrive;
	        this.key = 'adsp7';
	        this._result = false;
	        this._choices = [{ choice: true }, { choice: false }];
	        const win = window;
	        const plugin = win.adthrive && win.adthrive.plugin;
	        const cls = win.adthriveCLS;
	        const clsExperiments = cls && cls.experiments;
	        const versionUsesPluginExperimentJson = '1.1.';
	        const adDensityEnabled = defaultTo(adthrive.siteAds.adDensityEnabled, true);
	        if (adDensityEnabled) {
	            if (clsExperiments && this.key in clsExperiments) {
	                this._result = clsExperiments[this.key];
	                abgroup.set(this.key, this._result ? 'on' : 'off');
	            }
	            else if (adthrive.siteAds.adDensityLayout &&
	                ((clsExperiments && 'clsins_ss' in clsExperiments) || (plugin && plugin.indexOf(versionUsesPluginExperimentJson) > -1))) {
	                this._result = this.run();
	                abgroup.set(this.key, this._result ? 'on' : 'off');
	            }
	        }
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new BernoulliTrial(1).get();
	    }
	};
	TargetDensityExperiment = __decorate([
	    log('TargetDensityExperiment'),
	    singleton(),
	    __param(0, inject('AdThrive')),
	    __metadata("design:paramtypes", [Object, ABGroup])
	], TargetDensityExperiment);

	let TargetDensity = class TargetDensity {
	    constructor(adthrive, _targetDensityExperiment) {
	        this._targetDensityExperiment = _targetDensityExperiment;
	        this.enabled = this._targetDensityExperiment.result;
	        this.settings = adthrive.siteAds.adDensityLayout;
	    }
	};
	TargetDensity = __decorate([
	    singleton(),
	    __param(0, inject('AdThrive')),
	    __metadata("design:paramtypes", [Object, TargetDensityExperiment])
	], TargetDensity);

	let InitialTimeoutExperiment = class InitialTimeoutExperiment extends Experiment {
	    constructor(abgroup) {
	        super();
	        this._choices = [{ choice: 2000 }, { choice: 2200 }, { choice: 2400 }, { choice: 2600 }, { choice: 2800 }];
	        this.key = 'to_initial';
	        this._result = this.run();
	        abgroup.set(this.key, String(this._result));
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new UniformChoice(this._choices.map(item => item.choice)).get();
	    }
	};
	InitialTimeoutExperiment = __decorate([
	    log('InitialTimeoutExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup])
	], InitialTimeoutExperiment);

	let Timeouts = class Timeouts {
	    constructor(initialTimeoutExperiment) {
	        this.initialBidsRequest = initialTimeoutExperiment.result;
	        this.refreshBidsRequest = 5000;
	    }
	};
	Timeouts = __decorate([
	    singleton(),
	    __metadata("design:paramtypes", [InitialTimeoutExperiment])
	], Timeouts);

	let UserPageDataLoggingStore = class UserPageDataLoggingStore {
	    constructor() {
	        this._data = {};
	    }
	    set(data) {
	        this._data = { ...this._data, ...data };
	    }
	    get() {
	        return Object.keys(this._data).length !== 0 ? this._data : undefined;
	    }
	    getByKey(key) {
	        return this._data[key];
	    }
	    clear() {
	        this.set({});
	    }
	};
	UserPageDataLoggingStore = __decorate([
	    log('UserPageDataLoggingStore'),
	    singleton()
	], UserPageDataLoggingStore);

	let UserPageDataLoggingEvents = class UserPageDataLoggingEvents {
	    constructor(_userPageDataLoggingStore) {
	        this._userPageDataLoggingStore = _userPageDataLoggingStore;
	        this.loggingData = new Emitter();
	        this._maxTimeOnPage = 3600000;
	        this._listeners = [];
	        this._callbacks = new Set();
	        this._requestSent = false;
	        setTimeout(() => {
	            this._callbacks.forEach(callback => this._executeCallback(callback));
	            this.cleanup();
	        }, this._maxTimeOnPage);
	    }
	    _executeCallback(callback) {
	        callback();
	        this._callbacks.delete(callback);
	        if (this._callbacks.size === 0) {
	            this.logUserPageData();
	        }
	    }
	    setUserPageData(data) {
	        if (data) {
	            this._userPageDataLoggingStore.set(data);
	        }
	    }
	    logUserPageData() {
	        if (!this._requestSent) {
	            logger.fetchEvent('UserPageDataLoggingComponent', `logUserData`, this._userPageDataLoggingStore.get());
	            this._requestSent = true;
	            this.cleanup();
	        }
	    }
	    addCallbackToQueue(emitters, callback) {
	        this._callbacks.add(callback);
	        emitters.forEach(emitter => {
	            this._listeners.push(emitter.on(() => this._executeCallback(callback)));
	        });
	    }
	    cleanup() {
	        this._listeners.forEach(listenerOff => {
	            listenerOff();
	        });
	        this._listeners = [];
	        this._callbacks.clear();
	    }
	};
	UserPageDataLoggingEvents = __decorate([
	    log('UserPageDataLoggingEvents'),
	    singleton(),
	    __metadata("design:paramtypes", [UserPageDataLoggingStore])
	], UserPageDataLoggingEvents);

	const isSafariWithInfiniteLoopBug = (userAgentOverride, vendorOverride) => {
	    var _a;
	    const userAgent = userAgentOverride || navigator.userAgent;
	    const vendor = vendorOverride || navigator.vendor;
	    if (!isSafari(userAgent, vendor)) {
	        return false;
	    }
	    const safariVersionRegex = / Version\/(1\d)\.(\d+)/;
	    const safariVersionTokens = ((_a = safariVersionRegex.exec(userAgent)) === null || _a === void 0 ? void 0 : _a.slice(-2)) || [];
	    const isSafariFourteen = safariVersionTokens[0] === '14';
	    const isSafariFifteenDotThreeOrLess = safariVersionTokens[0] === '15' && +safariVersionTokens[1] < 4;
	    return isSafariFourteen || isSafariFifteenDotThreeOrLess;
	};
	const mitigateSafariInfiniteLoopBug = () => {
	    if (!isSafariWithInfiniteLoopBug()) {
	        return;
	    }
	    window.addEventListener('beforeunload', () => {
	        window.addEventListener('visibilitychange', event => {
	            event.stopImmediatePropagation();
	        }, true);
	    }, true);
	};
	const runBrowserWorkarounds = () => {
	    mitigateSafariInfiniteLoopBug();
	};

	let PageManager = class PageManager {
	    constructor() {
	        this.beforeUnload = new Emitter();
	        this.pageHide = new Emitter();
	        this.resize = new Emitter();
	        this.scroll = new Emitter();
	        this.visibilityChange = new Emitter();
	        this.addEventListener('beforeunload', this.beforeUnload);
	        this.addEventListener('pagehide', this.pageHide);
	        this.addEventListener('resize', this.resize);
	        this.addEventListener('scroll', this.scroll);
	        this.addEventListener('visibilitychange', this.visibilityChange, document);
	        runBrowserWorkarounds();
	    }
	    setupOnceEvent(eventType, callback, target = window) {
	        const eventListener = () => {
	            target.removeEventListener(eventType, eventListener);
	            callback();
	        };
	        target.addEventListener(eventType, eventListener);
	    }
	    setupOnceEventWithPromise(eventType, target = window) {
	        return new Promise(resolve => {
	            const eventListener = (event) => {
	                target.removeEventListener(eventType, eventListener);
	                return resolve(event);
	            };
	            target.addEventListener(eventType, eventListener);
	        });
	    }
	    addEventListener(name, eventEmitter, target = window) {
	        target.addEventListener(name, () => {
	            eventEmitter.emit().catch(() => false);
	        }, false);
	    }
	};
	PageManager = __decorate([
	    log('PageManager'),
	    singleton(),
	    __metadata("design:paramtypes", [])
	], PageManager);

	let Timing = class Timing {
	    constructor(_userPageDataLoggingEvent, _pageManager) {
	        this._userPageDataLoggingEvent = _userPageDataLoggingEvent;
	        this._pageManager = _pageManager;
	        this.started = 0;
	        this.loading = 0;
	        this.totalTimeOnPage = 0;
	        this.bootstrapFinished = 0;
	        this.amazonStarted = 0;
	        this.amazonFinished = 0;
	        this.amazonDuration = 0;
	        this.gamStarted = 0;
	        this.gamFinished = 0;
	        this.gamDuration = 0;
	        this.marmaladeStarted = 0;
	        this.marmaladeFinished = 0;
	        this.marmaladeDuration = 0;
	        this.prebidStarted = 0;
	        this.prebidFinished = 0;
	        this.prebidDuration = 0;
	        this.webVitalsStarted = 0;
	        this.webVitalsFinished = 0;
	        this.webVitalsDuration = 0;
	        this.started = now$2();
	        if (document.visibilityState === 'visible') {
	            this.timeOnPage = this.started;
	        }
	        this._pageManager.visibilityChange.on(() => this.documentVisibilityChanged());
	        _userPageDataLoggingEvent.loggingData.on(() => {
	            if (document.visibilityState === 'visible') {
	                this.totalTimeOnPage += now$2() - this.timeOnPage;
	            }
	        });
	    }
	    get timingData() {
	        return {
	            started: this.started,
	            loading: this.loading,
	            totalTimeOnPage: this.totalTimeOnPage,
	            bootstrapFinished: this.bootstrapFinished,
	            amazonStarted: this.amazonStarted,
	            amazonFinished: this.amazonFinished,
	            amazonDuration: this.amazonDuration,
	            gamStarted: this.gamStarted,
	            gamFinished: this.gamFinished,
	            gamDuration: this.gamDuration,
	            marmaladeStarted: this.marmaladeStarted,
	            marmaladeFinished: this.marmaladeFinished,
	            marmaladeDuration: this.marmaladeDuration,
	            prebidStarted: this.prebidStarted,
	            prebidFinished: this.prebidFinished,
	            prebidDuration: this.prebidDuration,
	            webVitalsStarted: this.webVitalsStarted,
	            webVitalsFinished: this.webVitalsFinished,
	            webVitalsDuration: this.webVitalsDuration,
	            ...(this.timeOnPage && { timeOnPage: this.timeOnPage }),
	        };
	    }
	    documentVisibilityChanged() {
	        if (document.visibilityState === 'visible') {
	            this.timeOnPage = now$2();
	        }
	        else if (document.visibilityState === 'hidden') {
	            this.totalTimeOnPage += now$2() - this.timeOnPage;
	            this.timeOnPage = undefined;
	        }
	    }
	};
	Timing = __decorate([
	    singleton(),
	    __metadata("design:paramtypes", [UserPageDataLoggingEvents, PageManager])
	], Timing);

	let TKHOExperiment = class TKHOExperiment extends Experiment {
	    constructor(adthrive, abgroup) {
	        super();
	        this._choices = [
	            { choice: 'ats', weight: 1 },
	            { choice: 'conf', weight: 1 },
	            { choice: 'hawk', weight: 1 },
	            { choice: 'tgtaff', weight: 1 },
	            { choice: 'none', weight: 96 },
	        ];
	        this.key = '3pho';
	        this._result = this.run();
	        abgroup.set(this.key, this.result);
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new WeightedChoice(this._choices).get();
	    }
	};
	TKHOExperiment = __decorate([
	    log('TKHOExperiment'),
	    singleton(),
	    __param(0, inject('AdThrive')),
	    __metadata("design:paramtypes", [Object, ABGroup])
	], TKHOExperiment);

	let TKHO = class TKHO {
	    constructor(trackersExperiment) {
	        this.tracker = trackersExperiment.result;
	    }
	};
	TKHO = __decorate([
	    singleton(),
	    __metadata("design:paramtypes", [TKHOExperiment])
	], TKHO);

	let VBHOExperiment = class VBHOExperiment extends Experiment {
	    constructor() {
	        super();
	        this._result = [];
	        this._choices = [
	            { choice: ['appnexus'], threshold: 0.1 },
	            { choice: ['conversant'], threshold: 0.01 },
	            { choice: ['criteo'], threshold: 0.01 },
	            { choice: ['districtm'], threshold: 0.3 },
	            { choice: ['dmdmx'], threshold: 0.2 },
	            { choice: ['gridvid'], threshold: 0.01 },
	            { choice: ['gumgum'], threshold: 0.5 },
	            { choice: ['ix'], threshold: 0.005 },
	            { choice: ['oneVideo'], threshold: 0.2 },
	            { choice: ['openx'], threshold: 0.1 },
	            { choice: ['pubmatic'], threshold: 0.01 },
	            { choice: ['roundel'], threshold: 0.1 },
	            { choice: ['rubicon'], threshold: 0.01 },
	            { choice: ['sharethrough'], threshold: 0.01 },
	            { choice: ['spotx'], threshold: 0.01 },
	            { choice: ['telaria'], threshold: 0.01 },
	            { choice: ['triplelift'], threshold: 0.01 },
	            { choice: ['ttd'], threshold: 0.01 },
	            { choice: ['yahoossp'], threshold: 0.01 },
	        ];
	        this.key = 'vbho';
	        this._result = this.run();
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return this._choices.filter(({ threshold }) => new BernoulliTrial(threshold).get()).map(({ choice }) => choice[0]);
	    }
	};
	__decorate([
	    sticky(),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", []),
	    __metadata("design:returntype", void 0)
	], VBHOExperiment.prototype, "run", null);
	VBHOExperiment = __decorate([
	    log('VBHOExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [])
	], VBHOExperiment);

	let VBHO = class VBHO {
	    constructor(vbhoExperiment) {
	        this.bidders = vbhoExperiment.result;
	    }
	};
	VBHO = __decorate([
	    singleton(),
	    __metadata("design:paramtypes", [VBHOExperiment])
	], VBHO);

	let VEBHOExperiment = class VEBHOExperiment extends Experiment {
	    constructor(abgroup) {
	        super();
	        this._choices = [
	            { choice: { name: 'chocolate_ebda', weight: 1 } },
	            { choice: { name: 'ix_ebda', weight: 0.5 } },
	            { choice: { name: 'medianet_ebda', weight: 1 } },
	            { choice: { name: 'openx_ebda', weight: 0.5 } },
	            { choice: { name: 'pubmatic_ebda', weight: 1 } },
	            { choice: { name: 'rhythmone_ebda', weight: 0.5 } },
	            { choice: { name: 'rubicon_ebda', weight: 0.5 } },
	            { choice: { name: 'sonobi_ebda', weight: 0.5 } },
	            { choice: { name: 'spotx_ebda', weight: 1 } },
	            { choice: { name: 'telaria_ebda', weight: 1 } },
	            { choice: { name: 'triplelift_ebda', weight: 1 } },
	            { choice: { name: 'verizon_ebda', weight: 1 } },
	        ];
	        this.key = 'vebho';
	        this._result = this.run();
	        abgroup.set(this.key, this._result ? this._result.name : 'off');
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        const choices = this._choices
	            .map(item => item.choice)
	            .map(bidder => ({
	            choice: bidder,
	            weight: bidder.weight,
	        }));
	        const holdoutChoices = new WeightedChoice(choices);
	        if (holdoutChoices.totalWeight > 90) {
	            logger.warn('VEBHOExperiment', 'constructor', 'Holdout experiment percentages totaled over 90');
	        }
	        return holdoutChoices.get();
	    }
	};
	__decorate([
	    sticky(),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", []),
	    __metadata("design:returntype", Object)
	], VEBHOExperiment.prototype, "run", null);
	VEBHOExperiment = __decorate([
	    log('VEBHOExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup])
	], VEBHOExperiment);

	let VEBHO = class VEBHO {
	    constructor(vebhoExperiment) {
	        this.bidder = vebhoExperiment.result;
	    }
	};
	VEBHO = __decorate([
	    singleton(),
	    __metadata("design:paramtypes", [VEBHOExperiment])
	], VEBHO);

	let CloseButtonTimeoutExperiment = class CloseButtonTimeoutExperiment extends Experiment {
	    constructor(abgroup) {
	        super();
	        this._choices = [
	            { choice: 6000, weight: 5 },
	            { choice: 4000, weight: 75 },
	            { choice: 2000, weight: 15 },
	            { choice: 0, weight: 5 },
	        ];
	        this.key = 'cbt';
	        this._result = this.run();
	        if (this._result === 6000) {
	            abgroup.set(this.key, '6s');
	        }
	        else if (this._result === 4000) {
	            abgroup.set(this.key, '4s');
	        }
	        else if (this._result === 2000) {
	            abgroup.set(this.key, '2s');
	        }
	        else if (this._result === 0) {
	            abgroup.set(this.key, '0s');
	        }
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        const timeoutChoices = new WeightedChoice(this._choices);
	        return timeoutChoices.get();
	    }
	};
	__decorate([
	    sticky(),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", []),
	    __metadata("design:returntype", void 0)
	], CloseButtonTimeoutExperiment.prototype, "run", null);
	CloseButtonTimeoutExperiment = __decorate([
	    log('CloseButtonTimeoutExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup])
	], CloseButtonTimeoutExperiment);

	let ProtocolsExperiment = class ProtocolsExperiment extends Experiment {
	    constructor(abgroup) {
	        super();
	        this._choices = [
	            { choice: { protocols: [1, 2, 3, 4, 5, 6, 7, 8], value: 'all', scope: 'all' }, weight: 55 },
	            { choice: { protocols: [2, 3, 5, 6, 7, 8], value: 'nv1', scope: 'all' }, weight: 15 },
	            { choice: { protocols: [1, 2, 3, 5, 6, 7, 8], value: 'allr', scope: 'limited' }, weight: 15 },
	            { choice: { protocols: [2, 3, 5, 6, 7, 8], value: 'nv1r', scope: 'limited' }, weight: 15 },
	        ];
	        this.key = 'proto';
	        this._result = this.run();
	        abgroup.set(this.key, this._result.value);
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        const protocolsChoices = new WeightedChoice(this._choices);
	        return protocolsChoices.get();
	    }
	};
	__decorate([
	    sticky(),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", []),
	    __metadata("design:returntype", void 0)
	], ProtocolsExperiment.prototype, "run", null);
	ProtocolsExperiment = __decorate([
	    log('ProtocolsExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup])
	], ProtocolsExperiment);

	let VastTimeoutExperiment = class VastTimeoutExperiment extends Experiment {
	    constructor(abgroup) {
	        super();
	        this._choices = [
	            { choice: 5000, weight: 40 },
	            { choice: 10000, weight: 40 },
	            { choice: 15000, weight: 20 },
	        ];
	        this.key = 'vast_to';
	        this._result = this.run();
	        if (this._result === 5000) {
	            abgroup.set(this.key, '5s');
	        }
	        else if (this._result === 10000) {
	            abgroup.set(this.key, '10s');
	        }
	        else if (this._result === 15000) {
	            abgroup.set(this.key, '15s');
	        }
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        const timeoutChoices = new WeightedChoice(this._choices);
	        return timeoutChoices.get();
	    }
	};
	__decorate([
	    sticky(),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", []),
	    __metadata("design:returntype", void 0)
	], VastTimeoutExperiment.prototype, "run", null);
	VastTimeoutExperiment = __decorate([
	    log('VastTimeoutExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup])
	], VastTimeoutExperiment);

	var DensityDevice;
	(function (DensityDevice) {
	    DensityDevice["Desktop"] = "desktop";
	    DensityDevice["Mobile"] = "mobile";
	})(DensityDevice || (DensityDevice = {}));

	var VideoAdUnit;
	(function (VideoAdUnit) {
	    VideoAdUnit["Video_Collapse_Autoplay_SoundOff"] = "Video_Collapse_Autoplay_SoundOff";
	    VideoAdUnit["Video_Individual_Autoplay_SOff"] = "Video_Individual_Autoplay_SOff";
	    VideoAdUnit["Video_Coll_SOff_Smartphone"] = "Video_Coll_SOff_Smartphone";
	    VideoAdUnit["Video_In_Post_ClicktoPlay_SoundOn"] = "Video_In-Post_ClicktoPlay_SoundOn";
	})(VideoAdUnit || (VideoAdUnit = {}));
	var PinterestReplacedPlayer;
	(function (PinterestReplacedPlayer) {
	    PinterestReplacedPlayer["StickySekindo"] = "stickySekindo";
	    PinterestReplacedPlayer["StaticSekindo"] = "staticSekindo";
	    PinterestReplacedPlayer["None"] = "none";
	})(PinterestReplacedPlayer || (PinterestReplacedPlayer = {}));

	let AdvancePlaylistExperiment = class AdvancePlaylistExperiment extends Experiment {
	    constructor(_adthrive, abgroup) {
	        super();
	        this._adthrive = _adthrive;
	        this._result = false;
	        this.key = 'vadv';
	        this._choices = [{ choice: true }, { choice: false }];
	        const advPListLegacy = this._adthrive.siteAds.adOptions.advancePlaylist;
	        const advPList = this._adthrive.siteAds.adOptions.advancePlaylistOptions;
	        const playlistSetting = !advPList ? advPListLegacy : advPList && advPList.playlistPlayer && advPList.playlistPlayer.enabled;
	        if (defaultTo(playlistSetting, true)) {
	            this._result = this.run();
	            abgroup.set(this.key, this._result ? 'on' : 'off');
	        }
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new BernoulliTrial(0.99).get();
	    }
	};
	__decorate([
	    sticky(),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", []),
	    __metadata("design:returntype", void 0)
	], AdvancePlaylistExperiment.prototype, "run", null);
	AdvancePlaylistExperiment = __decorate([
	    log('AdvancePlaylistExperiment'),
	    singleton(),
	    __param(0, inject('AdThrive')),
	    __metadata("design:paramtypes", [Object, ABGroup])
	], AdvancePlaylistExperiment);

	let AdvancePlaylistRelatedExperiment = class AdvancePlaylistRelatedExperiment extends Experiment {
	    constructor(_adthrive, abgroup) {
	        super();
	        this._adthrive = _adthrive;
	        this._result = false;
	        this.key = 'rvadv_ab1';
	        this._choices = [{ choice: true }, { choice: false }];
	        const siteAds = this._adthrive.siteAds;
	        const advPList = siteAds.adOptions.advancePlaylistOptions || {};
	        const videoPlayers = siteAds.videoPlayers;
	        const playlist = ((videoPlayers && videoPlayers.players) || []).filter(player => player.type === 'stickyPlaylist');
	        if (playlist.length && defaultTo(advPList.relatedPlayer && advPList.relatedPlayer.enabled, true)) {
	            this._result = this.run();
	            abgroup.set(this.key, this._result ? 'on' : 'off');
	        }
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new BernoulliTrial(0.9).get();
	    }
	};
	__decorate([
	    sticky(),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", []),
	    __metadata("design:returntype", void 0)
	], AdvancePlaylistRelatedExperiment.prototype, "run", null);
	AdvancePlaylistRelatedExperiment = __decorate([
	    log('AdvancePlaylistRelatedExperiment'),
	    singleton(),
	    __param(0, inject('AdThrive')),
	    __metadata("design:paramtypes", [Object, ABGroup])
	], AdvancePlaylistRelatedExperiment);

	let JwRequestTimeoutExperiment = class JwRequestTimeoutExperiment extends Experiment {
	    constructor(abgroup) {
	        super();
	        this.key = 'reqTo';
	        this._choices = [
	            { choice: 10000, weight: 20 },
	            { choice: 15000, weight: 60 },
	            { choice: 20000, weight: 20 },
	        ];
	        this._result = this.run();
	        if (this._result === 10000) {
	            abgroup.set(this.key, '10');
	        }
	        else if (this._result === 15000) {
	            abgroup.set(this.key, '15');
	        }
	        else if (this._result === 20000) {
	            abgroup.set(this.key, '20');
	        }
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        const timeoutChoices = new WeightedChoice(this._choices);
	        return timeoutChoices.get();
	    }
	};
	__decorate([
	    sticky(),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", []),
	    __metadata("design:returntype", void 0)
	], JwRequestTimeoutExperiment.prototype, "run", null);
	JwRequestTimeoutExperiment = __decorate([
	    log('JwRequestTimeoutExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup])
	], JwRequestTimeoutExperiment);

	let LogAdDurationExperiment = class LogAdDurationExperiment extends Experiment {
	    constructor() {
	        super();
	        this.key = 'LogAdDurationExperiment';
	        this._choices = [{ choice: true }, { choice: false }];
	        this._result = this.run();
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new BernoulliTrial(0.03).get();
	    }
	};
	LogAdDurationExperiment = __decorate([
	    log('LogAdDurationExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [])
	], LogAdDurationExperiment);

	let LogAdLifeCycleExperiment = class LogAdLifeCycleExperiment extends Experiment {
	    constructor() {
	        super();
	        this.key = 'LogAdLifeCycleExperiment';
	        this._choices = [{ choice: true }, { choice: false }];
	        this._result = this.run();
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new BernoulliTrial(0.1).get();
	    }
	};
	LogAdLifeCycleExperiment = __decorate([
	    log('LogAdLifeCycleExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [])
	], LogAdLifeCycleExperiment);

	let PlaybackmethodExperiment = class PlaybackmethodExperiment extends Experiment {
	    constructor(abgroup) {
	        super();
	        this.key = 'pbm';
	        this._choices = [{ choice: true }, { choice: false }];
	        this._map = new Map([
	            [VideoAdUnit.Video_In_Post_ClicktoPlay_SoundOn, [3]],
	            [VideoAdUnit.Video_Collapse_Autoplay_SoundOff, [6]],
	            [VideoAdUnit.Video_Coll_SOff_Smartphone, [6]],
	            [VideoAdUnit.Video_Individual_Autoplay_SOff, [6]],
	        ]);
	        this._result = this.run();
	        this.playbackmethod = this._result ? this._map : undefined;
	        abgroup.set(this.key, this._result ? 'on' : 'off');
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new BernoulliTrial(0.2).get();
	    }
	};
	__decorate([
	    sticky(),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", []),
	    __metadata("design:returntype", void 0)
	], PlaybackmethodExperiment.prototype, "run", null);
	PlaybackmethodExperiment = __decorate([
	    log('PlaybackmethodExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup])
	], PlaybackmethodExperiment);

	class VideoUtils {
	    static getScrollTop() {
	        return (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
	    }
	    static shufflePlaylist(playlist) {
	        let currentIndex = playlist.length;
	        let tempValue;
	        let randomIndex;
	        while (0 !== currentIndex) {
	            randomIndex = Math.floor(Math.random() * playlist.length);
	            currentIndex -= 1;
	            tempValue = playlist[currentIndex];
	            playlist[currentIndex] = playlist[randomIndex];
	            playlist[randomIndex] = tempValue;
	        }
	        return playlist;
	    }
	    static playerInView(playerElement) {
	        const boundingRect = playerElement.getBoundingClientRect();
	        return window.innerHeight > boundingRect.top + boundingRect.height / 2;
	    }
	    static createQueryString(params) {
	        return Object.keys(params)
	            .map(key => `${key}=${params[key]}`)
	            .join('&');
	    }
	    static createEncodedQueryString(params) {
	        return Object.keys(params)
	            .map(key => `${key}=${encodeURIComponent(params[key])}`)
	            .join('&');
	    }
	    static setMobileLocation(mobileLocation) {
	        mobileLocation = mobileLocation || 'bottom-right';
	        if (mobileLocation === 'top-left') {
	            mobileLocation = "adthrive-collapse-top-left" ;
	        }
	        else if (mobileLocation === 'top-right') {
	            mobileLocation = "adthrive-collapse-top-right" ;
	        }
	        else if (mobileLocation === 'bottom-left') {
	            mobileLocation = "adthrive-collapse-bottom-left" ;
	        }
	        else if (mobileLocation === 'bottom-right') {
	            mobileLocation = "adthrive-collapse-bottom-right" ;
	        }
	        return mobileLocation;
	    }
	}

	let VideoAdOptions = class VideoAdOptions {
	    constructor(_adthrive, closeButtonTimeoutExperiment, vastTimeoutExperiment, protocolsExperiment, playbackmethodExperiment, logAdDurationExperiment, logLifeCycleExperiment, jwRequestTimeoutExperiment, advancePlaylistExperiment) {
	        this._adthrive = _adthrive;
	        this.players = [];
	        this.instreamAdUnits = new Set([
	            VideoAdUnit.Video_Collapse_Autoplay_SoundOff,
	            VideoAdUnit.Video_Individual_Autoplay_SOff,
	            VideoAdUnit.Video_Coll_SOff_Smartphone,
	            VideoAdUnit.Video_In_Post_ClicktoPlay_SoundOn,
	        ]);
	        this.closeButtonTimeout = closeButtonTimeoutExperiment.result;
	        this.vastTimeout = defaultTo(vastTimeoutExperiment.result, 10000);
	        this.maxRedirect = 8;
	        this.apiValue = [2];
	        this.videoWasClosed = defaultTo(getSessionValue('video_closed', 1800000, true), false);
	        this.mobileStickyPlayerOnPage = false;
	        this.playbackmethod = playbackmethodExperiment.playbackmethod;
	        this.logAdDuration = logAdDurationExperiment.result;
	        this.logAdLifeCycle = logLifeCycleExperiment.result;
	        this.jwRequestTimeout = jwRequestTimeoutExperiment.result;
	        this.mimeType =
	            navigator.userAgent && navigator.userAgent.search(/Chrom|firefox/i) === -1
	                ? ['video/mp4', 'application/javascript']
	                : ['video/mp4', 'application/javascript', 'video/webm'];
	        this.videoProtocols = protocolsExperiment.result;
	        this.position = { id: 1, name: 'above' };
	        this.removeVideoTitleWrapper = defaultTo(_adthrive.siteAds.adOptions.removeVideoTitleWrapper, false);
	        const videoPlayers = _adthrive.siteAds.videoPlayers;
	        this.footerSelector = defaultTo(videoPlayers && videoPlayers.footerSelector, '');
	        this.players = defaultTo(videoPlayers &&
	            videoPlayers.players.map(player => {
	                player.mobileLocation = VideoUtils.setMobileLocation(player.mobileLocation);
	                return player;
	            }), []);
	        this.contextualSettings = videoPlayers && videoPlayers.contextual;
	        this.jwPlaylist = this.getPlayListPlayerVideos();
	        this.advancePlaylist = this.getAdvancePlaylistConfig(advancePlaylistExperiment);
	    }
	    setupAdvanceRelatedExperiment(isCollapsible) {
	        const aprExp = instance.resolve(AdvancePlaylistRelatedExperiment);
	        const advancePlayConfig = this.advancePlaylist.relatedPlayer || {};
	        const advancePlayConfigPlayer = isCollapsible ? advancePlayConfig.sticky : advancePlayConfig.static;
	        const enabled = advancePlayConfigPlayer ? advancePlayConfigPlayer.enabled : advancePlayConfig.enabled;
	        if (enabled && aprExp) {
	            advancePlayConfig.applyToFirst = advancePlayConfigPlayer ? advancePlayConfigPlayer.applyToFirst : advancePlayConfig.applyToFirst;
	            advancePlayConfig.shouldRun = this.jwPlaylist
	                .then(result => typeof result === 'object' && aprExp.result)
	                .catch(() => Promise.reject().catch(() => false));
	        }
	    }
	    getPlayListPlayerVideos() {
	        const siteAds = this._adthrive.siteAds;
	        const videoPlayers = siteAds.videoPlayers;
	        const playlist = ((videoPlayers && videoPlayers.players) || []).filter(player => player.type === 'stickyPlaylist');
	        const playlistId = playlist.length && playlist[0].playlistId;
	        return !playlistId
	            ? Promise.reject().catch(() => false)
	            : getJSON(`https://cdn.jwplayer.com/v2/playlists/${playlistId}`);
	    }
	    getAdvancePlaylistConfig(apExp) {
	        const advPList = this._adthrive.siteAds.adOptions.advancePlaylistOptions || {};
	        const advPListRelated = advPList.relatedPlayer || {};
	        return {
	            playlistPlayer: {
	                enabled: apExp.result,
	            },
	            relatedPlayer: {
	                applyToFirst: defaultTo(advPListRelated.applyToFirst, true),
	                enabled: defaultTo(advPListRelated.enabled, true),
	                shouldRun: Promise.reject().catch(() => false),
	                static: advPListRelated.static,
	                sticky: advPListRelated.sticky,
	            },
	        };
	    }
	};
	VideoAdOptions = __decorate([
	    singleton(),
	    __param(0, inject('AdThrive')),
	    __metadata("design:paramtypes", [Object, CloseButtonTimeoutExperiment,
	        VastTimeoutExperiment,
	        ProtocolsExperiment,
	        PlaybackmethodExperiment,
	        LogAdDurationExperiment,
	        LogAdLifeCycleExperiment,
	        JwRequestTimeoutExperiment,
	        AdvancePlaylistExperiment])
	], VideoAdOptions);

	let VideoConfig = class VideoConfig {
	    constructor(_videoAdOptions, protocolsExperiment, closeButtonTimeoutExperiment, vastTimeoutExperiment) {
	        this._videoAdOptions = _videoAdOptions;
	        this.apiValue = [2];
	        this.mobileStickyPlayerOnPage = false;
	        this.playlistPlayerAdded = false;
	        this.contextualPlayerAdded = false;
	        this.sekindoPlayerAdded = false;
	        this.hasJwPlayer = false;
	        this.preventStickyOutstream = false;
	        this.hasStickyOutstream = false;
	        this.footerSelector = '';
	        this.removeVideoTitleWrapper = false;
	        this.instreamAdUnits = new Set([
	            VideoAdUnit.Video_Collapse_Autoplay_SoundOff,
	            VideoAdUnit.Video_Individual_Autoplay_SOff,
	            VideoAdUnit.Video_Coll_SOff_Smartphone,
	            VideoAdUnit.Video_In_Post_ClicktoPlay_SoundOn,
	        ]);
	        const videoAdOptions = this._videoAdOptions;
	        this.videoProtocols = protocolsExperiment.result;
	        this.closeButtonTimeout = closeButtonTimeoutExperiment.result;
	        this.vastTimeout = vastTimeoutExperiment.result;
	        this.position = { id: 1, name: 'above' };
	        this.maxRedirect = 8;
	        this.playbackmethod = videoAdOptions.playbackmethod;
	        this.advancePlaylist = videoAdOptions.advancePlaylist;
	        this.jwPlaylist = videoAdOptions.jwPlaylist;
	        this.setupAdvanceRelatedExperiment = videoAdOptions.setupAdvanceRelatedExperiment;
	        this.contextualSettings = videoAdOptions.contextualSettings;
	        this.mimeType = videoAdOptions.mimeType;
	        this.videoProtocols = videoAdOptions.videoProtocols;
	        this.closeButtonTimeout = videoAdOptions.closeButtonTimeout;
	        this.jwRequestTimeout = videoAdOptions.jwRequestTimeout;
	        this.logAdDuration = videoAdOptions.logAdDuration;
	        this.logAdLifeCycle = videoAdOptions.logAdLifeCycle;
	        this.vastTimeout = videoAdOptions.vastTimeout;
	        this.videoWasClosed = videoAdOptions.videoWasClosed;
	        this.removeVideoTitleWrapper = videoAdOptions.removeVideoTitleWrapper;
	        this.players = videoAdOptions.players;
	        this.footerSelector = videoAdOptions.footerSelector;
	    }
	};
	VideoConfig = __decorate([
	    singleton(),
	    __metadata("design:paramtypes", [VideoAdOptions,
	        ProtocolsExperiment,
	        CloseButtonTimeoutExperiment,
	        VastTimeoutExperiment])
	], VideoConfig);

	let Config = class Config {
	    constructor(abGroup, adOptions, adTypes, amazon, ccpa, clsOptimizedAds, comscore, context, disableAds, ebho, impressionLog, footer, gam, gdpr, hbho, identityApi, idho, infiniteScroll, lazyLoad, liveRampAts, marmalade, partners, prebid, site, targetDensity, timeouts, timing, tkho, vbho, vebho, auctionOptions, video, dynamicAdsMapper) {
	        this.abGroup = abGroup;
	        this.adOptions = adOptions;
	        this.adTypes = adTypes;
	        this.amazon = amazon;
	        this.ccpa = ccpa;
	        this.clsOptimizedAds = clsOptimizedAds;
	        this.comscore = comscore;
	        this.context = context;
	        this.disableAds = disableAds;
	        this.ebho = ebho;
	        this.impressionLog = impressionLog;
	        this.footer = footer;
	        this.gam = gam;
	        this.gdpr = gdpr;
	        this.hbho = hbho;
	        this.identityApi = identityApi;
	        this.idho = idho;
	        this.infiniteScroll = infiniteScroll;
	        this.lazyLoad = lazyLoad;
	        this.liveRampAts = liveRampAts;
	        this.marmalade = marmalade;
	        this.partners = partners;
	        this.prebid = prebid;
	        this.site = site;
	        this.targetDensity = targetDensity;
	        this.timeouts = timeouts;
	        this.timing = timing;
	        this.tkho = tkho;
	        this.vbho = vbho;
	        this.vebho = vebho;
	        this.auctionOptions = auctionOptions;
	        this.video = video;
	        this.dynamicAds = dynamicAdsMapper.get();
	        const clsOptions = instance.resolve(ClsOptions);
	        if (clsOptions.enabled) {
	            this.clsOptions = clsOptions;
	        }
	    }
	};
	Config = __decorate([
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup,
	        AdOptions,
	        AdTypes,
	        Amazon,
	        CCPA,
	        CLSOptimizedAds,
	        Comscore,
	        Context,
	        DisableAds,
	        EBHO,
	        ImpressionLog,
	        Footer,
	        GAM,
	        GDPR,
	        HBHO,
	        IdentityApi,
	        IDHO,
	        InfiniteScroll,
	        LazyLoad,
	        LiveRampAts,
	        Marmalade,
	        Partners,
	        Prebid,
	        Site,
	        TargetDensity,
	        Timeouts,
	        Timing,
	        TKHO,
	        VBHO,
	        VEBHO,
	        AuctionOptions,
	        VideoConfig,
	        DynamicAdsMapper])
	], Config);

	class Slot {
	    constructor(location, sequence, sizes, element, sticky, lazy = false, auctionPriority = 8, stickyOverlapSelector, special = [], enabledForAuction = true, infinite = false) {
	        this.location = location;
	        this.sequence = sequence;
	        this.sizes = sizes;
	        this.element = element;
	        this.sticky = sticky;
	        this.lazy = lazy;
	        this.auctionPriority = auctionPriority;
	        this.stickyOverlapSelector = stickyOverlapSelector;
	        this.special = special;
	        this.enabledForAuction = enabledForAuction;
	        this.infinite = infinite;
	        this.refreshPaused = false;
	        this.viewableDuration = 0;
	        this.outOfViewIO = true;
	        this.outOfViewGPT = true;
	        this.alwaysInView = false;
	        this.displayed = false;
	        this.refreshCount = 0;
	        this.viewability = 0;
	        this.servedPrebidBidResponse = undefined;
	    }
	    get id() {
	        return this.element.id;
	    }
	    get isSticky() {
	        return this.sticky;
	    }
	    get hasHighViewability() {
	        return this.sticky || this.location === 'Recipe';
	    }
	    get isAboveTheFold() {
	        return elementBoundingRect(this.element).top > 1000;
	    }
	    hasSize([w1, h1]) {
	        return this.sizes.some(([w2, h2]) => w1 === w2 && h1 === h2);
	    }
	    get name() {
	        return [this.location, this.sequence].filter(defined).join('_');
	    }
	    get placementMapName() {
	        return this.location === 'Content' && this.sequence && this.sequence > 9 ? `${this.location}_9` : this.name;
	    }
	    pushToQueue(command) {
	        const googleTag = window.googletag;
	        googleTag && googleTag.cmd && googleTag.cmd.push(command);
	    }
	    setViewability(marmalade) {
	        marmalade.adViewability
	            .filter(adViewability => adViewability.speed === marmalade.speed &&
	            window.innerWidth >= adViewability.width[0] &&
	            (!adViewability.width[1] || window.innerWidth <= adViewability.width[1]))
	            .forEach(adViewability => {
	            Object.keys(adViewability.adUnits).forEach(adUnit => {
	                if (adUnit === this.name) {
	                    this.viewability = adViewability.adUnits[adUnit];
	                }
	            });
	        });
	    }
	    clearTargeting(key) {
	        if (this.googleTagSlot) {
	            this.googleTagSlot.clearTargeting(key);
	        }
	        else {
	            logger.error('Slot', 'setTargeting', 'Attempted to clear targeting before slot was defined', key);
	        }
	    }
	    setTargeting(targetOrTargeting) {
	        this.pushToQueue(() => {
	            if (this.googleTagSlot) {
	                const targeting = Array.isArray(targetOrTargeting) ? targetOrTargeting : [targetOrTargeting];
	                for (const target of targeting) {
	                    this.googleTagSlot.setTargeting(target.key, target.value);
	                }
	            }
	            else {
	                logger.error('Slot', 'setTargeting', 'Attempted to set targeting before slot was defined', targetOrTargeting);
	            }
	        });
	    }
	    setSlotTargetingFlag(flagKey, flagVals, slot, overwrite = false) {
	        const addNewTargetingToFlagKey = () => {
	            const existingFlagVals = slot.getTargeting('flag_slot');
	            const filteredEntries = existingFlagVals.filter(entry => {
	                const [k] = entry.split(':');
	                return !overwrite || k !== flagKey;
	            });
	            slot.setTargeting('flag_slot', [...filteredEntries, ...flagVals.map(val => `${flagKey}:${val}`)]);
	        };
	        if (flagVals && flagVals.length > 0) {
	            this.pushToQueue(() => addNewTargetingToFlagKey());
	        }
	    }
	    getTargeting(key) {
	        if (this.googleTagSlot) {
	            return this.googleTagSlot.getTargeting(key);
	        }
	        else {
	            logger.error('Slot', 'getTargeting', 'Attempted to get targeting before slot was defined');
	        }
	        return [];
	    }
	    getTargetingMap() {
	        if (this.googleTagSlot) {
	            const slot = this.googleTagSlot;
	            return slot.getTargetingKeys().reduce((targeting, key) => {
	                targeting[key] = slot.getTargeting(key);
	                return targeting;
	            }, {});
	        }
	        else {
	            logger.error('Slot', 'getTargetingMap', 'Attempted to get targeting before slot was defined');
	        }
	        return {};
	    }
	}

	let Slots = class Slots {
	    constructor() {
	        this.added = new Emitter();
	        this.bidServed = new Emitter();
	        this._slots = new Map();
	    }
	    add(slotOrSlots) {
	        const slots = this.castArray(slotOrSlots);
	        for (const slot of slots) {
	            if (!this._slots.has(slot.id)) {
	                this._slots.set(slot.id, slot);
	                this.added.emit(slot).catch(reason => {
	                    logger.error('Slots', 'add', reason);
	                });
	            }
	        }
	        return slots;
	    }
	    remove(slotOrSlots) {
	        const slots = this.castArray(slotOrSlots);
	        for (const slot of slots) {
	            if (this._slots.has(slot.id)) {
	                this._slots.delete(slot.id);
	            }
	        }
	    }
	    get(id) {
	        if (id) {
	            return this._slots.get(id);
	        }
	        return [...this._slots.values()];
	    }
	    castArray(lookup) {
	        if (typeof lookup === 'string') {
	            const slot = this.get(lookup);
	            return slot !== undefined ? [slot] : [];
	        }
	        return Array.isArray(lookup) ? lookup : [lookup];
	    }
	};
	Slots = __decorate([
	    log('Slots'),
	    singleton()
	], Slots);

	var GoogleAdManager_1;
	let GoogleAdManager = GoogleAdManager_1 = class GoogleAdManager {
	    constructor(_config, _slots) {
	        this._config = _config;
	        this._slots = _slots;
	        this._started = false;
	        this.postStartTargetingWhiteList = ['bms', 'pvk', 'flag', 'hi_au', 'abgroup'];
	        this.impressionViewable = new Emitter();
	        this.slotOnload = new Emitter();
	        this.slotRenderEnded = new Emitter();
	        this.slotVisibilityChanged = new Emitter();
	        this.slotRequested = new Emitter();
	        this.started = new Emitter();
	    }
	    init() {
	        GoogleAdManager_1.pushToQueue(() => {
	            const pubads = googletag.pubads();
	            pubads.setSafeFrameConfig({
	                sandbox: true,
	                allowOverlayExpansion: true,
	                allowPushExpansion: true,
	                useUniqueDomain: true,
	            });
	            pubads.set('page_url', this._config.context.pageUrl);
	            pubads.collapseEmptyDivs();
	            pubads.enableSingleRequest();
	            pubads.disableInitialLoad();
	            pubads.setTagForChildDirectedTreatment(0);
	            this._addGamEventListeners();
	        });
	    }
	    start() {
	        GoogleAdManager_1.pushToQueue(() => {
	            googletag.enableServices();
	            this.started.emit().catch(reason => {
	                logger.error('GoogleAdManager', 'start', 'started', reason);
	            });
	            this._started = true;
	        });
	    }
	    static pushToQueue(command) {
	        googletag.cmd.push(command);
	    }
	    waitForQueue() {
	        return new Promise(resolve => {
	            googletag.cmd.push(() => {
	                resolve(true);
	            });
	        });
	    }
	    setTargeting(targetOrTargeting) {
	        const targeting = (Array.isArray(targetOrTargeting) ? targetOrTargeting : [targetOrTargeting]).filter(target => {
	            return !(!target.value || !target.value.length);
	        });
	        if (this._started && targeting.some(kv => this.postStartTargetingWhiteList.indexOf(kv.key) === -1)) {
	            logger.error('GoogleAdManager', 'setTargeting', 'Attempted to set targeting after started');
	            return;
	        }
	        for (const target of targeting) {
	            if (target) {
	                GoogleAdManager_1.pushToQueue(() => {
	                    googletag.pubads().setTargeting(target.key, target.value);
	                });
	            }
	        }
	    }
	    setSlotTargeting(targetOrTargeting, slot) {
	        const targeting = Array.isArray(targetOrTargeting) ? targetOrTargeting : [targetOrTargeting];
	        for (const target of targeting) {
	            if (target) {
	                GoogleAdManager_1.pushToQueue(() => {
	                    slot.setTargeting(target.key, Array.isArray(target.value) ? target.value.join(',') : target.value);
	                });
	            }
	        }
	    }
	    setTargetingFlag(flagKey, flagVals, overwrite = false) {
	        const addNewTargetingToFlagKey = () => {
	            const pubads = googletag.pubads();
	            const existingFlagVals = pubads.getTargeting('flag');
	            const filteredEntries = existingFlagVals.filter(entry => {
	                const [k] = entry.split(':');
	                return !overwrite || k !== flagKey;
	            });
	            this.setTargeting({
	                key: 'flag',
	                value: [...filteredEntries, ...flagVals.map(val => `${flagKey}:${val}`)],
	            });
	        };
	        if (flagVals && flagVals.length > 0) {
	            GoogleAdManager_1.pushToQueue(() => addNewTargetingToFlagKey());
	        }
	    }
	    getTargeting() {
	        return googletag
	            .pubads()
	            .getTargetingKeys()
	            .map(key => ({ key, value: googletag.pubads().getTargeting(key) }));
	    }
	    getTargetingValuesForKey(key) {
	        return googletag.pubads().getTargeting(key);
	    }
	    getTargetingMap() {
	        const pubads = googletag.pubads();
	        return pubads.getTargetingKeys().reduce((targeting, key) => {
	            targeting[key] = pubads.getTargeting(key);
	            return targeting;
	        }, {});
	    }
	    clearTargetingForKey(key) {
	        GoogleAdManager_1.pushToQueue(() => {
	            googletag.pubads().clearTargeting(key);
	        });
	    }
	    defineSlots(slots) {
	        const { id } = this._config.site;
	        const { account, prefix } = this._config.gam;
	        return slots
	            .map(slot => {
	            const pathName = slot.location === 'Content' && slot.sequence && slot.sequence > 9 ? slot.location : slot.name;
	            const adUnitPath = `/${account}/${prefix}_${pathName}/${id}`;
	            const sizes = slot.location === 'Video_StickyOutstream' ? [...slot.sizes] : [...slot.sizes, 'fluid'];
	            this._setupSlot(slot, adUnitPath, sizes);
	            return slot;
	        })
	            .filter(defined);
	    }
	    displaySlots(slots) {
	        GoogleAdManager_1.pushToQueue(() => {
	            const pubads = googletag.pubads();
	            const initialLoadDisabled = pubads.isInitialLoadDisabled();
	            if (googletag && !googletag.pubadsReady) {
	                logger.error('index', 'load', new Error(`Unexpected googletag.pubadsReady: ${googletag.pubadsReady}`));
	            }
	            for (const slot of slots) {
	                googletag
	                    .pubads()
	                    .enableLazyLoad(slot.lazy ? this._config.lazyLoad.googleLazyLoadSettings.gam : this._config.lazyLoad.googleLazyLoadSettings.disabled);
	                initialLoadDisabled ? pubads.refresh([slot.googleTagSlot]) : googletag.display(slot.id);
	            }
	        });
	    }
	    refreshSlots(slots) {
	        GoogleAdManager_1.pushToQueue(() => {
	            googletag.pubads().refresh(slots.map(slot => slot.googleTagSlot));
	        });
	    }
	    clearSlots(slots) {
	        GoogleAdManager_1.pushToQueue(() => {
	            const googleTagSlots = slots.map(slot => slot.googleTagSlot);
	            googletag.pubads().clear(googleTagSlots);
	        });
	    }
	    destroySlots(slots) {
	        GoogleAdManager_1.pushToQueue(() => {
	            const googleTagSlots = slots.map(slot => slot.googleTagSlot);
	            googletag.destroySlots(googleTagSlots);
	        });
	    }
	    _addGamEventListeners() {
	        this._addEventListener(this.impressionViewable, 'impressionViewable');
	        this._addEventListener(this.slotOnload, 'slotOnload');
	        this._addEventListener(this.slotRenderEnded, 'slotRenderEnded');
	        this._addEventListener(this.slotVisibilityChanged, 'slotVisibilityChanged');
	        this._addEventListener(this.slotRequested, 'slotRequested');
	    }
	    _addEventListener(emitter, eventType) {
	        GoogleAdManager_1.pushToQueue(() => {
	            googletag.pubads().addEventListener(eventType, event => {
	                const slot = this._slots.get(event.slot.getSlotElementId());
	                if (slot) {
	                    emitter.emit({ slot, event }).catch(reason => {
	                        logger.error('GoogleAdManager', 'addEventListener', 'emit', reason);
	                    });
	                }
	            });
	        });
	    }
	    _setupSlot(slot, adUnitPath, sizes) {
	        const pubads = googletag.pubads();
	        slot.googleTagSlot =
	            slot.location === 'Interstitial'
	                ? googletag.defineOutOfPageSlot(adUnitPath, googletag.enums.OutOfPageFormat.INTERSTITIAL)
	                : googletag.defineSlot(adUnitPath, sizes, slot.element.id);
	        if (!slot.googleTagSlot) {
	            logger.error('GoogleAdManager', 'defineSlots', `Duplicate ${adUnitPath}`);
	            return;
	        }
	        slot.googleTagSlot
	            .addService(pubads)
	            .setTargeting('location', slot.location)
	            .setTargeting('sequence', String(slot.sequence))
	            .setTargeting('id', slot.id);
	        if ((slot.sequence === 1 && slot.isAboveTheFold) || slot.location === 'Footer') {
	            slot.googleTagSlot.setTargeting('ATF', 'true');
	        }
	        if (slot.isSticky && slot.location !== 'Video_StickyOutstream') {
	            slot.googleTagSlot.setTargeting('sticky', 'true');
	        }
	        if (slot.special && slot.special.length > 0) {
	            slot.googleTagSlot.setTargeting('special', slot.special);
	        }
	        if (slot.location === 'Sponsor_Tile') {
	            slot.googleTagSlot.setCollapseEmptyDiv(true, true);
	        }
	        if (pubads.isInitialLoadDisabled()) {
	            googletag.display(slot.googleTagSlot);
	        }
	    }
	};
	GoogleAdManager = GoogleAdManager_1 = __decorate([
	    log('GoogleAdManager'),
	    singleton(),
	    __metadata("design:paramtypes", [Config, Slots])
	], GoogleAdManager);

	class AuctionManager {
	    get videoEnabled() {
	        return true;
	    }
	    get enabled() {
	        return true;
	    }
	}

	let AmazonHoldDisplayExperiment = class AmazonHoldDisplayExperiment extends Experiment {
	    constructor(abgroup) {
	        super();
	        this.key = 'amzn_hold_disp';
	        this._choices = [{ choice: true }, { choice: false }];
	        this._result = this.run();
	        abgroup.set(this.key, this._result ? 'on' : 'off');
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new BernoulliTrial(0.5).get();
	    }
	};
	__decorate([
	    sticky(),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", []),
	    __metadata("design:returntype", void 0)
	], AmazonHoldDisplayExperiment.prototype, "run", null);
	AmazonHoldDisplayExperiment = __decorate([
	    log('AmazonLibraryExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup])
	], AmazonHoldDisplayExperiment);

	class PrebidMethods {
	    addAdUnits(adUnits) {
	        this.addToQueue(() => {
	            pbjs.addAdUnits(adUnits);
	        });
	    }
	    addToQueue(command) {
	        pbjs.que.push(command);
	    }
	    enableAnalytics(config) {
	        this.addToQueue(() => {
	            pbjs.enableAnalytics(config);
	        });
	    }
	    isPrebidLoaded() {
	        return window.pbjs && window.pbjs.libLoaded;
	    }
	    markWinningBidAsUsed(options) {
	        this.addToQueue(() => {
	            pbjs.markWinningBidAsUsed(options);
	        });
	    }
	    offEvent(method, callback) {
	        this.addToQueue(() => {
	            pbjs.offEvent(method, callback);
	        });
	    }
	    onEvent(method, callback) {
	        this.addToQueue(() => {
	            pbjs.onEvent(method, callback);
	        });
	    }
	    refreshUserIds(options, callback) {
	        this.addToQueue(() => {
	            pbjs.refreshUserIds(options, callback);
	        });
	    }
	    requestBids(request) {
	        this.addToQueue(() => {
	            pbjs.requestBids(request);
	        });
	    }
	    setAliasBidder(adapterName, name) {
	        this.addToQueue(() => {
	            pbjs.aliasBidder(adapterName, name);
	        });
	    }
	    setBidderConfig(options) {
	        this.addToQueue(() => {
	            pbjs.setBidderConfig(options);
	        });
	    }
	    setBidderSettings(settings) {
	        this.addToQueue(() => {
	            pbjs.bidderSettings = settings;
	        });
	    }
	    setBidsReceivedFilter(filterFunc) {
	        this.addToQueue(() => {
	            pbjs.setBidsReceivedFilter(filterFunc);
	        });
	    }
	    setConfig(options) {
	        this.addToQueue(() => {
	            pbjs.setConfig(options);
	        });
	    }
	    setTargetingForGPTAsync(adUnitCodes) {
	        this.addToQueue(() => {
	            pbjs.setTargetingForGPTAsync(adUnitCodes);
	        });
	    }
	    triggerUserSyncs() {
	        this.addToQueue(() => {
	            pbjs.triggerUserSyncs();
	        });
	    }
	    waitForQueue() {
	        return new Promise((resolve, reject) => {
	            if (!this.isPrebidLoaded())
	                reject(false);
	            pbjs.que.push(() => {
	                resolve(true);
	            });
	        });
	    }
	    getBidResponsesForAdUnitCode(adUnitCode) {
	        return pbjs.getBidResponsesForAdUnitCode(adUnitCode);
	    }
	    getConfig(option, callback) {
	        return callback ? pbjs.getConfig(option, callback) : pbjs.getConfig(option);
	    }
	    getHighestCpmBids(adUnitCode) {
	        return pbjs.getHighestCpmBids(adUnitCode);
	    }
	}

	let LazyLoadFloorsExperiment = class LazyLoadFloorsExperiment extends Experiment {
	    constructor(abgroup) {
	        super();
	        this.abgroup = abgroup;
	        this._choices = [
	            { choice: 0, weight: 60 },
	            { choice: 0.8, weight: 10 },
	            { choice: 0.9, weight: 10 },
	            { choice: 0.95, weight: 10 },
	            { choice: 0.99, weight: 10 },
	        ];
	        this.key = 'lzflrcontent';
	        this._result = this.run();
	        if (this._result === 0) {
	            this.abgroup.set(this.key, 'off');
	        }
	        else if (this._result === 0.8) {
	            this.abgroup.set(this.key, '80');
	        }
	        else if (this._result === 0.9) {
	            this.abgroup.set(this.key, '90');
	        }
	        else if (this._result === 0.95) {
	            this.abgroup.set(this.key, '95');
	        }
	        else if (this._result === 0.99) {
	            this.abgroup.set(this.key, '99');
	        }
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new WeightedChoice(this._choices).get();
	    }
	};
	__decorate([
	    sticky(),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", []),
	    __metadata("design:returntype", Number)
	], LazyLoadFloorsExperiment.prototype, "run", null);
	LazyLoadFloorsExperiment = __decorate([
	    log('LazyLoadFloorsExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup])
	], LazyLoadFloorsExperiment);

	let RubiconFloorsExperiment = class RubiconFloorsExperiment extends Experiment {
	    constructor(abgroup) {
	        super();
	        this.abgroup = abgroup;
	        this._choices = [
	            { choice: 'on', weight: 4 },
	            { choice: 'on_min', weight: 4 },
	            { choice: 'off', weight: 90 },
	            { choice: 'none', weight: 2 },
	        ];
	        this.key = 'rbflr';
	        this._result = this.run();
	        this.abgroup.set(this.key, this._result);
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new WeightedChoice(this._choices).get();
	    }
	};
	__decorate([
	    sticky(),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", []),
	    __metadata("design:returntype", String)
	], RubiconFloorsExperiment.prototype, "run", null);
	RubiconFloorsExperiment = __decorate([
	    log('RubiconFloorsExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup])
	], RubiconFloorsExperiment);

	let SessionFloorsExperiment = class SessionFloorsExperiment extends Experiment {
	    constructor(abgroup) {
	        super();
	        this.abgroup = abgroup;
	        this._choices = [
	            { choice: 0, weight: 60 },
	            { choice: 0.8, weight: 10 },
	            { choice: 0.9, weight: 10 },
	            { choice: 0.95, weight: 10 },
	            { choice: 0.99, weight: 10 },
	        ];
	        this.key = 'sessflrs1';
	        this._result = this.run();
	        if (this._result === 0) {
	            this.abgroup.set(this.key, 'off');
	        }
	        else {
	            this.abgroup.set(this.key, `${this._result * 100}`);
	        }
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new WeightedChoice(this._choices).get();
	    }
	};
	__decorate([
	    sticky(),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", []),
	    __metadata("design:returntype", Number)
	], SessionFloorsExperiment.prototype, "run", null);
	SessionFloorsExperiment = __decorate([
	    log('SessionFloorsExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup])
	], SessionFloorsExperiment);

	let FloorsExperimentHandler = class FloorsExperimentHandler {
	    constructor(_rubiconFloorsExperiment, abGroup) {
	        this._rubiconFloorsExperiment = _rubiconFloorsExperiment;
	        this.abGroup = abGroup;
	        this._result = {
	            rubicon: false,
	            legacy: false,
	            percentile: {
	                lazy: 0,
	                session: 0,
	            },
	        };
	        this.run();
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        if (this._rubiconFloorsExperiment.result === 'on' || this._rubiconFloorsExperiment.result === 'on_min') {
	            this._result.rubicon = true;
	        }
	        if (this._rubiconFloorsExperiment.result === 'off' || this._rubiconFloorsExperiment.result === 'on_min') {
	            this._result.legacy = true;
	            this._result.percentile.lazy = new LazyLoadFloorsExperiment(this.abGroup).result;
	            this._result.percentile.session = new SessionFloorsExperiment(this.abGroup).result;
	        }
	    }
	};
	FloorsExperimentHandler = __decorate([
	    log('FloorsExperimentHandler'),
	    singleton(),
	    __metadata("design:paramtypes", [RubiconFloorsExperiment, ABGroup])
	], FloorsExperimentHandler);

	let Floors = class Floors {
	    constructor(_floorsExperiment, _config, _prebidMethods) {
	        this._floorsExperiment = _floorsExperiment;
	        this._config = _config;
	        this._prebidMethods = _prebidMethods;
	        this._amazonFloors = {};
	    }
	    setValues(obj, adUnitCode, floorCpm) {
	        obj.values[`${window.location.host}|${adUnitCode}`] = floorCpm > 0 ? floorCpm : 0;
	    }
	    getDefaultFloorConfig() {
	        return {
	            currency: 'USD',
	            schema: {
	                fields: ['domain', 'adUnitCode'],
	                delimiter: '|',
	            },
	            values: {},
	        };
	    }
	    setPrebidFloors(data) {
	        if (data.modelGroups.length > 0) {
	            this._setPrebidFloors(data);
	        }
	    }
	    setLegacyFloorsConfig(data) {
	        if (!Object.keys(data.values).length) {
	            return;
	        }
	        this._setAmazonFloors(data);
	        const rubiconFloorData = this.rubiconData || { floorsSchemaVersion: 2, modelGroups: [{ ...data, modelWeight: 100, modelVersion: 'legacy' }] };
	        if (this._floorsExperiment.result.rubicon === true && this._floorsExperiment.result.legacy === true && this.rubiconData) {
	            rubiconFloorData.modelGroups = this.rubiconData.modelGroups.map((modelGroup) => {
	                modelGroup.values = this.getMaxFloors(data.values, modelGroup.values);
	                return modelGroup;
	            });
	        }
	        this.setPrebidFloors(rubiconFloorData);
	    }
	    _setPrebidFloors(data) {
	        this._prebidMethods.setConfig({
	            floors: {
	                enforcement: {
	                    enforceJS: false,
	                },
	                data,
	            },
	        });
	    }
	    _setAmazonFloors({ values, currency }) {
	        Object.keys(values).forEach(k => {
	            const id = (k.split('|').length && k.split('|')[1]) || k;
	            this._amazonFloors[id] = {
	                value: values[k],
	                currency: currency || 'USD',
	            };
	        });
	    }
	    getAmazonFloorsBySlotId(id) {
	        return this._amazonFloors[id] || this._amazonFloors[id.toLowerCase()] || {};
	    }
	    getMaxFloors(legacyFloors = {}, rubiconFloors = {}) {
	        const rubiconAdUnitKeys = this.setAdUnitCodeKeys(rubiconFloors);
	        const legacyAdUnitKeys = this.setAdUnitCodeKeys(legacyFloors);
	        const mergedWithAdUnitCodeKeys = { ...legacyAdUnitKeys, ...rubiconAdUnitKeys };
	        return Object.keys(mergedWithAdUnitCodeKeys).reduce((acc, key) => {
	            const validNum = (num) => (isNaN(num) ? 0 : num);
	            acc[`${window.location.host}|${key}`] = Math.max(validNum(legacyAdUnitKeys[key]), validNum(rubiconAdUnitKeys[key]));
	            return acc;
	        }, {});
	    }
	    setAdUnitCodeKeys(prebidFloorsValues) {
	        return Object.keys(prebidFloorsValues).reduce((acc, floorValue) => {
	            floorValue.split('|').forEach(field => {
	                const adUnitCodeMatched = this.verifyAdUnitCode(field);
	                if (adUnitCodeMatched) {
	                    acc[field.toLowerCase()] = prebidFloorsValues[floorValue];
	                }
	            });
	            return acc;
	        }, {});
	    }
	    verifyAdUnitCode(field) {
	        const displayUnit = !!/AdThrive_/i.exec(field);
	        const videoUnit = [...this._config.video.instreamAdUnits].filter(x => x.toLowerCase() === field.toLowerCase())[0] === undefined ? false : true;
	        return displayUnit || videoUnit;
	    }
	};
	Floors = __decorate([
	    log('Floors'),
	    singleton(),
	    __metadata("design:paramtypes", [FloorsExperimentHandler, Config, PrebidMethods])
	], Floors);

	class SupplyChain {
	    getSupplyChainConfig(sid) {
	        return {
	            ver: '1.0',
	            complete: 1,
	            nodes: [
	                {
	                    asi: 'cafemedia.com',
	                    sid,
	                    hp: 1,
	                },
	            ],
	        };
	    }
	}

	let AmazonAuctionManager = class AmazonAuctionManager extends AuctionManager {
	    constructor(_config, _amazonHoldDisplayExperiment, _floors) {
	        super();
	        this._config = _config;
	        this._amazonHoldDisplayExperiment = _amazonHoldDisplayExperiment;
	        this._floors = _floors;
	        this.holdDisplayExperiment = false;
	        this.videoSlotNames = new Map();
	        this.videoSlotBids = new Map();
	    }
	    init() {
	        window.apstag.init({
	            pubID: this._config.amazon.pubId,
	            adServer: 'googletag',
	            videoAdServer: 'DFP',
	            schain: new SupplyChain().getSupplyChainConfig(this._config.site.id),
	        });
	        this.holdDisplayExperiment = this._amazonHoldDisplayExperiment.result;
	        this.videoSlotNames = this.initVideoSlotMap();
	    }
	    requestBids(slots, timeout = this._config.timeouts.initialBidsRequest - 200) {
	        const { id } = this._config.site;
	        const { networkCode, prefix } = this._config.gam;
	        return new Promise(resolve => {
	            GoogleAdManager.pushToQueue(() => {
	                const amazonSlots = slots
	                    .filter(slot => slot.googleTagSlot !== undefined && !this._config.amazon.adUnitExclusions.has(slot.location))
	                    .map(slot => {
	                    const floor = this._floors.getAmazonFloorsBySlotId(slot.element.id);
	                    return {
	                        slotID: slot.element.id,
	                        slotName: `/${networkCode}/${prefix}_${slot.name}/${id}`,
	                        sizes: slot.sizes,
	                        ...(floor &&
	                            floor.currency && {
	                            floor: {
	                                value: Math.ceil(floor.value * 100),
	                                currency: floor.currency,
	                            },
	                        }),
	                    };
	                });
	                if (amazonSlots.length) {
	                    window.apstag.fetchBids({
	                        slots: amazonSlots,
	                        timeout,
	                    }, () => {
	                        GoogleAdManager.pushToQueue(() => {
	                            window.apstag.setDisplayBids();
	                            resolve();
	                        });
	                    });
	                    if (!this.holdDisplayExperiment) {
	                        resolve();
	                    }
	                }
	                else {
	                    resolve();
	                }
	            });
	        });
	    }
	    refreshBids(slots) {
	        return this.requestBids(slots, this._config.timeouts.refreshBidsRequest - 200);
	    }
	    requestVideoBids(videos, timeout = this._config.timeouts.initialBidsRequest - 200) {
	        return Promise.all(videos.map(video => {
	            const floor = this._floors.getAmazonFloorsBySlotId(video.name);
	            const amazonVideoSlot = {
	                slotID: this.videoSlotNames.get(video.name),
	                mediaType: 'video',
	                ...(floor &&
	                    floor.currency && {
	                    floor: {
	                        value: Math.ceil(floor.value * 100),
	                        currency: floor.currency,
	                    },
	                }),
	            };
	            return new Promise(resolve => {
	                if (amazonVideoSlot) {
	                    window.apstag.fetchBids({
	                        slots: [amazonVideoSlot],
	                        timeout,
	                    }, (bids) => {
	                        if (bids.length > 0) {
	                            this.videoSlotBids.set(video._playlistId, bids[0]);
	                        }
	                        resolve();
	                    });
	                }
	                else {
	                    resolve();
	                }
	            });
	        }))
	            .then(() => Promise.resolve())
	            .catch();
	    }
	    getVideoBid(playlistId) {
	        const videoBid = this.videoSlotBids.get(playlistId);
	        if (videoBid) {
	            this.videoSlotBids.delete(playlistId);
	            return videoBid;
	        }
	    }
	    initVideoSlotMap() {
	        const deviceSlotMap = {
	            desktop: new Map([
	                [VideoAdUnit.Video_Collapse_Autoplay_SoundOff, 'Sticky_Playlist_Desktop'],
	                [VideoAdUnit.Video_Individual_Autoplay_SOff, 'Sticky_Related_Desktop'],
	                [VideoAdUnit.Video_In_Post_ClicktoPlay_SoundOn, 'CTP_Desktop'],
	            ]),
	            mobile: new Map([
	                [VideoAdUnit.Video_Coll_SOff_Smartphone, 'Sticky_Playlist_Mobile'],
	                [VideoAdUnit.Video_Individual_Autoplay_SOff, 'Sticky_Related_Mobile'],
	                [VideoAdUnit.Video_In_Post_ClicktoPlay_SoundOn, 'CTP_Mobile'],
	            ]),
	        };
	        return isDesktop() ? deviceSlotMap.desktop : deviceSlotMap.mobile;
	    }
	    get videoEnabled() {
	        return this._config.partners.video.amazonUAM;
	    }
	    get enabled() {
	        return window.apstag !== undefined && this._config.amazon.enabled;
	    }
	};
	AmazonAuctionManager = __decorate([
	    log('AmazonAuctionManager'),
	    injectable(),
	    __metadata("design:paramtypes", [Config, AmazonHoldDisplayExperiment, Floors])
	], AmazonAuctionManager);

	class Analytics {
	}

	let AnalyticsExperiment = class AnalyticsExperiment extends Experiment {
	    constructor(abgroup) {
	        super();
	        this.key = 'pba';
	        this._choices = [
	            { choice: { name: 'roxot', weight: 1 } },
	            { choice: { name: 'rubicon', weight: 0 } },
	            { choice: { name: 'none', weight: 99 } },
	        ];
	        this._result = this.run();
	        abgroup.set('pba', this._result ? this._result.name : 'off');
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        const choices = this._choices
	            .map(item => item.choice)
	            .map(aa => ({
	            choice: aa,
	            weight: aa.weight,
	        }));
	        const analyticsChoices = new WeightedChoice(choices);
	        return analyticsChoices.get();
	    }
	};
	__decorate([
	    sticky(),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", []),
	    __metadata("design:returntype", Object)
	], AnalyticsExperiment.prototype, "run", null);
	AnalyticsExperiment = __decorate([
	    log('AnalyticsExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup])
	], AnalyticsExperiment);

	let RoxotAnalytics = class RoxotAnalytics extends Analytics {
	    constructor(_config, _prebidMethods, _analyticsExperiment) {
	        super();
	        this._config = _config;
	        this._prebidMethods = _prebidMethods;
	        this._analyticsExperiment = _analyticsExperiment;
	        this.name = 'roxot';
	    }
	    init() {
	        if (window.localStorage) {
	            try {
	                this._prebidMethods.enableAnalytics({
	                    provider: 'roxot',
	                    options: {
	                        publisherIds: ['ffcc0e40-07d0-4238-92e4-f711915afb5a'],
	                        host: `${this._config.context.bucket}.com`,
	                    },
	                });
	            }
	            catch (err) {
	                logger.error('RoxotAnalytics', 'init - ignored', err);
	            }
	        }
	        else {
	            logger.error('RoxotAnalytics', 'init', new Error('Disabled roxot because localStorage is undefined'));
	        }
	    }
	    get enabled() {
	        var _a;
	        return ((_a = this._analyticsExperiment.result) === null || _a === void 0 ? void 0 : _a.name) === 'roxot';
	    }
	};
	RoxotAnalytics = __decorate([
	    log('RoxotAnalytics'),
	    injectable(),
	    __metadata("design:paramtypes", [Config, PrebidMethods, AnalyticsExperiment])
	], RoxotAnalytics);

	let RubiconAnalytics = class RubiconAnalytics extends Analytics {
	    constructor(_rubiconFloorsExperiment, _analyticsExperiment, _prebidMethods) {
	        super();
	        this._rubiconFloorsExperiment = _rubiconFloorsExperiment;
	        this._analyticsExperiment = _analyticsExperiment;
	        this._prebidMethods = _prebidMethods;
	        this.name = 'rubicon';
	    }
	    init() {
	        try {
	            this._prebidMethods.enableAnalytics({
	                provider: this.name,
	                options: {
	                    accountId: 9262,
	                    endpoint: 'https://prebid-a.rubiconproject.com/event',
	                },
	            });
	        }
	        catch (err) {
	            logger.error('RubiconAnalytics', 'init - ignored', err);
	        }
	    }
	    get enabled() {
	        var _a;
	        return this._rubiconFloorsExperiment.result === 'on' || ((_a = this._analyticsExperiment.result) === null || _a === void 0 ? void 0 : _a.name) === 'rubicon';
	    }
	};
	RubiconAnalytics = __decorate([
	    log('RubiconAnalytics'),
	    injectable(),
	    __metadata("design:paramtypes", [RubiconFloorsExperiment,
	        AnalyticsExperiment,
	        PrebidMethods])
	], RubiconAnalytics);

	class BidderBase {
	    updateBidParams(_slot, _adUnit, bid) {
	        return bid;
	    }
	    get enabled() {
	        return true;
	    }
	    get videoEnabled() {
	        return true;
	    }
	    get name() {
	        return this.bidderConfig.bidder_name;
	    }
	}

	class Bidder extends BidderBase {
	    getSlotBidRequests(_slot) {
	        return;
	    }
	    getVideoSlotBidRequests(_video) {
	        return;
	    }
	    getBidRequests(slots) {
	        return slots.reduce((bids, slot) => {
	            bids.set(slot.id, this.getSlotBidRequests(slot));
	            return bids;
	        }, new Map());
	    }
	    getVideoBidRequests(videos) {
	        return videos.reduce((bids, video) => {
	            bids.set(video.name, this.getVideoSlotBidRequests(video));
	            return bids;
	        }, new Map());
	    }
	}

	let ThirtyThreeAcrossBidder = class ThirtyThreeAcrossBidder extends Bidder {
	    constructor(_config) {
	        super();
	        this._config = _config;
	        this.bidderConfig = this._config.partners.getBidderConfig('33across');
	        this._map = new Map([
	            ['Below_Post_1', 'dqjinO_Lqr6i5uaKkv7mNO'],
	            ['Content_1', 'dzqsVw_Lqr6iHHaKlId8sQ'],
	            ['Content_2', 'dGYL36_Lqr6iHHaKlId8sQ'],
	            ['Content_3', 'dPmBLW_Lqr6ikXaKkGJozW'],
	            ['Content_4', 'dYmdO4_Lqr6ikXaKkGJozW'],
	            ['Content_5', 'd73_q4_Lqr6ikfaKlId8sQ'],
	            ['Content_6', 'aeCNc8_Lur6ikfaKlId8sQ'],
	            ['Content_7', 'amEJ90_Lur6ikXaKkGJozW'],
	            ['Content_8', 'avcDUU_Lur6ikXaKkGJozW'],
	            ['Content_9', 'aE0F5q_Lur6iHHaKlId8sQ'],
	            ['Footer_1', 'aMbGkS_Lur6ikXaKkGJozW'],
	            ['Header_1', 'aZCnyg_Lur6ikfaKlId8sQ'],
	            ['Header_2', 'a7S6ye_Lur6ikXaKkGJozW'],
	            ['Recipe_1', 'bfXhLW_Lur6ioMaKkGJozW'],
	            ['Recipe_2', 'bmQVLo_Lur6ikfaKlId8sQ'],
	            ['Recipe_3', 'd7kcPCUhur6yo-aKkGJozW'],
	            ['Recipe_4', 'agAjkaUhyr6yo9aKlId8sQ'],
	            ['Sidebar_1', 'buEy3O_Lur6ikfaKlId8sQ'],
	            ['Sidebar_2', 'bCOsqy_Lur6ikfaKlId8sQ'],
	            ['Sidebar_3', 'bOGvrc_Lur6ikXaKkGJozW'],
	            ['Sidebar_4', 'bW-wb0_Lur6ikfaKlId8sQ'],
	            ['Sidebar_5', 'b8nVxi_Lur6ikXaKkGJozW'],
	            ['Sidebar_9', 'cggK7W_Lur6ikfaKlId8sQ'],
	        ]);
	    }
	    get enabled() {
	        return this._config.partners.thirtyThreeAcross;
	    }
	    getSlotBidRequests(slot) {
	        if (this._map.has(slot.placementMapName)) {
	            return [
	                {
	                    bidder: this.name,
	                    params: {
	                        siteId: this._map.get(slot.placementMapName),
	                        productId: 'siab',
	                    },
	                },
	            ];
	        }
	    }
	};
	ThirtyThreeAcrossBidder = __decorate([
	    log('ThirtyThreeAcrossBidder'),
	    injectable(),
	    __metadata("design:paramtypes", [Config])
	], ThirtyThreeAcrossBidder);

	let OneVideoStreamExperiment = class OneVideoStreamExperiment extends Experiment {
	    constructor(abgroup) {
	        super();
	        this.key = 'rmos1';
	        this._choices = [{ choice: true }, { choice: false }];
	        this._result = this.run();
	        abgroup.set(this.key, this._result ? 'on' : 'off');
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new BernoulliTrial(0.01).get();
	    }
	};
	OneVideoStreamExperiment = __decorate([
	    log('OneVideoStreamExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup])
	], OneVideoStreamExperiment);

	let OneVideoStreamNoVideoExperiment = class OneVideoStreamNoVideoExperiment extends Experiment {
	    constructor(abgroup, config) {
	        super();
	        this._result = false;
	        this.key = 'rmosnv1';
	        this._choices = [{ choice: true }, { choice: false }];
	        if (!config.video.hasJwPlayer) {
	            this._result = this.run();
	            abgroup.set(this.key, this._result ? 'on' : 'off');
	        }
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new BernoulliTrial(0.01).get();
	    }
	};
	OneVideoStreamNoVideoExperiment = __decorate([
	    log('OneVideoStreamNoVideoExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup, Config])
	], OneVideoStreamNoVideoExperiment);

	let Outstream = class Outstream {
	    constructor(_config) {
	        this._config = _config;
	        this._sharedConfig = {
	            context: 'outstream',
	            mimes: ['video/mp4'],
	            api: [2],
	            skip: 0,
	            pos: 1,
	            protocols: [2, 3, 5, 6, 7, 8],
	            linearity: 1,
	            minduration: 0,
	            maxduration: 30,
	            playbackmethod: [2],
	        };
	        const { desktop, tablet } = this._config.site.breakpoints;
	        this._stickyOutstreamSize = deviceByBreakpoint(tablet, desktop) === 'phone' ? [178, 100] : [227, 150];
	    }
	    _callANRenderer(bid, ad) {
	        const adResponse = this._getOutstreamRendererConfig(ad);
	        bid.renderer.push(() => {
	            window.ANOutstreamVideo.renderAd({
	                targetId: bid.adUnitCode,
	                adResponse,
	                rendererOptions: {
	                    audioOnMouseover: false,
	                    playerSkin: {
	                        topBarColor: 'rgba(0,0,0,0.0)',
	                        topBarTextColor: 'rgba(0,0,0,0.0)',
	                    },
	                    playVideoVisibleThreshold: 1,
	                    disableCollapse: {
	                        enabled: false,
	                        replay: false,
	                    },
	                },
	            });
	        });
	    }
	    _renderer(bid) {
	        let vastXml = bid.ad || bid.vastXml;
	        if (vastXml) {
	            this._callANRenderer(bid, vastXml);
	        }
	        else if (bid.vastUrl) {
	            vastXml = getVastXML(bid.vastUrl);
	            vastXml
	                .then((vastXML) => {
	                this._callANRenderer(bid, vastXML);
	                return true;
	            })
	                .catch((err) => {
	                logger.error('StickyOutstream', 'fetch', { message: err });
	                return false;
	            });
	        }
	    }
	    get standardOutstreamConfig() {
	        return {
	            playerSize: [640, 480],
	            ...this._sharedConfig,
	        };
	    }
	    get stickyOutstreamConfig() {
	        return {
	            ...this._sharedConfig,
	            playerSize: this._stickyOutstreamSize,
	            renderer: {
	                url: 'https://acdn.adnxs.com/video/outstream/ANOutstreamVideo.js',
	                render: (bid) => {
	                    this._renderer(bid);
	                },
	            },
	        };
	    }
	    _getOutstreamRendererConfig(vastXml) {
	        return {
	            ad: {
	                video: {
	                    content: vastXml,
	                    player_width: this._stickyOutstreamSize[0],
	                    player_height: this._stickyOutstreamSize[1],
	                },
	            },
	        };
	    }
	};
	Outstream = __decorate([
	    injectable(),
	    __metadata("design:paramtypes", [Config])
	], Outstream);

	let MediaType = class MediaType {
	    constructor(_config, _gam, _outstream, _oneVideoStreamExperiment) {
	        this._config = _config;
	        this._gam = _gam;
	        this._outstream = _outstream;
	        this._oneVideoStreamExperiment = _oneVideoStreamExperiment;
	        this._standardOutstreamSlots = ['Content_1', 'Below_Post_1'];
	        this.oneStreamExpResult = false;
	    }
	    runOneStreamExperiment() {
	        const oneVideoStreamNoVideoExperiment = instance.resolve(OneVideoStreamNoVideoExperiment);
	        this._gam.setTargeting({ key: 'abgroup', value: this._config.abGroup.groups.join(',') });
	        this.oneStreamExpResult = oneVideoStreamNoVideoExperiment.result;
	        if (this.oneStreamExpResult) {
	            ['Content_3', 'Content_5', 'Recipe_1'].forEach(unit => {
	                this._standardOutstreamSlots.push(unit);
	            });
	        }
	    }
	    isOutstreamAllowed() {
	        return !this._oneVideoStreamExperiment.result || !this._config.video.hasJwPlayer;
	    }
	    outstreamEnabled(slot) {
	        const viewability = slot.viewability;
	        const refreshCount = slot.refreshCount;
	        const isStickyOutstream = slot.location === 'Video_StickyOutstream';
	        const outstreamHVP = refreshCount >= 1 || viewability >= 0.5 || isStickyOutstream;
	        const outstreamCapable = (this._config.adTypes.outstreamEnabled || isStickyOutstream) && this.outstreamSlots.has(slot.placementMapName) && this.isOutstreamAllowed();
	        return {
	            outstreamCapable,
	            currentlyActive: outstreamCapable && outstreamHVP,
	        };
	    }
	    getMediaType(slotRequest) {
	        const mediaType = {};
	        const { slot, video } = slotRequest;
	        if (video && this._config.video.instreamAdUnits.has(video.name)) {
	            const instreamVideoMediaType = this.getInstreamConfig(video);
	            mediaType.video = instreamVideoMediaType;
	        }
	        if (slot) {
	            const highlyViewable = isHighlyViewableSlot(slot, this._config.marmalade.hvThreshold);
	            const bannerMediaType = {
	                sizes: slot.sizes,
	                ...(highlyViewable && {
	                    pos: 1,
	                }),
	            };
	            if (slot.location !== 'Video_StickyOutstream') {
	                mediaType.banner = bannerMediaType;
	            }
	            if (this.outstreamEnabled(slot).currentlyActive) {
	                mediaType.video = slot.location !== 'Video_StickyOutstream' ? this._outstream.standardOutstreamConfig : this._outstream.stickyOutstreamConfig;
	            }
	        }
	        return mediaType;
	    }
	    get outstreamSlots() {
	        return new Set(this.getOutstreamEnabledUnits());
	    }
	    getOutstreamEnabledUnits() {
	        return this._config.video.hasStickyOutstream ? ['Video_StickyOutstream_1'] : this._standardOutstreamSlots;
	    }
	    getInstreamConfig(video) {
	        var _a;
	        return {
	            context: 'instream',
	            playerSize: video.size,
	            mimes: this._config.video.mimeType,
	            protocols: this._config.video.videoProtocols.protocols,
	            maxduration: 30,
	            ...(((_a = this._config.video.playbackmethod) === null || _a === void 0 ? void 0 : _a.get(video.name)) && {
	                playbackmethod: this._config.video.playbackmethod.get(video.name),
	            }),
	            linearity: 1,
	            api: this._config.video.apiValue,
	            w: video.size[0],
	            h: video.size[1],
	            pos: this._config.video.position.id,
	            minduration: 1,
	            startdelay: 0,
	            placement: 1,
	            skip: 0,
	        };
	    }
	};
	MediaType = __decorate([
	    singleton(),
	    __metadata("design:paramtypes", [Config,
	        GoogleAdManager,
	        Outstream,
	        OneVideoStreamExperiment])
	], MediaType);

	let AppNexusBidder = class AppNexusBidder extends Bidder {
	    constructor(_config, _mediaType) {
	        super();
	        this._config = _config;
	        this._mediaType = _mediaType;
	        this.bidderConfig = this._config.partners.getBidderConfig('appnexus');
	        this._keywords = {
	            keywords: {
	                ...(this._config.site.filteredSensitiveCategories.length && {
	                    sens: this._config.site.filteredSensitiveCategories,
	                }),
	                bucket: [this._config.context.bucket],
	                Chrome: `${isChrome()}`,
	                Mobile: '' + navigator.userAgent && navigator.userAgent.search(/Mobi/i) > -1,
	                ...(this._config.site.verticals.length && {
	                    verticals: this._config.site.verticals,
	                }),
	            },
	        };
	        this.outstreamType = isMobile() ? 'outstreamMobile' : 'outstreamDesktop';
	        this._map = new Map([
	            ['Below_Post_1', [{ placementId: 13036386 }]],
	            [
	                'Content_1',
	                [
	                    { placementId: 13036388 },
	                    {
	                        placementId: 16808429,
	                        adType: this.outstreamType,
	                        playback_method: ['auto_play_sound_off'],
	                    },
	                ],
	            ],
	            ['Content_2', [{ placementId: 13036389 }]],
	            ['Content_3', [{ placementId: 13036391 }]],
	            ['Content_4', [{ placementId: 13036393 }]],
	            ['Content_5', [{ placementId: 13036394 }]],
	            ['Content_6', [{ placementId: 13036396 }]],
	            ['Content_7', [{ placementId: 13036398 }]],
	            ['Content_8', [{ placementId: 13036399 }]],
	            ['Content_9', [{ placementId: 13036400 }]],
	            ['Footer_1', [{ placementId: 13036401 }]],
	            ['Header_1', [{ placementId: 13036404 }]],
	            ['Header_2', [{ placementId: 13036405 }]],
	            ['Interstitial_1', [{ placementId: 21240886 }]],
	            ['Recipe_1', [{ placementId: 13036406 }]],
	            ['Recipe_2', [{ placementId: 13036407 }]],
	            ['Recipe_3', [{ placementId: 15014787 }]],
	            ['Recipe_4', [{ placementId: 15998791 }]],
	            ['Sidebar_1', [{ placementId: 13036408 }]],
	            ['Sidebar_2', [{ placementId: 13036409 }]],
	            ['Sidebar_3', [{ placementId: 13036410 }]],
	            ['Sidebar_4', [{ placementId: 13036411 }]],
	            ['Sidebar_5', [{ placementId: 13036412 }]],
	            ['Sidebar_9', [{ placementId: 13036416 }]],
	            ['Video_StickyOutstream_1', [{ placementId: 22366045 }]],
	            [VideoAdUnit.Video_Collapse_Autoplay_SoundOff, [{ placementId: 15504193, playback_method: ['auto_play_sound_off'] }]],
	            [VideoAdUnit.Video_Coll_SOff_Smartphone, [{ placementId: 15504209, playback_method: ['auto_play_sound_off'] }]],
	            [VideoAdUnit.Video_In_Post_ClicktoPlay_SoundOn, [{ placementId: 15504166, playback_method: ['click_to_play'] }]],
	            [VideoAdUnit.Video_Individual_Autoplay_SOff, [{ placementId: 17947919, playback_method: ['auto_play_sound_off'] }]],
	        ]);
	        this._playbackmethodMap = new Map([
	            [3, 'click_to_play'],
	            [6, 'auto_play_sound_off'],
	        ]);
	    }
	    get enabled() {
	        return this._config.partners.appNexus;
	    }
	    get videoEnabled() {
	        return this._config.partners.video.appNexus;
	    }
	    getSlotBidRequests(slot) {
	        if (this._map.has(slot.placementMapName)) {
	            return this._map
	                .get(slot.placementMapName)
	                .filter(({ adType }) => !adType || this._config.adTypes.has(adType))
	                .map(({ adType, placementId, playback_method }) => {
	                const isHV = isHighlyViewableSlot(slot, this._config.marmalade.hvThreshold);
	                const video = adType === this.outstreamType ? { video: { playback_method } } : '';
	                const isRefreshableOutstream = adType === this.outstreamType && !this._mediaType.outstreamEnabled(slot).currentlyActive;
	                return {
	                    bidder: this.name,
	                    ...(isRefreshableOutstream ? { labelAny: ['refresh'] } : {}),
	                    params: {
	                        ...this._keywords,
	                        allowSmallerSizes: this._config.adOptions.allowSmallerAdSizes,
	                        placementId,
	                        ...video,
	                        ...(isHV && { position: 'above' }),
	                    },
	                };
	            });
	        }
	    }
	    getVideoSlotBidRequests(_video) {
	        var _a;
	        if (this._map.has(_video.name)) {
	            return [
	                {
	                    bidder: this.name,
	                    params: {
	                        ...this._keywords,
	                        placementId: this._map.get(_video.name)[0].placementId,
	                        position: this._config.video.position.name,
	                        video: {
	                            mimes: this._config.video.mimeType,
	                            ...(((_a = this._config.video.playbackmethod) === null || _a === void 0 ? void 0 : _a.get(_video.name)) && {
	                                playback_method: this._playbackmethodMap.get(this._config.video.playbackmethod.get(_video.name)[0]),
	                            }),
	                            frameworks: this._config.video.apiValue,
	                        },
	                    },
	                },
	            ];
	        }
	    }
	    updateBidParams(slot, _adUnit, bid) {
	        if (slot.refreshCount === 1) {
	            bid.params.position = 'above';
	        }
	        return bid;
	    }
	};
	AppNexusBidder = __decorate([
	    log('AppNexusBidder'),
	    injectable(),
	    __metadata("design:paramtypes", [Config, MediaType])
	], AppNexusBidder);

	let BrightRollBidder = class BrightRollBidder extends Bidder {
	    constructor(_config) {
	        super();
	        this._config = _config;
	        this.bidderConfig = this._config.partners.getBidderConfig('brightroll');
	        this._params = {
	            publisher: 'adthrive',
	        };
	        this._map = new Set([
	            'Below_Post_1',
	            'Content_1',
	            'Content_2',
	            'Content_3',
	            'Content_4',
	            'Content_5',
	            'Content_6',
	            'Content_7',
	            'Content_8',
	            'Content_9',
	            'Footer_1',
	            'Header_1',
	            'Header_2',
	            'Recipe_1',
	            'Recipe_2',
	            'Recipe_3',
	            'Recipe_4',
	            'Sidebar_1',
	            'Sidebar_2',
	            'Sidebar_3',
	            'Sidebar_4',
	            'Sidebar_5',
	            'Sidebar_9',
	        ]);
	    }
	    get enabled() {
	        return this._config.partners.brightroll;
	    }
	    getSlotBidRequests(slot) {
	        if (this._map.has(slot.placementMapName)) {
	            return [
	                {
	                    bidder: this.name,
	                    params: {
	                        ...this._params,
	                    },
	                },
	            ];
	        }
	    }
	};
	BrightRollBidder = __decorate([
	    log('BrightRollBidder'),
	    injectable(),
	    __metadata("design:paramtypes", [Config])
	], BrightRollBidder);

	let ConcertBidder = class ConcertBidder extends Bidder {
	    constructor(_config) {
	        super();
	        this._config = _config;
	        this.bidderConfig = this._config.partners.getBidderConfig('concert');
	        this._hvThreshold = 0;
	        this._map = new Map([['Content_1', [300, 250]]]);
	        this._desktopSizes = [[620, 366]];
	        this._mobileSizes = [
	            [325, 508],
	            [325, 204],
	        ];
	        if (this._config.context.device === 'desktop') {
	            this._map.set('Content_2', [300, 250]);
	            this._map.set('Content_3', [300, 250]);
	        }
	    }
	    get enabled() {
	        return this._config.partners.concert;
	    }
	    getPartnerIdFromDomain() {
	        try {
	            const domain = getRootDomain(window.location.hostname);
	            const splitArr = domain.split('.');
	            return splitArr[0].toLowerCase().replace('-', '');
	        }
	        catch (err) {
	            logger.error('ConcertBidder', 'getPartnerIdFromDomain', err);
	            return '';
	        }
	    }
	    getSlotBidRequests(slot) {
	        if (this._map.has(slot.placementMapName) && slot.hasSize(this._map.get(slot.placementMapName))) {
	            const partnerId = this.getPartnerIdFromDomain();
	            if (partnerId.length > 0) {
	                return [
	                    {
	                        bidder: this.name,
	                        ...(slot.viewability < this._hvThreshold ? { labelAny: ['refresh'] } : {}),
	                        params: {
	                            bidder: this.name,
	                            slot: slot.id,
	                            partnerId,
	                            sizes: isMobile() ? this._mobileSizes : this._desktopSizes,
	                        },
	                    },
	                ];
	            }
	        }
	    }
	};
	ConcertBidder = __decorate([
	    log('ConcertBidder'),
	    singleton(),
	    __metadata("design:paramtypes", [Config])
	], ConcertBidder);

	let ConversantBidder = class ConversantBidder extends Bidder {
	    constructor(_config) {
	        super();
	        this._config = _config;
	        this.bidderConfig = this._config.partners.getBidderConfig('conversant');
	        this._siteId = '203587';
	        this._map = new Map([
	            ['Below_Post_1', { tag_id: '8c6e3091' }],
	            ['Content', { tag_id: 'f4f67b17' }],
	            ['Content_1', { tag_id: '9cbc79fd' }],
	            ['Content_2', { tag_id: '8fdfa3de' }],
	            ['Content_3', { tag_id: 'ff6c383c' }],
	            ['Content_4', { tag_id: '972f654c' }],
	            ['Content_5', { tag_id: 'bd1aadb5' }],
	            ['Content_6', { tag_id: 'ce4f5d6e' }],
	            ['Content_7', { tag_id: 'd85e90b' }],
	            ['Content_8', { tag_id: 'f02f4ba' }],
	            ['Content_9', { tag_id: '2c01cbc' }],
	            ['Footer_1', { tag_id: '1b2dec1' }],
	            ['Header_1', { tag_id: '44d21b5' }],
	            ['Header_2', { tag_id: '3488dd9' }],
	            ['Recipe_1', { tag_id: 'f6cf917' }],
	            ['Recipe_2', { tag_id: '31d9c43' }],
	            ['Recipe_3', { tag_id: 'a7b4d19' }],
	            ['Recipe_4', { tag_id: '245c673' }],
	            ['Recipe_5', { tag_id: '0bf3576' }],
	            ['Sidebar_1', { tag_id: 'bf73d45' }],
	            ['Sidebar_2', { tag_id: '0a57500' }],
	            ['Sidebar_3', { tag_id: 'cceddcd' }],
	            ['Sidebar_4', { tag_id: '872fffd4' }],
	            ['Sidebar_5', { tag_id: 'a7653e4' }],
	            ['Sidebar_9', { tag_id: '517df454' }],
	            [VideoAdUnit.Video_Coll_SOff_Smartphone, { tag_id: '0d0dfda' }],
	            [VideoAdUnit.Video_Collapse_Autoplay_SoundOff, { tag_id: '50331e1d' }],
	            [VideoAdUnit.Video_Individual_Autoplay_SOff, { tag_id: 'de9d5670' }],
	            [VideoAdUnit.Video_In_Post_ClicktoPlay_SoundOn, { tag_id: 'ab89e3c1' }],
	        ]);
	    }
	    get enabled() {
	        return this._config.partners.conversant;
	    }
	    get videoEnabled() {
	        return this._config.partners.video.conversant;
	    }
	    getSlotBidRequests(slot) {
	        if (this._map.has(slot.placementMapName)) {
	            return [
	                {
	                    bidder: this.name,
	                    params: {
	                        tag_id: this._map.get(slot.placementMapName).tag_id,
	                        site_id: this._siteId,
	                    },
	                },
	            ];
	        }
	    }
	    getVideoSlotBidRequests(_video) {
	        if (this._map.has(_video.name)) {
	            return [
	                {
	                    bidder: this.name,
	                    params: {
	                        tag_id: this._map.get(_video.name).tag_id,
	                        site_id: this._siteId,
	                        mimes: this._config.video.mimeType,
	                        api: this._config.video.apiValue,
	                        ...(this._config.video.videoProtocols.scope === 'all' && {
	                            protocols: this._config.video.videoProtocols.protocols,
	                        }),
	                        position: this._config.video.position.id,
	                    },
	                },
	            ];
	        }
	    }
	};
	ConversantBidder = __decorate([
	    log('ConversantBidder'),
	    injectable(),
	    __metadata("design:paramtypes", [Config])
	], ConversantBidder);

	let CriteoBidder = class CriteoBidder extends Bidder {
	    constructor(_config) {
	        super();
	        this._config = _config;
	        this.bidderConfig = this._config.partners.getBidderConfig('criteo');
	        this._params = {
	            networkId: 3927,
	        };
	        this._map = new Set([
	            'Below_Post_1',
	            'Content_1',
	            'Content_2',
	            'Content_3',
	            'Content_4',
	            'Content_5',
	            'Content_6',
	            'Content_7',
	            'Content_8',
	            'Content_9',
	            'Footer_1',
	            'Header_1',
	            'Header_2',
	            'Recipe_1',
	            'Recipe_2',
	            'Recipe_3',
	            'Recipe_4',
	            'Sidebar_1',
	            'Sidebar_2',
	            'Sidebar_3',
	            'Sidebar_4',
	            'Sidebar_5',
	            'Sidebar_9',
	        ]);
	        this._videoMap = new Map([
	            [VideoAdUnit.Video_Collapse_Autoplay_SoundOff, '1629631'],
	            [VideoAdUnit.Video_Coll_SOff_Smartphone, '1629630'],
	            [VideoAdUnit.Video_In_Post_ClicktoPlay_SoundOn, '1629629'],
	            [VideoAdUnit.Video_Individual_Autoplay_SOff, '1629401'],
	        ]);
	    }
	    get enabled() {
	        return this._config.partners.criteo;
	    }
	    getSlotBidRequests(slot) {
	        if (this._map.has(slot.placementMapName)) {
	            return [
	                {
	                    bidder: this.name,
	                    params: {
	                        ...this._params,
	                    },
	                },
	            ];
	        }
	    }
	    get videoEnabled() {
	        return this._config.partners.video.criteo;
	    }
	    getVideoSlotBidRequests(_video) {
	        var _a;
	        if (this._videoMap.has(_video.name)) {
	            return [
	                {
	                    bidder: this.name,
	                    params: {
	                        zoneId: this._videoMap.get(_video.name),
	                        video: {
	                            playbackmethod: ((_a = this._config.video.playbackmethod) === null || _a === void 0 ? void 0 : _a.get(_video.name)) || [],
	                        },
	                    },
	                },
	            ];
	        }
	    }
	};
	CriteoBidder = __decorate([
	    log('CriteoBidder'),
	    injectable(),
	    __metadata("design:paramtypes", [Config])
	], CriteoBidder);

	let DeepIntentBidder = class DeepIntentBidder extends Bidder {
	    constructor(_config) {
	        super();
	        this._config = _config;
	        this.bidderConfig = this._config.partners.getBidderConfig('deepintent');
	        this._map = new Map([
	            ['Below_Post_1', '441'],
	            ['Content', '442'],
	            ['Content_1', '443'],
	            ['Content_2', '444'],
	            ['Content_3', '445'],
	            ['Content_4', '446'],
	            ['Content_5', '447'],
	            ['Content_6', '448'],
	            ['Content_7', '449'],
	            ['Content_8', '450'],
	            ['Content_9', '451'],
	            ['Footer_1', '452'],
	            ['Header_1', '453'],
	            ['Header_2', '454'],
	            ['Recipe_1', '455'],
	            ['Recipe_2', '456'],
	            ['Recipe_3', '457'],
	            ['Recipe_4', '458'],
	            ['Recipe_5', '459'],
	            ['Sidebar_1', '460'],
	            ['Sidebar_2', '461'],
	            ['Sidebar_3', '462'],
	            ['Sidebar_4', '463'],
	            ['Sidebar_5', '464'],
	            ['Sidebar_9', '465'],
	        ]);
	    }
	    get enabled() {
	        return this._config.partners.deepIntent && this._config.site.sensitiveCategories.indexOf('drg') !== -1;
	    }
	    getSlotBidRequests(slot) {
	        if (this._map.has(slot.placementMapName)) {
	            return [
	                {
	                    bidder: this.name,
	                    params: {
	                        tagId: this._map.get(slot.placementMapName),
	                    },
	                },
	            ];
	        }
	    }
	};
	DeepIntentBidder = __decorate([
	    log('DeepIntentBidder'),
	    injectable(),
	    __metadata("design:paramtypes", [Config])
	], DeepIntentBidder);

	let DistrictMDMXBidder = class DistrictMDMXBidder extends Bidder {
	    constructor(_config) {
	        super();
	        this._config = _config;
	        this.bidderConfig = this._config.partners.getBidderConfig('districtmDMX');
	        this._params = {
	            memberid: 100319,
	        };
	        this._map = new Map([
	            ['Below_Post_1', '210062'],
	            ['Content_1', '210064'],
	            ['Content_2', '210065'],
	            ['Content_3', '210066'],
	            ['Content_4', '210067'],
	            ['Content_5', '210068'],
	            ['Content_6', '210069'],
	            ['Content_7', '210070'],
	            ['Content_8', '210071'],
	            ['Content_9', '210072'],
	            ['Footer_1', '210073'],
	            ['Header_1', '210076'],
	            ['Header_2', '210077'],
	            ['Recipe_1', '210078'],
	            ['Recipe_2', '210079'],
	            ['Recipe_3', '277966'],
	            ['Recipe_4', '277983'],
	            ['Sidebar_1', '210080'],
	            ['Sidebar_2', '210081'],
	            ['Sidebar_3', '210082'],
	            ['Sidebar_4', '210083'],
	            ['Sidebar_5', '210084'],
	            ['Sidebar_9', '210088'],
	        ]);
	    }
	    get enabled() {
	        return this._config.partners.districtMDMX;
	    }
	    getSlotBidRequests(slot) {
	        if (this._map.has(slot.placementMapName)) {
	            return [
	                {
	                    bidder: this.name,
	                    params: {
	                        ...this._params,
	                        dmxid: this._map.get(slot.placementMapName),
	                    },
	                },
	            ];
	        }
	    }
	};
	DistrictMDMXBidder = __decorate([
	    log('DistrictMDMXBidder'),
	    injectable(),
	    __metadata("design:paramtypes", [Config])
	], DistrictMDMXBidder);

	let DistrictMDMXVideoBidder = class DistrictMDMXVideoBidder extends Bidder {
	    constructor(_config) {
	        super();
	        this._config = _config;
	        this.bidderConfig = this._config.partners.getBidderConfig('dmdmx');
	        this.adapterName = 'districtmDMX';
	        this._params = {
	            memberid: 100319,
	        };
	        this._map = new Map([
	            [VideoAdUnit.Video_Collapse_Autoplay_SoundOff, '277970'],
	            [VideoAdUnit.Video_Coll_SOff_Smartphone, '277968'],
	            [VideoAdUnit.Video_In_Post_ClicktoPlay_SoundOn, '277969'],
	            [VideoAdUnit.Video_Individual_Autoplay_SOff, '277972'],
	        ]);
	    }
	    get enabled() {
	        return this._config.partners.districtMDMX;
	    }
	    get videoEnabled() {
	        return this._config.partners.video.districtMDMXVideo;
	    }
	    getVideoSlotBidRequests(_video) {
	        if (this._map.has(_video.name)) {
	            return [
	                {
	                    bidder: this.name,
	                    params: {
	                        dmxid: this._map.get(_video.name),
	                        ...this._params,
	                    },
	                },
	            ];
	        }
	    }
	};
	DistrictMDMXVideoBidder = __decorate([
	    log('DistrictMDMXVideoBidder'),
	    injectable(),
	    __metadata("design:paramtypes", [Config])
	], DistrictMDMXVideoBidder);

	let DistrictMBidder = class DistrictMBidder extends Bidder {
	    constructor(_config) {
	        super();
	        this._config = _config;
	        this.bidderConfig = this._config.partners.getBidderConfig('districtm');
	        this._map = new Map([
	            ['Below_Post_1', [{ placementId: 13239209 }]],
	            ['Content_1', [{ placementId: 13239211 }]],
	            ['Content_2', [{ placementId: 13239212 }]],
	            ['Content_3', [{ placementId: 13239213 }]],
	            ['Content_4', [{ placementId: 13239216 }]],
	            ['Content_5', [{ placementId: 13239217 }]],
	            ['Content_6', [{ placementId: 13239218 }]],
	            ['Content_7', [{ placementId: 13239219 }]],
	            ['Content_8', [{ placementId: 13239220 }]],
	            ['Content_9', [{ placementId: 13239221 }]],
	            ['Footer_1', [{ placementId: 13239223 }]],
	            ['Header_1', [{ placementId: 13239227 }]],
	            ['Header_2', [{ placementId: 13239229 }]],
	            ['Recipe_1', [{ placementId: 13239230 }]],
	            ['Recipe_2', [{ placementId: 13239231 }]],
	            ['Recipe_3', [{ placementId: 14591635 }]],
	            ['Recipe_4', [{ placementId: 14591652 }]],
	            ['Sidebar_1', [{ placementId: 13239232 }]],
	            ['Sidebar_2', [{ placementId: 13239233 }]],
	            ['Sidebar_3', [{ placementId: 13239234 }]],
	            ['Sidebar_4', [{ placementId: 13239236 }]],
	            ['Sidebar_5', [{ placementId: 13239238 }]],
	            ['Sidebar_9', [{ placementId: 13239242 }]],
	            [VideoAdUnit.Video_Collapse_Autoplay_SoundOff, [{ placementId: 14591639, playback_method: ['auto_play_sound_off'] }]],
	            [VideoAdUnit.Video_Coll_SOff_Smartphone, [{ placementId: 14591637, playback_method: ['auto_play_sound_off'] }]],
	            [VideoAdUnit.Video_In_Post_ClicktoPlay_SoundOn, [{ placementId: 14591638, playback_method: ['click_to_play'] }]],
	            [VideoAdUnit.Video_Individual_Autoplay_SOff, [{ placementId: 14591641, playback_method: ['auto_play_sound_off'] }]],
	        ]);
	    }
	    get enabled() {
	        return this._config.partners.districtM;
	    }
	    get videoEnabled() {
	        return this._config.partners.video.districtM;
	    }
	    updateBidParams(slot, _adUnit, bid) {
	        if (slot.refreshCount === 1) {
	            bid.params.position = 'above';
	        }
	        return bid;
	    }
	    getSlotBidRequests(slot) {
	        if (this._map.has(slot.placementMapName)) {
	            const isHV = isHighlyViewableSlot(slot, this._config.marmalade.hvThreshold);
	            return this._map.get(slot.placementMapName).map(({ placementId }) => {
	                return {
	                    bidder: this.name,
	                    params: {
	                        placementId,
	                        allowSmallerSizes: this._config.adOptions.allowSmallerAdSizes,
	                        ...(isHV && {
	                            position: 'above',
	                        }),
	                    },
	                };
	            });
	        }
	    }
	    getVideoSlotBidRequests(_video) {
	        if (this._map.has(_video.name)) {
	            return [
	                {
	                    bidder: this.name,
	                    params: {
	                        placementId: this._map.get(_video.name)[0].placementId,
	                        position: this._config.video.position.name,
	                        video: {
	                            mimes: this._config.video.mimeType,
	                            playback_method: this._map.get(_video.name)[0].playback_method,
	                            frameworks: this._config.video.apiValue,
	                        },
	                    },
	                },
	            ];
	        }
	    }
	};
	DistrictMBidder = __decorate([
	    log('DistrictMBidder'),
	    injectable(),
	    __metadata("design:paramtypes", [Config])
	], DistrictMBidder);

	let GumGumBidder = class GumGumBidder extends Bidder {
	    constructor(_config) {
	        super();
	        this._config = _config;
	        this.bidderConfig = this._config.partners.getBidderConfig('gumgum');
	        this._zoneIds = {
	            client: 'g95nznmj',
	            s2s: {
	                desktop: '0yo5ozig',
	                tablet: '0yo5ozig',
	                phone: 'nedjcoh9',
	            },
	        };
	        this._map = new Map([
	            ['Interstitial_1', [{ slotId: 110743 }]],
	            ['Footer_1', []],
	            [VideoAdUnit.Video_Collapse_Autoplay_SoundOff, 'glpmwixo'],
	            [VideoAdUnit.Video_Coll_SOff_Smartphone, '5zl85htf'],
	            [VideoAdUnit.Video_Individual_Autoplay_SOff, '8jzhuyj5'],
	            [VideoAdUnit.Video_In_Post_ClicktoPlay_SoundOn, 'dtwgesum'],
	        ]);
	        this._animatedFooterEnabled = this._config.adTypes.animatedFooter;
	        this._interstitialEnabled = this._config.adOptions.interstitial.prebid;
	        this._contextualAuctionParams =
	            this._config.prebid.s2s.bidders.indexOf(this.name) === -1
	                ? { inScreen: this._zoneIds.client }
	                : { zone: this._zoneIds.s2s[this._config.context.device] };
	    }
	    get enabled() {
	        return this._config.partners.gumgum && (this._animatedFooterEnabled || this._interstitialEnabled);
	    }
	    get videoEnabled() {
	        return this._config.partners.video.gumgum;
	    }
	    getSlotBidRequests(slot) {
	        const placement = this._map.get(slot.placementMapName);
	        const isFooterRequest = slot.location === 'Footer' && this._animatedFooterEnabled;
	        const isInterstitialRequest = slot.location === 'Interstitial';
	        if (placement && (isFooterRequest || isInterstitialRequest)) {
	            return [
	                {
	                    bidder: this.name,
	                    params: {
	                        ...this._contextualAuctionParams,
	                        ...(isInterstitialRequest && {
	                            slot: placement[0].slotId,
	                        }),
	                    },
	                },
	            ];
	        }
	    }
	    getVideoSlotBidRequests(_video) {
	        if (this._map.has(_video.name)) {
	            return [
	                {
	                    bidder: this.name,
	                    params: {
	                        video: this._map.get(_video.name),
	                    },
	                },
	            ];
	        }
	    }
	};
	GumGumBidder = __decorate([
	    log('GumGumBidder'),
	    injectable(),
	    __metadata("design:paramtypes", [Config])
	], GumGumBidder);

	const siteIdsMap = new Map([
	    ['Below_Post_1', { siteId: '185759', hvSiteId: '404596' }],
	    ['Content_1', { siteId: '185761', hvSiteId: '404597' }],
	    ['Content_2', { siteId: '185762', hvSiteId: '404598' }],
	    ['Content_3', { siteId: '185763', hvSiteId: '404599' }],
	    ['Content_4', { siteId: '185764', hvSiteId: '404600' }],
	    ['Content_5', { siteId: '185765', hvSiteId: '404601' }],
	    ['Content_6', { siteId: '185766', hvSiteId: '404602' }],
	    ['Content_7', { siteId: '185767', hvSiteId: '404603' }],
	    ['Content_8', { siteId: '185768', hvSiteId: '404604' }],
	    ['Content_9', { siteId: '185769', hvSiteId: '404605' }],
	    ['Footer_1', { siteId: '185770' }],
	    ['Header_1', { siteId: '185774', hvSiteId: '404607' }],
	    ['Interstitial_1', { siteId: '631834' }],
	    ['Recipe_1', { siteId: '185776' }],
	    ['Recipe_2', { siteId: '185777', hvSiteId: '404609' }],
	    ['Recipe_3', { siteId: '304909' }],
	    ['Recipe_4', { siteId: '371523', hvSiteId: '404611' }],
	    ['Sidebar_1', { siteId: '185787' }],
	    ['Sidebar_2', { siteId: '185788' }],
	    ['Sidebar_3', { siteId: '185789' }],
	    ['Sidebar_4', { siteId: '185790' }],
	    ['Sidebar_5', { siteId: '185791' }],
	    ['Sidebar_9', { siteId: '185795' }],
	    ['Video_StickyOutstream_1', { siteId: '745167' }],
	]);
	const map$2 = new Map([
	    [
	        'Below_Post_1',
	        [
	            { size: [728, 90], id: '1_1' },
	            { size: [300, 250], id: '1_2' },
	        ],
	    ],
	    [
	        'Content_1',
	        [
	            { size: [728, 90], id: '3_1' },
	            { size: [300, 250], id: '3_2' },
	            { size: [320, 50], id: '3_4' },
	            { size: [320, 100], id: '3_5' },
	            { size: [300, 50], id: '3_6' },
	        ],
	    ],
	    [
	        'Content_2',
	        [
	            { size: [728, 90], id: '4_1' },
	            { size: [300, 250], id: '4_2' },
	            { size: [320, 50], id: '4_4' },
	            { size: [320, 100], id: '4_5' },
	            { size: [300, 50], id: '4_6' },
	        ],
	    ],
	    [
	        'Content_3',
	        [
	            { size: [300, 250], id: '5_1' },
	            { size: [320, 50], id: '5_2' },
	            { size: [320, 100], id: '5_3' },
	            { size: [300, 50], id: '5_4' },
	        ],
	    ],
	    [
	        'Content_4',
	        [
	            { size: [300, 250], id: '6_1' },
	            { size: [320, 50], id: '6_2' },
	            { size: [320, 100], id: '6_3' },
	            { size: [300, 50], id: '6_4' },
	        ],
	    ],
	    [
	        'Content_5',
	        [
	            { size: [300, 250], id: '7_1' },
	            { size: [320, 50], id: '7_2' },
	            { size: [320, 100], id: '7_3' },
	            { size: [300, 50], id: '7_4' },
	        ],
	    ],
	    [
	        'Content_6',
	        [
	            { size: [300, 250], id: '8_1' },
	            { size: [320, 50], id: '8_2' },
	            { size: [320, 100], id: '8_3' },
	            { size: [300, 50], id: '8_4' },
	        ],
	    ],
	    [
	        'Content_7',
	        [
	            { size: [300, 250], id: '9_1' },
	            { size: [320, 50], id: '9_2' },
	            { size: [300, 50], id: '9_3' },
	        ],
	    ],
	    [
	        'Content_8',
	        [
	            { size: [300, 250], id: '10_1' },
	            { size: [320, 50], id: '10_2' },
	            { size: [300, 50], id: '10_3' },
	        ],
	    ],
	    [
	        'Content_9',
	        [
	            { size: [300, 250], id: '11_1' },
	            { size: [320, 50], id: '11_2' },
	            { size: [300, 50], id: '11_3' },
	        ],
	    ],
	    [
	        'Footer_1',
	        [
	            { size: [728, 90], id: '12_1' },
	            { size: [970, 90], id: '12_2' },
	            { size: [320, 50], id: '12_3' },
	            { size: [320, 100], id: '12_4' },
	            { size: [300, 50], id: '12_5' },
	        ],
	    ],
	    [
	        'Header_1',
	        [
	            { size: [728, 90], id: '15_1' },
	            { size: [970, 90], id: '15_2' },
	            { size: [970, 250], id: '15_3' },
	            { size: [320, 50], id: '15_4' },
	            { size: [320, 100], id: '15_5' },
	            { size: [300, 50], id: '15_6' },
	        ],
	    ],
	    [
	        'Interstitial_1',
	        [
	            { size: [300, 600], id: '36_1' },
	            { size: [336, 280], id: '36_2' },
	            { size: [320, 480], id: '36_3' },
	            { size: [300, 250], id: '36_4' },
	            { size: [320, 50], id: '36_5' },
	        ],
	    ],
	    [
	        'Recipe_1',
	        [
	            { size: [300, 250], id: '17_1' },
	            { size: [320, 50], id: '17_3' },
	            { size: [320, 100], id: '17_4' },
	            { size: [300, 50], id: '17_5' },
	        ],
	    ],
	    [
	        'Recipe_2',
	        [
	            { size: [300, 250], id: '18_1' },
	            { size: [320, 50], id: '18_3' },
	            { size: [320, 100], id: '18_4' },
	            { size: [300, 50], id: '18_5' },
	        ],
	    ],
	    [
	        'Recipe_3',
	        [
	            { size: [300, 250], id: '42_1' },
	            { size: [320, 50], id: '42_3' },
	            { size: [320, 100], id: '42_4' },
	            { size: [300, 50], id: '42_5' },
	        ],
	    ],
	    [
	        'Recipe_4',
	        [
	            { size: [300, 250], id: '43_1' },
	            { size: [320, 50], id: '43_3' },
	            { size: [320, 100], id: '43_4' },
	            { size: [300, 50], id: '43_5' },
	        ],
	    ],
	    [
	        'Sidebar_1',
	        [
	            { size: [300, 250], id: '27_1' },
	            { size: [300, 600], id: '27_2' },
	            { size: [300, 1050], id: '27_3' },
	            { size: [160, 600], id: '27_4' },
	            { size: [300, 50], id: '27_5' },
	        ],
	    ],
	    [
	        'Sidebar_2',
	        [
	            { size: [300, 250], id: '28_1' },
	            { size: [300, 600], id: '28_2' },
	            { size: [160, 600], id: '28_3' },
	            { size: [300, 50], id: '28_4' },
	        ],
	    ],
	    [
	        'Sidebar_3',
	        [
	            { size: [300, 250], id: '29_1' },
	            { size: [300, 600], id: '29_2' },
	            { size: [160, 600], id: '29_3' },
	            { size: [300, 50], id: '29_4' },
	        ],
	    ],
	    [
	        'Sidebar_4',
	        [
	            { size: [300, 250], id: '30_1' },
	            { size: [300, 600], id: '30_2' },
	            { size: [160, 600], id: '30_3' },
	            { size: [300, 50], id: '30_4' },
	        ],
	    ],
	    [
	        'Sidebar_5',
	        [
	            { size: [300, 250], id: '31_1' },
	            { size: [300, 600], id: '31_2' },
	            { size: [160, 600], id: '31_3' },
	            { size: [300, 50], id: '31_4' },
	        ],
	    ],
	    [
	        'Sidebar_9',
	        [
	            { size: [300, 250], id: '35_1' },
	            { size: [300, 600], id: '35_2' },
	            { size: [300, 1050], id: '35_3' },
	            { size: [160, 600], id: '35_4' },
	            { size: [300, 50], id: '35_5' },
	        ],
	    ],
	    [
	        'Video_StickyOutstream_1',
	        [
	            { size: [300, 250], id: '48_1', sizeOverride: [227, 150] },
	            { size: [320, 50], id: '48_2', sizeOverride: [178, 100] },
	        ],
	    ],
	]);
	const videoMap$1 = new Map([
	    [VideoAdUnit.Video_Collapse_Autoplay_SoundOff, [{ size: [640, 360], siteId: '185255', id: '44_1' }]],
	    [VideoAdUnit.Video_Coll_SOff_Smartphone, [{ size: [400, 225], siteId: '321341', id: '45_1' }]],
	    [
	        VideoAdUnit.Video_In_Post_ClicktoPlay_SoundOn,
	        [
	            { size: [640, 360], siteId: '385287', device: 'desktop', id: '46_1' },
	            { size: [400, 225], siteId: '385288', device: 'mobile', id: '46_2' },
	        ],
	    ],
	    [
	        VideoAdUnit.Video_Individual_Autoplay_SOff,
	        [
	            { size: [640, 360], siteId: '385285', device: 'desktop', id: '47_1' },
	            { size: [400, 225], siteId: '385286', device: 'mobile', id: '47_2' },
	        ],
	    ],
	]);

	let IndexExchangeBidder = class IndexExchangeBidder extends Bidder {
	    constructor(_config, _prebidMethods) {
	        super();
	        this._config = _config;
	        this._prebidMethods = _prebidMethods;
	        this._bidderName = 'ix';
	        this.bidderConfig = this._config.partners.getBidderConfig(this._bidderName);
	    }
	    get enabled() {
	        return this._config.partners.indexExchange;
	    }
	    get videoEnabled() {
	        return this._config.partners.video.indexExchange;
	    }
	    init() {
	        const referrer = getReferrer();
	        const config = this._config;
	        const site = config.site;
	        const verticals = [...site.verticals].filter(filterUnique);
	        const filteredSensitiveCategories = site.filteredSensitiveCategories;
	        const firstPartyData = {
	            PD: `${config.adOptions.pmp ? '' : 'no'}${config.context.device}`,
	            ...(verticals.length && { Topic: verticals.join('#Topic:') }),
	            ...(filteredSensitiveCategories.length && {
	                Sens: filteredSensitiveCategories.join('#Sens:'),
	            }),
	            Source: standardizeTrafficSources(referrer),
	            Browser: getBrowserName(),
	            vp: '0',
	        };
	        setIXFirstPartyData(firstPartyData, this._prebidMethods);
	    }
	    getVideoBidRequests(_videos) {
	        const videosReducer = (bids, jwPlayer) => {
	            const sizeSiteMapper = (value) => {
	                const { siteId, id, size } = value.sizeSite;
	                const prebidRequest = this.getPrebidAdUnitBidRequest(siteId, id, size, false);
	                prebidRequest.params.video = this.getVideoParams(jwPlayer.name);
	                return prebidRequest;
	            };
	            const mappedVideoSiteSizes = this.getVideoSizeSites(_videos)
	                .filter(videoSizeSite => videoSizeSite.video === jwPlayer)
	                .map(sizeSiteMapper);
	            return bids.set(jwPlayer.name, mappedVideoSiteSizes);
	        };
	        return _videos.reduce(videosReducer, new Map());
	    }
	    getBidRequests(slots) {
	        return slots.reduce((bids, slot) => {
	            const slotSiteId = siteIdsMap.get(slot.placementMapName);
	            if (!slotSiteId) {
	                return bids;
	            }
	            const slotSizeIdReducer = (adUnitBids, { sizeId: { id, size } }) => {
	                const handleHvSiteId = () => {
	                    const hvAdUnitBid = this.getPrebidAdUnitBidRequest(slotSiteId.hvSiteId, id, size, slot.location === 'Video_StickyOutstream');
	                    adUnitBids.push(hvAdUnitBid);
	                };
	                if (slotSiteId.hvSiteId && isHighlyViewableSlot(slot, this._config.marmalade.hvThreshold)) {
	                    handleHvSiteId();
	                }
	                adUnitBids.push(this.getPrebidAdUnitBidRequest(slotSiteId.siteId, id, size, slot.location === 'Video_StickyOutstream'));
	                return adUnitBids;
	            };
	            return bids.set(slot.id, this.getSlotSizeIds(slots)
	                .filter((slotSizeId) => slotSizeId.slot === slot)
	                .reduce(slotSizeIdReducer, []));
	        }, new Map());
	    }
	    getVideoParams(jwPlayerName, additionalConfig) {
	        const videoConfig = { ...this._config.video, ...additionalConfig };
	        const videoPlaybackMethod = videoConfig.playbackmethod && videoConfig.playbackmethod.get(jwPlayerName);
	        const playbackMethodMap = new Map([
	            [3, [3]],
	            [6, [2]],
	        ]);
	        const addPlaybackMethod = videoPlaybackMethod && {
	            playbackmethod: playbackMethodMap.get(videoPlaybackMethod[0]),
	        };
	        return {
	            api: videoConfig.apiValue,
	            mimes: videoConfig.mimeType,
	            ...addPlaybackMethod,
	            minduration: 0,
	            maxduration: 30,
	            protocols: videoConfig.videoProtocols.protocols,
	            pos: videoConfig.position.id,
	        };
	    }
	    getPrebidAdUnitBidRequest(siteId, id, size, isStickyOutstream) {
	        return {
	            bidder: this._bidderName,
	            params: {
	                id,
	                siteId,
	                ...(isStickyOutstream ? { video: {} } : { size }),
	            },
	        };
	    }
	    getSlotSizeIds(slots) {
	        const slotSizeIdReducer = (slotSizeSites, slot) => {
	            const filteredAdUnitMap = map$2
	                .get(slot.placementMapName)
	                .filter(({ size }) => slot.hasSize(size))
	                .map(sizeId => ({ slot, sizeId }));
	            return [...slotSizeSites, ...filteredAdUnitMap];
	        };
	        return slots.filter(slot => map$2.has(slot.placementMapName)).reduce(slotSizeIdReducer, []);
	    }
	    getVideoSizeSites(videoPlayers) {
	        const deviceType = isDesktop() ? 'desktop' : 'mobile';
	        const videoSiteSizesReducer = (videoSizeSites, video) => {
	            const videoSiteSizesFilter = ({ device, size }, index, array) => (!device || (device && device === deviceType)) && video.size[0] === size[0] && video.size[1] === size[1];
	            const filteredVideoAdUnitMap = videoMap$1
	                .get(video.name)
	                .filter(videoSiteSizesFilter)
	                .map(sizeSite => ({
	                video,
	                sizeSite,
	            }));
	            return [...videoSizeSites, ...filteredVideoAdUnitMap];
	        };
	        return videoPlayers.filter(videoPlayer => videoMap$1.has(videoPlayer.name)).reduce(videoSiteSizesReducer, []);
	    }
	};
	IndexExchangeBidder = __decorate([
	    log('IndexExchangeBidder'),
	    injectable(),
	    __metadata("design:paramtypes", [Config, PrebidMethods])
	], IndexExchangeBidder);

	const [desktop, content, sidebar, header] = ['desktop', 'content', 'sidebar', 'header'];
	const placementMap = {
	    desktop: {
	        content: { placementId: '_mfu14jCkaN', size: [300, 250] },
	        header: { placementId: '_vzS4k9rMKu', size: [728, 90] },
	        sidebar: { placementId: '_zxmQwsW17E', size: [300, 600] },
	    },
	};
	const desktopMap = new Map([
	    ['Below_Post_1', [placementMap[desktop][content], placementMap[desktop][header]]],
	    ['Content_1', [placementMap[desktop][content], placementMap[desktop][header]]],
	    ['Content_2', [placementMap[desktop][content], placementMap[desktop][header]]],
	    ['Content_3', [placementMap[desktop][content], placementMap[desktop][header]]],
	    ['Content_4', [placementMap[desktop][content], placementMap[desktop][header]]],
	    ['Content_5', [placementMap[desktop][content], placementMap[desktop][header]]],
	    ['Content_6', [placementMap[desktop][content], placementMap[desktop][header]]],
	    ['Content_7', [placementMap[desktop][content], placementMap[desktop][header]]],
	    ['Content_8', [placementMap[desktop][content], placementMap[desktop][header]]],
	    ['Content_9', [placementMap[desktop][content], placementMap[desktop][header]]],
	    ['Header_1', [placementMap[desktop][header], placementMap[desktop][content]]],
	    ['Header_2', [placementMap[desktop][header], placementMap[desktop][content]]],
	    ['Recipe_1', [placementMap[desktop][content]]],
	    ['Recipe_2', [placementMap[desktop][content]]],
	    ['Recipe_3', [placementMap[desktop][content]]],
	    ['Recipe_4', [placementMap[desktop][content]]],
	    ['Recipe_5', [placementMap[desktop][content]]],
	    ['Sidebar_1', [placementMap[desktop][sidebar], placementMap[desktop][content]]],
	    ['Sidebar_2', [placementMap[desktop][sidebar], placementMap[desktop][content]]],
	    ['Sidebar_3', [placementMap[desktop][sidebar], placementMap[desktop][content]]],
	    ['Sidebar_4', [placementMap[desktop][sidebar], placementMap[desktop][content]]],
	    ['Sidebar_5', [placementMap[desktop][sidebar], placementMap[desktop][content]]],
	    ['Sidebar_9', [placementMap[desktop][sidebar], placementMap[desktop][content]]],
	]);
	const adOptionsMap = new Map([
	    ['10000', { id: '_htv2gWQDl4', isOutstream: false }],
	    ['11000', { id: '_rEapvpk6cZ', isOutstream: true }],
	    ['11100', { id: '_hDLFEUkifu', isOutstream: true }],
	    ['10100', { id: '_kEvPWSnblw', isOutstream: false }],
	    ['00011', { id: '_hRaLC9FgYn', isOutstream: false }],
	    ['00010', { id: '_iyznbek6ki', isOutstream: false }],
	    ['00001', { id: '_g1dEyYpnCU', isOutstream: false }],
	]);
	const bannerMap = [
	    'Below_Post_1',
	    'Content_1',
	    'Content_2',
	    'Content_3',
	    'Content_4',
	    'Content_5',
	    'Content_5',
	    'Content_6',
	    'Content_7',
	    'Content_8',
	    'Content_9',
	    'Header_1',
	    'Header_2',
	    'Recipe_1',
	    'Recipe_2',
	    'Recipe_3',
	    'Recipe_4',
	    'Sidebar_1',
	    'Sidebar_2',
	    'Sidebar_3',
	    'Sidebar_4',
	    'Sidebar_5',
	    'Sidebar_9',
	];
	const interscrollerMap = ['Below_Post_1', 'Content_1'];
	const map$1 = { desktop: desktopMap, mobile: null };
	const outstreamMap = ['Below_Post_1', 'Content_1', 'Content_3', 'Content_5', 'Recipe_1 '];

	let KargoBidder = class KargoBidder extends Bidder {
	    constructor(adthrive, _config, _mediaType) {
	        super();
	        this.adthrive = adthrive;
	        this._config = _config;
	        this._mediaType = _mediaType;
	        this.bidderConfig = this._config.partners.getBidderConfig('kargo');
	        const device = isMobile() ? 'mobile' : 'desktop';
	        this._map = map$1[device];
	    }
	    get enabled() {
	        return this._config.partners.kargo;
	    }
	    createBitStringAdOptions(slot) {
	        const has300x250 = slot.hasSize([300, 250]);
	        const has320x50 = slot.hasSize([320, 50]);
	        const bitStringAdOptions = [
	            +this.isBanner(slot, has300x250, has320x50),
	            +this.isOutstream(slot, has300x250),
	            +this.isInterscroller(slot),
	            +this.isAnimatedFooter(slot, has320x50),
	            +this.isExpandableFooter(slot, has320x50),
	        ].join('');
	        return bitStringAdOptions;
	    }
	    isBanner(slot, has300x250, has320x50) {
	        return has300x250 && has320x50 && bannerMap.indexOf(slot.placementMapName) !== -1;
	    }
	    isOutstream(slot, has300x250) {
	        return has300x250 && outstreamMap.indexOf(slot.placementMapName) !== -1 && this._mediaType.outstreamEnabled(slot).outstreamCapable;
	    }
	    isInterscroller(slot) {
	        return this._config.adTypes.has('interscroller') && interscrollerMap.indexOf(slot.placementMapName) !== -1;
	    }
	    isAnimatedFooter(slot, has320x50) {
	        return has320x50 && this._config.adTypes.has('animatedFooter') && slot.placementMapName === 'Footer_1';
	    }
	    isExpandableFooter(slot, has320x50) {
	        return has320x50 && this._config.adTypes.has('expandableFooter') && slot.placementMapName === 'Footer_1';
	    }
	    getSlotBidRequests(slot) {
	        if (!this._map) {
	            const bitStringAdOptions = this.createBitStringAdOptions(slot);
	            if (adOptionsMap.has(bitStringAdOptions)) {
	                const placementObject = adOptionsMap.get(bitStringAdOptions);
	                return [
	                    {
	                        bidder: this.name,
	                        ...this.getLabels(placementObject.isOutstream, slot.placementMapName),
	                        params: {
	                            placementId: placementObject.id,
	                        },
	                    },
	                ];
	            }
	        }
	        else if (this._map && this._map.has(slot.placementMapName)) {
	            return this._map
	                .get(slot.placementMapName)
	                .filter(({ adType, mobileCollapsePlayer, size }) => (!adType || this._config.adTypes.has(adType)) &&
	                (!mobileCollapsePlayer || !this._config.video.mobileStickyPlayerOnPage) &&
	                slot.hasSize(size))
	                .map(({ placementId }) => {
	                return {
	                    bidder: this.name,
	                    params: {
	                        placementId,
	                    },
	                };
	            });
	        }
	    }
	    getLabels(isOutstream, placementMapName) {
	        const labels = [];
	        if (isOutstream) {
	            labels.push(`outstreamEnabled_${placementMapName}`);
	        }
	        return labels.length ? { labelAny: labels } : {};
	    }
	};
	KargoBidder = __decorate([
	    log('KargoBidder'),
	    singleton(),
	    __param(0, inject('AdThrive')),
	    __metadata("design:paramtypes", [Object, Config, MediaType])
	], KargoBidder);

	let MediaGridBidder = class MediaGridBidder extends Bidder {
	    constructor(_config) {
	        super();
	        this._config = _config;
	        this.bidderConfig = this._config.partners.getBidderConfig('grid');
	        this.settings = {
	            bidCpmAdjustment: (bidCpm, bidResponse) => this._getCPMAdjustment(bidCpm, bidResponse),
	            adserverTargeting: [
	                {
	                    key: 'hb_format',
	                    val: (bidResponse) => bidResponse && bidResponse.meta && bidResponse.meta.demandSource === 'trustx' ? `trustx_${bidResponse.mediaType}` : bidResponse.mediaType,
	                },
	            ],
	        };
	        this._getCPMAdjustment = (bidCpm, bidResponse) => {
	            const dealId = bidResponse.dealId;
	            const isTrustxOutstreamBid = ('vastUrl' in bidResponse || 'vastXml' in bidResponse) && dealId && dealId.toString().indexOf('G-TRUSTX') > -1;
	            return adjustCpmFromBidResponse(this._config, bidCpm, 'grid', {
	                ...bidResponse,
	                ...(isTrustxOutstreamBid && { dealId: undefined }),
	            });
	        };
	        this._map = new Map([
	            ['Below_Post_1', 357],
	            ['Content_1', 358],
	            ['Content_2', 359],
	            ['Content_3', 360],
	            ['Content_4', 361],
	            ['Content_5', 362],
	            ['Content_6', 363],
	            ['Content_7', 364],
	            ['Content_8', 365],
	            ['Content_9', 366],
	            ['Footer_1', 367],
	            ['Header_1', 368],
	            ['Header_2', 369],
	            ['Interstitial_1', 48428],
	            ['Recipe_1', 370],
	            ['Recipe_2', 371],
	            ['Recipe_3', 372],
	            ['Recipe_4', 373],
	            ['Sidebar_1', 375],
	            ['Sidebar_2', 376],
	            ['Sidebar_3', 377],
	            ['Sidebar_4', 378],
	            ['Sidebar_5', 379],
	            ['Sidebar_9', 380],
	            ['Video_StickyOutstream_1', 133519],
	        ]);
	    }
	    get enabled() {
	        return this._config.partners.mediaGrid;
	    }
	    getSlotBidRequests(slot) {
	        if (this._map.has(slot.placementMapName)) {
	            return [
	                {
	                    bidder: this.name,
	                    params: {
	                        uid: this._map.get(slot.placementMapName),
	                    },
	                },
	            ];
	        }
	    }
	};
	MediaGridBidder = __decorate([
	    log('MediaGridBidder'),
	    injectable(),
	    __metadata("design:paramtypes", [Config])
	], MediaGridBidder);

	let MediaGridVideoBidder = class MediaGridVideoBidder extends Bidder {
	    constructor(_config) {
	        super();
	        this._config = _config;
	        this.bidderConfig = this._config.partners.getBidderConfig('gridvid');
	        this.adapterName = 'grid';
	        this._map = new Map([
	            [VideoAdUnit.Video_Collapse_Autoplay_SoundOff, [{ uid: 2163 }]],
	            [VideoAdUnit.Video_Coll_SOff_Smartphone, [{ uid: 2165 }]],
	            [
	                VideoAdUnit.Video_In_Post_ClicktoPlay_SoundOn,
	                [
	                    { device: 'desktop', uid: 2164 },
	                    { device: 'mobile', uid: 6056 },
	                ],
	            ],
	            [
	                VideoAdUnit.Video_Individual_Autoplay_SOff,
	                [
	                    { device: 'desktop', uid: 2166 },
	                    { device: 'mobile', uid: 6057 },
	                ],
	            ],
	        ]);
	    }
	    get enabled() {
	        return this._config.partners.mediaGridVideo;
	    }
	    get videoEnabled() {
	        return this._config.partners.video.mediaGridVideo;
	    }
	    getVideoSlotBidRequests(_video) {
	        const deviceType = isDesktop() ? 'desktop' : 'mobile';
	        if (this._map.has(_video.name)) {
	            return this._map
	                .get(_video.name)
	                .filter(({ device }) => !device || device === deviceType)
	                .map(({ uid }) => {
	                return {
	                    bidder: this.name,
	                    params: {
	                        uid,
	                    },
	                };
	            });
	        }
	    }
	};
	MediaGridVideoBidder = __decorate([
	    log('MediaGridVideoBidder'),
	    injectable(),
	    __metadata("design:paramtypes", [Config])
	], MediaGridVideoBidder);

	let NativoBidder = class NativoBidder extends Bidder {
	    constructor(_config) {
	        super();
	        this._config = _config;
	        this.bidderConfig = this._config.partners.getBidderConfig('nativo');
	        this.adapterName = 'nativo';
	        this._map = new Set(['Content_1', 'Content_2', 'Recipe_1', 'Recipe_2', 'Sidebar_1', 'Sidebar_2']);
	    }
	    get enabled() {
	        return this._config.partners.nativo;
	    }
	    getSlotBidRequests(slot) {
	        if (this._map.has(slot.placementMapName)) {
	            return [
	                {
	                    bidder: this.name,
	                    params: {},
	                },
	            ];
	        }
	    }
	};
	NativoBidder = __decorate([
	    log('NativoBidder'),
	    injectable(),
	    __metadata("design:paramtypes", [Config])
	], NativoBidder);

	let OpenXBidder = class OpenXBidder extends Bidder {
	    constructor(_config) {
	        super();
	        this._config = _config;
	        this.bidderConfig = this._config.partners.getBidderConfig('openx');
	        this._params = {
	            delDomain: 'cafemedia-d.openx.net',
	        };
	        this._highImpactParamsMap = new Map([['Content_1', ['interscroller', 'miniscroller']]]);
	        this._map = new Map([
	            ['Below_Post_1', '538699862'],
	            ['Content_1', '538699864'],
	            ['Content_2', '538699865'],
	            ['Content_3', '538699866'],
	            ['Content_4', '538699867'],
	            ['Content_5', '538699868'],
	            ['Content_6', '538699869'],
	            ['Content_7', '538699870'],
	            ['Content_8', '538699871'],
	            ['Content_9', '538699872'],
	            ['Footer_1', '538699840'],
	            ['Header_1', '538699873'],
	            ['Header_2', '538699874'],
	            ['Interstitial_1', '543876568'],
	            ['Recipe_1', '538699843'],
	            ['Recipe_2', '538699844'],
	            ['Recipe_3', '540594416'],
	            ['Recipe_4', '540751624'],
	            ['Sidebar_1', '538699853'],
	            ['Sidebar_2', '538699854'],
	            ['Sidebar_3', '538699855'],
	            ['Sidebar_4', '538699856'],
	            ['Sidebar_5', '538699857'],
	            ['Sidebar_9', '538699861'],
	            ['Video_StickyOutstream_1', '545721971'],
	            [VideoAdUnit.Video_Collapse_Autoplay_SoundOff, '540679731'],
	            [VideoAdUnit.Video_Coll_SOff_Smartphone, '540679733'],
	            [VideoAdUnit.Video_In_Post_ClicktoPlay_SoundOn, '540679727'],
	            [VideoAdUnit.Video_Individual_Autoplay_SOff, '540925853'],
	        ]);
	        this._custParams = {
	            ...(this._config.site.filteredSensitiveCategories.length && {
	                sens: this._config.site.filteredSensitiveCategories,
	            }),
	            bucket: [this._config.context.bucket],
	        };
	    }
	    get enabled() {
	        return this._config.partners.openx;
	    }
	    get videoEnabled() {
	        return this._config.partners.video.openx;
	    }
	    getSlotBidRequests(slot) {
	        if (this._map.has(slot.placementMapName)) {
	            const highImpactParams = this._highImpactParamsMap.get(slot.placementMapName) || [];
	            return [
	                {
	                    bidder: this.name,
	                    params: {
	                        ...this._params,
	                        unit: this._map.get(slot.placementMapName),
	                        customParams: {
	                            ...this._custParams,
	                            hi_au: highImpactParams.filter(adTypeName => this._config.adTypes[adTypeName]),
	                        },
	                    },
	                },
	            ];
	        }
	    }
	    getVideoSlotBidRequests(_video) {
	        var _a;
	        if (this._map.has(_video.name)) {
	            const protocolsParam = this._config.video.videoProtocols.scope === 'all' ? { protocols: this._config.video.videoProtocols.protocols } : '';
	            return [
	                {
	                    bidder: this.name,
	                    params: {
	                        ...this._params,
	                        unit: this._map.get(_video.name),
	                        video: {
	                            mimes: this._config.video.mimeType,
	                            api: this._config.video.apiValue,
	                            ...protocolsParam,
	                            pos: this._config.video.position.id,
	                            ...(((_a = this._config.video.playbackmethod) === null || _a === void 0 ? void 0 : _a.get(_video.name)) && {
	                                playbackmethod: this._config.video.playbackmethod.get(_video.name),
	                            }),
	                        },
	                    },
	                },
	            ];
	        }
	    }
	};
	OpenXBidder = __decorate([
	    log('OpenXBidder'),
	    injectable(),
	    __metadata("design:paramtypes", [Config])
	], OpenXBidder);

	let IrisTv = class IrisTv {
	    constructor() {
	        this.segmentName = 'www.iris.tv';
	        this.segtax = 501;
	        this._irisEndpoint = 'https://context.iris.tv/video_info';
	        this._token = '5d8f38ad6d7de4253cfa501b84c30b1014868d9884be5d68dc64bd50a6edb54c';
	        this._clientToken = 'EXJQESR8SMWMZCJ';
	    }
	    fetchIrisResponse(playerId) {
	        return getJSON(`${this._irisEndpoint}?access_token=${this._token}&client_token=${this._clientToken}&platform_id=${playerId}`);
	    }
	    async setContextualData(playerId) {
	        return this.fetchIrisResponse(playerId)
	            .then(result => {
	            if (result && typeof result !== 'boolean') {
	                const videoInfo = result.video_info;
	                const context = videoInfo && videoInfo.context;
	                if (context && context.length) {
	                    this._contextualData = context;
	                    this._irisId = videoInfo.iris_id;
	                }
	            }
	            return true;
	        })
	            .catch(() => false);
	    }
	    get irisContextualData() {
	        return this._contextualData;
	    }
	    get irisId() {
	        return this._irisId;
	    }
	};
	IrisTv = __decorate([
	    singleton()
	], IrisTv);

	let PubMaticBidder = class PubMaticBidder extends Bidder {
	    constructor(_config, _irisTv) {
	        super();
	        this._config = _config;
	        this._irisTv = _irisTv;
	        this.bidderConfig = this._config.partners.getBidderConfig('pubmatic');
	        this.adapterName = 'pubmatic';
	        this.serverBidderName = 'pubm_ss';
	        this.pubId = '157347';
	        this._map = new Map([
	            ['Below_Post_1', { client: 'BelowPost1', server: 'BelowPost1_XandrS2S' }],
	            ['Content_1', { client: 'Content1', server: 'Content1_XandrS2S' }],
	            ['Content_2', { client: 'Content2', server: 'Content2_XandrS2S' }],
	            ['Content_3', { client: 'Content3', server: 'Content3_XandrS2S' }],
	            ['Content_4', { client: 'Content4', server: 'Content4_XandrS2S' }],
	            ['Content_5', { client: 'Content5', server: 'Content5_XandrS2S' }],
	            ['Content_6', { client: 'Content6', server: 'Content6_XandrS2S' }],
	            ['Content_7', { client: 'Content7', server: 'Content7_XandrS2S' }],
	            ['Content_8', { client: 'Content8', server: 'Content8_XandrS2S' }],
	            ['Content_9', { client: 'Content9', server: 'Content9_XandrS2S' }],
	            ['Footer_1', { client: 'Footer1', server: 'Footer1_XandrS2S' }],
	            ['Header_1', { client: 'Header1', server: 'Header1_XandrS2S' }],
	            ['Header_2', { client: 'Header2', server: 'Header2_XandrS2S' }],
	            ['Interstitial_1', { client: 'interstitial', server: 'interstitial_XandrS2S' }],
	            ['Recipe_1', { client: 'Recipe1', server: 'Recipe1_XandrS2S' }],
	            ['Recipe_2', { client: 'Recipe2', server: 'Recipe2_XandrS2S' }],
	            ['Recipe_3', { client: 'Recipe3', server: 'Recipe3_XandrS2S' }],
	            ['Recipe_4', { client: 'Recipe4', server: 'Recipe4_XandrS2S' }],
	            ['Sidebar_1', { client: 'Sidebar1', server: 'Sidebar1_XandrS2S' }],
	            ['Sidebar_2', { client: 'Sidebar2', server: 'Sidebar2_XandrS2S' }],
	            ['Sidebar_3', { client: 'Sidebar3', server: 'Sidebar3_XandrS2S' }],
	            ['Sidebar_4', { client: 'Sidebar4', server: 'Sidebar4_XandrS2S' }],
	            ['Sidebar_5', { client: 'Sidebar5', server: 'Sidebar5_XandrS2S' }],
	            ['Sidebar_9', { client: 'Sidebar9', server: 'Sidebar9_XandrS2S' }],
	            ['Video_StickyOutstream_1', { client: '2267845', server: '4018943' }],
	            [VideoAdUnit.Video_Collapse_Autoplay_SoundOff, { client: '1961309', server: '3437231' }],
	            [VideoAdUnit.Video_Coll_SOff_Smartphone, { client: '1961310', server: '3437234' }],
	            [VideoAdUnit.Video_In_Post_ClicktoPlay_SoundOn, { client: '1961308', server: '3437232' }],
	            [VideoAdUnit.Video_Individual_Autoplay_SOff, { client: '2503033', server: '3443766' }],
	        ]);
	    }
	    get enabled() {
	        return this._config.partners.pubMatic;
	    }
	    get videoEnabled() {
	        return this._config.partners.video.pubMatic;
	    }
	    getSlotBidRequests(slot) {
	        const bids = [];
	        if (this._map.has(slot.placementMapName)) {
	            bids.push(this.getBidParams(this.name, this._map.get(slot.placementMapName).client, slot));
	            bids.push(this.getBidParams(this.serverBidderName, this._map.get(slot.placementMapName).server, slot));
	        }
	        return bids;
	    }
	    getBidParams(name, adSlot, slot) {
	        return {
	            bidder: name,
	            params: {
	                publisherId: this.pubId,
	                adSlot: `${adSlot}@${slot.sizes[0][0]}x${slot.sizes[0][1]}`,
	                ...(this._config.site.filteredSensitiveCategories.length && {
	                    pmzoneid: this._config.site.filteredSensitiveCategories.join(','),
	                }),
	            },
	        };
	    }
	    getVideoSlotBidRequests(_video) {
	        const bids = [];
	        if (this._map.has(_video.name)) {
	            bids.push(this.getVideoBidParams(this.name, this._map.get(_video.name).client, _video));
	            bids.push(this.getVideoBidParams(this.serverBidderName, this._map.get(_video.name).server, _video));
	        }
	        return bids;
	    }
	    getDCTRParam(name) {
	        const dctr = [];
	        const irisContextual = this._irisTv.irisContextualData;
	        if (irisContextual && irisContextual.length) {
	            dctr.push(`iris_context=${irisContextual.toString()}`);
	        }
	        return dctr.join('|');
	    }
	    getVideoBidParams(name, adSlot, _video) {
	        var _a;
	        const dctr = this.getDCTRParam(name);
	        return {
	            bidder: name,
	            params: {
	                publisherId: this.pubId,
	                ...(dctr && {
	                    dctr,
	                }),
	                video: {
	                    mimes: this._config.video.mimeType,
	                    api: this._config.video.apiValue,
	                    ...(this._config.video.videoProtocols.scope === 'all' && {
	                        protocols: this._config.video.videoProtocols.protocols,
	                    }),
	                    ...(((_a = this._config.video.playbackmethod) === null || _a === void 0 ? void 0 : _a.get(_video.name)) && {
	                        playbackmethod: this._config.video.playbackmethod.get(_video.name),
	                    }),
	                },
	                adSlot: `${adSlot}@${_video.size[0]}x${_video.size[1]}`,
	                ...(this._config.site.filteredSensitiveCategories.length && {
	                    pmzoneid: this._config.site.filteredSensitiveCategories.join(','),
	                }),
	            },
	        };
	    }
	};
	PubMaticBidder = __decorate([
	    log('PubMaticBidder'),
	    injectable(),
	    __metadata("design:paramtypes", [Config, IrisTv])
	], PubMaticBidder);

	let RoundelBidder = class RoundelBidder extends Bidder {
	    constructor(_config) {
	        super();
	        this._config = _config;
	        this.bidderConfig = this._config.partners.getBidderConfig('roundel');
	        this.adapterName = 'ix';
	        this._params = {
	            siteId: '377190',
	        };
	        this._map = new Map([
	            ['Below_Post_1', [{ size: [728, 90] }, { size: [300, 250] }]],
	            ['Content_1', [{ size: [728, 90] }, { size: [300, 250] }, { size: [320, 50] }, { size: [300, 50] }]],
	            ['Content_2', [{ size: [728, 90] }, { size: [300, 250] }, { size: [320, 50] }, { size: [300, 50] }]],
	            ['Content_3', [{ size: [300, 250] }, { size: [320, 50] }, { size: [300, 50] }]],
	            ['Content_4', [{ size: [300, 250] }, { size: [320, 50] }, { size: [300, 50] }]],
	            ['Content_5', [{ size: [300, 250] }, { size: [320, 50] }, { size: [300, 50] }]],
	            ['Content_6', [{ size: [300, 250] }, { size: [320, 50] }, { size: [300, 50] }]],
	            ['Content_7', [{ size: [300, 250] }, { size: [320, 50] }, { size: [300, 50] }]],
	            ['Content_8', [{ size: [300, 250] }, { size: [320, 50] }, { size: [300, 50] }]],
	            ['Content_9', [{ size: [300, 250] }, { size: [320, 50] }, { size: [300, 50] }]],
	            ['Header_1', [{ size: [728, 90] }, { size: [970, 250] }, { size: [320, 50] }, { size: [300, 50] }]],
	            ['Header_2', [{ size: [728, 90] }, { size: [970, 250] }, { size: [320, 50] }, { size: [300, 50] }]],
	            ['Footer_1', [{ size: [728, 90] }, { size: [970, 90] }, { size: [320, 50] }, { size: [320, 100] }, { size: [300, 50] }]],
	            ['Recipe_1', [{ size: [300, 250] }, { size: [320, 50] }, { size: [300, 50] }]],
	            ['Recipe_2', [{ size: [300, 250] }, { size: [320, 50] }, { size: [300, 50] }]],
	            ['Recipe_3', [{ size: [300, 250] }, { size: [320, 50] }, { size: [300, 50] }]],
	            ['Recipe_4', [{ size: [300, 250] }, { size: [320, 50] }, { size: [300, 50] }]],
	            ['Sidebar_1', [{ size: [300, 250] }, { size: [300, 600] }, { size: [160, 600] }]],
	            ['Sidebar_2', [{ size: [300, 250] }, { size: [300, 600] }, { size: [160, 600] }]],
	            ['Sidebar_3', [{ size: [300, 250] }, { size: [300, 600] }, { size: [160, 600] }]],
	            ['Sidebar_4', [{ size: [300, 250] }, { size: [300, 600] }, { size: [160, 600] }]],
	            ['Sidebar_5', [{ size: [300, 250] }, { size: [300, 600] }, { size: [160, 600] }]],
	            ['Sidebar_9', [{ size: [300, 250] }, { size: [300, 600] }, { size: [160, 600] }]],
	        ]);
	        this._videoMap = new Map([
	            [
	                VideoAdUnit.Video_Collapse_Autoplay_SoundOff,
	                [
	                    {
	                        size: [640, 360],
	                        siteId: '485376',
	                        device: 'desktop',
	                    },
	                ],
	            ],
	            [
	                VideoAdUnit.Video_Coll_SOff_Smartphone,
	                [
	                    {
	                        size: [400, 225],
	                        siteId: '485377',
	                        device: 'mobile',
	                    },
	                ],
	            ],
	            [
	                VideoAdUnit.Video_In_Post_ClicktoPlay_SoundOn,
	                [
	                    {
	                        size: [640, 360],
	                        siteId: '485380',
	                        device: 'desktop',
	                    },
	                    {
	                        size: [400, 225],
	                        siteId: '485381',
	                        device: 'mobile',
	                    },
	                ],
	            ],
	            [
	                VideoAdUnit.Video_Individual_Autoplay_SOff,
	                [
	                    {
	                        size: [640, 360],
	                        siteId: '485378',
	                        device: 'desktop',
	                    },
	                    {
	                        size: [400, 225],
	                        siteId: '485379',
	                        device: 'mobile',
	                    },
	                ],
	            ],
	        ]);
	        this._playbackmethodMap = new Map([
	            [3, [3]],
	            [6, [2]],
	        ]);
	    }
	    get enabled() {
	        return this._config.partners.roundel;
	    }
	    getSlotBidRequests(slot) {
	        if (this._map.has(slot.placementMapName)) {
	            return this._map
	                .get(slot.placementMapName)
	                .filter(({ size }) => slot.hasSize(size))
	                .map(({ size }) => ({
	                bidder: this.name,
	                ...(slot.viewability < this._config.marmalade.hvThreshold ? { labelAny: ['refresh'] } : {}),
	                params: {
	                    ...this._params,
	                    size,
	                },
	            }));
	        }
	    }
	    getVideoSlotBidRequests(_video) {
	        var _a;
	        if (this._videoMap.has(_video.name)) {
	            const deviceType = isDesktop() ? 'desktop' : 'mobile';
	            const params = this._videoMap
	                .get(_video.name)
	                .filter(unit => unit.device === deviceType)
	                .map(({ device, ...rest }) => rest)[0];
	            return [
	                {
	                    bidder: this.name,
	                    params: {
	                        ...params,
	                        video: {
	                            mimes: this._config.video.mimeType,
	                            ...(((_a = this._config.video.playbackmethod) === null || _a === void 0 ? void 0 : _a.get(_video.name)) && {
	                                playbackmethod: this._playbackmethodMap.get(this._config.video.playbackmethod.get(_video.name)[0]),
	                            }),
	                            api: this._config.video.apiValue,
	                            minduration: 0,
	                            maxduration: 30,
	                            protocols: this._config.video.videoProtocols.protocols,
	                        },
	                    },
	                },
	            ];
	        }
	    }
	};
	RoundelBidder = __decorate([
	    log('RoundelBidder'),
	    injectable(),
	    __metadata("design:paramtypes", [Config])
	], RoundelBidder);

	let RubiconBidder = class RubiconBidder extends Bidder {
	    constructor(_config, _rubiconExperiment) {
	        super();
	        this._config = _config;
	        this._rubiconExperiment = _rubiconExperiment;
	        this.bidderConfig = this._config.partners.getBidderConfig('rubicon');
	        this.adapterName = 'rubicon';
	        this.serverBidderName = 'rubi_ss';
	        this._bidders = [];
	        this._map = new Map([
	            ['Below_Post_1', { client: 881394, server: 1974272 }],
	            ['Content_1', { client: 881398, server: 1974276 }],
	            ['Content_2', { client: 881400, server: 1974280 }],
	            ['Content_3', { client: 881402, server: 1974282 }],
	            ['Content_4', { client: 881404, server: 1974284 }],
	            ['Content_5', { client: 881406, server: 1974286 }],
	            ['Content_6', { client: 881408, server: 1974288 }],
	            ['Content_7', { client: 881410, server: 1974290 }],
	            ['Content_8', { client: 881412, server: 1974292 }],
	            ['Content_9', { client: 881414, server: 1974294 }],
	            ['Footer_1', { client: 881416, server: 1974296 }],
	            ['Header_1', { client: 881422, server: 1974304 }],
	            ['Header_2', { client: 881426, server: 1974306 }],
	            ['Interstitial_1', { client: 1979348, server: 1979354 }],
	            ['Recipe_1', { client: 881428, server: 1974308 }],
	            ['Recipe_2', { client: 881430, server: 1974310 }],
	            ['Recipe_3', { client: 1187188, server: 1974312 }],
	            ['Recipe_4', { client: 1279328, server: 1974314 }],
	            ['Sidebar_1', { client: 881440, server: 1974316 }],
	            ['Sidebar_2', { client: 881454, server: 1974318 }],
	            ['Sidebar_3', { client: 881460, server: 1974320 }],
	            ['Sidebar_4', { client: 881462, server: 1974322 }],
	            ['Sidebar_5', { client: 881466, server: 1974324 }],
	            ['Sidebar_9', { client: 881478, server: 1974332 }],
	            ['Video_StickyOutstream_1', { client: 2150398, server: 2150396 }],
	            [VideoAdUnit.Video_Collapse_Autoplay_SoundOff, { client: 1259006, server: 2055644 }],
	            [VideoAdUnit.Video_Coll_SOff_Smartphone, { client: 1259010, server: 2055648 }],
	            [VideoAdUnit.Video_In_Post_ClicktoPlay_SoundOn, { client: 1259008, server: 2055642 }],
	            [VideoAdUnit.Video_Individual_Autoplay_SOff, { client: 1506800, server: 2055646 }],
	        ]);
	        const clientEnabled = this._rubiconExperiment.result === 'both' || this._rubiconExperiment.result === 'client';
	        const serverEnabled = this._rubiconExperiment.result === 'both' || this._rubiconExperiment.result === 'server';
	        if (serverEnabled) {
	            this._bidders.push({ name: this.serverBidderName, type: 'server' });
	        }
	        if (clientEnabled) {
	            this._bidders.push({ name: this.name, type: 'client' });
	        }
	    }
	    getDisplayParams(type, location) {
	        const siteId = {
	            server: 363698,
	            client: 180726,
	        };
	        return {
	            accountId: 9262,
	            siteId: location === 'Video_StickyOutstream' ? 386004 : siteId[type],
	            ...(location === 'Video_StickyOutstream' && {
	                video: { language: 'en' },
	            }),
	        };
	    }
	    getVideoParams(type) {
	        const siteId = {
	            server: 375144,
	            client: 253996,
	        };
	        return {
	            accountId: 9262,
	            siteId: siteId[type],
	            video: {
	                language: 'en',
	            },
	        };
	    }
	    get enabled() {
	        return this._config.partners.rubicon;
	    }
	    get videoEnabled() {
	        return this._config.partners.video.rubicon;
	    }
	    getSlotBidRequests(slot) {
	        if (this._map.has(slot.placementMapName)) {
	            return this._bidders.map(bidder => {
	                const isHV = isHighlyViewableSlot(slot, this._config.marmalade.hvThreshold);
	                return {
	                    bidder: bidder.name,
	                    params: {
	                        ...this.getDisplayParams(bidder.type, slot.location),
	                        zoneId: this._map.get(slot.placementMapName)[bidder.type],
	                        ...(isHV && { position: 'atf' }),
	                    },
	                };
	            });
	        }
	    }
	    getVideoSlotBidRequests(_video) {
	        if (this._map.has(_video.name)) {
	            return this._bidders.map(bidder => {
	                return {
	                    bidder: bidder.name,
	                    params: {
	                        ...this.getVideoParams(bidder.type),
	                        zoneId: this._map.get(_video.name)[bidder.type],
	                    },
	                };
	            });
	        }
	    }
	    updateBidParams(slot, _adUnit, bid) {
	        if (slot.refreshCount === 1) {
	            bid.params.position = 'atf';
	        }
	        return bid;
	    }
	};
	RubiconBidder = __decorate([
	    log('RubiconBidder'),
	    injectable(),
	    __metadata("design:paramtypes", [Config, RubiconExperiment])
	], RubiconBidder);

	const map = new Map([
	    [
	        'Below_Post_1',
	        [
	            { size: [300, 250], pkey: '7SbWFfJm2dn10YEIuTIpKDME' },
	            { size: [728, 90], pkey: 'rcC1EVV27zshgwZefZtMMbQH' },
	            { size: [320, 50], pkey: 'T7Qor0zFsfzE8d0WArpJPwQX' },
	            { size: [336, 280], pkey: 'WoVFJAUvQg9oowjifOQLhHfb' },
	        ],
	    ],
	    [
	        'Content_1',
	        [
	            { size: [300, 250], pkey: 'Hqhk8OQEu54TMfika2qbQjZe' },
	            { size: [728, 90], pkey: 'Abg2OePLqx4qSJsbvcMFeKMd' },
	            { size: [320, 50], pkey: 'nlcvbONm7a7qbEq1CUb60bDG' },
	            { size: [336, 280], pkey: 'ygZ1JVS7p7SMDBgz7ueGgfVr' },
	            { size: [300, 50], pkey: '9kDU40A4BJXchR7ikuWND5Ui' },
	        ],
	    ],
	    [
	        'Content_2',
	        [
	            { size: [300, 250], pkey: 'h28JMhou2Lu9BYHVipYoXuJC' },
	            { size: [320, 50], pkey: 'jdumKQjHDTttqY113Cyf8Dg5' },
	            { size: [728, 90], pkey: 'zXUbUzaRyn8LyqVmiSSGFcf5' },
	            { size: [300, 50], pkey: 'D3MXJwPThTgUD48ESouRejcn' },
	            { size: [336, 280], pkey: 'ocdg6DMXhAfaTk7KgImuPCPi' },
	        ],
	    ],
	    [
	        'Content_3',
	        [
	            { size: [300, 250], pkey: 'BFOY9pnh071TtzOy9lBjIr2i' },
	            { size: [320, 50], pkey: '96aXzW1FyE1LlnVyOMYuFW7x' },
	            { size: [728, 90], pkey: 'HhDmPHv4VTNzHzcG65kBlpS0' },
	            { size: [300, 50], pkey: 'JQXmRwXj1jOjHCQF8ufXkKIJ' },
	        ],
	    ],
	    [
	        'Content_4',
	        [
	            { size: [300, 250], pkey: 'GA7GQONt3evAWTb7QFsfr4kT' },
	            { size: [320, 50], pkey: 'iN7VUlNOwy5Nem9ve7HCjt1O' },
	            { size: [728, 90], pkey: 'WlK6M3BJTYR6CKgtW4fpeWwc' },
	            { size: [300, 50], pkey: '7DEh5436UHnmeKGzVXQVsvRk' },
	        ],
	    ],
	    [
	        'Content_5',
	        [
	            { size: [300, 250], pkey: 'ZKk36rd21PTfmO81jIh4Yogg' },
	            { size: [320, 50], pkey: 'Dc9sjnVcwjTK2iG3wYmqLveY' },
	            { size: [728, 90], pkey: 'wuq8OFVQSXj9rmtUlnLo57Tm' },
	            { size: [300, 50], pkey: 'ZWVmSVe4txKlxxCQoqMcGIus' },
	        ],
	    ],
	    [
	        'Content_6',
	        [
	            { size: [300, 250], pkey: '1rWi9eEX25aaJTBP0gYbRZkI' },
	            { size: [320, 50], pkey: 'xpvziI7Hx5t9ZYEhjNh559PS' },
	            { size: [728, 90], pkey: 'NCS2KzLcAOxlnkaJ4xjxF0yY' },
	            { size: [300, 50], pkey: 'T3CRI7sep8LYNDkOrvgSZUPQ' },
	        ],
	    ],
	    [
	        'Content_7',
	        [
	            { size: [300, 250], pkey: 'UyoEFm2doVvp7106fNDYQWUD' },
	            { size: [320, 50], pkey: 'TaEN9LCRL7njBnuDdcqFl45i' },
	            { size: [728, 90], pkey: 'F9qCCjLusYbKBOeMYwTpuEPE' },
	            { size: [300, 50], pkey: 'T4LKxfIKZJCqFzBemjae6MGu' },
	        ],
	    ],
	    [
	        'Content_8',
	        [
	            { size: [300, 250], pkey: 'Kx7r3bEMtM8oX76sHwPJmKc0' },
	            { size: [320, 50], pkey: 'yFU6LWetkGsn5PDQKYT2IDsb' },
	            { size: [728, 90], pkey: 'SzRqozC7KE5CHZ5X0MYolGNg' },
	            { size: [300, 50], pkey: 'TIHmP6MqapPY4RpbkOm3pYpV' },
	        ],
	    ],
	    [
	        'Content_9',
	        [
	            { size: [300, 250], pkey: 'ME02OxIG42MNrqtEtkRcC3WI' },
	            { size: [320, 50], pkey: 'FZAEaVzZWYVTEcRNmWJmjUXB' },
	            { size: [728, 90], pkey: 'd2Rjluzn2K59G2BS6dcOSTnQ' },
	            { size: [300, 50], pkey: 'mBGMr6mqftj8c2qcQky6UjEB' },
	        ],
	    ],
	    [
	        'Footer_1',
	        [
	            { size: [728, 90], pkey: '3B3mEOFlqzWznInsydJTcOM4' },
	            { size: [320, 50], pkey: 'D7FU4vgB3xSrSUsE8x941axF' },
	            { size: [300, 50], pkey: 'GNY9gDQKzEGt6Tlb13yLfmuX' },
	            { size: [970, 90], pkey: 'QpPUq12xurb2uH4eesPfZAHF' },
	            { size: [320, 100], pkey: 'B1C8tQAkMN7kpCuxh1hW6CY8' },
	        ],
	    ],
	    [
	        'Header_1',
	        [
	            { size: [728, 90], pkey: 'gEiCP252abCex8X60QDCQ18Q' },
	            { size: [320, 50], pkey: '1edt8nVrdCirRPclWUszxTkp' },
	            { size: [970, 250], pkey: '8vU2bELnZC87m9GLY6XrB82g' },
	            { size: [300, 50], pkey: 'hjIoNE7R9iO7fInGsX0iibTz' },
	            { size: [300, 250], pkey: 'jStKXZxN8Ccuf6XS4dKqhKr9' },
	            { size: [970, 90], pkey: 'InTyYn8hF3Qs7LnzMuZosUTQ' },
	        ],
	    ],
	    [
	        'Header_2',
	        [
	            { size: [728, 90], pkey: 'qJiJRp6ukhtMyrprTZKHjL2M' },
	            { size: [320, 50], pkey: '8FmqCiT44WYjSNLDf1gQE8JU' },
	            { size: [300, 250], pkey: 'HkFfwTqoieNv9hxPhJKPKoX8' },
	            { size: [970, 250], pkey: 'NwtHSBVFWxfm6Yh7UeCfuHa6' },
	            { size: [300, 50], pkey: '4kwwuV84b6KhCJQy0yjDYdfl' },
	            { size: [320, 100], pkey: 'TJx2N6gevlYeFawnBbRy4gRl' },
	        ],
	    ],
	    [
	        'Recipe_1',
	        [
	            { size: [300, 250], pkey: 'uf0lKHKQpMCXGy4lxiCspQq7' },
	            { size: [320, 50], pkey: 'lklI3sAvIozfaIGNQGORtPOR' },
	            { size: [300, 50], pkey: 'yiehMO6LI3FNHjbCPIb1L3Sk' },
	            { size: [250, 250], pkey: 'LyZ0FEa1r0IYt8G2ZZsZi389' },
	        ],
	    ],
	    [
	        'Recipe_2',
	        [
	            { size: [300, 250], pkey: 'k3diT2fkJ9qUBWQussCusqH3' },
	            { size: [320, 50], pkey: 'nWhVYiRycgz0snwL4hTcS3vA' },
	            { size: [300, 50], pkey: 'dq7FbogqyhCRRIH60EEOqCSU' },
	            { size: [250, 250], pkey: 'yiWtNVya1yOMCncI5pNF5kc5' },
	        ],
	    ],
	    [
	        'Recipe_3',
	        [
	            { size: [300, 250], pkey: '43441FPoOkNSE3t2cVABWnsj' },
	            { size: [320, 50], pkey: 'XTsNJ5wTa3CksG40rnRNHiib' },
	            { size: [300, 50], pkey: 'OogAcgEwqjMqWmbuSN0n1fhg' },
	            { size: [250, 250], pkey: 't9D4xPUErCl21pJOFQemQp9h' },
	        ],
	    ],
	    [
	        'Recipe_4',
	        [
	            { size: [300, 250], pkey: 'DYIoV5pkMmf8Dh6Z328lJjVS' },
	            { size: [320, 50], pkey: '00kJPcqve45ZTYX6hicr37iK' },
	            { size: [300, 50], pkey: 'BpO7D8zDzdyGmFUOGNcRhUUm' },
	            { size: [300, 600], pkey: 'xv9dO3gYMP1nJKg1FZVtIUlc' },
	        ],
	    ],
	    [
	        'Sidebar_1',
	        [
	            { size: [300, 250], pkey: 'CrsU69OOlLRE1gDlLVGWIIV6' },
	            { size: [300, 600], pkey: '3pyeQzDRiW84Hg8gNrOq7BUr' },
	            { size: [160, 600], pkey: 'CFUyMykS3nc38kL2GnT0S7E4' },
	            { size: [320, 50], pkey: '1BptSVedVseFELcEHmSjZmDr' },
	            { size: [300, 50], pkey: '2pg9IZthU4rVlb45qoI2081a' },
	        ],
	    ],
	    [
	        'Sidebar_2',
	        [
	            { size: [300, 250], pkey: 'SRG5uYvQkWqlTzkqgXr65zTB' },
	            { size: [300, 600], pkey: 'Ean6FEKv8T4dKoDEQtgf6J5K' },
	            { size: [160, 600], pkey: 'WbYPSpMSXQPKyD7MaH1Qc5z7' },
	            { size: [320, 50], pkey: 'TAk15aJmBw3jMFoV9vSYYWLl' },
	            { size: [300, 50], pkey: '9w6UD5z59ooQWpW98mmpv0mD' },
	        ],
	    ],
	    [
	        'Sidebar_3',
	        [
	            { size: [300, 250], pkey: 'ePJzx8Sm7N35TzihmA98puiL' },
	            { size: [160, 600], pkey: 'P4EOkxn1ZtpxOxx2lahCdYOJ' },
	            { size: [300, 600], pkey: '6mOPwEqEtbkwuuzizUPzdQhN' },
	            { size: [320, 50], pkey: 'oSwBRQCb6174NZ0wDEyxZW9E' },
	            { size: [300, 50], pkey: 'LImddo0cIDhlsk6dkvMaHxsW' },
	        ],
	    ],
	    [
	        'Sidebar_4',
	        [
	            { size: [300, 250], pkey: 'xVf5XsMi0sHZYN4WvjiFhCt3' },
	            { size: [300, 600], pkey: 'WH8DfDE6oJYbphu2nD4xxeIV' },
	            { size: [160, 600], pkey: '8ZBBtdUqKqArOUPgW7bpiUia' },
	            { size: [320, 50], pkey: 'UMKQPvhCYMOH1sOPVdYEDEQt' },
	            { size: [300, 50], pkey: 'UoweNgEnjfmpxKoHzSXkuoWg' },
	        ],
	    ],
	    [
	        'Sidebar_5',
	        [
	            { size: [300, 250], pkey: 'EhtNcAaPOBeM8QI5ypGM7lZy' },
	            { size: [160, 600], pkey: 'zAOUkIaCHmzOCw2Ma5rrzaql' },
	            { size: [300, 600], pkey: 'LDMKwAfNFjGKWXL0OWKksknT' },
	            { size: [320, 50], pkey: 'WdPWJ92IfPqKgO5vRXvlsDO4' },
	            { size: [300, 50], pkey: 'MgyTpbqDa5nWNz6aDNWyucFn' },
	        ],
	    ],
	    [
	        'Sidebar_9',
	        [
	            { size: [300, 250], pkey: 'JmiI0R5Mw4cFlLp9pgaem31E' },
	            { size: [300, 600], pkey: 'IoYC7dL9wONQvhjMnu3iqP3R' },
	            { size: [160, 600], pkey: 'np3Ol8PXscn2cbaUcrthhTKg' },
	            { size: [320, 50], pkey: 'Cd46ns56pySxsSXXdRi3KlYq' },
	            { size: [300, 50], pkey: 'k8W1t71k8qmkYsiK4v3pop6j' },
	            { size: [250, 250], pkey: 'qINMbG0pc3n9CO2oIW1qxWGE' },
	        ],
	    ],
	]);
	const videoMap = new Map([
	    [VideoAdUnit.Video_Collapse_Autoplay_SoundOff, [{ size: [640, 360], pkey: 'I5VjN89qESPMegBdpCt92W8S' }]],
	    [VideoAdUnit.Video_Coll_SOff_Smartphone, [{ size: [400, 225], pkey: 'iZXbFkwkNrOgpI7ue8o3mJda' }]],
	    [
	        VideoAdUnit.Video_In_Post_ClicktoPlay_SoundOn,
	        [
	            { size: [640, 360], pkey: 'sMLWZBQNa6GaKC2khQiIg5Tj' },
	            { size: [400, 225], pkey: 'yHkEhAMj24ubV101Fklbp6fA' },
	        ],
	    ],
	    [
	        VideoAdUnit.Video_Individual_Autoplay_SOff,
	        [
	            { size: [640, 360], pkey: 'GCV9Do84nDBEFaVjb507H4iE' },
	            { size: [400, 225], pkey: '6lY8mDlZX6W7ijhbh6OuDCfj' },
	        ],
	    ],
	]);

	let SharethroughBidder = class SharethroughBidder extends Bidder {
	    constructor(_config) {
	        super();
	        this._config = _config;
	        this.bidderConfig = this._config.partners.getBidderConfig('sharethrough');
	    }
	    get enabled() {
	        return this._config.partners.sharethrough;
	    }
	    get videoEnabled() {
	        return this._config.partners.video.sharethrough;
	    }
	    getSlotBidRequests(slot) {
	        if (map.has(slot.placementMapName)) {
	            return map
	                .get(slot.placementMapName)
	                .filter(({ size }) => slot.hasSize(size))
	                .map(({ pkey }) => {
	                return {
	                    bidder: this.name,
	                    params: {
	                        pkey,
	                    },
	                };
	            });
	        }
	    }
	    getVideoSlotBidRequests(_video) {
	        return videoMap
	            .get(_video.name)
	            .filter(({ size }) => _video.size[0] === size[0] && _video.size[1] === size[1])
	            .map(({ pkey }) => ({
	            bidder: this.name,
	            params: {
	                pkey,
	            },
	        }));
	    }
	};
	SharethroughBidder = __decorate([
	    log('SharethroughBidder'),
	    injectable(),
	    __metadata("design:paramtypes", [Config])
	], SharethroughBidder);

	let SpotXBidder = class SpotXBidder extends Bidder {
	    constructor(_config, _irisTv) {
	        super();
	        this._config = _config;
	        this._irisTv = _irisTv;
	        this.bidderConfig = this._config.partners.getBidderConfig('spotx');
	        this._videoParams = {
	            ad_unit: 'instream',
	            secure: true,
	            mimes: this._config.video.mimeType,
	            position: this._config.video.position.id,
	        };
	        this._map = new Map([
	            [VideoAdUnit.Video_Collapse_Autoplay_SoundOff, 279547],
	            [VideoAdUnit.Video_Coll_SOff_Smartphone, 279549],
	            [VideoAdUnit.Video_In_Post_ClicktoPlay_SoundOn, 279548],
	            [VideoAdUnit.Video_Individual_Autoplay_SOff, 279550],
	        ]);
	    }
	    get videoEnabled() {
	        return this._config.partners.video.spotx;
	    }
	    getVideoSlotBidRequests(_video) {
	        if (this._map.has(_video.name)) {
	            const irisData = this._irisTv.irisContextualData;
	            const irisId = this._irisTv.irisId;
	            const irisDataAvailable = irisId && irisData && irisData.length;
	            return [
	                {
	                    bidder: this.name,
	                    params: {
	                        ...this._videoParams,
	                        channel_id: this._map.get(_video.name),
	                        ...(irisDataAvailable && {
	                            custom: {
	                                iris_context: irisData,
	                                iris_id: irisId,
	                            },
	                        }),
	                    },
	                },
	            ];
	        }
	    }
	};
	SpotXBidder = __decorate([
	    log('SpotXBidder'),
	    injectable(),
	    __metadata("design:paramtypes", [Config, IrisTv])
	], SpotXBidder);

	let TeadsBidder = class TeadsBidder extends Bidder {
	    constructor(_config, _mediaType) {
	        super();
	        this._config = _config;
	        this._mediaType = _mediaType;
	        this.bidderConfig = this._config.partners.getBidderConfig('teads');
	        this._pageId = 112062;
	        this._adTypeBitIndexMap = new Map([
	            ['outstream', { adType: isMobile() ? 'outstreamMobile' : 'outstreamDesktop', index: 1 }],
	            ['interscroller', { adType: 'interscroller', index: 2 }],
	            ['miniscroller', { adType: 'miniscroller', index: 3 }],
	        ]);
	        this._adUnitsMap = new Map([
	            ['Below_Post_1', []],
	            ['Content_1', ['outstreamDesktop', 'outstreamMobile', 'miniscroller', 'interscroller']],
	            ['Content_2', ['miniscroller', 'interscroller']],
	            ['Content_3', ['outstreamDesktop', 'outstreamMobile', 'miniscroller', 'interscroller']],
	            ['Content_4', ['miniscroller', 'interscroller']],
	            ['Content_5', ['outstreamDesktop', 'outstreamMobile', 'miniscroller', 'interscroller']],
	            ['Content_6', ['miniscroller', 'interscroller']],
	            ['Content_7', ['miniscroller', 'interscroller']],
	            ['Content_8', ['miniscroller', 'interscroller']],
	            ['Content_9', ['miniscroller', 'interscroller']],
	            ['Footer_1', []],
	            ['Header_1', []],
	            ['Header_2', []],
	            ['Recipe_1', ['outstreamDesktop', 'outstreamMobile', 'miniscroller']],
	            ['Recipe_2', ['miniscroller']],
	            ['Recipe_3', ['miniscroller']],
	            ['Recipe_4', ['miniscroller']],
	            ['Sidebar_1', []],
	            ['Sidebar_2', []],
	            ['Sidebar_3', []],
	            ['Sidebar_4', []],
	            ['Sidebar_5', []],
	            ['Sidebar_9', []],
	        ]);
	        this._deviceAdTypes = {
	            mobile: ['outstreamMobile', 'interscroller', 'miniscroller'],
	            desktop: ['outstreamDesktop'],
	        };
	        this._placementIdMap = new Map([
	            ['1000', { id: 121842, isOutstream: false }],
	            ['1001', { id: 121836, isOutstream: true }],
	            ['1010', { id: 121835, isOutstream: true }],
	            ['1011', { id: 121840, isOutstream: true }],
	            ['1100', { id: 121834, isOutstream: false }],
	            ['1101', { id: 121838, isOutstream: true }],
	            ['1110', { id: 121837, isOutstream: true }],
	            ['1111', { id: 121895, isOutstream: true }],
	        ]);
	    }
	    get enabled() {
	        return this._config.partners.teads;
	    }
	    createBitArrayAdOptions(slot) {
	        const activeAdTypes = isMobile() ? this._deviceAdTypes.mobile : this._deviceAdTypes.desktop;
	        const bitArray = ['1', '0', '0', '0'];
	        const adTypesForSlot = this._adUnitsMap.get(slot.placementMapName);
	        this._adTypeBitIndexMap.forEach((adTypeObject, key) => {
	            const adType = adTypeObject.adType;
	            if (activeAdTypes.indexOf(adType) > -1 && this._config.adTypes.has(adType) && adTypesForSlot.indexOf(adType) > -1) {
	                if (key === 'outstream') {
	                    bitArray[adTypeObject.index] = this._mediaType.outstreamEnabled(slot).currentlyActive ? '1' : '0';
	                }
	                else {
	                    bitArray[adTypeObject.index] = '1';
	                }
	            }
	        });
	        return bitArray;
	    }
	    updateBidParams(slot, _adUnit, bid) {
	        if (slot.refreshCount === 1 && this._adUnitsMap.has(slot.placementMapName)) {
	            const bitArray = this.createBitArrayAdOptions(slot);
	            const placementObject = this._placementIdMap.get(bitArray.join(''));
	            bid.params.placementId = placementObject.id;
	            const existingLabels = bid.labelAny || [];
	            const label = `outstreamEnabled_${slot.placementMapName}`;
	            if (existingLabels.indexOf(label) === -1 && placementObject.isOutstream) {
	                existingLabels.push(label);
	                bid.labelAny = existingLabels;
	            }
	        }
	        return bid;
	    }
	    getSlotBidRequests(slot) {
	        if (this._adUnitsMap.has(slot.placementMapName)) {
	            const bitArray = this.createBitArrayAdOptions(slot);
	            const placementObject = this._placementIdMap.get(bitArray.join(''));
	            return [
	                {
	                    bidder: this.name,
	                    ...this.getLabels(placementObject.isOutstream, slot.placementMapName),
	                    params: {
	                        placementId: placementObject.id,
	                        pageId: this._pageId,
	                    },
	                },
	            ];
	        }
	    }
	    getLabels(isOutstream, placementMapName) {
	        const labels = [];
	        if (isOutstream) {
	            labels.push(`outstreamEnabled_${placementMapName}`);
	        }
	        return labels.length ? { labelAny: labels } : {};
	    }
	};
	TeadsBidder = __decorate([
	    log('TeadsBidder'),
	    injectable(),
	    __metadata("design:paramtypes", [Config, MediaType])
	], TeadsBidder);

	let TelariaBidder = class TelariaBidder extends Bidder {
	    constructor(_config) {
	        super();
	        this._config = _config;
	        this.bidderConfig = this._config.partners.getBidderConfig('telaria');
	        this._map = new Map([
	            [VideoAdUnit.Video_Collapse_Autoplay_SoundOff, { supplyCode: '6psex-fm1gy', adCode: '6psex-o3fcq' }],
	            [VideoAdUnit.Video_In_Post_ClicktoPlay_SoundOn, { supplyCode: '6psex-bgapy', adCode: '6psex-kln5k' }],
	            [VideoAdUnit.Video_Coll_SOff_Smartphone, { supplyCode: '6psex-axuft', adCode: '6psex-jaes3' }],
	            [VideoAdUnit.Video_Individual_Autoplay_SOff, { supplyCode: '6psex-sootr', adCode: '6psex-0vosj' }],
	        ]);
	    }
	    get videoEnabled() {
	        return this._config.partners.video.telaria;
	    }
	    getVideoSlotBidRequests(_video) {
	        if (this._map.has(_video.name)) {
	            const videoParams = this._map.get(_video.name);
	            return [
	                {
	                    bidder: this.name,
	                    params: {
	                        ...videoParams,
	                        videoId: _video.name,
	                    },
	                },
	            ];
	        }
	    }
	};
	TelariaBidder = __decorate([
	    log('TelariaBidder'),
	    injectable(),
	    __metadata("design:paramtypes", [Config])
	], TelariaBidder);

	let TripleLiftOutstreamExperiment = class TripleLiftOutstreamExperiment extends Experiment {
	    constructor(abgroup) {
	        super();
	        this.key = 'tlvid';
	        this._choices = [{ choice: true }, { choice: false }];
	        this._result = this.run();
	        abgroup.set(this.key, this._result ? 'on' : 'off');
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new BernoulliTrial(0).get();
	    }
	};
	TripleLiftOutstreamExperiment = __decorate([
	    log('TripleLiftOutstreamExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup])
	], TripleLiftOutstreamExperiment);

	let TripleLiftBidder = class TripleLiftBidder extends Bidder {
	    constructor(_config, _tripleLiftExperiment, _tripleLiftOutstreamExperiment, _mediaType) {
	        super();
	        this._config = _config;
	        this._tripleLiftExperiment = _tripleLiftExperiment;
	        this._tripleLiftOutstreamExperiment = _tripleLiftOutstreamExperiment;
	        this._mediaType = _mediaType;
	        this.bidderConfig = this._config.partners.getBidderConfig('triplelift');
	        this.adapterName = 'triplelift';
	        this.serverBidderName = 'tripl_ss';
	        this._clientEnabled = false;
	        this._serverEnabled = false;
	        this.settings = {
	            adserverTargeting: [
	                {
	                    key: 'hb_format',
	                    val: ({ meta, tl_source }) => (meta && meta.mediaType) || this.tlSourceMap.get(tl_source || ''),
	                },
	            ],
	        };
	        this.tlSourceMap = new Map([
	            ['hdx', 'banner'],
	            ['tlx', 'native'],
	        ]);
	        this._verticalCategoryMap = new Map([
	            ['Baby', 'Family'],
	            ['Family and Parenting', 'Family'],
	            ['Natural Parenting', 'Family'],
	            ['Pregnancy', 'Family'],
	            ['Toddler', 'Family'],
	            ['Personal Finance', 'Finance'],
	            ['Professional Finance', 'Finance'],
	            ['Deals', 'Finance'],
	            ['Clean Eating', 'Food'],
	            ['Food', 'Food'],
	            ['Crafts', 'Home'],
	            ['Gardening', 'Home'],
	            ['Green Living', 'Home'],
	            ['Home Decor and Design', 'Home'],
	            ['Pets', 'Home'],
	            ['Travel', 'Travel'],
	            ['News', 'News'],
	            ['Lifestyle', 'Lifestyle'],
	            ['Beauty', 'Lifestyle'],
	            ['Other', 'Lifestyle'],
	            ['Health and Fitness', 'Health'],
	            ['Entertainment', 'Entertainment'],
	            ['Sports', 'Sports'],
	            ['Womens Style', 'Womens Style'],
	            ['Mens Style and Grooming', 'Mens Style'],
	            ['Tech', 'Tech'],
	            ['Wedding', 'Wedding'],
	            ['Auto', 'Auto'],
	        ]);
	        this._categoryPriorityList = new Set([
	            'Food',
	            'Home',
	            'Family',
	            'Finance',
	            'Travel',
	            'News',
	            'Health',
	            'Entertainment',
	            'Sports',
	            'Womens Style',
	            'Mens Style',
	            'Tech',
	            'Wedding',
	            'Auto',
	            'Lifestyle',
	        ]);
	        this._category = defaultTo(this.getCategory(), 'Lifestyle');
	        this._map = new Map([
	            ['Interstitial_1', []],
	            ['Below_Post_1', []],
	            ['Content_1', ['nativeMobileContent', 'nativeDesktopContent']],
	            ['Content_2', ['nativeMobileContent', 'nativeDesktopContent']],
	            ['Content_3', ['nativeMobileContent', 'nativeDesktopContent']],
	            ['Content_4', ['nativeMobileContent', 'nativeDesktopContent']],
	            ['Content_5', ['nativeMobileContent', 'nativeDesktopContent']],
	            ['Content_6', ['nativeMobileContent', 'nativeDesktopContent']],
	            ['Content_7', ['nativeMobileContent', 'nativeDesktopContent']],
	            ['Content_8', ['nativeMobileContent', 'nativeDesktopContent']],
	            ['Content_9', ['nativeMobileContent', 'nativeDesktopContent']],
	            ['Footer_1', []],
	            ['Header_1', []],
	            ['Header_2', []],
	            ['Recipe_1', ['nativeMobileRecipe', 'nativeDesktopRecipe']],
	            ['Recipe_2', ['nativeMobileRecipe', 'nativeDesktopRecipe']],
	            ['Recipe_3', ['nativeMobileRecipe', 'nativeDesktopRecipe']],
	            ['Recipe_4', ['nativeMobileRecipe', 'nativeDesktopRecipe']],
	            ['Recipe_5', ['nativeMobileRecipe', 'nativeDesktopRecipe']],
	            ['Sidebar_1', ['nativeDesktopSidebar']],
	            ['Sidebar_2', ['nativeDesktopSidebar']],
	            ['Sidebar_3', ['nativeDesktopSidebar']],
	            ['Sidebar_4', ['nativeDesktopSidebar']],
	            ['Sidebar_5', ['nativeDesktopSidebar']],
	            ['Sidebar_9', ['nativeDesktopSidebar']],
	        ]);
	        this._videoMap = new Map([
	            [
	                VideoAdUnit.Video_Collapse_Autoplay_SoundOff,
	                {
	                    client: 'AdThriveRON_instream_desktopcollapse_prebid_c2s',
	                    server: 'AdThriveRON_instream_desktopcollapse_prebid',
	                },
	            ],
	            [
	                VideoAdUnit.Video_Coll_SOff_Smartphone,
	                {
	                    client: 'AdThriveRON_instream_mwebsticky_prebid_c2s',
	                    server: 'AdThriveRON_instream_mwebsticky_prebid',
	                },
	            ],
	            [
	                VideoAdUnit.Video_In_Post_ClicktoPlay_SoundOn,
	                {
	                    client: 'AdThriveRON_instream_CTP_prebid_c2s',
	                    server: 'AdThriveRON_instream_CTP_prebid',
	                },
	            ],
	            [
	                VideoAdUnit.Video_Individual_Autoplay_SOff,
	                {
	                    client: 'AdThriveRON_instream_contextcollapse_prebid_c2s',
	                    server: 'AdThriveRON_instream_contextcollapse_prebid',
	                },
	            ],
	        ]);
	        this._deviceAdTypes = {
	            mobile: ['nativeMobileContent', 'nativeMobileRecipe'],
	            desktop: ['nativeDesktopContent', 'nativeDesktopRecipe', 'nativeDesktopSidebar'],
	        };
	        this._clientEnabled = this._tripleLiftExperiment.result === 'both' || this._tripleLiftExperiment.result === 'client';
	        this._serverEnabled = this._tripleLiftExperiment.result === 'both' || this._tripleLiftExperiment.result === 'server';
	    }
	    get enabled() {
	        return this._config.partners.tripleLift;
	    }
	    get videoEnabled() {
	        return this._config.partners.video.tripleLift;
	    }
	    getSlotBidRequests(slot) {
	        const activeAdTypes = isMobile() ? this._deviceAdTypes.mobile : this._deviceAdTypes.desktop;
	        const enabledAdTypes = activeAdTypes.filter(adType => this._config.adTypes.has(adType));
	        if (this._map.has(slot.placementMapName)) {
	            const bids = [];
	            let selectedAdType = slot.location === 'Interstitial' ? 'interstitial' : 'standard';
	            this._map.get(slot.placementMapName).forEach((adType) => {
	                if (enabledAdTypes.indexOf(adType) !== -1) {
	                    selectedAdType = adType;
	                }
	            });
	            const inventoryCode = this.getInventoryCode(selectedAdType, slot);
	            const oustreamEligible = this.isOutstreamEligible(slot);
	            if (this._clientEnabled) {
	                bids.push({
	                    bidder: this.name,
	                    ...this.getLabels(slot.placementMapName, oustreamEligible),
	                    params: {
	                        inventoryCode,
	                    },
	                });
	            }
	            if (this._serverEnabled) {
	                bids.push({
	                    bidder: this.serverBidderName,
	                    params: {
	                        inventoryCode: inventoryCode + '_pbs2s',
	                    },
	                });
	            }
	            return bids;
	        }
	    }
	    inventoryCodeAppend(slot) {
	        return this.isOutstreamEligible(slot) ? '_BV' : '';
	    }
	    isOutstreamEligible(slot) {
	        return this._tripleLiftOutstreamExperiment.result && this._mediaType.outstreamEnabled(slot).outstreamCapable;
	    }
	    getInventoryCode(selectedAdType, slot) {
	        if (selectedAdType === 'standard') {
	            return `AdThrive_${slot.placementMapName}_HDX`;
	        }
	        else if (selectedAdType === 'interstitial') {
	            return 'AdThriveRON_interstitial_multisize';
	        }
	        const isContentOrSideBar = slot.placementMapName === 'Content_1' || slot.placementMapName === 'Sidebar_9';
	        const slotName = isContentOrSideBar ? slot.location.toLowerCase() : slot.placementMapName.toLowerCase().replace(/_(?!.*_)/, '');
	        const deviceType = isMobile() ? 'mobile' : 'desktop';
	        const isOutstreamEligible = this.inventoryCodeAppend(slot);
	        return `adthrive${this._category}_${slotName}_fixed_${deviceType}${isOutstreamEligible}`;
	    }
	    getVideoBidParams(name, _video, inventoryCode) {
	        var _a, _b;
	        return {
	            bidder: name,
	            params: {
	                inventoryCode,
	                video: {
	                    ...(isDesktop() ? { w: 640, h: 360 } : { w: 400, h: 225 }),
	                    api: this._config.video.apiValue,
	                    mimes: this._config.video.mimeType,
	                    ...(this._config.video.videoProtocols.scope === 'all' && {
	                        protocols: this._config.video.videoProtocols.protocols,
	                    }),
	                    playbackmethod: (_b = (_a = this._config.video.playbackmethod) === null || _a === void 0 ? void 0 : _a.get(_video.name)) === null || _b === void 0 ? void 0 : _b[0],
	                    pos: this._config.video.position.id,
	                },
	            },
	        };
	    }
	    getVideoSlotBidRequests(_video) {
	        const bids = [];
	        if (this._videoMap.has(_video.name)) {
	            if (this._clientEnabled) {
	                bids.push(this.getVideoBidParams(this.name, _video, this._videoMap.get(_video.name).client));
	            }
	            if (this._serverEnabled) {
	                bids.push(this.getVideoBidParams(this.serverBidderName, _video, this._videoMap.get(_video.name).server));
	            }
	        }
	        return bids;
	    }
	    getCategory() {
	        const categories = this._config.site.verticals
	            .filter(vertical => this._verticalCategoryMap.has(vertical))
	            .map(vertical => this._verticalCategoryMap.get(vertical));
	        for (const category of this._categoryPriorityList) {
	            if (categories.indexOf(category) !== -1) {
	                return category;
	            }
	        }
	    }
	    getLabels(placementMapName, isOutstream) {
	        const labels = [];
	        if (isOutstream) {
	            labels.push(`outstreamEnabled_${placementMapName}`);
	        }
	        return labels.length ? { labelAny: labels } : {};
	    }
	};
	TripleLiftBidder = __decorate([
	    log('TripleLiftBidder'),
	    injectable(),
	    __metadata("design:paramtypes", [Config,
	        TripleLiftExperiment,
	        TripleLiftOutstreamExperiment,
	        MediaType])
	], TripleLiftBidder);

	let TTDBidder = class TTDBidder extends Bidder {
	    constructor(_config) {
	        super();
	        this._config = _config;
	        this.bidderConfig = this._config.partners.getBidderConfig('ttd');
	        this._device = this._config.context.device;
	        this._set = new Set([
	            'Below_Post_1',
	            'Content_1',
	            'Content_2',
	            'Content_3',
	            'Content_4',
	            'Content_5',
	            'Content_6',
	            'Content_7',
	            'Content_8',
	            'Content_9',
	            'Footer_1',
	            'Header_1',
	            'Recipe_1',
	            'Recipe_2',
	            'Recipe_3',
	            'Recipe_4',
	            'Sidebar_1',
	            'Sidebar_2',
	            'Sidebar_3',
	            'Sidebar_4',
	            'Sidebar_5',
	            'Sidebar_9',
	            'Video_Collapse_Autoplay_SoundOff',
	            'Video_Coll_SOff_Smartphone',
	            'Video_In-Post_ClicktoPlay_SoundOn',
	            'Video_Individual_Autoplay_SOff',
	        ]);
	    }
	    get enabled() {
	        return this._config.partners.ttd;
	    }
	    get videoEnabled() {
	        return this._config.partners.video.ttd;
	    }
	    getSlotBidRequests(slot) {
	        if (this._set.has(slot.placementMapName)) {
	            const placementId = slot.id;
	            const re = new RegExp(`_${this._device}`);
	            return [
	                {
	                    bidder: this.name,
	                    params: {
	                        publisherId: this._config.site.id,
	                        siteId: this._config.site.id,
	                        placementId: placementId.replace(re, ''),
	                        supplySourceId: 'cafemedia',
	                    },
	                },
	            ];
	        }
	    }
	    getVideoSlotBidRequests(_video) {
	        if (this._set.has(_video.name)) {
	            const placementId = `${_video.name}`;
	            return [
	                {
	                    bidder: this.name,
	                    params: {
	                        publisherId: this._config.site.id,
	                        siteId: this._config.site.id,
	                        placementId,
	                        supplySourceId: 'cafemedia',
	                    },
	                },
	            ];
	        }
	    }
	};
	TTDBidder = __decorate([
	    log('TTDBidder'),
	    injectable(),
	    __metadata("design:paramtypes", [Config])
	], TTDBidder);

	let UndertoneBidder = class UndertoneBidder extends Bidder {
	    constructor(_config) {
	        super();
	        this._config = _config;
	        this.bidderConfig = this._config.partners.getBidderConfig('undertone');
	        this._params = {
	            publisherId: 2002,
	        };
	        this._deviceAdTypes = {
	            mobile: ['animatedFooter', 'expandableFooter', 'interscroller', 'miniscroller'],
	            desktop: [],
	        };
	        this._map = new Map([
	            [
	                'Below_Post_1',
	                [
	                    {
	                        placementId: '2002034',
	                        size: [[1, 2]],
	                        adType: 'interscroller',
	                        highViewability: true,
	                    },
	                    {
	                        placementId: '2002035',
	                        size: [[1, 2]],
	                        adType: 'miniscroller',
	                        highViewability: true,
	                    },
	                    {
	                        placementId: '2002036',
	                        size: [[300, 250]],
	                        highViewability: true,
	                    },
	                ],
	            ],
	            [
	                'Content_1',
	                [
	                    { placementId: '2002001', size: [[1, 2]], adType: 'interscroller' },
	                    { placementId: '2002002', size: [[1, 2]], adType: 'miniscroller' },
	                ],
	            ],
	            ['Content_2', [{ placementId: '2002003', size: [[1, 2]], adType: 'miniscroller' }]],
	            ['Content_3', [{ placementId: '2002004', size: [[1, 2]], adType: 'miniscroller' }]],
	            ['Content_4', [{ placementId: '2002005', size: [[1, 2]], adType: 'miniscroller' }]],
	            ['Content_5', [{ placementId: '2002006', size: [[1, 2]], adType: 'miniscroller' }]],
	            [
	                'Footer_1',
	                [
	                    {
	                        placementId: '2002033',
	                        size: [[320, 50]],
	                        adType: 'expandableFooter',
	                    },
	                    {
	                        placementId: '2002038',
	                        size: [[1, 1]],
	                        adType: 'expandableFooter',
	                        mobileCollapsePlayer: true,
	                    },
	                    { placementId: '2002039', size: [[1, 1]], adType: 'animatedFooter' },
	                ],
	            ],
	            ['Header_1', [{ placementId: '2002037', size: [[970, 250]] }]],
	            ['Interstitial_1', [{ placementId: '2002040', size: [[1, 1]] }]],
	            ['Recipe_1', [{ placementId: '2002020', size: [[300, 250]] }]],
	            ['Recipe_2', [{ placementId: '2002021', size: [[300, 250]] }]],
	            ['Recipe_3', [{ placementId: '2002022', size: [[300, 250]] }]],
	            ['Recipe_4', [{ placementId: '2002023', size: [[300, 250]] }]],
	            ['Sidebar_9', [{ placementId: '2002032', size: [[300, 250]] }]],
	        ]);
	    }
	    get enabled() {
	        return this._config.partners.undertone;
	    }
	    getSlotBidRequests(slot) {
	        const activeAdTypes = isMobile() ? this._deviceAdTypes.mobile : this._deviceAdTypes.desktop;
	        const enabledAdTypes = activeAdTypes.filter(adType => this._config.adTypes.has(adType));
	        if (this._map.has(slot.placementMapName)) {
	            return this._map
	                .get(slot.placementMapName)
	                .filter(({ adType, mobileCollapsePlayer, size }) => ((!adType && slot.hasSize(size[0])) || (adType && enabledAdTypes.indexOf(adType) !== -1)) &&
	                (!mobileCollapsePlayer || !this._config.video.mobileStickyPlayerOnPage))
	                .map(({ placementId, size, highViewability }) => {
	                return {
	                    bidder: this.name,
	                    ...(highViewability && slot.viewability < this._config.marmalade.hvThreshold ? { labelAny: ['refresh'] } : {}),
	                    params: {
	                        ...this._params,
	                        placementId,
	                        size,
	                    },
	                };
	            });
	        }
	    }
	};
	UndertoneBidder = __decorate([
	    log('UndertoneBidder'),
	    singleton(),
	    __metadata("design:paramtypes", [Config])
	], UndertoneBidder);

	let UnrulyBidder = class UnrulyBidder extends Bidder {
	    constructor(_config, _mediaType) {
	        super();
	        this._config = _config;
	        this._mediaType = _mediaType;
	        this.bidderConfig = this._config.partners.getBidderConfig('unruly');
	        this._params = {
	            siteId: 208686,
	        };
	    }
	    get enabled() {
	        return this._config.partners.unruly;
	    }
	    getSlotBidRequests(slot) {
	        const { outstreamCapable, currentlyActive } = this._mediaType.outstreamEnabled(slot);
	        if (outstreamCapable && slot.location !== 'Video_StickyOutstream') {
	            return [
	                {
	                    bidder: this.name,
	                    ...(currentlyActive ? {} : { labelAny: ['refresh'] }),
	                    params: {
	                        ...this._params,
	                    },
	                },
	            ];
	        }
	    }
	};
	UnrulyBidder = __decorate([
	    log('UnrulyBidder'),
	    injectable(),
	    __metadata("design:paramtypes", [Config, MediaType])
	], UnrulyBidder);

	let VerizonBidder = class VerizonBidder extends Bidder {
	    constructor(_config) {
	        super();
	        this._config = _config;
	        this.bidderConfig = this._config.partners.getBidderConfig('verizon');
	        this.adapterName = 'aol';
	        this._params = {
	            dcn: isMobile() ? '8a969d580177771bc13c2047d6290082' : '8a9694d00177771bcae21c6941d30023',
	        };
	        this._desktopMap = new Map([
	            [
	                'Content_1',
	                [
	                    { size: [300, 250], id: '8a969d580177771bc13c20458198007e' },
	                    { size: [728, 90], id: '8a96918c0177771bc65220467ff60092' },
	                ],
	            ],
	            ['Content_2', [{ size: [300, 250], id: '8a96918c0177771bc652204531fe0091' }]],
	            ['Content_3', [{ size: [300, 250], id: '8a9694d00177771bcae220463a710058' }]],
	            [
	                'Footer_1',
	                [
	                    { size: [728, 90], id: '8a9694d00177771bcae21c6a7d880025' },
	                    { size: [970, 90], id: '8a969d580177771bc13c2046cd280081' },
	                    { size: [320, 50], id: '8a9694d00177771bcae2204408520056' },
	                ],
	            ],
	            ['Header_1', [{ size: [728, 90], id: '8a969d580177771bc13c2045cac4007f' }]],
	            [
	                'Interstitial_1',
	                [
	                    { size: [300, 250], id: '8a969449017c7c9d384d9f8170b10066' },
	                    { size: [300, 600], id: '8a969449017c7c9d384d9f80b9970064' },
	                    { size: [320, 480], id: '8a969958017c7c9d2d8a9f812d360081' },
	                    { size: [336, 280], id: '8a969449017c7c9d384d9f80f2a20065' },
	                ],
	            ],
	            ['Sidebar_1', [{ size: [300, 250], id: '8a9694d00177771bcae2204449d80057' }]],
	            [
	                'Sidebar_9',
	                [
	                    { size: [320, 50], id: '8a969d580177771bc13c2045ff6b0080' },
	                    { size: [300, 600], id: '8a96918c0177771bc6522043c8540090' },
	                    { size: [160, 600], id: '8a969d580177771bc13c2044ea91007d' },
	                    { size: [300, 250], id: '8a96918c0177771bc6521c6b5f4e003f' },
	                ],
	            ],
	            ['Recipe_1', [{ size: [300, 250], id: '8a9694d00177771bcae21c6bc7e80027' }]],
	            ['Recipe_2', [{ size: [300, 250], id: '8a969d580177771bc13c2044ac08007c' }]],
	        ]);
	        this._mobileMap = new Map([
	            [
	                'Content_1',
	                [
	                    { size: [300, 250], id: '8a969d580177771bc13c2048bd0e0085' },
	                    { size: [320, 50], id: '8a969d580177771bc13c204b68670088' },
	                ],
	            ],
	            [
	                'Content_2',
	                [
	                    { size: [300, 250], id: '8a96918c0177771bc652204877c50094' },
	                    { size: [320, 50], id: '8a96918c0177771bc652204b257e0097' },
	                ],
	            ],
	            ['Content_3', [{ size: [300, 250], id: '8a96918c0177771bc6522048f24e0095' }]],
	            ['Content_4', [{ size: [300, 250], id: '8a9694d00177771bcae220497831005a' }]],
	            ['Content_5', [{ size: [300, 250], id: '8a969d580177771bc13c204a5f240087' }]],
	            ['Content_6', [{ size: [300, 250], id: '8a9694d00177771bcae2204a9092005c' }]],
	            [
	                'Footer_1',
	                [
	                    { size: [320, 100], id: '8a96918c0177771bc652204a27cb0096' },
	                    { size: [300, 50], id: '8a9694d00177771bcae22049449a0059' },
	                    { size: [728, 90], id: '8a9694d00177771bcae2204ad481005d' },
	                    { size: [320, 50], id: '8a969d580177771bc13c20480cf50084' },
	                ],
	            ],
	            [
	                'Interstitial_1',
	                [
	                    { size: [300, 250], id: '8a969161017c7c9d32879f82491c007d' },
	                    { size: [300, 600], id: '8a969161017c7c9d32879f8195b3007c' },
	                    { size: [320, 480], id: '8a969958017c7c9d2d8a9f81f2c50082' },
	                    { size: [336, 280], id: '8a969449017c7c9d384d9f81c5660067' },
	                    { size: [320, 50], id: '8a969449017c7c9d384d9f8279950068' },
	                ],
	            ],
	            ['Recipe_1', [{ size: [300, 250], id: '8a96918c0177771bc6522048483a0093' }]],
	            ['Recipe_2', [{ size: [300, 250], id: '8a9694d00177771bcae22049e596005b' }]],
	            ['Recipe_3', [{ size: [300, 250], id: '8a969d580177771bc13c2049b47f0086' }]],
	        ]);
	        this._map = isMobile() ? this._mobileMap : this._desktopMap;
	    }
	    get enabled() {
	        return this._config.partners.verizon;
	    }
	    getSlotBidRequests(slot) {
	        if (this._map.has(slot.placementMapName)) {
	            return this._map
	                .get(slot.placementMapName)
	                .filter(({ size }) => slot.hasSize(size))
	                .map(({ id }) => ({
	                bidder: this.name,
	                params: {
	                    ...this._params,
	                    ...(this._config.site.filteredSensitiveCategories.length && {
	                        ext: { sens: this._config.site.filteredSensitiveCategories },
	                    }),
	                    pos: id,
	                },
	            }));
	        }
	    }
	};
	VerizonBidder = __decorate([
	    log('VerizonBidder'),
	    injectable(),
	    __metadata("design:paramtypes", [Config])
	], VerizonBidder);

	let VerizonVideoBidder = class VerizonVideoBidder extends Bidder {
	    constructor(_config) {
	        super();
	        this._config = _config;
	        this.bidderConfig = this._config.partners.getBidderConfig('oneVideo');
	        this.instreamPubId = 'CMIExchange';
	        this.outstreamPubId = 'CafeMediaOS';
	        this._map = new Map([
	            [
	                'Video_StickyOutstream_1',
	                [
	                    { size: [300, 250], id: '1286612' },
	                    { size: [320, 50], id: '1286612' },
	                ],
	            ],
	        ]);
	    }
	    get videoEnabled() {
	        return this._config.partners.video.oneVideo;
	    }
	    get enabled() {
	        return this._config.partners.oneVideo;
	    }
	    getSlotBidRequests(slot) {
	        if (this._map.has(slot.placementMapName)) {
	            return this._map
	                .get(slot.placementMapName)
	                .filter(({ size }) => slot.hasSize(size))
	                .map(({ id }) => ({
	                bidder: this.name,
	                params: {
	                    pubId: this.outstreamPubId,
	                    video: {
	                        inventoryid: id,
	                    },
	                },
	            }));
	        }
	    }
	    getVideoSlotBidRequests(_video) {
	        var _a;
	        return [
	            {
	                bidder: this.name,
	                params: {
	                    pubId: this.instreamPubId,
	                    video: {
	                        playerWidth: _video.size[0],
	                        playerHeight: _video.size[1],
	                        mimes: this._config.video.mimeType,
	                        ...(this._config.video.videoProtocols.scope === 'all' ? { protocols: this._config.video.videoProtocols.protocols } : ''),
	                        api: this._config.video.apiValue,
	                        ...(((_a = this._config.video.playbackmethod) === null || _a === void 0 ? void 0 : _a.get(_video.name)) && {
	                            playbackmethod: this._config.video.playbackmethod.get(_video.name),
	                        }),
	                        position: this._config.video.position,
	                    },
	                },
	            },
	        ];
	    }
	};
	VerizonVideoBidder = __decorate([
	    log('VerizonVideoBidder'),
	    injectable(),
	    __metadata("design:paramtypes", [Config])
	], VerizonVideoBidder);

	let YahooSSPBidder = class YahooSSPBidder extends Bidder {
	    constructor(_config, _prebidMethods) {
	        super();
	        this._config = _config;
	        this._prebidMethods = _prebidMethods;
	        this.bidderConfig = this._config.partners.getBidderConfig('yahoossp');
	        this._params = {
	            display: {
	                dcn: isMobile() ? '8a969d580177771bc13c2047d6290082' : '8a9694d00177771bcae21c6941d30023',
	            },
	            video: {
	                dcn: '8a969469017b7bdf59b2e07862af0281',
	            },
	        };
	        this._videoMap = new Map([
	            [VideoAdUnit.Video_Collapse_Autoplay_SoundOff, '8a96941a017e7e91c49492261bdf000c'],
	            [VideoAdUnit.Video_Coll_SOff_Smartphone, '8a9690ee017e7e91bee0922682f1000b'],
	            [VideoAdUnit.Video_In_Post_ClicktoPlay_SoundOn, '8a969951017e7e91ba38923576c20011'],
	            [VideoAdUnit.Video_Individual_Autoplay_SOff, '8a969951017e7e91ba389236dc470014'],
	        ]);
	        this._displayMap = {
	            desktop: new Map([
	                [
	                    'Content_1',
	                    [
	                        { size: [300, 250], id: '8a969d580177771bc13c20458198007e' },
	                        { size: [728, 90], id: '8a96918c0177771bc65220467ff60092' },
	                    ],
	                ],
	                ['Content_2', [{ size: [300, 250], id: '8a96918c0177771bc652204531fe0091' }]],
	                ['Content_3', [{ size: [300, 250], id: '8a9694d00177771bcae220463a710058' }]],
	                [
	                    'Footer_1',
	                    [
	                        { size: [728, 90], id: '8a9694d00177771bcae21c6a7d880025' },
	                        { size: [970, 90], id: '8a969d580177771bc13c2046cd280081' },
	                        { size: [320, 50], id: '8a9694d00177771bcae2204408520056' },
	                    ],
	                ],
	                ['Header_1', [{ size: [728, 90], id: '8a969d580177771bc13c2045cac4007f' }]],
	                [
	                    'Interstitial_1',
	                    [
	                        { size: [300, 250], id: '8a969449017c7c9d384d9f8170b10066' },
	                        { size: [300, 600], id: '8a969449017c7c9d384d9f80b9970064' },
	                        { size: [320, 480], id: '8a969958017c7c9d2d8a9f812d360081' },
	                        { size: [336, 280], id: '8a969449017c7c9d384d9f80f2a20065' },
	                    ],
	                ],
	                ['Sidebar_1', [{ size: [300, 250], id: '8a9694d00177771bcae2204449d80057' }]],
	                [
	                    'Sidebar_9',
	                    [
	                        { size: [320, 50], id: '8a969d580177771bc13c2045ff6b0080' },
	                        { size: [300, 600], id: '8a96918c0177771bc6522043c8540090' },
	                        { size: [160, 600], id: '8a969d580177771bc13c2044ea91007d' },
	                        { size: [300, 250], id: '8a96918c0177771bc6521c6b5f4e003f' },
	                    ],
	                ],
	                ['Recipe_1', [{ size: [300, 250], id: '8a9694d00177771bcae21c6bc7e80027' }]],
	                ['Recipe_2', [{ size: [300, 250], id: '8a969d580177771bc13c2044ac08007c' }]],
	                ['Video_StickyOutstream_1', [{ size: [300, 250], id: '8a969d87017b7be074aae07a22b70005' }]],
	            ]),
	            mobile: new Map([
	                [
	                    'Content_1',
	                    [
	                        { size: [300, 250], id: '8a969d580177771bc13c2048bd0e0085' },
	                        { size: [320, 50], id: '8a969d580177771bc13c204b68670088' },
	                    ],
	                ],
	                [
	                    'Content_2',
	                    [
	                        { size: [300, 250], id: '8a96918c0177771bc652204877c50094' },
	                        { size: [320, 50], id: '8a96918c0177771bc652204b257e0097' },
	                    ],
	                ],
	                ['Content_3', [{ size: [300, 250], id: '8a96918c0177771bc6522048f24e0095' }]],
	                ['Content_4', [{ size: [300, 250], id: '8a9694d00177771bcae220497831005a' }]],
	                ['Content_5', [{ size: [300, 250], id: '8a969d580177771bc13c204a5f240087' }]],
	                ['Content_6', [{ size: [300, 250], id: '8a9694d00177771bcae2204a9092005c' }]],
	                [
	                    'Footer_1',
	                    [
	                        { size: [320, 100], id: '8a96918c0177771bc652204a27cb0096' },
	                        { size: [300, 50], id: '8a9694d00177771bcae22049449a0059' },
	                        { size: [728, 90], id: '8a9694d00177771bcae2204ad481005d' },
	                        { size: [320, 50], id: '8a969d580177771bc13c20480cf50084' },
	                    ],
	                ],
	                [
	                    'Interstitial_1',
	                    [
	                        { size: [300, 250], id: '8a969161017c7c9d32879f82491c007d' },
	                        { size: [300, 600], id: '8a969161017c7c9d32879f8195b3007c' },
	                        { size: [320, 480], id: '8a969958017c7c9d2d8a9f81f2c50082' },
	                        { size: [336, 280], id: '8a969449017c7c9d384d9f81c5660067' },
	                        { size: [320, 50], id: '8a969449017c7c9d384d9f8279950068' },
	                    ],
	                ],
	                ['Recipe_1', [{ size: [300, 250], id: '8a96918c0177771bc6522048483a0093' }]],
	                ['Recipe_2', [{ size: [300, 250], id: '8a9694d00177771bcae22049e596005b' }]],
	                ['Recipe_3', [{ size: [300, 250], id: '8a969d580177771bc13c2049b47f0086' }]],
	                ['Video_StickyOutstream_1', [{ size: [300, 50], id: '8a969d87017b7be074aae07a22b70005' }]],
	            ]),
	        };
	        this._setYahooMediaConfig();
	        const displayMap = this._displayMap;
	        this._map = isMobile() ? displayMap.mobile : displayMap.desktop;
	    }
	    get enabled() {
	        return this._config.partners.yahoossp;
	    }
	    get videoEnabled() {
	        return this._config.partners.video.yahoossp;
	    }
	    getSlotBidRequests(slot) {
	        if (this._map.has(slot.placementMapName)) {
	            return this._map
	                .get(slot.placementMapName)
	                .filter(({ size }) => slot.hasSize(size))
	                .map(({ id }) => ({
	                bidder: this.name,
	                params: {
	                    ...(slot.location !== 'Video_StickyOutstream' ? this._params.display : this._params.video),
	                    pos: id,
	                },
	            }));
	        }
	    }
	    getVideoSlotBidRequests(_video) {
	        if (this._videoMap.has(_video.name)) {
	            return [
	                {
	                    bidder: this.name,
	                    params: {
	                        ...this._params.video,
	                        pos: this._videoMap.get(_video.name),
	                    },
	                },
	            ];
	        }
	    }
	    _setYahooMediaConfig() {
	        this._prebidMethods.setConfig({
	            yahoossp: {
	                mode: 'all',
	            },
	        });
	    }
	};
	YahooSSPBidder = __decorate([
	    log('YahooSSPBidder'),
	    injectable(),
	    __metadata("design:paramtypes", [Config, PrebidMethods])
	], YahooSSPBidder);

	let YieldmoBidder = class YieldmoBidder extends Bidder {
	    constructor(_config, _mediaType) {
	        super();
	        this._config = _config;
	        this._mediaType = _mediaType;
	        this.bidderConfig = this._config.partners.getBidderConfig('yieldmo');
	        this.settings = {
	            adserverTargeting: [
	                {
	                    key: 'hb_format',
	                    val: bidResponse => {
	                        return this._creativeFormatMap.get(this.getCreativeFormatId(bidResponse.ad)) || bidResponse.mediaType;
	                    },
	                },
	            ],
	        };
	        this._creativeFormatMap = new Map([
	            ['44', 'banner'],
	            ['47', 'banner'],
	            ['49', 'banner'],
	            ['50', 'banner'],
	            ['43', 'banner'],
	            ['17', 'banner'],
	            ['23', 'banner'],
	            ['33', 'banner'],
	            ['40', 'outstream'],
	            ['51', 'outstream'],
	            ['48', 'outstream'],
	            ['34', 'outstream'],
	            ['14', 'miniscroller'],
	            ['16', 'miniscroller'],
	            ['37', 'miniscroller'],
	            ['15', 'miniscroller'],
	            ['18', 'native'],
	            ['36', 'native'],
	            ['46', 'native'],
	            ['10', 'native'],
	            ['6', 'native'],
	        ]);
	        this._adOptionsMap = new Map([
	            ['100000', { id: '2626064683911553041', isOutstream: false }],
	            ['110000', { id: '2626064684062547986', isOutstream: true }],
	            ['111000', { id: '2626064684196765715', isOutstream: true }],
	            ['110100', { id: '2626064684339372052', isOutstream: true }],
	            ['110010', { id: '2626064684498755605', isOutstream: true }],
	            ['111100', { id: '2626064684632973334', isOutstream: true }],
	            ['111010', { id: '2626064684775579671', isOutstream: true }],
	            ['111110', { id: '2626064684934963224', isOutstream: true }],
	            ['101000', { id: '2626064685069180953', isOutstream: false }],
	            ['101100', { id: '2626064685203398682', isOutstream: false }],
	            ['101010', { id: '2626064685337616411', isOutstream: true }],
	            ['101110', { id: '2626064685471834140', isOutstream: true }],
	            ['100100', { id: '2626064685606051869', isOutstream: false }],
	            ['100110', { id: '2626064685740269598', isOutstream: true }],
	            ['100010', { id: '2626064685882875935', isOutstream: true }],
	            ['110110', { id: '2626807131797397582', isOutstream: true }],
	            ['110001', { id: '2820437600580345895', isOutstream: true }],
	        ]);
	        this._bannerMap = [
	            'Below_Post_1',
	            'Content',
	            'Content_1',
	            'Content_2',
	            'Content_3',
	            'Content_4',
	            'Content_5',
	            'Content_6',
	            'Content_7',
	            'Content_8',
	            'Content_9',
	            'Footer_1',
	            'Header_1',
	            'Header_2',
	            'Recipe_1',
	            'Recipe_2',
	            'Recipe_3',
	            'Recipe_4',
	            'Recipe_5',
	            'Sidebar_1',
	            'Sidebar_2',
	            'Sidebar_3',
	            'Sidebar_4',
	            'Sidebar_5',
	            'Sidebar_9',
	            'Video_StickyOutstream_1',
	        ];
	    }
	    getCreativeFormatId(ad) {
	        const matches = /creative_format_id":([0-9]*)/.exec(ad);
	        if (matches !== null) {
	            return matches[1];
	        }
	    }
	    get enabled() {
	        return this._config.partners.yieldmo;
	    }
	    isMiniScroller(slot) {
	        return slot.sequence && this._config.adTypes.has('miniscroller') && (slot.location === 'Content' || slot.location === 'Recipe');
	    }
	    isNative(slot) {
	        const deviceAdTypes = {
	            mobile: new Map([
	                ['Content', 'nativeMobileContent'],
	                ['Recipe', 'nativeMobileRecipe'],
	            ]),
	            desktop: new Map([
	                ['Content', 'nativeDesktopContent'],
	                ['Recipe', 'nativeDesktopRecipe'],
	                ['Sidebar', 'nativeDesktopSidebar'],
	            ]),
	        };
	        const nativeAdTypes = isMobile() ? deviceAdTypes.mobile : deviceAdTypes.desktop;
	        return slot.sequence && nativeAdTypes.has(slot.location) && this._config.adTypes.has(nativeAdTypes.get(slot.location));
	    }
	    isOutstream(slot) {
	        return this._mediaType.outstreamEnabled(slot).currentlyActive;
	    }
	    isStickyOutstream(slot) {
	        return slot.location === 'Video_StickyOutstream';
	    }
	    isMobileOustreamSingleInstance(slot) {
	        return (isMobile() &&
	            slot.placementMapName === 'Content_1' &&
	            this._mediaType.outstreamEnabled(slot).currentlyActive &&
	            this._config.adTypes.has('outstreamMobile') &&
	            !this._config.video.mobileStickyPlayerOnPage);
	    }
	    updateBidParams(slot, _adUnit, bid) {
	        if (slot.refreshCount === 1) {
	            const bitStringAdOptions = this.createBitStringAdOptions(slot);
	            const placementObject = this._adOptionsMap.get(bitStringAdOptions);
	            if (this._adOptionsMap.has(bitStringAdOptions)) {
	                bid.params.placementId = placementObject.id;
	                const existingLabels = bid.labelAny || [];
	                const label = `outstreamEnabled_${slot.placementMapName}`;
	                if (existingLabels.indexOf(label) === -1 && placementObject.isOutstream) {
	                    existingLabels.push(label);
	                    bid.labelAny = existingLabels;
	                }
	            }
	        }
	        return bid;
	    }
	    createBitStringAdOptions(slot) {
	        let bitStringAdOptions = this._bannerMap.indexOf(slot.placementMapName) !== -1 ? '1' : '0';
	        bitStringAdOptions += this.isOutstream(slot) ? '1' : '0';
	        bitStringAdOptions += this.isMiniScroller(slot) ? '1' : '0';
	        bitStringAdOptions += this.isNative(slot) ? '1' : '0';
	        bitStringAdOptions += this.isMobileOustreamSingleInstance(slot) ? '1' : '0';
	        bitStringAdOptions += this.isStickyOutstream(slot) ? '1' : '0';
	        return bitStringAdOptions;
	    }
	    getSlotBidRequests(slot) {
	        const bitStringAdOptions = this.createBitStringAdOptions(slot);
	        if (this._adOptionsMap.has(bitStringAdOptions)) {
	            const placementObject = this._adOptionsMap.get(bitStringAdOptions);
	            return [
	                {
	                    bidder: this.name,
	                    ...this.getLabels(placementObject.isOutstream, slot.placementMapName),
	                    params: {
	                        placementId: placementObject.id,
	                        ...(slot.location === 'Video_StickyOutstream' && {
	                            video: {
	                                placement: 2,
	                            },
	                        }),
	                    },
	                },
	            ];
	        }
	    }
	    getLabels(isOutstream, placementMapName) {
	        const labels = [];
	        if (isOutstream) {
	            labels.push(`outstreamEnabled_${placementMapName}`);
	        }
	        return labels.length ? { labelAny: labels } : {};
	    }
	};
	YieldmoBidder = __decorate([
	    log('YieldmoBidder'),
	    injectable(),
	    __metadata("design:paramtypes", [Config, MediaType])
	], YieldmoBidder);

	let BidderSetup = class BidderSetup {
	    constructor(_config, appNexusBidder, brightRollBidder, concertBidder, conversantBidder, criteoBidder, deepIntentBidder, districtMBidder, districtMDMXBidder, districtMDMXVideoBidder, mediaGridVideoBidder, gumGumBidder, indexExchangeBidder, kargoBidder, mediaGridBidder, openXBidder, pubMaticBidder, roundelBidder, rubiconBidder, nativoBidder, sharethroughBidder, spotxBidder, teadsBidder, telariaBidder, thirtyThreeAcrossBidder, tripleLiftBidder, ttdBidder, undertoneBidder, unrulyBidder, verizonBidder, yahooSSPBidder, verizonVideoBidder, yieldmoBidder) {
	        this._config = _config;
	        this._biddersParams = new Map();
	        this._orderedDisplayBidders = [
	            tripleLiftBidder,
	            indexExchangeBidder,
	            teadsBidder,
	            verizonBidder,
	            yahooSSPBidder,
	            appNexusBidder,
	            rubiconBidder,
	            pubMaticBidder,
	            criteoBidder,
	            openXBidder,
	            sharethroughBidder,
	            kargoBidder,
	            brightRollBidder,
	            conversantBidder,
	            ttdBidder,
	            districtMBidder,
	            districtMDMXBidder,
	            mediaGridBidder,
	            unrulyBidder,
	            gumGumBidder,
	            undertoneBidder,
	            roundelBidder,
	            thirtyThreeAcrossBidder,
	            yieldmoBidder,
	            deepIntentBidder,
	            concertBidder,
	            nativoBidder,
	            verizonVideoBidder,
	        ].filter(bidder => this._bidderFilter(bidder));
	        this._orderedVideoBidders = [
	            appNexusBidder,
	            verizonVideoBidder,
	            yahooSSPBidder,
	            conversantBidder,
	            districtMBidder,
	            districtMDMXVideoBidder,
	            gumGumBidder,
	            sharethroughBidder,
	            mediaGridVideoBidder,
	            indexExchangeBidder,
	            openXBidder,
	            roundelBidder,
	            rubiconBidder,
	            ttdBidder,
	            pubMaticBidder,
	            criteoBidder,
	            spotxBidder,
	            telariaBidder,
	            tripleLiftBidder,
	        ].filter(bidder => this._bidderFilter(bidder, true));
	    }
	    get orderedDisplayBidders() {
	        return this._orderedDisplayBidders;
	    }
	    get orderedVideoBidders() {
	        return this._orderedVideoBidders;
	    }
	    get biddersParams() {
	        return this._biddersParams;
	    }
	    _bidderFilter(bidder, isVideo = false) {
	        const config = this._config;
	        const bidderName = bidder.name;
	        const holdout = isVideo ? config.vbho.bidders : config.hbho.bidders;
	        const enabled = isVideo ? 'videoEnabled' : 'enabled';
	        const canUpdateBidParams = isVideo || !bidder.updateBidParams;
	        return (bidder[enabled] &&
	            this._holdoutValidation(holdout, bidderName) &&
	            this._ccpaValidation(config.ccpa, bidderName) &&
	            this._gdprValidation(config.gdpr, bidderName) &&
	            (canUpdateBidParams || this._biddersParams.set(bidderName, bidder)));
	    }
	    _holdoutValidation(holdout, bidderName) {
	        return !holdout.length || holdout.indexOf(bidderName) === -1;
	    }
	    _ccpaValidation(ccpa, bidderName) {
	        return !ccpa.enabled || ccpa.nonCompliantBidders.indexOf(bidderName) === -1;
	    }
	    _gdprValidation(gdpr, bidderName) {
	        return !gdpr.enabled || gdpr.nonCompliantBidders.indexOf(bidderName) === -1;
	    }
	};
	BidderSetup = __decorate([
	    singleton(),
	    __metadata("design:paramtypes", [Config, AppNexusBidder, BrightRollBidder, ConcertBidder, ConversantBidder, CriteoBidder, DeepIntentBidder, DistrictMBidder, DistrictMDMXBidder, DistrictMDMXVideoBidder, MediaGridVideoBidder, GumGumBidder, IndexExchangeBidder, KargoBidder, MediaGridBidder, OpenXBidder, PubMaticBidder, RoundelBidder, RubiconBidder, NativoBidder, SharethroughBidder, SpotXBidder, TeadsBidder, TelariaBidder, ThirtyThreeAcrossBidder, TripleLiftBidder, TTDBidder, UndertoneBidder, UnrulyBidder, VerizonBidder, YahooSSPBidder, VerizonVideoBidder, YieldmoBidder])
	], BidderSetup);

	let CreativeMonitoringExperiment = class CreativeMonitoringExperiment extends Experiment {
	    constructor(abgroup) {
	        super();
	        this.key = 'crtvmon';
	        this._choices = [{ choice: true }, { choice: false }];
	        this._result = this.run();
	        abgroup.set(this.key, this._result ? 'on' : 'off');
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new BernoulliTrial(0.1).get();
	    }
	};
	CreativeMonitoringExperiment = __decorate([
	    log('CreativeMonitoringExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup])
	], CreativeMonitoringExperiment);

	let CreativeMonitoring = class CreativeMonitoring {
	    constructor(_config, _gam, _prebidMethods, _creativeMonitoringExperiment) {
	        this._config = _config;
	        this._gam = _gam;
	        this._prebidMethods = _prebidMethods;
	        this._creativeMonitoringExperiment = _creativeMonitoringExperiment;
	        this._auctionData = new Set();
	        this._prebidAdvertiserId = 413678576;
	    }
	    setupCreativeEventListeners() {
	        this._prebidMethods.onEvent('auctionInit', this._storeAuctionData.bind(this));
	        this._prebidMethods.onEvent('adRenderFailed', this._renderFailedHandler.bind(this));
	        this._prebidMethods.onEvent('adRenderSucceeded', this._renderSucceededHandler.bind(this));
	        this._prebidMethods.onEvent('staleRender', this._staleRenderHandler.bind(this));
	        if (this._creativeMonitoringExperiment.result) {
	            this._gam.slotRenderEnded.on(this._checkSlotRender.bind(this));
	        }
	    }
	    _storeAuctionData(auctionData) {
	        auctionData.adUnitCodes.forEach(code => this._auctionData.add(`${auctionData.auctionId}-${code}`));
	    }
	    _deleteStoredAuction(auctionId, code) {
	        this._auctionData.delete(`${auctionId}-${code}`);
	    }
	    _renderFailedHandler(renderFailData) {
	        const bid = renderFailData.bid;
	        if (bid)
	            this._deleteStoredAuction(bid.auctionId, bid.adUnitCode);
	        const logData = {
	            message: renderFailData.message,
	            reason: renderFailData.reason,
	        };
	        if (bid && bid.meta && Object.keys(bid.meta).length > 0) {
	            logData.buyerInformation = bid.meta;
	        }
	        else {
	            logData.markup = bid && bid.ad;
	        }
	        logger.error('PrebidAuctionManager', 'init', 'adRenderFailed', logData);
	    }
	    _staleRenderHandler(prebidBidResponse) {
	        if (prebidBidResponse)
	            this._deleteStoredAuction(prebidBidResponse.auctionId, prebidBidResponse.adUnitCode);
	    }
	    _renderSucceededHandler(renderSuccessData) {
	        const bid = renderSuccessData.bid;
	        if (bid)
	            this._deleteStoredAuction(bid.auctionId, bid.adUnitCode);
	    }
	    _isSafeFrame(slot) {
	        const frame = slot.element.querySelector('iframe');
	        return !!(frame && frame.src);
	    }
	    _checkSlotRender(slotRenderData) {
	        const gam = slotRenderData.event;
	        if (this._isSafeFrame(slotRenderData.slot) || gam.advertiserId !== this._prebidAdvertiserId)
	            return;
	        setTimeout(() => {
	            this._logUnknownFailure(slotRenderData);
	        }, 2000);
	    }
	    _getHeightWidth(sizes) {
	        if (!sizes)
	            return {};
	        const sizeArray = sizes.split('x').map(Number);
	        return {
	            ...(Array.isArray(sizeArray) && sizeArray.length === 2 && { height: sizeArray[1], width: sizeArray[0] }),
	        };
	    }
	    _getPrebidCreativeWindowData(win) {
	        return { adId: win.bidderAdId, bidder: win.bidder, size: win.bidderSize, adserverTargeting: win.targeting };
	    }
	    _getPrebidBidderData(slot) {
	        const iframe = slot.element.querySelector('iframe');
	        const win = iframe.contentWindow;
	        if (!win)
	            return {};
	        const { adId, adserverTargeting, bidder, size } = this._getPrebidCreativeWindowData(win);
	        const { height, width } = this._getHeightWidth(win && win.bidderSize);
	        return {
	            adId,
	            adserverTargeting,
	            adUnitCode: slot.id,
	            bidder,
	            height,
	            size,
	            width,
	        };
	    }
	    _logUnknownFailure(slotRenderData) {
	        const context = this._config.context;
	        const slotData = slotRenderData.slot;
	        const gam = slotRenderData.event;
	        const { adId, adserverTargeting, auctionId, adUnitCode, bidder, height, meta, size, width } = slotData.servedPrebidBidResponse || this._getPrebidBidderData(slotData);
	        if (auctionId && adUnitCode && !this._auctionData.has(`${auctionId}-${adUnitCode}`))
	            return;
	        const creativeFailureData = {
	            adId,
	            advertiserDomains: (meta && meta.advertiserDomains) || (adserverTargeting && adserverTargeting['hb_adomain']),
	            bidderSize: size || (adserverTargeting && adserverTargeting['hb_size']),
	            bidder,
	            branch: context.branch,
	            bucket: context.bucket,
	            campaignId: gam.campaignId,
	            creativeId: gam.creativeId || gam.sourceAgnosticCreativeId,
	            lineItemId: gam.lineItemId || gam.sourceAgnosticLineItemId,
	            message: 'An unknown error occurred rendering the Prebid creative',
	            slotSizes: slotData.sizes,
	            slot: slotData.location,
	            ...(width && height && { size: [width, height] }),
	            ...(meta && ((meta.dchain && { dchain: meta.dchain }) || (meta.networkId && { networkId: meta.networkId }))),
	            ...((!adId || adId.length < 2) && adserverTargeting && { hbAdId: adserverTargeting['hb_adid'] }),
	        };
	        logger.error('PrebidAuctionManager', 'init', 'prebidCreativeFailure', creativeFailureData);
	        if (auctionId && adUnitCode)
	            this._deleteStoredAuction(auctionId, adUnitCode);
	    }
	};
	CreativeMonitoring = __decorate([
	    singleton(),
	    __metadata("design:paramtypes", [Config,
	        GoogleAdManager,
	        PrebidMethods,
	        CreativeMonitoringExperiment])
	], CreativeMonitoring);

	let JwBoostExperiment = class JwBoostExperiment extends Experiment {
	    constructor(abgroup) {
	        super();
	        this.key = 'jwb';
	        this._choices = [{ choice: true }, { choice: false }];
	        this._result = this.run();
	        abgroup.set(this.key, this._result ? 'on' : 'off');
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new BernoulliTrial(0.95).get();
	    }
	};
	__decorate([
	    sticky(),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", []),
	    __metadata("design:returntype", void 0)
	], JwBoostExperiment.prototype, "run", null);
	JwBoostExperiment = __decorate([
	    log('JwBoostExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup])
	], JwBoostExperiment);

	let Ortb2 = class Ortb2 {
	    constructor(_config, _prebidMethods, _jwBoostExperiment) {
	        this._config = _config;
	        this._prebidMethods = _prebidMethods;
	        this._jwBoostExperiment = _jwBoostExperiment;
	        this._data = {};
	        this._highViewabilityThreshold = 0.6;
	        this._staticFirstPartyData = {
	            mcmp: this._config.marmalade.mcmp.filter(filterUnique),
	            site_code: this._config.marmalade.siteCodes.filter(filterUnique),
	            site_id: [this._config.site.id],
	            sens: this._config.site.sensitiveCategories,
	            verticals: this._config.site.verticals,
	            pmp_elig: [this._config.adOptions.pmp],
	        };
	        this._userSegments = this._config.marmalade.ortbSegments.get('iaba') || [];
	        this._siteSegments = this._config.marmalade.ortbSegments.get('iabc') || [];
	        this._data = {
	            ...(this._userSegments.length && {
	                user: {
	                    data: this.buildSegmentData(this._userSegments, 4),
	                },
	            }),
	            ...(this._siteSegments.length && {
	                site: {
	                    content: {
	                        data: this.buildSegmentData(this._siteSegments, 6),
	                    },
	                },
	            }),
	        };
	    }
	    get data() {
	        return this._data;
	    }
	    buildSegmentData(data, segtaxId, name = 'cafemedia.com') {
	        return [
	            {
	                name,
	                segment: data,
	                ext: {
	                    segtax: segtaxId,
	                },
	            },
	        ];
	    }
	    buildSegmentDataFromArray(contextualData, segtaxId, name) {
	        return this.buildSegmentData(contextualData.map((segmentId) => {
	            return { id: segmentId };
	        }), segtaxId, name);
	    }
	    setOrtb2Imp(impData, ortb2Imp, isExtData = true) {
	        if (!ortb2Imp)
	            return;
	        for (const key of Object.keys(impData)) {
	            const setExtData = isExtData && ortb2Imp.ext && ortb2Imp.ext.data;
	            setExtData ? (ortb2Imp.ext.data[key] = impData[key]) : (ortb2Imp[key] = impData[key]);
	        }
	    }
	    _setVideoOrtb2ImpData(ortb2Imp, video) {
	        this.setOrtb2Imp({
	            adserver: {
	                name: 'gam',
	                adslot: `/${this._config.gam.account}/${this._config.gam.prefix}_${video.name}/${this._config.site.id}`,
	            },
	        }, ortb2Imp);
	        if (this._jwBoostExperiment.result) {
	            this.setOrtb2Imp({ jwTargeting: video.getJwBoostTargeting() }, ortb2Imp);
	        }
	    }
	    addOrtb2Imp(slotRequest, interstitialEnabled = false) {
	        const { slot, video } = slotRequest;
	        const ortb2Imp = { ext: { data: {} } };
	        if (slot && isHighlyViewableSlot(slot, this._config.marmalade.hvThreshold)) {
	            this.setOrtb2Imp({ pos: 'atf' }, ortb2Imp);
	        }
	        if (video) {
	            this._setVideoOrtb2ImpData(ortb2Imp, video);
	        }
	        if (slot && interstitialEnabled) {
	            this.setOrtb2Imp({ instl: 1 }, ortb2Imp);
	        }
	        return ortb2Imp;
	    }
	};
	Ortb2 = __decorate([
	    injectable(),
	    __metadata("design:paramtypes", [Config, PrebidMethods, JwBoostExperiment])
	], Ortb2);

	let BidLimitExperiment = class BidLimitExperiment extends Experiment {
	    constructor(abgroup) {
	        super();
	        this.key = 'sab';
	        this._choices = [{ choice: true }, { choice: false }];
	        this._result = this.run();
	        abgroup.set(this.key, this._result ? 'on' : 'off');
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new BernoulliTrial(1).get();
	    }
	};
	BidLimitExperiment = __decorate([
	    log('BidLimitExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup])
	], BidLimitExperiment);

	let MaxRequestsExperiment = class MaxRequestsExperiment extends Experiment {
	    constructor(abgroup) {
	        super();
	        this.key = 'mxrpog';
	        this._choices = [
	            { choice: 4, weight: 50 },
	            { choice: 5, weight: 20 },
	            { choice: 6, weight: 20 },
	            { choice: 7, weight: 10 },
	        ];
	        this._result = this.run();
	        abgroup.set(this.key, String(this._result));
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new WeightedChoice(this._choices).get();
	    }
	};
	__decorate([
	    sticky(),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", []),
	    __metadata("design:returntype", void 0)
	], MaxRequestsExperiment.prototype, "run", null);
	MaxRequestsExperiment = __decorate([
	    log('MaxRequestsExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup])
	], MaxRequestsExperiment);

	let DisableAjaxTimeoutExperiment = class DisableAjaxTimeoutExperiment extends Experiment {
	    constructor(abgroup) {
	        super();
	        this.key = 'dajto';
	        this._choices = [{ choice: true }, { choice: false }];
	        this._result = this.run();
	        abgroup.set(this.key, this._result ? 'on' : 'off');
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new BernoulliTrial(0.1).get();
	    }
	};
	DisableAjaxTimeoutExperiment = __decorate([
	    log('DisableAjaxTimeoutExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup])
	], DisableAjaxTimeoutExperiment);

	const priceGranularity = {
	    buckets: [
	        {
	            precision: 2,
	            max: 0.1,
	            increment: 0.01,
	        },
	        {
	            precision: 2,
	            max: 5,
	            increment: 0.05,
	        },
	        {
	            precision: 2,
	            max: 20,
	            increment: 0.1,
	        },
	        {
	            precision: 2,
	            max: 100,
	            increment: 0.5,
	        },
	    ],
	};

	let StandardPrebidBidderSetting = class StandardPrebidBidderSetting {
	    constructor(_config) {
	        this._config = _config;
	        this._configuration = {
	            suppressEmptyKeys: true,
	            adserverTargeting: [
	                {
	                    key: 'hb_bidder',
	                    val: bidResponse => bidResponse.bidderCode,
	                },
	                {
	                    key: 'hb_adid',
	                    val: bidResponse => bidResponse.adId,
	                },
	                {
	                    key: 'hb_pb',
	                    val: bidResponse => bidResponse.pbCg,
	                },
	                {
	                    key: 'hb_size',
	                    val: bidResponse => (this._config.video.instreamAdUnits.has(bidResponse.adUnitCode) ? '' : bidResponse.size),
	                },
	                {
	                    key: 'hb_deal',
	                    val: bidResponse => bidResponse.dealId,
	                },
	                {
	                    key: 'hb_format',
	                    val: bidResponse => bidResponse.mediaType,
	                },
	                {
	                    key: 'hb_adomain',
	                    val: bidResponse => { var _a, _b; return (((_a = bidResponse.meta) === null || _a === void 0 ? void 0 : _a.advertiserDomains) ? (_b = bidResponse.meta) === null || _b === void 0 ? void 0 : _b.advertiserDomains[0] : ''); },
	                },
	            ],
	        };
	    }
	    get configuration() {
	        return this._configuration;
	    }
	};
	StandardPrebidBidderSetting = __decorate([
	    singleton(),
	    __metadata("design:paramtypes", [Config])
	], StandardPrebidBidderSetting);

	let PrebidConfiguration = class PrebidConfiguration {
	    constructor(_config, _prebidMethods, _bidLimitExperiment, _maxRequestsExperiment, _disableAjaxTimeoutExperiment, _ortb2, _standardPrebidBidderSetting) {
	        this._config = _config;
	        this._prebidMethods = _prebidMethods;
	        this._bidLimitExperiment = _bidLimitExperiment;
	        this._maxRequestsExperiment = _maxRequestsExperiment;
	        this._disableAjaxTimeoutExperiment = _disableAjaxTimeoutExperiment;
	        this._ortb2 = _ortb2;
	        this._standardPrebidBidderSetting = _standardPrebidBidderSetting;
	        this._uspConfig = {
	            usp: {
	                cmpApi: 'iab',
	                timeout: 0,
	            },
	        };
	        this._gdprConfig = {
	            gdpr: {
	                cmpApi: 'iab',
	                timeout: 10000,
	                defaultGdprScope: true,
	                rules: [
	                    {
	                        purpose: 'storage',
	                        enforcePurpose: true,
	                        enforceVendor: true,
	                    },
	                    {
	                        purpose: 'basicAds',
	                        enforcePurpose: true,
	                        enforceVendor: true,
	                    },
	                    {
	                        purpose: 'measurement',
	                        enforcePurpose: true,
	                        enforceVendor: true,
	                    },
	                ],
	            },
	        };
	        this._defaultConfig = {
	            maxRequestsPerOrigin: this._maxRequestsExperiment.result,
	            auctionOptions: {
	                secondaryBidders: this._config.auctionOptions.bidders,
	            },
	            bidderSequence: 'fixed',
	            ...(this._bidLimitExperiment.result && {
	                sendBidsControl: {
	                    bidLimit: 3,
	                },
	            }),
	            useBidCache: true,
	            enableSendAllBids: this._bidLimitExperiment.result,
	            disableAjaxTimeout: this._disableAjaxTimeoutExperiment.result,
	            userSync: {
	                syncsPerBidder: 1,
	                aliasSyncEnabled: true,
	                enableOverride: true,
	                filterSettings: {
	                    iframe: {
	                        bidders: '*',
	                        filter: 'include',
	                    },
	                },
	            },
	            gptPreAuction: {
	                mcmEnabled: true,
	            },
	            priceGranularity,
	            cache: {
	                url: 'https://prebid.adnxs.com/pbc/v1/cache',
	            },
	            consentManagement: {},
	            targetingControls: {
	                allowTargetingKeys: this._config.prebid.targetingKeys,
	                allowSendAllBidsTargetingKeys: this._config.prebid.sendAllBidsTargetingKeys,
	            },
	            schain: {
	                validation: 'strict',
	                config: new SupplyChain().getSupplyChainConfig(this._config.site.id),
	            },
	            ortb2: this._ortb2.data,
	        };
	    }
	    setDefaultConfig() {
	        const consentConfig = this.addPrebidConsent();
	        const defaultConfiguration = this._defaultConfig;
	        defaultConfiguration.consentManagement = consentConfig;
	        this._prebidMethods.setConfig(defaultConfiguration);
	    }
	    applyClientAndServerBidderSettings(bidders) {
	        this._prebidMethods.setBidderSettings(bidders.reduce((bidderSettings, bidder) => this._setupBidderSettings(bidderSettings, bidder), {
	            standard: this._standardPrebidBidderSetting.configuration,
	        }));
	    }
	    aliasBidders(bidders) {
	        bidders.forEach(bidder => {
	            if (!bidder.adapterName)
	                return;
	            if (bidder.adapterName !== bidder.name) {
	                this._prebidMethods.setAliasBidder(bidder.adapterName, bidder.name);
	            }
	            if (bidder.serverBidderName) {
	                this._prebidMethods.setAliasBidder(bidder.adapterName, bidder.serverBidderName);
	            }
	        });
	    }
	    _setupBidderSettings(bidderSettings, bidder) {
	        bidderSettings[bidder.name] = this.getBidderSettings(bidder, bidder.name);
	        if (bidder.serverBidderName) {
	            bidderSettings[bidder.serverBidderName] = this.getBidderSettings(bidder, bidder.serverBidderName);
	        }
	        if (bidderSettings.standard.adserverTargeting && bidder.adServerTargeting) {
	            bidderSettings.standard.adserverTargeting.push(...bidder.adServerTargeting);
	        }
	        return bidderSettings;
	    }
	    addPrebidConsent() {
	        return this._config.gdpr.enabled === true ? this._gdprConfig : this._uspConfig;
	    }
	    getBidderSettings(bidder, bidderName) {
	        return {
	            bidCpmAdjustment: (bidCpm, bidResponse) => adjustCpmFromBidResponse(this._config, bidCpm, bidderName, bidResponse),
	            ...bidder.settings,
	        };
	    }
	};
	PrebidConfiguration = __decorate([
	    singleton(),
	    __metadata("design:paramtypes", [Config,
	        PrebidMethods,
	        BidLimitExperiment,
	        MaxRequestsExperiment,
	        DisableAjaxTimeoutExperiment,
	        Ortb2,
	        StandardPrebidBidderSetting])
	], PrebidConfiguration);

	let PredictiveAnalysisExperiment = class PredictiveAnalysisExperiment extends Experiment {
	    constructor(abgroup) {
	        super();
	        this.key = 'vpred';
	        this._choices = [{ choice: true }, { choice: false }];
	        this._result = this.run();
	        abgroup.set(this.key, this._result ? 'on' : 'off');
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new BernoulliTrial(0.99).get();
	    }
	};
	__decorate([
	    sticky(),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", []),
	    __metadata("design:returntype", void 0)
	], PredictiveAnalysisExperiment.prototype, "run", null);
	PredictiveAnalysisExperiment = __decorate([
	    log('PredictiveAnalysisExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup])
	], PredictiveAnalysisExperiment);

	let S2S = class S2S {
	    constructor(_config, _prebidMethods) {
	        this._config = _config;
	        this._prebidMethods = _prebidMethods;
	        this._s2sConfig = [
	            {
	                accountId: '9262',
	                enabled: true,
	                bidders: this._config.prebid.s2s.bidders,
	                defaultTtl: 300,
	                timeout: this._config.timeouts.initialBidsRequest - 200,
	                adapter: 'prebidServer',
	                endpoint: {
	                    p1Consent: 'https://prebid-server.rubiconproject.com/openrtb2/auction',
	                    noP1Consent: 'https://prebid-server.rubiconproject.com/openrtb2/auction',
	                },
	                syncEndpoint: {
	                    p1Consent: 'https://prebid-server.rubiconproject.com/cookie_sync',
	                    noP1Consent: 'https://prebid-server.rubiconproject.com/cookie_sync',
	                },
	            },
	        ];
	    }
	    init() {
	        this._prebidMethods.setConfig({
	            s2sConfig: this._s2sConfig.filter(obj => obj.bidders.length),
	        });
	    }
	};
	S2S = __decorate([
	    injectable(),
	    __metadata("design:paramtypes", [Config, PrebidMethods])
	], S2S);

	let PrebidAuctionManager = class PrebidAuctionManager extends AuctionManager {
	    constructor(_adthrive, _config, _gam, _s2s, _bidderSetup, _mediaType, _prebidMethods, _prebidConfiguration, _predictiveAnalysisExperiment, _slots, _creativeMonitoring, _ortb2, roxotAnalytics, rubiconAnalytics) {
	        super();
	        this._adthrive = _adthrive;
	        this._config = _config;
	        this._gam = _gam;
	        this._s2s = _s2s;
	        this._bidderSetup = _bidderSetup;
	        this._mediaType = _mediaType;
	        this._prebidMethods = _prebidMethods;
	        this._prebidConfiguration = _prebidConfiguration;
	        this._predictiveAnalysisExperiment = _predictiveAnalysisExperiment;
	        this._slots = _slots;
	        this._creativeMonitoring = _creativeMonitoring;
	        this._ortb2 = _ortb2;
	        this.videoAdUnits = [];
	        this.bidsRequested = new Emitter();
	        this._orderedDisplayBidders = this._bidderSetup.orderedDisplayBidders;
	        this._orderedVideoBidders = this._bidderSetup.orderedVideoBidders;
	        this._analytics = [roxotAnalytics, rubiconAnalytics].filter(analytics => analytics.enabled);
	    }
	    init() {
	        const prebidConfiguration = this._prebidConfiguration;
	        const orderedDisplayBidders = this._orderedDisplayBidders;
	        const orderedVideoBidders = this._orderedVideoBidders;
	        const bidders = [...orderedDisplayBidders, ...orderedVideoBidders];
	        prebidConfiguration.setDefaultConfig();
	        prebidConfiguration.aliasBidders(bidders);
	        this._s2s.init();
	        this._analytics.forEach(analytics => analytics.init !== undefined && analytics.init());
	        orderedDisplayBidders.forEach(bidder => bidder.init !== undefined && bidder.init());
	        prebidConfiguration.applyClientAndServerBidderSettings(bidders);
	        pageLoaded()
	            .then(() => this._prebidMethods.triggerUserSyncs())
	            .catch(reason => {
	            logger.error('PrebidAuctionManager', 'init', 'pageLoaded', reason);
	        });
	        this._setEvents();
	        if (this._predictiveAnalysisExperiment.result) {
	            this._setVideoBidsFilter();
	        }
	    }
	    _setEvents() {
	        this._creativeMonitoring.setupCreativeEventListeners();
	        this._prebidMethods.onEvent('bidWon', bidResponse => {
	            const slot = this._slots.get(bidResponse.adUnitCode);
	            if (slot) {
	                slot.servedPrebidBidResponse = bidResponse;
	                this._slots.bidServed.emit(slot).catch(() => { });
	            }
	        });
	        const beforeRequestEvent = () => {
	            if (this._mediaType.oneStreamExpResult || !this._mediaType.isOutstreamAllowed()) {
	                this._updateHighImpactUnitTargeting();
	            }
	            this._prebidMethods.offEvent('beforeRequestBids', beforeRequestEvent);
	        };
	        this._prebidMethods.onEvent('beforeRequestBids', beforeRequestEvent);
	        if (this._predictiveAnalysisExperiment.result) {
	            this._setVideoBidsFilter();
	        }
	        this._prebidMethods.onEvent('bidRequested', () => {
	            void this.bidsRequested.emit();
	        });
	    }
	    _setVideoBidsFilter() {
	        this._adthrive.core = this._adthrive.core || {};
	        this._adthrive.core.predictiveAnalysis = this._adthrive.core.predictiveAnalysis || [];
	        if (!this._adthrive.core.predictiveAnalysis.length) {
	            return;
	        }
	        const validBrowser = (browser) => (browser === '1') === isChrome();
	        const validDevice = (mobile) => {
	            const currentDevice = this._config.context.device;
	            if (mobile === '1') {
	                return currentDevice === 'phone';
	            }
	            else {
	                return currentDevice === 'tablet' || currentDevice === 'desktop';
	            }
	        };
	        const filteredObjects = this._adthrive.core.predictiveAnalysis.filter(analysisObject => validBrowser(analysisObject.chrome) && validDevice(analysisObject.mobile));
	        const invalidBidMap = {};
	        filteredObjects.forEach(filteredObject => {
	            const key = `${filteredObject.adomain},${filteredObject.bidder}`;
	            invalidBidMap[key] = true;
	        });
	        this._prebidMethods.setBidsReceivedFilter(bids => {
	            if (!bids.length || !this._config.video.instreamAdUnits.has(bids[0].adUnitCode)) {
	                return bids;
	            }
	            return bids.filter(bid => {
	                var _a, _b;
	                let validBid = true;
	                (_b = (_a = bid.meta) === null || _a === void 0 ? void 0 : _a.advertiserDomains) === null || _b === void 0 ? void 0 : _b.forEach(adomain => {
	                    const key = adomain + ',' + bid.bidder;
	                    if (invalidBidMap[key]) {
	                        logger.info('PrebidAuctionManager', '_setVideoBidsFilter', 'bid filtered: ', bid);
	                        validBid = false;
	                    }
	                });
	                return validBid;
	            });
	        });
	    }
	    _updateSlotTargeting(slot) {
	        const mediaType = this._mediaType;
	        if (!mediaType.outstreamSlots.has(`${slot.placementMapName}`)) {
	            return;
	        }
	        const targeting = this._config.adTypes.enabledMinified.map(value => value.toLowerCase()).filter(value => value === 'od' || value === 'om');
	        if (targeting.length) {
	            this._gam.setSlotTargeting({ key: 'hi_au', value: targeting }, slot.googleTagSlot);
	        }
	    }
	    instlEnabled(slotLocation) {
	        return slotLocation === 'Interstitial' && this._config.adOptions.interstitial.prebid;
	    }
	    addSlots(slots) {
	        const bidderBidRequests = this._orderedDisplayBidders.map(bidder => bidder.getBidRequests(slots));
	        const adUnits = slots
	            .filter(slot => slot.location !== 'Interstitial' || this.instlEnabled(slot.location))
	            .sort((a, b) => {
	            return a.auctionPriority - b.auctionPriority;
	        })
	            .map(slot => {
	            const interSlot = this.instlEnabled(slot.location);
	            const ortb2Imp = this._ortb2.addOrtb2Imp({ slot }, interSlot);
	            if (this._mediaType.oneStreamExpResult) {
	                this._updateSlotTargeting(slot);
	            }
	            return {
	                code: interSlot ? this._config.prebid.interstitialAdUnitCode : slot.element.id,
	                mediaTypes: this._mediaType.getMediaType({ slot }),
	                ...(ortb2Imp ? { ortb2Imp } : {}),
	                bids: bidderBidRequests
	                    .map(bidRequests => bidRequests.get(slot.id))
	                    .filter(defined)
	                    .reduce((acc, val) => acc.concat(val), []),
	            };
	        });
	        this._prebidMethods.addAdUnits(adUnits);
	        return adUnits;
	    }
	    _updateAdUnitParams(slot) {
	        var _a;
	        if ((_a = pbjs.adUnits) === null || _a === void 0 ? void 0 : _a.length) {
	            pbjs.adUnits
	                .filter(adUnit => adUnit.code === slot.element.id)
	                .forEach(adUnit => {
	                const ortb2Imp = this._ortb2.addOrtb2Imp({ slot });
	                adUnit.ortb2Imp = ortb2Imp;
	                adUnit.mediaTypes = this._mediaType.getMediaType({ slot });
	            });
	        }
	    }
	    _updateBidParams(slot) {
	        var _a;
	        if ((_a = pbjs.adUnits) === null || _a === void 0 ? void 0 : _a.length) {
	            pbjs.adUnits
	                .filter(adUnit => { var _a; return adUnit.code === slot.element.id && ((_a = adUnit.bids) === null || _a === void 0 ? void 0 : _a.length); })
	                .forEach(adUnit => {
	                adUnit.bids.forEach(bid => {
	                    var _a, _b;
	                    bid = (_b = (_a = this._bidderSetup.biddersParams.get(bid.bidder)) === null || _a === void 0 ? void 0 : _a.updateBidParams(slot, adUnit, bid)) !== null && _b !== void 0 ? _b : bid;
	                });
	            });
	        }
	    }
	    _updateHighImpactUnitTargeting() {
	        const gam = this._gam;
	        GoogleAdManager.pushToQueue(() => {
	            const key = 'hi_au';
	            const targeting = gam.getTargetingValuesForKey(key).filter(value => value !== 'od' && value !== 'om');
	            if (targeting.length) {
	                gam.setTargeting({ key, value: targeting });
	            }
	            else {
	                gam.clearTargetingForKey(key);
	            }
	        });
	    }
	    _includeOutstreamWhenNoInstreamVideo(slots, labels) {
	        if (this._mediaType.isOutstreamAllowed()) {
	            slots.forEach(slot => {
	                if (this._mediaType.outstreamEnabled(slot).outstreamCapable) {
	                    labels.push(`outstreamEnabled_${slot.placementMapName}`);
	                }
	            });
	        }
	        return labels;
	    }
	    requestBids(slots, timeout = this._config.timeouts.initialBidsRequest, labels = []) {
	        return new Promise(resolve => {
	            const adUnitCodes = slots.map(slot => (this.instlEnabled(slot.location) ? this._config.prebid.interstitialAdUnitCode : slot.element.id));
	            labels = this._includeOutstreamWhenNoInstreamVideo(slots, labels);
	            slots.forEach(slot => this._updateBidParams(slot));
	            slots.forEach(slot => this._updateAdUnitParams(slot));
	            this._prebidMethods.requestBids({
	                adUnitCodes,
	                timeout,
	                bidsBackHandler: () => {
	                    GoogleAdManager.pushToQueue(() => {
	                        this._prebidMethods.setTargetingForGPTAsync(adUnitCodes);
	                        resolve();
	                    });
	                },
	                labels,
	            });
	        });
	    }
	    addVideoSlots(videos) {
	        const bidderBidRequests = this._orderedVideoBidders.map(bidder => bidder.getVideoBidRequests(videos));
	        const adUnits = videos.map(video => {
	            const ortb2Imp = this._ortb2.addOrtb2Imp({ video });
	            const adUnit = {
	                code: video.name,
	                ortb2Imp,
	                mediaTypes: this._mediaType.getMediaType({ video }),
	                bids: bidderBidRequests
	                    .map(bidRequests => bidRequests.get(video.name))
	                    .filter(defined)
	                    .reduce((acc, val) => acc.concat(val), []),
	            };
	            video.videoAdUnit = adUnit;
	            return adUnit;
	        });
	        this._prebidMethods.addAdUnits(adUnits);
	    }
	    requestVideoBids(videos, timeout = this._config.timeouts.initialBidsRequest) {
	        const adUnitCodes = videos.map(({ name: adUnitName }) => adUnitName);
	        if (adUnitCodes.length > 0) {
	            return new Promise(resolve => {
	                this._prebidMethods.requestBids({
	                    adUnitCodes,
	                    timeout,
	                    bidsBackHandler: () => {
	                        GoogleAdManager.pushToQueue(() => {
	                            this._prebidMethods.setTargetingForGPTAsync(adUnitCodes);
	                            resolve();
	                        });
	                    },
	                });
	            });
	        }
	    }
	    refreshBids(slots) {
	        return this.requestBids(slots, this._config.timeouts.refreshBidsRequest, ['refresh']);
	    }
	    get enabled() {
	        return this._prebidMethods.isPrebidLoaded();
	    }
	};
	PrebidAuctionManager = __decorate([
	    log('PrebidAuctionManager'),
	    singleton(),
	    __param(0, inject('AdThrive')),
	    __metadata("design:paramtypes", [Object, Config,
	        GoogleAdManager,
	        S2S,
	        BidderSetup,
	        MediaType,
	        PrebidMethods,
	        PrebidConfiguration,
	        PredictiveAnalysisExperiment,
	        Slots,
	        CreativeMonitoring,
	        Ortb2,
	        RoxotAnalytics,
	        RubiconAnalytics])
	], PrebidAuctionManager);

	let AuctionManagers = class AuctionManagers {
	    constructor(_config, prebid, amazon) {
	        this._config = _config;
	        this._auctionManagers = [amazon, prebid];
	        this._auctionManagers = this._auctionManagers.filter(auctionManager => auctionManager.enabled);
	    }
	    init() {
	        this._auctionManagers.forEach(auctionManager => auctionManager.init !== undefined && auctionManager.init());
	    }
	    requestBids(slots) {
	        return Promise.all(this._auctionManagers.map(auctionManager => auctionManager.requestBids(slots)));
	    }
	    refreshBids(slots) {
	        return Promise.all(this._auctionManagers.map(auctionManager => auctionManager.refreshBids(slots)));
	    }
	    addSlots(slots) {
	        this._auctionManagers.forEach(auctionManager => {
	            if (auctionManager.addSlots !== undefined) {
	                auctionManager.addSlots(slots);
	            }
	        });
	    }
	    addVideoSlots(videos) {
	        this._auctionManagers
	            .filter(auctionManager => auctionManager.videoEnabled && auctionManager.addVideoSlots)
	            .forEach(auctionManager => auctionManager.addVideoSlots(videos));
	    }
	    requestVideoBids(videos, timeout) {
	        return Promise.all(this._auctionManagers
	            .filter(auctionManager => auctionManager.videoEnabled)
	            .map(auctionManager => auctionManager.requestVideoBids(videos, timeout)));
	    }
	    getAmazonAuctionManager() {
	        for (const am of this._auctionManagers) {
	            if (am instanceof AmazonAuctionManager) {
	                return am;
	            }
	        }
	    }
	};
	AuctionManagers = __decorate([
	    log('AuctionManagers'),
	    singleton(),
	    __metadata("design:paramtypes", [Config, PrebidAuctionManager, AmazonAuctionManager])
	], AuctionManagers);

	let CommandQueue = class CommandQueue {
	    constructor(adthrive) {
	        this._commands = adthrive.cmd || [];
	    }
	    init() {
	        if (this._commands.length > 0) {
	            for (const command of this._commands) {
	                const isGamMethod = this._isGamMethod(command.toString());
	                if (isGamMethod) {
	                    this._addToGamQueue(command);
	                }
	                else {
	                    this._call(command);
	                }
	            }
	            this._commands = [];
	        }
	    }
	    push(command) {
	        if (this._commands.length > 0) {
	            this._commands.push(command);
	        }
	        else {
	            const isGamMethod = this._isGamMethod(command.toString());
	            if (isGamMethod) {
	                this._addToGamQueue(command);
	            }
	            else {
	                this._call(command);
	            }
	        }
	    }
	    _call(command) {
	        command.call(undefined);
	    }
	    _isGamMethod(stringCommand) {
	        return (stringCommand &&
	            (stringCommand.indexOf('setTargeting(') !== -1 || stringCommand.indexOf('googletag') !== -1 || stringCommand.indexOf('pubads') !== -1));
	    }
	    _addToGamQueue(command) {
	        GoogleAdManager.pushToQueue(() => {
	            this._call(command);
	        });
	    }
	};
	CommandQueue = __decorate([
	    singleton(),
	    __param(0, inject('AdThrive')),
	    __metadata("design:paramtypes", [Object])
	], CommandQueue);

	class Component {
	    get enabled() {
	        return true;
	    }
	}

	let SlotManager = class SlotManager {
	    constructor(_auctionManagers, _config, _googleAdManager, _slots) {
	        this._auctionManagers = _auctionManagers;
	        this._config = _config;
	        this._googleAdManager = _googleAdManager;
	        this._slots = _slots;
	        this.added = new Emitter();
	        this.cleared = new Emitter();
	        this.displayed = new Emitter();
	        this.displaying = new Emitter();
	        this.refreshed = new Emitter();
	        this.refreshing = new Emitter();
	        this.refreshingBids = new Emitter();
	        this.refreshedBids = new Emitter();
	        this.requestingBids = new Emitter();
	        this.requestedBids = new Emitter();
	        this.refreshInterval = 25000;
	    }
	    async add(slot) {
	        await this._googleAdManager.waitForQueue();
	        const slots = this._googleAdManager.defineSlots(this.castArray(slot));
	        slots.forEach(s => {
	            s.setViewability(this._config.marmalade);
	            this._config.clsOptimizedAds.setStyle(s.element, s.location);
	        });
	        this._auctionManagers.addSlots(slots);
	        this._slots.add(slots);
	        await this.added.emit(slots);
	        return slots;
	    }
	    async clear(slot) {
	        const slots = this.castArray(slot);
	        slots.forEach(s => {
	            s.displayed = false;
	            this.setMinDimensions(s.element);
	        });
	        this._googleAdManager.clearSlots(slots);
	        await this.cleared.emit(slots);
	        return slots;
	    }
	    destroy(slot) {
	        const slots = this.castArray(slot);
	        this.pauseRefresh(slots);
	        this._slots.remove(slots);
	        this._googleAdManager.destroySlots(slots);
	        return slots;
	    }
	    rebuild(slot) {
	        const slots = this.castArray(slot);
	        const gam = this._googleAdManager;
	        for (const rslot of slots) {
	            GoogleAdManager.pushToQueue(() => {
	                const targeting = ['refresh', 'inf_scroll', 'decref', 'nref', 'hvp', 'lazy'].reduce((t, key) => {
	                    const value = rslot.getTargeting(key);
	                    if (value.length) {
	                        t.push({ key, value });
	                    }
	                    return t;
	                }, []);
	                gam.destroySlots(this.castArray(rslot));
	                gam.defineSlots(this.castArray(rslot));
	                rslot.setTargeting(targeting);
	            });
	        }
	        return slots;
	    }
	    async refresh(slot, delayEnabled = true) {
	        const slots = this.castArray(slot);
	        for (const s of slots) {
	            s.refreshCount = s.refreshCount + 1;
	            s.servedPrebidBidResponse = undefined;
	        }
	        await this.refreshing.emit(slots);
	        await Promise.all([delayEnabled ? delay(this._config.timeouts.refreshBidsRequest) : true, this.refreshBids(slots)]).then(() => this._googleAdManager.refreshSlots(slots));
	        await this.refreshed.emit(slots);
	        return slots;
	    }
	    async display(slot) {
	        const slots = this.castArray(slot);
	        await this.displaying.emit(slots);
	        await this.requestBids(slots).then(() => this._googleAdManager.displaySlots(slots));
	        slots.forEach(s => {
	            s.displayed = true;
	        });
	        await this.displayed.emit(slots);
	        return slots;
	    }
	    inView(slot) {
	        const slots = this.castArray(slot);
	        slots.forEach(s => this.setRefreshTimeout(s));
	        return slots;
	    }
	    outOfView(slot) {
	        logger.info('SlotManager', 'outOfView', 'verify outOfView:', JSON.parse(JSON.stringify(slot)));
	        const slots = this.castArray(slot);
	        slots
	            .filter(s => !s.alwaysInView)
	            .filter(s => ('IntersectionObserver' in window ? s.outOfViewGPT && s.outOfViewIO : s.outOfViewGPT))
	            .forEach(s => {
	            const iframe = s.element.querySelector('div > iframe');
	            if (isVisible(s.element) && iframe && isVisible(iframe)) {
	                this.clearRefreshTimeout(s);
	            }
	            else {
	                logger.info('SlotManager', 'outOfView', 'Ignoring hidden iframe');
	            }
	        });
	        return slots;
	    }
	    pauseRefresh(slot) {
	        const slots = this.castArray(slot);
	        slots
	            .filter(s => s.refreshTimeout)
	            .forEach(s => {
	            s.refreshPaused = true;
	            this.clearRefreshTimeout(s);
	        });
	        return slots;
	    }
	    resumeRefresh(slot) {
	        const slots = this.castArray(slot);
	        slots
	            .filter(s => s.refreshPaused)
	            .forEach(s => {
	            s.refreshPaused = false;
	            this.setRefreshTimeout(s);
	        });
	        return slots;
	    }
	    updateRefreshTimeout(slot, refreshInterval) {
	        const slots = this.castArray(slot);
	        slots.forEach(s => {
	            s.refreshInterval = refreshInterval;
	            if (s.refreshTimeout) {
	                this.clearRefreshTimeout(s);
	                this.setRefreshTimeout(s);
	            }
	        });
	        return slots;
	    }
	    clearRefreshTimeout(slot, clearDuration = false) {
	        const slots = this.castArray(slot);
	        slots
	            .filter(s => s.refreshTimeout)
	            .forEach(s => {
	            window.clearTimeout(s.refreshTimeout);
	            s.refreshTimeout = undefined;
	            if (clearDuration) {
	                s.viewableDuration = 0;
	            }
	            else if (s.viewableSince) {
	                s.viewableDuration += new Date().getTime() - s.viewableSince.getTime();
	            }
	        });
	    }
	    setRefreshTimeout(slot) {
	        const slots = this.castArray(slot);
	        slots
	            .filter(s => !s.refreshTimeout)
	            .forEach(s => {
	            const refreshInterval = defaultTo(s.refreshInterval, this.refreshInterval);
	            if (refreshInterval > 0) {
	                s.viewableSince = new Date();
	                s.refreshTimeout = window.setTimeout(() => {
	                    s.viewableDuration = 0;
	                    s.refreshInterval = undefined;
	                    s.refreshTimeout = undefined;
	                    this.refresh(s).catch(err => logger.warn('SlotManager', 'setRefreshTimeout', err));
	                }, refreshInterval - s.viewableDuration);
	            }
	        });
	    }
	    async requestBids(slot) {
	        const slots = this.castArray(slot).filter(s => s.enabledForAuction && (!s.lazy || this._config.lazyLoad.lzhb));
	        if (slots.length > 0) {
	            await this.requestingBids.emit(slots);
	            await this._auctionManagers.requestBids(slots);
	            await this.requestedBids.emit(slots);
	        }
	        return slots;
	    }
	    async refreshBids(slot) {
	        const slots = this.castArray(slot).filter(s => s.enabledForAuction);
	        if (slots.length > 0) {
	            await this.refreshingBids.emit(slots);
	            await this._auctionManagers.refreshBids(slots);
	            await this.refreshedBids.emit(slots);
	        }
	        return slots;
	    }
	    castArray(lookup) {
	        if (typeof lookup === 'string') {
	            const slot = this._slots.get(lookup);
	            return slot !== undefined ? [slot] : [];
	        }
	        return Array.isArray(lookup) ? lookup : [lookup];
	    }
	    setMinDimensions(element) {
	        const style = getComputedStyle(element, null);
	        element.style.minHeight = style.getPropertyValue('height');
	        element.style.minWidth = style.getPropertyValue('width');
	    }
	};
	SlotManager = __decorate([
	    log('SlotManager'),
	    singleton(),
	    __metadata("design:paramtypes", [AuctionManagers,
	        Config,
	        GoogleAdManager,
	        Slots])
	], SlotManager);

	let CollapsibleVideoLoggingStore = class CollapsibleVideoLoggingStore {
	    constructor() {
	        this.wasClosed = false;
	        this.wasStarted = false;
	        this.totalTimeCollapsed = 0;
	    }
	};
	CollapsibleVideoLoggingStore = __decorate([
	    log('CollapsibleVideoLoggingStore'),
	    singleton()
	], CollapsibleVideoLoggingStore);

	let UserPageDataLoggingExperiment = class UserPageDataLoggingExperiment extends Experiment {
	    constructor(abgroup) {
	        super();
	        this.key = 'UserPageDataLoggingExperiment';
	        this._choices = [{ choice: true }, { choice: false }];
	        this._result = this.run();
	        abgroup.set('upl', this._result ? 'on' : 'off');
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new BernoulliTrial(0.25).get();
	    }
	};
	UserPageDataLoggingExperiment = __decorate([
	    log('UserPageDataLoggingExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup])
	], UserPageDataLoggingExperiment);

	let UserPageDataPrivacyLoggingExperiment = class UserPageDataPrivacyLoggingExperiment extends Experiment {
	    constructor() {
	        super();
	        this.key = 'UserPageDataPrivacyLoggingExperiment';
	        this._choices = [{ choice: true }, { choice: false }];
	        this._result = this.run();
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new BernoulliTrial(0.1).get();
	    }
	};
	UserPageDataPrivacyLoggingExperiment = __decorate([
	    log('UserPageDataPrivacyLoggingExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [])
	], UserPageDataPrivacyLoggingExperiment);

	let UserPageDataLoggingComponent = class UserPageDataLoggingComponent extends Component {
	    constructor(_config, _pageManager, _prebidMethods, _slotManager, _userPageDataLoggingExperiment, _userPageDataPrivacyLoggingExperiment, _userPageDataLogEvents, _collapsibleVideoLoggingStore) {
	        super();
	        this._config = _config;
	        this._pageManager = _pageManager;
	        this._prebidMethods = _prebidMethods;
	        this._slotManager = _slotManager;
	        this._userPageDataLoggingExperiment = _userPageDataLoggingExperiment;
	        this._userPageDataPrivacyLoggingExperiment = _userPageDataPrivacyLoggingExperiment;
	        this._userPageDataLogEvents = _userPageDataLogEvents;
	        this._collapsibleVideoLoggingStore = _collapsibleVideoLoggingStore;
	        this._userPrivacyData = {};
	        this._getUserData = () => {
	            return {
	                device: this._config.context.device,
	                timePageOpen: now$2() - this._config.timing.started,
	                timeOnPage: this._config.timing.totalTimeOnPage,
	                viewportWidth: window.innerWidth,
	                viewportHeight: window.innerHeight,
	                video: {
	                    nonclose: !this._collapsibleVideoLoggingStore.wasClosed,
	                    playerName: this._collapsibleVideoLoggingStore.playerName,
	                    totalTimeCollapsed: this._collapsibleVideoLoggingStore.totalTimeCollapsed,
	                    wasStarted: this._collapsibleVideoLoggingStore.wasStarted,
	                },
	                ...this._userPrivacyData,
	                ...(!this._config.gdpr.enabled &&
	                    !this._config.ccpa.userOptedOut && {
	                    uid1: getUIDForSource('adserver.org', this._prebidMethods.isPrebidLoaded()),
	                }),
	            };
	        };
	        this._legacy = this._config.impressionLog.enabled === 1;
	    }
	    init() {
	        if (!this._legacy) {
	            const { reasons: disableAds } = this._config.disableAds;
	            Promise.all([
	                disableAds.size !== 0 ? 0 : this._slotManager.requestingBids.once().then(() => now$2()),
	                disableAds.size !== 0 ? 0 : this._slotManager.requestedBids.once().then(() => now$2()),
	                disableAds.size !== 0 ? 0 : this._slotManager.displayed.once().then(() => now$2()),
	                pageLoaded(),
	            ])
	                .then(([requestingBids, requestedBids, displayed]) => this._setTimingData(requestingBids, requestedBids, displayed))
	                .catch(err => logger.error('UserPageDataComponent', 'init', err));
	        }
	        if (isMobile()) {
	            this._userPageDataLogEvents.addCallbackToQueue([this._pageManager.visibilityChange], () => {
	                if (document.visibilityState === 'hidden') {
	                    this._logUserData();
	                }
	            });
	        }
	        this._userPageDataLogEvents.addCallbackToQueue([this._pageManager.beforeUnload, this._pageManager.pageHide], () => this._logUserData());
	        this._logUserPrivacyData().catch(() => {
	            logger.error('_logUserPrivacyData: ', 'Could not log user privacy.');
	        });
	    }
	    get enabled() {
	        return this._userPageDataLoggingExperiment.result;
	    }
	    _setTimingData(auctionStarted, auctionFinished, displayed) {
	        if (window.performance && window.performance.timing) {
	            const t = window.performance.timing;
	            if (t && t.navigationStart !== 0) {
	                const timing = {
	                    pageLoad: t.loadEventStart - t.navigationStart,
	                    domainLookup: t.domainLookupEnd - t.domainLookupStart,
	                    connect: t.connectEnd - t.connectStart,
	                    request: t.responseStart - t.requestStart,
	                    response: t.responseEnd - t.responseStart,
	                    navigation: t.fetchStart - t.navigationStart,
	                    domInteractive: t.domInteractive - t.navigationStart,
	                    domContentLoaded: t.domContentLoadedEventStart - t.navigationStart,
	                };
	                const valid = Object.keys(timing)
	                    .map(key => timing[key])
	                    .every((metric) => !isNaN(metric) && metric >= 0 && metric < 3600000);
	                if (valid) {
	                    const { reasons: disableAds } = this._config.disableAds;
	                    this._timingData = {
	                        ...timing,
	                        ...this._config.timing.timingData,
	                        disableAds: disableAds.size > 0 ? [...disableAds].join(',') : 'none',
	                        auctionStarted,
	                        auctionFinished,
	                        displayed,
	                    };
	                }
	            }
	        }
	    }
	    _logUserData() {
	        this._userPageDataLogEvents.loggingData.emit().catch(null);
	        this._userPageDataLogEvents.setUserPageData({
	            ...(!this._legacy && this._timingData && { UserPageTimingData: this._timingData }),
	            UserPageDataLoggingComponent: this._getUserData(),
	        });
	    }
	    async _logUserPrivacyData() {
	        if (this._userPageDataPrivacyLoggingExperiment.result) {
	            this._userPrivacyData = await this._getUserPrivacyData();
	            logger.info('UserPrivacyData: ', '_logUserPrivacyData: ', this._userPrivacyData);
	        }
	    }
	    async _getUserPrivacyData() {
	        return {
	            gpc: 'navigator' in window && 'globalPrivacyControl' in window.navigator ? window.navigator.globalPrivacyControl : null,
	            dcp: await this._getDataConsent(),
	        };
	    }
	    async _getDataConsent() {
	        if ('dataConsentPreference' in document) {
	            try {
	                return await document.dataConsentPreference();
	            }
	            catch (err) {
	                logger.info('UserPageDataLoggingComponent', '_getDataConsent', 'User data privacy unknown, promise rejected. Returning null.');
	                return null;
	            }
	        }
	        return null;
	    }
	};
	UserPageDataLoggingComponent = __decorate([
	    log('UserPageDataLoggingComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [Config,
	        PageManager,
	        PrebidMethods,
	        SlotManager,
	        UserPageDataLoggingExperiment,
	        UserPageDataPrivacyLoggingExperiment,
	        UserPageDataLoggingEvents,
	        CollapsibleVideoLoggingStore])
	], UserPageDataLoggingComponent);

	let AdDensityExperiment = class AdDensityExperiment extends Experiment {
	    constructor() {
	        super();
	        this.key = 'AdDensityExperiment';
	        this._choices = [{ choice: true }, { choice: false }];
	        this._result = this.run();
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new BernoulliTrial(0.25).get();
	    }
	};
	AdDensityExperiment = __decorate([
	    log('AdDensityExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [])
	], AdDensityExperiment);

	const isFrontpage = () => {
	    return window.location.origin + '/' === trimQueryStringFromUrl(window.location.href);
	};
	const trimQueryStringFromUrl = (url) => {
	    return url.split('?')[0];
	};

	let AdDensityComponent = class AdDensityComponent extends Component {
	    constructor(_gam, _config, _adDensityExperiment, _slots, _slotManager, _pageManager, _userPageDataLogEvents) {
	        super();
	        this._gam = _gam;
	        this._config = _config;
	        this._adDensityExperiment = _adDensityExperiment;
	        this._slots = _slots;
	        this._slotManager = _slotManager;
	        this._pageManager = _pageManager;
	        this._userPageDataLogEvents = _userPageDataLogEvents;
	        this._initialSlotsTimeout = 10000;
	        this._addToMainContent = new Set(['Below_Post']);
	        this._slotsForAdDensity = new Set(['Content', 'Recipe', 'Native_Recipe', 'Sponsor_Tile', 'Below_Post', 'Footer']);
	        this._mainContent = null;
	        this._commentElem = null;
	        this._heightsRegistered = false;
	        this._initMainContentHeight = null;
	        this._endMainContentHeight = null;
	        this._slotsHeightLoad = null;
	        this._slotsHeightEnd = null;
	        this._slotsHeightVideo = null;
	        this._slotsForInitial = new Set();
	        this._slotsForMainContent = new Set();
	        this._slotsForEnd = new Set();
	    }
	    init() {
	        this._mainContent = getMainArticle();
	        if (this._mainContent === null) {
	            logger.info('AdDensityComponent', 'init', 'main content not found');
	            return;
	        }
	        else {
	            this._initObserver(this._mainContent);
	            logger.info('AdDensityComponent', 'init', 'mainContent', this._mainContent.offsetHeight, this._mainContent);
	        }
	        this._gam.slotOnload.on(() => {
	            if (!this._heightsRegistered) {
	                logger.info('AdDensityComponent', 'slotOnload', 'slotsAddedInitial', this._slotsForInitial);
	                logger.info('AdDensityComponent', 'slotOnload', 'slotsAddedEnd', this._slotsForEnd);
	                setTimeout(() => {
	                    this._getSlotHeights();
	                }, this._initialSlotsTimeout);
	                this._heightsRegistered = true;
	            }
	        });
	        this._slotManager.added.on(slots => {
	            if (!slots.some(slot => slot.infinite)) {
	                this._addSlots(slots);
	            }
	        });
	        this._userPageDataLogEvents.addCallbackToQueue([this._pageManager.beforeUnload], () => this._logAdDensity());
	    }
	    _logAdDensity() {
	        const adDensity = {
	            ...(this._initMainContentHeight &&
	                this._slotsHeightLoad && {
	                addensload: Math.round((this._slotsHeightLoad / this._initMainContentHeight) * 100),
	            }),
	            ...(this._endMainContentHeight &&
	                this._slotsHeightEnd && {
	                addensend: Math.round((this._slotsHeightEnd / this._endMainContentHeight) * 100),
	            }),
	            ...(this._endMainContentHeight &&
	                this._slotsHeightVideo && {
	                addensvid: Math.round((this._slotsHeightVideo / this._endMainContentHeight) * 100),
	            }),
	        };
	        if (Object.keys(adDensity).length > 0) {
	            this._userPageDataLogEvents.setUserPageData({ AdDensityComponent: adDensity });
	        }
	    }
	    _addSlots(slots) {
	        slots
	            .filter(slot => this._slotsForAdDensity.has(slot.location))
	            .forEach(slot => {
	            if (!slot.lazy) {
	                this._slotsForInitial.add(slot.name);
	                if (this._addToMainContent.has(slot.location)) {
	                    this._slotsForMainContent.add(slot.name);
	                }
	            }
	            this._slotsForEnd.add(slot.name);
	        });
	    }
	    isSlotInMainContent(slot) {
	        var _a;
	        if (((_a = this._mainContent) === null || _a === void 0 ? void 0 : _a.querySelector(`#${slot.id}`)) && !this.isSlotInComment(slot)) {
	            return true;
	        }
	        return false;
	    }
	    isSlotInComment(slot) {
	        if (this._commentElem && this._commentElem.querySelector(`#${slot.id}`)) {
	            return true;
	        }
	        return false;
	    }
	    _getSlotHeights() {
	        let initialSlotHeights = 0;
	        let mainContentSlotsTotal = 0;
	        this._slots.get().forEach(slot => {
	            if (this._slotsForInitial.has(slot.name) && (slot.location !== 'Content' || this.isSlotInMainContent(slot))) {
	                logger.info('AdDensityComponent', 'getSlotHeights', 'slotsForInitial', slot.name, slot.element.offsetHeight);
	                initialSlotHeights += slot.element.offsetHeight;
	            }
	            if (this._slotsForMainContent.has(slot.name)) {
	                mainContentSlotsTotal += slot.element.offsetHeight;
	            }
	        });
	        this._slotsHeightLoad = initialSlotHeights;
	        if (this._mainContent) {
	            this._initMainContentHeight =
	                this._commentElem !== null ? this._mainContent.offsetHeight - this._commentElem.offsetHeight : this._mainContent.offsetHeight;
	            this._initMainContentHeight += mainContentSlotsTotal;
	        }
	        logger.info('AdDensityComponent', 'slotsHeightLoad', 'config', this._slotsHeightLoad);
	        logger.info('AdDensityComponent', 'initMainContentHeightHeight', 'config', this._initMainContentHeight);
	    }
	    _initObserver(articleContent) {
	        const comment = articleContent.querySelector('div #comments, section .comments');
	        this._observer = this.getIntersectionObserver(comment);
	        if (comment !== null) {
	            logger.info('AdDensityComponent', 'getMainContent', 'comment found in main content', comment.offsetHeight, comment);
	            this._commentElem = comment;
	            this._observer.observe(this._commentElem);
	        }
	        else {
	            this._observer.observe(articleContent);
	        }
	    }
	    getIntersectionObserver(comment) {
	        const callback = (entries) => {
	            var _a, _b;
	            for (const entry of entries) {
	                if (this._initMainContentHeight !== null) {
	                    if (comment === null && entry.boundingClientRect.top < 0) {
	                        logger.info('AdDensityComponent', 'getIntersectionObserver', 'reached end of main content');
	                        this._calculateSlotHeightsAtEnd();
	                        (_a = this._observer) === null || _a === void 0 ? void 0 : _a.unobserve(this._mainContent);
	                    }
	                    if (comment !== null && entry.boundingClientRect.top > 0) {
	                        logger.info('AdDensityComponent', 'getIntersectionObserver', 'reached top of comment', entry);
	                        this._calculateSlotHeightsAtEnd();
	                        (_b = this._observer) === null || _b === void 0 ? void 0 : _b.unobserve(comment);
	                    }
	                }
	            }
	        };
	        return new IntersectionObserver(callback, {});
	    }
	    _calculateSlotHeightsAtEnd() {
	        let totalHeight = 0;
	        let mainContentSlotsTotal = 0;
	        this._slots.get().forEach(slot => {
	            if (this._slotsForEnd.has(slot.name) && (slot.location !== 'Content' || this.isSlotInMainContent(slot))) {
	                logger.info('AdDensityComponent', 'calculateSlotHeightsAtEnd', 'slotsForEnd', slot.name, slot.element.offsetHeight);
	                totalHeight += slot.element.offsetHeight;
	            }
	            if (this._slotsForMainContent.has(slot.name)) {
	                mainContentSlotsTotal += slot.element.offsetHeight;
	            }
	        });
	        this._slotsHeightEnd = totalHeight;
	        if (this._mainContent) {
	            this._endMainContentHeight =
	                this._commentElem !== null ? this._mainContent.offsetHeight - this._commentElem.offsetHeight : this._mainContent.offsetHeight;
	            this._endMainContentHeight += mainContentSlotsTotal;
	            logger.info('AdDensityComponent', '_calculateSlotHeightsAtEnd', '_endMainContentHeight', this._endMainContentHeight);
	        }
	        logger.info('AdDensityComponent', '_calculateSlotHeightsAtEnd', totalHeight, {
	            'playlistPlayer:': this._config.video.playlistPlayerAdded,
	            'contextualPlayer:': this._config.video.contextualPlayerAdded,
	            'sekindoPlayer:': this._config.video.sekindoPlayerAdded,
	        });
	        if (this._config.video.playlistPlayerAdded) {
	            const collapseElement = document.querySelector('.adthrive-collapse-player');
	            totalHeight += collapseElement ? collapseElement.offsetHeight : 0;
	        }
	        if (this._config.video.contextualPlayerAdded) {
	            const contextualElements = document.querySelectorAll('.adthrive-video-player');
	            contextualElements.forEach((contextualElement) => {
	                totalHeight += contextualElement.offsetHeight;
	            });
	        }
	        if (this._config.video.sekindoPlayerAdded) {
	            const sekindoElement = document.querySelector('.adthrive-sekindo-player');
	            totalHeight += sekindoElement ? sekindoElement.offsetHeight : 0;
	        }
	        this._slotsHeightVideo = totalHeight;
	        logger.info('AdDensityComponent', '_calculateSlotHeightsAtEnd', 'slotsHeightEnd', 'config', totalHeight);
	    }
	    get enabled() {
	        return (this._adDensityExperiment.result &&
	            'IntersectionObserver' in window &&
	            !(document.querySelector('body.home') !== null || document.querySelector('body.archive') !== null) &&
	            !isFrontpage());
	    }
	};
	AdDensityComponent = __decorate([
	    log('AdDensityComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [GoogleAdManager,
	        Config,
	        AdDensityExperiment,
	        Slots,
	        SlotManager,
	        PageManager,
	        UserPageDataLoggingEvents])
	], AdDensityComponent);

	let AdTestComponent = class AdTestComponent extends Component {
	    constructor(_config, _gam) {
	        super();
	        this._config = _config;
	        this._gam = _gam;
	    }
	    init() {
	        if (this._config.context.querystring.has('ad_test')) {
	            const adTest = this._config.context.querystring.get('ad_test');
	            this._gam.setTargeting({ key: 'sec', value: adTest.split(',').map(val => `test${val}`) });
	        }
	    }
	};
	AdTestComponent = __decorate([
	    log('AdTestComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [Config, GoogleAdManager])
	], AdTestComponent);

	let BrandMetricsExperiment = class BrandMetricsExperiment extends Experiment {
	    constructor(abgroup) {
	        super();
	        this._result = false;
	        this.key = 'bmetrics';
	        this._choices = [{ choice: true }, { choice: false }];
	        this._result = this.run();
	        abgroup.set(this.key, this._result ? 'on' : 'off');
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new BernoulliTrial(0.99).get();
	    }
	};
	BrandMetricsExperiment = __decorate([
	    log('BrandMetricsExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup])
	], BrandMetricsExperiment);

	let BrandMetricsComponent = class BrandMetricsComponent extends Component {
	    constructor(_brandMetricsExperiment, _gam, _prebidAuctionManager) {
	        super();
	        this._brandMetricsExperiment = _brandMetricsExperiment;
	        this._gam = _gam;
	        this._prebidAuctionManager = _prebidAuctionManager;
	        this._url = 'https://cdn.brandmetrics.com/tag/aa466d868b2742ffa2cc31bb6341dc12/cafemedia.js';
	    }
	    init() {
	        void this._prebidAuctionManager.bidsRequested.once().then(() => {
	            this._load();
	        });
	    }
	    get enabled() {
	        return this._brandMetricsExperiment.result;
	    }
	    _load() {
	        importScript(this._url)
	            .then(() => this._monitorSurvey())
	            .catch(() => { });
	    }
	    _monitorSurvey() {
	        window._brandmetrics = window._brandmetrics || [];
	        window._brandmetrics.push({
	            cmd: '_querySurvey',
	            val: {
	                callback: (surveyAvailable, survey) => {
	                    if (surveyAvailable && survey && survey.measurementId) {
	                        this._gam.setTargeting({ key: 'bms', value: [survey.measurementId.toString()] });
	                    }
	                },
	            },
	        });
	    }
	};
	BrandMetricsComponent = __decorate([
	    log('BrandMetrics'),
	    injectable(),
	    __metadata("design:paramtypes", [BrandMetricsExperiment,
	        GoogleAdManager,
	        PrebidAuctionManager])
	], BrandMetricsComponent);

	const addBodyClass = (device) => {
	    const body = document.body;
	    const className = `adthrive-device-${device}`;
	    if (!body.classList.contains(className)) {
	        try {
	            body.classList.add(className);
	        }
	        catch (err) {
	            logger.error('BodyDeviceClassComponent', 'init', { message: err.message });
	            const support = 'classList' in document.createElement('_');
	            logger.error('BodyDeviceClassComponent', 'init.support', { support });
	        }
	    }
	};

	let BodyDeviceClassComponent = class BodyDeviceClassComponent extends Component {
	    constructor(_config) {
	        super();
	        this._config = _config;
	    }
	    init() {
	        addBodyClass(this._config.context.device);
	    }
	};
	BodyDeviceClassComponent = __decorate([
	    log('BodyDeviceClassComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [Config])
	], BodyDeviceClassComponent);

	let CCPAComponent = class CCPAComponent extends Component {
	    constructor(_config, _prebidMethods) {
	        super();
	        this._config = _config;
	        this._prebidMethods = _prebidMethods;
	        this.ccpaRequired = this._config.ccpa.required;
	        this.privacyString = this._config.ccpa.privacyString;
	        this.ccpaNotApplicable = this._config.ccpa.ccpaNotApplicable;
	        this.ccpaOptIn = this._config.ccpa.ccpaOptIn;
	        this.ccpaOptOut = this._config.ccpa.ccpaOptOut;
	        this.gpcEnabled = !!this._config.ccpa.gpcEnabled;
	        this.gpcUpdated = false;
	        this.globalPrivacyControl = window.navigator.globalPrivacyControl;
	    }
	    init() {
	        window.__uspapi = this.uspapi.bind(this);
	        this.addLocatorFrame();
	        if (this.ccpaRequired) {
	            this.setGpcString();
	            if (this.gpcEnabled === true) {
	                this.setPrivacyString(this.ccpaOptOut);
	            }
	            else {
	                this.setPrivacyString(this.ccpaOptIn);
	            }
	            this.addOptOutLink();
	            this.setDeviceAccess();
	        }
	        else {
	            this.setPrivacyString(this.ccpaNotApplicable);
	        }
	    }
	    setPrivacyString(privacyString, linkClick = false) {
	        const nowApplicable = this.ccpaRequired && this.privacyString === this.ccpaNotApplicable;
	        const nowNotApplicable = !this.ccpaRequired && this.privacyString !== this.ccpaNotApplicable;
	        if (this.privacyString === '' || linkClick === true || nowApplicable || nowNotApplicable || this.gpcUpdated) {
	            document.cookie = `usprivacy=${privacyString}`;
	            this.privacyString = privacyString;
	        }
	    }
	    setGpcString() {
	        if ((this.gpcEnabled === null || this.gpcEnabled === false) && this.globalPrivacyControl) {
	            localStorage.setItem('adthrive_gpc', `${this.globalPrivacyControl}`);
	            this.gpcEnabled = !!`${this.globalPrivacyControl}`;
	            this.gpcUpdated = true;
	        }
	        else if (this.gpcEnabled === true && !this.globalPrivacyControl) {
	            localStorage.removeItem('adthrive_gpc');
	            this.gpcEnabled = this.globalPrivacyControl;
	            this.gpcUpdated = true;
	        }
	    }
	    setDeviceAccess() {
	        const deviceAccess = this.privacyString === this.ccpaOptIn ? true : false;
	        this._prebidMethods.setConfig({ deviceAccess });
	    }
	    addOptOutLink() {
	        const optOutText = 'Do not sell my personal information.';
	        const optInText = 'Customize my ad experience.';
	        const ccpaLinkText = this.privacyString === this.ccpaOptIn ? optOutText : optInText;
	        const ccpaOptOutDiv = document.createElement('div');
	        ccpaOptOutDiv.className = 'adthrive-ccpa-link';
	        ccpaOptOutDiv.innerHTML = 'Information from your device can be used to personalize your ad experience. <br> ';
	        const ccpaATag = document.createElement('a');
	        ccpaATag.innerHTML = ccpaLinkText;
	        ccpaATag.addEventListener('click', (() => {
	            if (this.privacyString === this.ccpaOptIn) {
	                this.setPrivacyString(this.ccpaOptOut, true);
	                ccpaATag.textContent = optInText;
	            }
	            else {
	                this.setPrivacyString(this.ccpaOptIn, true);
	                ccpaATag.textContent = optOutText;
	            }
	            this.setDeviceAccess();
	        }).bind(this));
	        ccpaOptOutDiv.appendChild(ccpaATag);
	        this._config.footer.elements.push({
	            order: 1,
	            element: ccpaOptOutDiv,
	        });
	    }
	    uspapi(command, version, callback) {
	        const uspDataObj = {
	            command,
	            version,
	            uspString: readCookie('usprivacy'),
	        };
	        callback(uspDataObj, true);
	    }
	    addLocatorFrame() {
	        if (document.getElementById('__uspapiLocator') === null) {
	            const frame = document.createElement('iframe');
	            frame.style.display = 'none';
	            frame.id = '__uspapiLocator';
	            frame.name = '__uspapiLocator';
	            document.body.appendChild(frame);
	        }
	    }
	};
	CCPAComponent = __decorate([
	    log('CCPAComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [Config, PrebidMethods])
	], CCPAComponent);

	let ComscoreComponent = class ComscoreComponent extends Component {
	    constructor(_config) {
	        super();
	        this._config = _config;
	    }
	    init() {
	        const { comscore, comscoreMessage } = this._config.comscore;
	        if (comscore) {
	            this._config.footer.elements.push({
	                order: 2,
	                element: `<span>An Elite ${comscoreMessage} Publisher</span>`,
	            });
	        }
	    }
	};
	ComscoreComponent = __decorate([
	    log('ComscoreFooterComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [Config])
	], ComscoreComponent);

	let ConfiantRefreshExperiment = class ConfiantRefreshExperiment extends Experiment {
	    constructor(abgroup) {
	        super();
	        this._result = false;
	        this.key = 'confiant';
	        this._choices = [{ choice: true }, { choice: false }];
	        this._result = this.run();
	        abgroup.set(this.key, this._result ? 'exp' : 'prod');
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new BernoulliTrial(0.1).get();
	    }
	};
	__decorate([
	    sticky(),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", []),
	    __metadata("design:returntype", void 0)
	], ConfiantRefreshExperiment.prototype, "run", null);
	ConfiantRefreshExperiment = __decorate([
	    log('ConfiantRefreshExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup])
	], ConfiantRefreshExperiment);

	let ConfiantEndpointExperiment = class ConfiantEndpointExperiment extends Experiment {
	    constructor(abgroup) {
	        super();
	        this._result = false;
	        this.key = 'cnfep';
	        this._choices = [{ choice: true }, { choice: false }];
	        this._result = this.run();
	        abgroup.set(this.key, this._result ? 'on' : 'off');
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new BernoulliTrial(1).get();
	    }
	};
	ConfiantEndpointExperiment = __decorate([
	    log('ConfiantEndpointExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup])
	], ConfiantEndpointExperiment);

	let ConfiantComponent = class ConfiantComponent extends Component {
	    constructor(_config, _confiantRefreshExperiment, _confiantEndpointExperiment) {
	        super();
	        this._config = _config;
	        this._confiantRefreshExperiment = _confiantRefreshExperiment;
	        this._confiantEndpointExperiment = _confiantEndpointExperiment;
	        this._prodPropertyId = 'mOinGM9MTu5v-Lto835XLhlrSPY';
	        this._expPropertyId = 'wyN88rwU6FImxcXgha7IWE-FzsE';
	        this._trackerHoldoutKey = 'conf';
	    }
	    init() {
	        const id = this._confiantRefreshExperiment.result ? this._expPropertyId : this._prodPropertyId;
	        const path = this._confiantEndpointExperiment.result ? 'gpt_and_prebid/config.js' : 'gpt_and_prebid_v3l/config.js';
	        const url = `https://confiant-integrations.global.ssl.fastly.net/${id}/${path}`;
	        return importScript(url);
	    }
	    get enabled() {
	        return this._config.tkho.tracker !== this._trackerHoldoutKey;
	    }
	};
	ConfiantComponent = __decorate([
	    log('ConfiantComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [Config,
	        ConfiantRefreshExperiment,
	        ConfiantEndpointExperiment])
	], ConfiantComponent);

	let ConfigTargetingComponent = class ConfigTargetingComponent extends Component {
	    constructor(_config, _gam) {
	        super();
	        this._config = _config;
	        this._gam = _gam;
	        this.debug = false;
	        this.debug = this._config.context.debug;
	    }
	    getConfigTargeting() {
	        const config = this._config;
	        const context = this._config.context;
	        const debug = this.debug;
	        return [
	            ...config.gam.targeting,
	            { key: 'abgroup', value: config.abGroup.groups },
	            { key: 'bucket', value: debug ? 'unsupported' : context.bucket },
	            { key: 'sens', value: config.site.sensitiveCategories },
	            { key: 'domain', value: context.domain },
	            { key: 'plugin', value: context.plugin },
	            { key: 'hi_au', value: config.adTypes.enabledMinified },
	            { key: 'vpwxvph', value: `${window.innerWidth}x${window.innerHeight}` },
	            {
	                key: 'ri',
	                value: context.querystring.has('ri') ? context.querystring.get('ri') : String(Math.floor(Math.random() * 100)),
	            },
	            { key: 'pvk', value: context.pageviewKey },
	            { key: 'sess', value: context.sessionKey },
	            { key: 'branch', value: context.branch },
	            { key: 'deployment', value: debug || context.invalidTraffic ? 'unsupported' : context.deployment },
	            { key: 'hbho', value: config.hbho.bidders },
	            { key: 'vbho', value: config.vbho.bidders },
	            { key: 'gptv', value: googletag.getVersion() },
	        ];
	    }
	    getConditionalTargeting() {
	        const conditionalTargeting = [];
	        const context = this._config.context;
	        const site = this._config.site;
	        const ccpa = this._config.ccpa;
	        if (site.sensCategoriesOff.length) {
	            conditionalTargeting.push({ key: 'sens_off', value: site.sensCategoriesOff });
	        }
	        if (context.connectionTargeting.length) {
	            conditionalTargeting.push({
	                key: 'connection',
	                value: context.connectionTargeting,
	            });
	        }
	        if (ccpa.required) {
	            conditionalTargeting.push({ key: 'ccpaOptOut', value: ccpa.userOptedOut ? '1' : '0' });
	        }
	        return conditionalTargeting;
	    }
	    setConditionalFlagTargeting() {
	        const context = this._config.context;
	        if (context.invalidTraffic) {
	            this._gam.setTargetingFlag('bot', context.invalidTraffic);
	        }
	        if (context.adsMinLoadDuration) {
	            this._gam.setTargetingFlag('adsmnche', context.adsMinLoadDuration);
	        }
	        if (this._config.adOptions.pmp) {
	            this._gam.setTargetingFlag('pmp_elig', ['1']);
	        }
	        if (this._config.clsOptions) {
	            this._gam.setTargetingFlag('clson', [this._config.clsOptions.injectedFromPlugin ? 'true' : 'false']);
	            this._gam.setTargetingFlag('clsBranch', [this._config.clsOptions.branch ? this._config.clsOptions.branch : '']);
	            this._gam.setTargetingFlag('clsBucket', [this._config.clsOptions.bucket ? this._config.clsOptions.bucket : '']);
	        }
	        if (context.integration) {
	            this._gam.setTargetingFlag('integration', [context.integration]);
	        }
	    }
	    init() {
	        GoogleAdManager.pushToQueue(() => {
	            this._gam.setTargeting([...this.getConfigTargeting(), ...this.getConditionalTargeting()]);
	            this.setConditionalFlagTargeting();
	        });
	    }
	};
	ConfigTargetingComponent = __decorate([
	    log('ConfigTargetingComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [Config, GoogleAdManager])
	], ConfigTargetingComponent);

	let ConfirmedClicksComponent = class ConfirmedClicksComponent extends Component {
	    constructor(_gam, _slots) {
	        super();
	        this._gam = _gam;
	        this._slots = _slots;
	    }
	    init() {
	        this._gam.slotRenderEnded.on(event => this.confirmedClickOverlay(event));
	    }
	    confirmedClickOverlay({ event, slot }) {
	        GoogleAdManager.pushToQueue(() => {
	            const { id, location, sequence, nref } = slot.getTargetingMap();
	            const confirmedClick = this.confirmedClickStatus(this._slots.get(event.slot.getSlotElementId()));
	            if (isAdXAd({ event, ignoreOtherCompanyIds: true }) && confirmedClick) {
	                logger.event('confirmedClickOverlay', 'status', {
	                    id,
	                    location,
	                    sequence,
	                    nref,
	                    confirmedClick,
	                });
	            }
	        });
	    }
	    confirmedClickStatus(slot) {
	        const confirmedClickElements = ['common_15click_overlay', 'common_15click_anchor'];
	        try {
	            const nodes = slot === null || slot === void 0 ? void 0 : slot.element.querySelectorAll('iframe[id^=google_ads_iframe]');
	            let gamAdIframe;
	            if (nodes && (nodes === null || nodes === void 0 ? void 0 : nodes.length) > 0) {
	                gamAdIframe = nodes[0];
	            }
	            return confirmedClickElements.some(elm => { var _a; return ((_a = gamAdIframe === null || gamAdIframe === void 0 ? void 0 : gamAdIframe.contentDocument) === null || _a === void 0 ? void 0 : _a.getElementById(elm)) != null; });
	        }
	        catch (err) {
	            logger.error('ConfirmedClickComponent', 'confirmedClickStatus', err);
	        }
	        return false;
	    }
	};
	ConfirmedClicksComponent = __decorate([
	    log('ConfirmedClicksComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [GoogleAdManager, Slots])
	], ConfirmedClicksComponent);

	let DeclaredRefreshComponent = class DeclaredRefreshComponent extends Component {
	    constructor(_config, _gam, _slotManager) {
	        super();
	        this._config = _config;
	        this._gam = _gam;
	        this._slotManager = _slotManager;
	        this._device = this._config.context.device;
	    }
	    init() {
	        const slotManager = this._slotManager;
	        this._gam.slotRenderEnded.on(({ event, slot }) => {
	            if (this.isDeclaredRefreshCompliantSlot(slot)) {
	                if (isAdXAd({ event })) {
	                    slotManager.updateRefreshTimeout(slot.id, 240000);
	                }
	            }
	        });
	        slotManager.added.on(slots => slots.forEach(slot => {
	            if (this.isDeclaredRefreshCompliantSlot(slot)) {
	                GoogleAdManager.pushToQueue(() => {
	                    slot.setTargeting({ key: 'decref', value: '240' });
	                });
	            }
	        }));
	    }
	    isDeclaredRefreshCompliantSlot(slot) {
	        return ((slot.location === 'Sidebar' && (this._device === 'phone' || this._device === 'tablet')) ||
	            (slot.location === 'Header' && slot.sequence === 2 && (this._device === 'phone' || this._device === 'tablet')));
	    }
	};
	DeclaredRefreshComponent = __decorate([
	    log('DeclaredRefreshComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [Config, GoogleAdManager, SlotManager])
	], DeclaredRefreshComponent);

	let StickyOutstreamExperiment = class StickyOutstreamExperiment extends Experiment {
	    constructor(abgroup) {
	        super();
	        this._result = false;
	        this.key = 'stkyos';
	        this._choices = [{ choice: true }, { choice: false }];
	        this._result = this.run();
	        abgroup.set(this.key, this._result ? 'on' : 'off');
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new BernoulliTrial(0.95).get();
	    }
	};
	__decorate([
	    sticky(),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", []),
	    __metadata("design:returntype", void 0)
	], StickyOutstreamExperiment.prototype, "run", null);
	StickyOutstreamExperiment = __decorate([
	    log('StickyOutstreamExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup])
	], StickyOutstreamExperiment);

	class BaseDynamicAdsInjector {
	    constructor() {
	        this._totalContentInserted = 0;
	        this._recipeCount = 0;
	        this._mainContentHeight = 0;
	        this._mainContentDiv = null;
	        this._firstContentDiv = null;
	        this._totalAvailableElements = 0;
	        this._densityDevice = DensityDevice.Desktop;
	        this._pubLog = { onePerViewport: false, targetDensity: 0, targetDensityUnits: 0, combinedMax: 0 };
	        this._densityMax = 0.99;
	        this.locationMaxLazySequence = new Map([
	            ['Recipe', 5],
	            ['Below_Post', 1],
	        ]);
	    }
	    inject(dynamicAds, target = document) {
	        if (window.adthriveCLS && window.adthriveCLS.targetDensityLog) {
	            logger.event('BaseDynamicAdsInjector', '_logDensityInfo', window.adthriveCLS.targetDensityLog);
	        }
	        const targetDensityEnabled = this._config.targetDensity.enabled;
	        const nonDensitySlots = dynamicAds.filter(dynamicAd => (targetDensityEnabled ? dynamicAd.location !== 'Content' : dynamicAd));
	        const densitySlots = dynamicAds.filter(dynamicAd => (targetDensityEnabled ? dynamicAd.location === 'Content' : null));
	        return [
	            ...(nonDensitySlots.length ? this._injectNonDensitySlots(nonDensitySlots, target) : []),
	            ...(densitySlots.length ? this._injectDensitySlots(densitySlots, target) : []),
	        ];
	    }
	    _injectNonDensitySlots(dynamicAds, target = document) {
	        const slots = [];
	        for (const dynamicAd of dynamicAds) {
	            let spacing = 0;
	            let nextAfter = 0;
	            let totalAds = 0;
	            if (dynamicAd.spacing > 0) {
	                spacing = window.innerHeight * dynamicAd.spacing;
	                nextAfter = spacing;
	            }
	            const repeatedDynamicAds = this._repeatDynamicAds(dynamicAd);
	            const elements = this.getElements(dynamicAd.elementSelector, target);
	            logger.info('BaseDynamicAdsInjector', '_injectNonDensitySlots', `${dynamicAd.location} - Found ${elements.length} elements for selector ${dynamicAd.pageSelector} ${dynamicAd.elementSelector}`, dynamicAd);
	            if (dynamicAd.skip > 0) {
	                logger.info('BaseDynamicAdsInjector', '_injectNonDensitySlots', 'Skipping %d element(s)', dynamicAd.skip);
	            }
	            for (let elementIndex = dynamicAd.skip; elementIndex < elements.length; elementIndex += dynamicAd.every) {
	                if (totalAds + 1 > repeatedDynamicAds.length) {
	                    logger.info('BaseDynamicAdsInjector', '_injectNonDensitySlots', 'Max ads displayed %d', totalAds);
	                    break;
	                }
	                let element = elements[elementIndex];
	                if (spacing > 0) {
	                    const { bottom } = elementOffset(element);
	                    if (bottom <= nextAfter) {
	                        continue;
	                    }
	                    logger.info('BaseDynamicAdsInjector', '_injectNonDensitySlots', 'Current element is after next spacing (%d > %d)', bottom, nextAfter);
	                    nextAfter = bottom + spacing;
	                }
	                const repeatedDynamicAd = repeatedDynamicAds[totalAds];
	                const name = `${repeatedDynamicAd.location}_${repeatedDynamicAd.sequence}`;
	                if (slots.some(slot => slot.name === name)) {
	                    totalAds += 1;
	                    logger.warn('BaseDynamicAdsInjector', '_injectNonDensitySlots', `Skipping duplicate slot ${name}`);
	                    continue;
	                }
	                const dynamicElementId = this.getDynamicElementId(repeatedDynamicAd);
	                const locationClassName = `adthrive-${dynamicAd.location.replace('_', '-').toLowerCase()}`;
	                const locationSequenceClassName = `${locationClassName}-${dynamicAd.sequence}`;
	                const classNames = [locationClassName, locationSequenceClassName, ...dynamicAd.classNames];
	                const dynamicElement = this.addAd(element, dynamicElementId, dynamicAd.position, classNames, dynamicAd.location);
	                if (dynamicElement) {
	                    const sizes = this._filterAdUnitSizes(repeatedDynamicAd, dynamicElement);
	                    if (sizes.length) {
	                        slots.push(this.createSlot(repeatedDynamicAd, dynamicElement, sizes, target !== document));
	                        if (dynamicAd.location === 'Recipe') {
	                            ++this._recipeCount;
	                        }
	                        totalAds += 1;
	                    }
	                    else {
	                        logger.info('BaseDynamicAdsInjector', '_injectNonDensitySlots', `Skipped ad unit ${repeatedDynamicAd.location}_${repeatedDynamicAd.sequence}. It does not fit in the element.`);
	                    }
	                    element = dynamicElement;
	                }
	            }
	        }
	        return slots;
	    }
	    _getMinDivHeight(location = 'Content') {
	        return this._config.clsOptimizedAds.getDivHeight(location, this._config.context.device);
	    }
	    _shouldTargetAllElgibile(density) {
	        return density === this._densityMax;
	    }
	    _injectDensitySlots(dynamicAds, target = document) {
	        try {
	            this._calculateMainContentHeightAndAllElements(dynamicAds);
	        }
	        catch (e) {
	            logger.warn('BaseDynamicAdsInjector', 'injectDensitySlots', e);
	            return [];
	        }
	        this._densityDevice = this._config.context.device === 'desktop' ? DensityDevice.Desktop : DensityDevice.Mobile;
	        const slots = [];
	        const { adDensity: targetDensity, onePerViewport } = this._getDensitySettings();
	        const targetAll = this._shouldTargetAllElgibile(targetDensity);
	        const targetDensityUnits = this._getTargetDensityUnits(targetDensity);
	        const combinedMax = this._getCombinedMax(dynamicAds);
	        const numberOfUnits = Math.min(...[this._totalAvailableElements, targetDensityUnits, ...(combinedMax > 0 ? [combinedMax] : [])]);
	        this._pubLog = { onePerViewport, targetDensity, targetDensityUnits, combinedMax };
	        if (!numberOfUnits) {
	            logger.warn('BaseDynamicAdsInjector', 'injectDensitySlots', 'No Content Units To Inject', {
	                ...this._pubLog,
	                mainContentDiv: this._mainContentDiv,
	                mainContentHeight: this._mainContentHeight,
	                totalAvailableElements: this._totalAvailableElements,
	            });
	            return [];
	        }
	        let contentInsertedThisPage = 0;
	        let insertNext = 0;
	        for (const dynamicAd of dynamicAds) {
	            const elements = this.getElements(dynamicAd.elementSelector, target);
	            const insertEvery = this._getInsertEvery(numberOfUnits, onePerViewport);
	            this._logDensityInfo(elements, dynamicAd.elementSelector, insertEvery);
	            const dynamicInsertion = (element) => {
	                let slot = null;
	                ({ insertNext, slot } = this._attemptInsertion({
	                    dynamicAd,
	                    element,
	                    insertNext,
	                    onePerViewport,
	                    contentInsertedThisPage,
	                    target,
	                    insertEvery,
	                    targetAll,
	                }));
	                if (slot) {
	                    slots.push(slot);
	                    ++contentInsertedThisPage;
	                }
	            };
	            if (dynamicAd.skip > 0) {
	                logger.info('BaseDynamicAdsInjector', '_injectDensitySlots', 'Skipping %d element(s)', dynamicAd.skip);
	            }
	            for (let t = dynamicAd.skip; t < elements.length; t++) {
	                const element = elements[t];
	                if (element.offsetHeight >= this._mainContentHeight && this._totalAvailableElements > 1) {
	                    continue;
	                }
	                else if (contentInsertedThisPage < combinedMax && contentInsertedThisPage < targetDensityUnits) {
	                    dynamicInsertion(element);
	                }
	                else {
	                    logger.info('BaseDynamicAdsInjector', '_injectDensitySlots', 'Content Inserted >= Number of Units to Inject, breaking');
	                    break;
	                }
	            }
	        }
	        logger.info('BaseDynamicAdsInjector', '_injectDensitySlots', 'Ad Density: contentInsertedThisPage', contentInsertedThisPage);
	        return slots;
	    }
	    _getInsertEvery(numberOfUnits, onePerViewport) {
	        const trimContentFraction = 0.43;
	        const insert = (this._mainContentHeight * trimContentFraction) / numberOfUnits;
	        return onePerViewport && window.innerHeight > insert ? window.innerHeight : insert;
	    }
	    _getDensitySettings() {
	        const densitySettings = this._config.targetDensity.settings;
	        const overrides = this._determineOverrides(densitySettings.pageOverrides);
	        return overrides.length ? overrides[0] : densitySettings[this._densityDevice];
	    }
	    _determineOverrides(pageOverrides) {
	        return pageOverrides
	            .filter(pageOverride => {
	            const selector = allowablePageSelector(pageOverride.pageSelector);
	            return pageOverride.pageSelector === '' || (selector.elements && selector.elements.length);
	        })
	            .map(pageOverride => pageOverride[this._densityDevice]);
	    }
	    _getTargetDensityUnits(targetDensity) {
	        return Math.floor((targetDensity * this._mainContentHeight) / (1 - targetDensity) / this._getMinDivHeight()) - this._recipeCount;
	    }
	    _getCombinedMax(dynamicAds) {
	        return defaultTo(dynamicAds
	            .filter(dynamicAd => {
	            let el;
	            try {
	                el = document.querySelector(dynamicAd.elementSelector);
	            }
	            catch (err) {
	                logger.info('BaseDynamicAdsInjector', '_getCombinedMax', 'Invalid Query Selector: ', dynamicAd.elementSelector);
	            }
	            return el;
	        })
	            .map(dynamicAd => dynamicAd.max + (dynamicAd.lazyMaxDefaulted ? 0 : dynamicAd.lazyMax))
	            .sort((a, b) => b - a)[0], 0);
	    }
	    _logDensityInfo(elements, elementSelector, insertEvery) {
	        const { onePerViewport, targetDensity, targetDensityUnits, combinedMax } = this._pubLog;
	        logger.info('BaseDynamicAdsInjector', '_logDensityInfo', 'Ad Density: Top Level Report', `\nOnePerViewport: ${onePerViewport}`, `\nTarget Density: ${targetDensity}`, `\nMain Content Height ${this._mainContentHeight}px`, `\nRecipe Units: ${this._recipeCount}`, `\nAvailable Elements based on Selectors: ${elements.length}`, `\nNumber of Units to Hit Density: ${targetDensityUnits}`, `\nNumber of pixels between each ad (relevant for onePerViewport setting): ${insertEvery}px`, `\nCombined max calculated from Admin Dash: ${combinedMax}`, '\nElement Selector: ', elementSelector, '\nActual elements we are working with: ', elements);
	        if (this._totalAvailableElements < targetDensityUnits) {
	            logger.info('BaseDynamicAdsInjector', '_logDensityInfo', `Only ${this._totalAvailableElements} available elements. Target density would yield: ${targetDensityUnits}`);
	        }
	        logger.event('BaseDynamicAdsInjector', '_logDensityInfo', {
	            onePerViewport,
	            combinedMax,
	            targetDensityUnits,
	            targetDensityPercentage: targetDensity,
	            mainContentHeight: this._mainContentHeight,
	            recipeCount: this._recipeCount,
	            numberOfEls: elements.length,
	        });
	    }
	    _attemptInsertion({ dynamicAd, element, insertNext, onePerViewport, contentInsertedThisPage, target, insertEvery, targetAll, }) {
	        let slot = null;
	        const elementSpacedCorrectly = this._isElementSpacedCorrectly(element, insertNext, onePerViewport, dynamicAd, targetAll, insertEvery);
	        logger.info('BaseDynamicAdsInjector', '_attemptInsertion', 'Ad Density: _isElementSpacedCorrectly', element, elementSpacedCorrectly);
	        if (elementSpacedCorrectly) {
	            const newDynamicAd = {
	                ...dynamicAd,
	                sequence: this._totalContentInserted + 1,
	                lazy: dynamicAd.lazy && contentInsertedThisPage >= dynamicAd.max,
	            };
	            ({ insertedSlot: slot, insertNext } = this._addContentAd(element, newDynamicAd, target, insertEvery));
	        }
	        return { insertNext, slot };
	    }
	    _isElementSpacedCorrectly(element, insertNext, onePerViewport, dynamicAd, targetAll, insertEvery) {
	        const shouldInsertAtTop = dynamicAd.position === 'beforebegin' || dynamicAd.position === 'afterbegin';
	        const shouldSkipRowCheck = dynamicAd.position === 'beforeend' || dynamicAd.position === 'afterbegin';
	        const isFarEnoughFromPreviousInjection = targetAll || this._isElementFarEnough(onePerViewport, element, insertNext, shouldInsertAtTop, insertEvery);
	        const isNotInSameRowAsNextElement = shouldSkipRowCheck || this._isElementNotInRow(element, shouldInsertAtTop);
	        const isElementSpacedCorrectly = isFarEnoughFromPreviousInjection && isNotInSameRowAsNextElement;
	        if (isElementSpacedCorrectly) {
	            this._lastElement = element;
	            this._lastAdPosition = dynamicAd.position === 'beforebegin' || dynamicAd.position === 'afterbegin' ? 'top' : 'bottom';
	        }
	        logger.info('BaseDynamicAdsInjector', '_isElementSpacedCorrectly', 'Ad Density: _isElementSpacedCorrectly', element, isElementSpacedCorrectly);
	        return isElementSpacedCorrectly;
	    }
	    _getMinimumSpacingByLastInjection(insertEvery) {
	        return this._lastAdPosition && this._lastAdPosition === 'bottom' && insertEvery < this._getMinDivHeight() ? this._getMinDivHeight() : 0;
	    }
	    _isElementFarEnough(onePerViewport, element, insertNext, shouldInsertAtTop, insertEvery) {
	        const offset = elementOffset(element);
	        const spacing = this._getMinimumSpacingByLastInjection(insertEvery);
	        const lastOffset = this._lastElement ? elementOffset(this._lastElement)['bottom'] : 0;
	        const elementEdge = shouldInsertAtTop ? offset.top : offset.bottom;
	        const isFarEnough = elementEdge > insertNext && (lastOffset === 0 || elementEdge - lastOffset >= insertEvery + spacing);
	        if (!onePerViewport && !isFarEnough) {
	            logger.info('BaseDynamicAdsInjector', '_isElementFarEnough', `Ad Density: The onePerViewport setting is false, and the element edge at ${elementEdge}px is less than our next minimum insertion point located at ${insertNext}.`, element);
	        }
	        return isFarEnough;
	    }
	    _isElementNotInRow(element, shouldInsertAtTop) {
	        const prevSibling = element.previousElementSibling;
	        const nextSibling = element.nextElementSibling;
	        const sibling = shouldInsertAtTop
	            ? (!prevSibling && nextSibling) || (prevSibling && element.tagName !== prevSibling.tagName)
	                ? nextSibling
	                : prevSibling
	            : nextSibling;
	        return sibling && element.getBoundingClientRect().height === 0
	            ? true
	            : sibling
	                ? element.getBoundingClientRect().top !== sibling.getBoundingClientRect().top
	                : true;
	    }
	    _calculateMainContentHeightAndAllElements(dynamicAds) {
	        const { mainContentDiv, firstContentDiv } = this._setMainContentAndElements(dynamicAds);
	        this._mainContentDiv = mainContentDiv;
	        this._firstContentDiv = firstContentDiv;
	        const commentElem = this._mainContentDiv.querySelector('div #comments, section .comments');
	        this._mainContentHeight = commentElem ? this._mainContentDiv.offsetHeight - commentElem.offsetHeight : this._mainContentDiv.offsetHeight;
	    }
	    _setMainContentAndElements(dynamicAds) {
	        const potentialMainContentElements = this._getPotentialElements(dynamicAds);
	        if (potentialMainContentElements.length === 0) {
	            throw Error('No Main Content Elements Found');
	        }
	        const mainContentDiv = Array.from(potentialMainContentElements).reduce((previous, current) => (current.offsetHeight > previous.offsetHeight ? current : previous)) ||
	            document.body;
	        const firstContentDiv = Array.from(potentialMainContentElements).reduce((previous, current) => elementOffset(current).top < elementOffset(previous).top ? current : previous);
	        return { mainContentDiv, firstContentDiv };
	    }
	    _getPotentialElements(dynamicAds) {
	        const article = this._attemptArticleLookup();
	        const potentialMainContentElements = article ? [article] : [];
	        dynamicAds.forEach(dynamicAd => {
	            return this._getSelectors(dynamicAd.elementSelector).forEach(selector => {
	                const els = document.querySelectorAll(selector);
	                for (let k = 0; k < els.length; k++) {
	                    if (els[k] && els[k].parentElement && els[k].parentElement !== document.body) {
	                        potentialMainContentElements.push(els[k].parentElement);
	                    }
	                    else {
	                        potentialMainContentElements.push(els[k]);
	                    }
	                    ++this._totalAvailableElements;
	                }
	            });
	        });
	        return potentialMainContentElements;
	    }
	    _attemptArticleLookup() {
	        const articles = document.querySelectorAll('article');
	        if (articles.length === 0) {
	            return null;
	        }
	        const content = Array.from(articles).reduce((previous, current) => (current.offsetHeight > previous.offsetHeight ? current : previous));
	        const oneAndAHalfViewports = 1.5;
	        if (content && content.offsetHeight > window.innerHeight * oneAndAHalfViewports) {
	            logger.info('BaseDynamicAdsInjector', '_attemptArticleLookup', 'mainContent', content.offsetHeight, content);
	            return content;
	        }
	        return null;
	    }
	    _getSelectors(elementSelector) {
	        return elementSelector.indexOf(',') > -1 ? elementSelector.split(',') : [elementSelector];
	    }
	    _addContentAd(element, dynamicAd, target = document, insertEvery) {
	        let insertedSlot = null;
	        const locationClassName = `adthrive-${dynamicAd.location.replace('_', '-').toLowerCase()}`;
	        const locationSequenceClassName = `${locationClassName}-${dynamicAd.sequence}`;
	        const adElement = this.addAd(element, this.getDynamicElementId(dynamicAd), dynamicAd.position, [locationClassName, locationSequenceClassName, ...dynamicAd.classNames], dynamicAd.location);
	        const insertNext = this._getNextInsertPosition(dynamicAd.position, adElement, insertEvery);
	        if (adElement) {
	            const sizes = this._filterAdUnitSizes(dynamicAd, adElement);
	            if (sizes.length) {
	                insertedSlot = this.createSlot(dynamicAd, adElement, sizes, target !== document);
	                ++this._totalContentInserted;
	            }
	            else {
	                logger.info('BaseDynamicAdsInjector', '_addContentAd', 'Skipped ad unit..... It does not fit in the element.');
	            }
	        }
	        return { insertedSlot, insertNext };
	    }
	    _getNextInsertPosition(position, element, insertEvery) {
	        const rect = element.getBoundingClientRect();
	        const pageHeight = window.pageYOffset;
	        const pos = (position === 'beforebegin' || position === 'afterbegin' ? rect.top : rect.bottom) + pageHeight;
	        return pos + insertEvery - this._getMinDivHeight();
	    }
	    getElements(selector, target = document) {
	        return target.querySelectorAll(selector);
	    }
	    _filterAdUnitSizes(dynamicAd, element) {
	        const width = elementInnerWidth(element);
	        const stickySidebar = dynamicAd.sticky && dynamicAd.location === 'Sidebar';
	        return dynamicAd.sizes.filter(size => {
	            const autosize = dynamicAd.autosize ? size[0] <= width || size[0] <= 320 : true;
	            const stickyFit = stickySidebar ? size[1] <= window.innerHeight - 100 : true;
	            return autosize && stickyFit;
	        });
	    }
	    createSlot({ location, sequence, sticky, lazy, stickyOverlapSelector, special, auctionPriority }, element, sizes, infinite) {
	        return new Slot(location, sequence, sizes, element, sticky, lazy, auctionPriority, stickyOverlapSelector, special, true, infinite);
	    }
	    _repeatDynamicAds(dynamicAd) {
	        const repeatedDynamicAds = [];
	        const maxLazySequence = dynamicAd.lazy ? defaultTo(this.locationMaxLazySequence.get(dynamicAd.location), 0) : 0;
	        const initialMax = dynamicAd.max;
	        const lazyMax = maxLazySequence === 0 && dynamicAd.lazy
	            ? initialMax + dynamicAd.lazyMax
	            : Math.min(Math.max(maxLazySequence - dynamicAd.sequence + 1, 0), initialMax + dynamicAd.lazyMax);
	        const max = Math.max(initialMax, lazyMax);
	        for (let dynamicSequence = 0; dynamicSequence < max; dynamicSequence++) {
	            const sequence = dynamicAd.sequence + dynamicSequence;
	            const lazy = dynamicAd.lazy && dynamicSequence >= initialMax;
	            repeatedDynamicAds.push({ ...dynamicAd, ...{ sequence, lazy } });
	        }
	        return repeatedDynamicAds;
	    }
	    addAd(element, id, position, classNames = [], location) {
	        var _a;
	        let tag = `<div id="${id}" class="adthrive-ad ${classNames.join(' ')}"></div>`;
	        if (location === 'Video_StickyOutstream') {
	            const deviceClass = id.indexOf('phone') > -1 ? 'mobile' : 'desktop';
	            tag = `<div class="adthrive-sticky-outstream adthrive-sticky-outstream-${deviceClass}">` + tag + '</div>';
	        }
	        if ((_a = window.adthriveCLS) === null || _a === void 0 ? void 0 : _a.injectedSlots.some(slot => slot.element.id === id)) {
	            logger.info('BaseDynamicAdsInjector', 'addAd', `Skipped ${id}. Element already exists on page.`);
	        }
	        else {
	            element.insertAdjacentHTML(position, tag);
	        }
	        return document.getElementById(id);
	    }
	}

	let DynamicAdsInjector = class DynamicAdsInjector extends BaseDynamicAdsInjector {
	    constructor(_config) {
	        super();
	        this._config = _config;
	    }
	    getDynamicElementId(dynamicAd) {
	        return `${this._config.gam.prefix}_${dynamicAd.location}_${dynamicAd.sequence}_${this._config.context.device}`;
	    }
	};
	DynamicAdsInjector = __decorate([
	    log('DynamicAdsInjector'),
	    injectable(),
	    __metadata("design:paramtypes", [Config])
	], DynamicAdsInjector);

	let DynamicAdsComponent = class DynamicAdsComponent extends Component {
	    constructor(_config, _injector, _slotManager, _gam) {
	        super();
	        this._config = _config;
	        this._injector = _injector;
	        this._slotManager = _slotManager;
	        this._gam = _gam;
	        this._stickyOutstreamExperimentResult = false;
	    }
	    hasClsInjectedContent() {
	        if (window.adthriveCLS && window.adthriveCLS.injectedSlots.length) {
	            for (const slot of window.adthriveCLS.injectedSlots) {
	                if (slot.name.indexOf('Content') !== -1) {
	                    return true;
	                }
	            }
	        }
	        return false;
	    }
	    start() {
	        this.runStickyOutstreamExperiment();
	        const hasClsInjectedContent = this.hasClsInjectedContent();
	        const dynamicAds = this._config.dynamicAds
	            .filter(dynamicAd => this.locationEnabled(dynamicAd))
	            .filter(dynamicAd => this.forDevice(dynamicAd, this._config.context.device))
	            .filter(dynamicAd => !hasClsInjectedContent || (hasClsInjectedContent && dynamicAd.location !== 'Content'))
	            .filter(dynamicAd => dynamicAd.location === 'Interstitial' || dynamicAd.location === 'Video_StickyOutstream'
	            ? this.forPageBlocks(dynamicAd.pageSelector)
	            : this.forPage(dynamicAd))
	            .filter(dynamicAd => !this.pluginInjected(dynamicAd))
	            .filter(dynamicAd => dynamicAd.location !== 'Video_StickyOutstream' || !this.shouldFilterStickyOutstream());
	        let dynamicSlots = this._injector.inject(dynamicAds);
	        if (this._config.clsOptions && this._config.clsOptions.enabled) {
	            const clsSlots = [];
	            this._config.clsOptions.injectedSlots.forEach(slot => {
	                if (!dynamicSlots.some(dynamicSlot => dynamicSlot.name === slot.name)) {
	                    logger.info('DynamicAdsComponent', 'start', 'CLS Injection: created slot from plugin data', slot);
	                    clsSlots.push(this._injector.createSlot(slot.dynamicAd, slot.element, slot.sizes, slot.infinite));
	                }
	            });
	            dynamicSlots = dynamicSlots.concat(clsSlots);
	        }
	        this._slotManager.add(dynamicSlots).catch(reason => {
	            logger.error('DynamicAdsComponent', 'start', 'add', reason);
	        });
	    }
	    get enabled() {
	        return this._config.dynamicAds.length > 0;
	    }
	    runStickyOutstreamExperiment() {
	        if (!this._config.video.preventStickyOutstream) {
	            this._stickyOutstreamExperimentResult = instance.resolve(StickyOutstreamExperiment).result;
	            this._gam.setTargeting({ key: 'abgroup', value: this._config.abGroup.groups.join(',') });
	        }
	    }
	    shouldFilterStickyOutstream() {
	        this.runStickyOutstreamExperiment();
	        if (!this._stickyOutstreamExperimentResult || this._config.disableAds.video || isFrontpage()) {
	            return true;
	        }
	        this._config.video.hasStickyOutstream = true;
	        return false;
	    }
	    pluginInjected(dynamicAd) {
	        const stringifiedDynamicAd = JSON.stringify(dynamicAd);
	        return this._config.clsOptions && this._config.clsOptions.injectedSlots.some(slot => JSON.stringify(slot.clsDynamicAd) === stringifiedDynamicAd);
	    }
	    forDevice(dynamicAdUnit, device) {
	        return dynamicAdUnit.devices.indexOf(device) !== -1;
	    }
	    forPage(dynamicAdUnit) {
	        return dynamicAdUnit.pageSelector.length === 0 || document.querySelector(dynamicAdUnit.pageSelector) !== null;
	    }
	    forPageBlocks(blockedSelectors) {
	        return blockedSelectors.length === 0 || !blockedSelectors.split(',').some(selector => document.querySelector(selector) !== null);
	    }
	    locationEnabled(dynamicAdUnit) {
	        return !this._config.disableAds.locations.has(dynamicAdUnit.location) && !this._config.disableAds.all;
	    }
	};
	DynamicAdsComponent = __decorate([
	    log('DynamicAdsComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [Config,
	        DynamicAdsInjector,
	        SlotManager,
	        GoogleAdManager])
	], DynamicAdsComponent);

	let ExternalSlotsComponent = class ExternalSlotsComponent extends Component {
	    constructor(_config, _gam) {
	        super();
	        this._config = _config;
	        this._gam = _gam;
	    }
	    init() {
	        this._gam.slotOnload
	            .once()
	            .then(() => this.refreshExternal())
	            .catch(reason => {
	            logger.error('ExternalSlotsComponent', 'init', reason);
	        });
	    }
	    refreshExternal() {
	        GoogleAdManager.pushToQueue(() => {
	            const { account } = this._config.gam;
	            const slots = googletag.pubads().getSlots();
	            const external = slots
	                .filter(slot => RegExp(`^\/?${account}\/`).exec(slot.getAdUnitPath()) === null)
	                .filter(slot => document.getElementById(slot.getSlotElementId()) !== null);
	            if (external.length) {
	                googletag.pubads().refresh(external);
	            }
	        });
	    }
	};
	ExternalSlotsComponent = __decorate([
	    log('ExternalSlotsComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [Config, GoogleAdManager])
	], ExternalSlotsComponent);

	let FirstPageviewComponent = class FirstPageviewComponent extends Component {
	    constructor(_gam) {
	        super();
	        this._gam = _gam;
	    }
	    init() {
	        const fpv = this.isFirstPageview() ? '1' : '0';
	        this._gam.setTargeting({ key: 'fpv', value: fpv });
	    }
	    isFirstPageview() {
	        let elapsed = 0;
	        try {
	            const fpv = localStorage.getItem('adthrive_fpv');
	            if (fpv) {
	                elapsed = Date.now() - Date.parse(fpv);
	            }
	            if (!fpv || elapsed > 1000 * 60 * 60 * 24) {
	                localStorage.setItem('adthrive_fpv', new Date().toString());
	                return true;
	            }
	        }
	        catch (err) {
	            logger.warn('FirstPageviewComponent', 'isFirstPageview', 'Unable to set adthrive_fpv', err);
	        }
	        return false;
	    }
	};
	FirstPageviewComponent = __decorate([
	    log('FirstPageviewComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [GoogleAdManager])
	], FirstPageviewComponent);

	let VideoRequestManager = class VideoRequestManager {
	    constructor(_auctionManagers) {
	        this._auctionManagers = _auctionManagers;
	        this.refreshingVideoBids = new Emitter();
	        this.requestingVideoBids = new Emitter();
	        this.requestingSekindoBids = new Emitter();
	    }
	    addVideoSlots(videos) {
	        this._auctionManagers.addVideoSlots(videos);
	    }
	    async requestVideoBids(videos, timeout) {
	        await this.requestingVideoBids.emit(videos).catch();
	        await this._determineIsRefreshing(videos).catch();
	        await this._auctionManagers.requestVideoBids(videos, timeout);
	    }
	    async _determineIsRefreshing(videos) {
	        const multiplePrerolls = videos.filter(video => video._prerollNum > 0);
	        if (multiplePrerolls.length) {
	            await this.refreshingVideoBids.emit(multiplePrerolls);
	        }
	    }
	};
	VideoRequestManager = __decorate([
	    log('VideoRequestManager'),
	    singleton(),
	    __metadata("design:paramtypes", [AuctionManagers])
	], VideoRequestManager);

	let FirstPartyDataComponent = class FirstPartyDataComponent extends Component {
	    constructor(_slotManager, _config, _prebidMethods, _videoRequestManager, _ortb2, _irisTv) {
	        super();
	        this._slotManager = _slotManager;
	        this._config = _config;
	        this._prebidMethods = _prebidMethods;
	        this._videoRequestManager = _videoRequestManager;
	        this._ortb2 = _ortb2;
	        this._irisTv = _irisTv;
	    }
	    init() {
	        this._slotManager.added
	            .once()
	            .then(() => {
	            this.setBidderSpecificFpd({
	                bidders: ['rubicon'],
	                fpdData: { refresh: ['false'], vp: '0' },
	            });
	            if (this._config.site.sensitiveCategories.length) {
	                this.setBidderSpecificFpd({
	                    bidders: ['triplelift', 'tripl_ss'],
	                    fpdData: { sens: this._config.site.filteredSensitiveCategories },
	                    addStaticFpd: false,
	                });
	            }
	            if (this._config.site.filteredSensitiveCategories.length) {
	                this.setBidderSpecificFpd({
	                    bidders: ['yahoossp'],
	                    fpdData: { sens: this._config.site.filteredSensitiveCategories },
	                    addStaticFpd: false,
	                });
	            }
	            if (this._config.site.filteredSensitiveCategories.length) {
	                this.setBidderSpecificFpd({
	                    bidders: ['yahoossp'],
	                    fpdData: { sens: this._config.site.filteredSensitiveCategories },
	                    addStaticFpd: false,
	                });
	            }
	        })
	            .catch(() => { });
	        this._slotManager.refreshing
	            .once()
	            .then(() => {
	            this.setBidderSpecificFpd({
	                bidders: ['rubicon'],
	                fpdData: { refresh: ['true'], vp: '0' },
	            });
	            this._prebidMethods.addToQueue(() => {
	                this.setIXRefresh();
	            });
	        })
	            .catch(() => { });
	        this._videoRequestManager.requestingVideoBids.on(videoPlayers => {
	            videoPlayers.forEach(() => {
	                const irisTv = this._irisTv;
	                const irisContextual = irisTv.irisContextualData;
	                if (irisContextual && irisContextual.length) {
	                    this.setBidderSpecificFpd({
	                        bidders: ['pubmatic', 'pubm_ss'],
	                        fpdData: {
	                            content: {
	                                id: irisTv.irisId,
	                            },
	                        },
	                        addStaticFpd: false,
	                        isExtData: false,
	                    });
	                }
	            });
	        });
	        this._videoRequestManager.refreshingVideoBids.on(videoPlayers => {
	            videoPlayers.forEach(videoPlayer => {
	                if (videoPlayer.vp > 0 && videoPlayer._prerollNum <= 10) {
	                    this.setBidderSpecificFpd({
	                        bidders: ['rubicon'],
	                        fpdData: { refresh: ['true'], vp: videoPlayer.vp.toString() },
	                    });
	                    this._prebidMethods.addToQueue(() => {
	                        this.setIXVPParam(videoPlayer.vp);
	                    });
	                }
	            });
	        });
	    }
	    setBidderSpecificFpd({ bidders, fpdData, addStaticFpd = true, location = 'site', isExtData = true }) {
	        const data = {
	            ...(addStaticFpd && {
	                ...this._ortb2._staticFirstPartyData,
	            }),
	            ...fpdData,
	        };
	        const fpd = isExtData
	            ? {
	                ext: {
	                    data,
	                },
	            }
	            : data;
	        this._prebidMethods.setBidderConfig({
	            bidders,
	            config: {
	                ortb2: {
	                    [location]: fpd,
	                },
	            },
	        });
	    }
	    setIXRefresh() {
	        const ix = this._prebidMethods.getConfig('ix');
	        if (ix && ix.firstPartyData && ix.firstPartyData.Refresh !== 'True') {
	            setIXFirstPartyData({ Refresh: 'True' }, this._prebidMethods);
	        }
	    }
	    setIXVPParam(vp) {
	        const ix = this._prebidMethods.getConfig('ix');
	        if (ix && ix.firstPartyData && vp > 0) {
	            setIXFirstPartyData({ vp: vp.toString() }, this._prebidMethods);
	        }
	    }
	};
	FirstPartyDataComponent = __decorate([
	    log('FirstPartyDataComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [SlotManager,
	        Config,
	        PrebidMethods,
	        VideoRequestManager,
	        Ortb2,
	        IrisTv])
	], FirstPartyDataComponent);

	let FloorsLazyContentComponent = class FloorsLazyContentComponent extends Component {
	    constructor(_slotManager, _prebidMethods, _floors, _floorsExperiment) {
	        super();
	        this._slotManager = _slotManager;
	        this._prebidMethods = _prebidMethods;
	        this._floors = _floors;
	        this._floorsExperiment = _floorsExperiment;
	        this._percentile = 0;
	        this._sessionPercentile = 0;
	        this._contentCpms = [];
	        this._percentile = this._floorsExperiment.result.percentile.lazy;
	        this._sessionPercentile = this._floorsExperiment.result.percentile.session;
	    }
	    init() {
	        this._slotManager.requestingBids.on(slots => {
	            const lazyContentFloorData = this._floors.getDefaultFloorConfig();
	            slots
	                .filter(slot => slot.location === 'Content' && slot.lazy)
	                .forEach(slot => {
	                const floor = linearInterpolation(this._contentCpms, this._percentile);
	                this._floors.setValues(lazyContentFloorData, slot.id, floor);
	                logger.info('FloorsLazyContentComponent', 'requestingBids', `Set floor for ${slot.id} with percentile ${this._percentile} and value ${floor}`);
	            });
	            this._floors.setLegacyFloorsConfig(lazyContentFloorData);
	        });
	        this._slotManager.requestedBids.on(slots => {
	            slots
	                .filter(slot => slot.location === 'Content')
	                .forEach(slot => {
	                this._prebidMethods.addToQueue(() => {
	                    this.saveBids(slot);
	                });
	            });
	        });
	    }
	    saveBids(slot) {
	        const bidResponses = this._prebidMethods.getBidResponsesForAdUnitCode(slot.id);
	        bidResponses.bids.forEach(bid => {
	            this._contentCpms.push(bid.cpm);
	        });
	    }
	    get enabled() {
	        return (Boolean(this._percentile) &&
	            (getSessionValue('session_fpv') === true || !this._sessionPercentile) &&
	            this._floorsExperiment.result.legacy === true);
	    }
	};
	FloorsLazyContentComponent = __decorate([
	    log('FloorsLazyContentComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [SlotManager,
	        PrebidMethods,
	        Floors,
	        FloorsExperimentHandler])
	], FloorsLazyContentComponent);

	let FloorsRefreshComponent = class FloorsRefreshComponent extends Component {
	    constructor(_slotManager, _floors, _prebidMethods, _videoRequestManager, _floorsExperiment) {
	        super();
	        this._slotManager = _slotManager;
	        this._floors = _floors;
	        this._prebidMethods = _prebidMethods;
	        this._videoRequestManager = _videoRequestManager;
	        this._floorsExperiment = _floorsExperiment;
	    }
	    init() {
	        this._slotManager.refreshing.on(slots => {
	            this._prebidMethods.addToQueue(() => {
	                this._setRefreshFloors(slots.map(slot => slot.id));
	            });
	        });
	        this._videoRequestManager.refreshingVideoBids.on(videoPlayers => {
	            this._prebidMethods.addToQueue(() => {
	                this._setRefreshFloors(videoPlayers.map(videoPlayer => { var _a; return (_a = videoPlayer.videoAdUnit) === null || _a === void 0 ? void 0 : _a.code; }));
	            });
	        });
	    }
	    _setRefreshFloors(adUnitCodes) {
	        const refreshFloorData = this._floors.getDefaultFloorConfig();
	        for (const adUnitCode of adUnitCodes) {
	            const [highestCPMBid] = this._prebidMethods.getHighestCpmBids(adUnitCode);
	            const floor = highestCPMBid === null || highestCPMBid === void 0 ? void 0 : highestCPMBid.cpm;
	            if (floor) {
	                this._floors.setValues(refreshFloorData, adUnitCode, floor);
	                logger.info('FloorsRefreshComponent', '_setRefreshFloors', adUnitCode, floor);
	            }
	        }
	        this._floors.setLegacyFloorsConfig(refreshFloorData);
	    }
	    get enabled() {
	        return this._floorsExperiment.result.legacy === true;
	    }
	};
	FloorsRefreshComponent = __decorate([
	    log('FloorsRefreshComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [SlotManager,
	        Floors,
	        PrebidMethods,
	        VideoRequestManager,
	        FloorsExperimentHandler])
	], FloorsRefreshComponent);

	let FloorsRubiconComponent = class FloorsRubiconComponent extends Component {
	    constructor(_floors, _floorsExperiment, _gam, _prebidMethods, _slots) {
	        super();
	        this._floors = _floors;
	        this._floorsExperiment = _floorsExperiment;
	        this._gam = _gam;
	        this._prebidMethods = _prebidMethods;
	        this._slots = _slots;
	        this.baseUrl = 'https://ads.adthrive.com/api/v2/host/floors/';
	        this._modalVersionMap = new Map([]);
	    }
	    init() {
	        this.setSlotTargeting();
	        this.getRubiconFloorData()
	            .then((resp) => {
	            this.buildFloorsMap(resp.modelGroups);
	            this._floors.rubiconData = resp;
	            this._floors.setPrebidFloors(resp);
	            logger.info('RubiconFloorsComponent', 'getRubiconFloorData', resp);
	        })
	            .catch(err => {
	            logger.error('RubiconFloorsComponent', 'getRubiconFloorData', err);
	        });
	    }
	    buildFloorsMap(modelGroups) {
	        modelGroups.forEach((modelGroup, index) => {
	            this._modalVersionMap.set(modelGroup.modelVersion, index);
	        });
	    }
	    async getRubiconFloorData() {
	        return new Promise((resolve, reject) => {
	            const request = new XMLHttpRequest();
	            request.open('get', `${this.baseUrl}${window.location.hostname}`);
	            request.addEventListener('load', () => {
	                if (request.status !== 200) {
	                    return reject(new Error(`Error status: ${request.status} response: ${request.responseText}`));
	                }
	                return resolve(JSON.parse(request.responseText));
	            });
	            request.addEventListener('error', () => {
	                return reject(new Error('Request failed'));
	            });
	            request.send();
	        });
	    }
	    setSlotTargeting() {
	        this._prebidMethods.onEvent('auctionEnd', auctionDetails => {
	            const adUnitCode = auctionDetails.adUnitCodes[0];
	            const adUnitFloorData = auctionDetails.adUnits[0].bids[0].floorData;
	            if (adUnitFloorData) {
	                const slots = this._slots.get();
	                const skipped = adUnitFloorData.skipped;
	                const modelVersion = adUnitFloorData.modelVersion;
	                const targetingValue = skipped ? 's' : `${this._modalVersionMap.get(modelVersion)}`;
	                slots.forEach(slot => {
	                    if (slot.id === adUnitCode) {
	                        slot.setSlotTargetingFlag('rfmv', [targetingValue], slot.googleTagSlot, true);
	                    }
	                });
	            }
	        });
	    }
	    get enabled() {
	        return this._floorsExperiment.result.rubicon === true;
	    }
	};
	FloorsRubiconComponent = __decorate([
	    log('FloorsRubiconComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [Floors,
	        FloorsExperimentHandler,
	        GoogleAdManager,
	        PrebidMethods,
	        Slots])
	], FloorsRubiconComponent);

	let FloorsSessionComponent = class FloorsSessionComponent extends Component {
	    constructor(_slotManager, _floors, _prebidMethods, _floorsExperiment) {
	        super();
	        this._slotManager = _slotManager;
	        this._floors = _floors;
	        this._prebidMethods = _prebidMethods;
	        this._floorsExperiment = _floorsExperiment;
	        this._percentile = 0;
	        this._rdx = 33;
	        const bidCpmSessionVal = getSessionValue('bc');
	        if (!bidCpmSessionVal) {
	            this._savedBids = {
	                Content: [],
	                Recipe: [],
	                Header: [],
	                Below_Post: [],
	                Sidebar: [],
	                Footer: [],
	            };
	        }
	        else {
	            this._savedBids = deobfuscateBidCpms(bidCpmSessionVal, this._rdx);
	        }
	    }
	    init() {
	        this._percentile = this._floorsExperiment.result.percentile.session;
	        if (getSessionValue('session_fpv') === false) {
	            const sessionFloorData = this._floors.getDefaultFloorConfig();
	            this._slotManager.requestingBids.on(slots => {
	                slots
	                    .filter(slot => Object.keys(this._savedBids).indexOf(slot.location) !== -1)
	                    .forEach(slot => {
	                    const floor = linearInterpolation(this._savedBids[slot.location], this._percentile);
	                    this._floors.setValues(sessionFloorData, slot.id, floor);
	                    logger.info('FloorsSessionComponent', 'requestingBids', `Set floor for ${slot.id} with percentile ${this._percentile} and value ${floor}`);
	                });
	                this._floors.setLegacyFloorsConfig(sessionFloorData);
	            });
	        }
	        this.saveBids();
	    }
	    saveBids() {
	        this._slotManager.requestedBids.on(slots => {
	            slots
	                .filter(slot => {
	                return Object.keys(this._savedBids).indexOf(slot.location) !== -1;
	            })
	                .forEach(slot => {
	                this._prebidMethods.addToQueue(() => {
	                    this.saveSlotBids(slot);
	                });
	            });
	            setSessionValue('bc', obfuscateBidCpms(this._savedBids, this._rdx));
	        });
	    }
	    saveSlotBids(slot) {
	        const bidResponses = this._prebidMethods.getBidResponsesForAdUnitCode(slot.id);
	        bidResponses.bids.forEach(bid => {
	            removeRandomElement(this._savedBids[slot.location], 1000);
	            this._savedBids[slot.location].push(bid.cpm);
	        });
	    }
	    get enabled() {
	        return Boolean(this._percentile) && this._floorsExperiment.result.legacy === true;
	    }
	};
	FloorsSessionComponent = __decorate([
	    log('FloorsSessionComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [SlotManager,
	        Floors,
	        PrebidMethods,
	        FloorsExperimentHandler])
	], FloorsSessionComponent);

	let FloorsComponent = class FloorsComponent extends Component {
	    constructor(lazyContentComponent, refreshComponent, rubiconComponent, sessionComponent, _prebidMethods) {
	        super();
	        this._prebidMethods = _prebidMethods;
	        this._floorsComponents = [lazyContentComponent, refreshComponent, rubiconComponent, sessionComponent].filter(floorsComponent => floorsComponent.enabled);
	    }
	    init() {
	        this._floorsComponents.forEach(floorsComponent => floorsComponent.init !== undefined && floorsComponent.init());
	    }
	};
	FloorsComponent = __decorate([
	    injectable(),
	    __metadata("design:paramtypes", [FloorsLazyContentComponent,
	        FloorsRefreshComponent,
	        FloorsRubiconComponent,
	        FloorsSessionComponent,
	        PrebidMethods])
	], FloorsComponent);

	let FooterComponent = class FooterComponent extends Component {
	    constructor(_config) {
	        super();
	        this._config = _config;
	    }
	    start() {
	        if (this._config.footer.elements.length) {
	            const footer = document.createElement('div');
	            footer.className = 'adthrive-comscore adthrive-footer-message';
	            this._config.footer.elements
	                .sort((a, b) => a.order - b.order)
	                .forEach(({ element }) => {
	                if (element instanceof Element) {
	                    footer.insertAdjacentElement('beforeend', element);
	                }
	                else {
	                    footer.insertAdjacentHTML('beforeend', element);
	                }
	            });
	            const footerSelector = this._config.adOptions.footerSelector === '' ? '.adthrive-mobile #page-wrapper' : this._config.adOptions.footerSelector;
	            const parent = document.querySelector(footerSelector) || document.body;
	            parent.insertAdjacentElement('beforeend', footer);
	        }
	    }
	};
	FooterComponent = __decorate([
	    log('FooterComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [Config])
	], FooterComponent);

	let GumGumInScreenComponent = class GumGumInScreenComponent extends Component {
	    constructor(_slotManager) {
	        super();
	        this._slotManager = _slotManager;
	    }
	    init() {
	        this._slotManager.refreshing.on(slots => {
	            const footer = slots.filter(slot => slot.location === 'Footer');
	            const gumgum = window.GUMGUM && window.GUMGUM.isad;
	            if (footer && gumgum) {
	                logger.info('GumGumInScreenComponent', 'init', 'RemoveISAd');
	                window.GUMGUM.removeISAd();
	            }
	        });
	    }
	};
	GumGumInScreenComponent = __decorate([
	    log('GumGumInScreenComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [SlotManager])
	], GumGumInScreenComponent);

	let EmailCaptureHandler = class EmailCaptureHandler {
	    constructor() {
	        this._elements = [];
	        this._emailProviderOnPage = false;
	        this._emailProviders = [
	            { divSelector: 'div[id$="-optin"]' },
	            { divSelector: 'div[class^="cb-form-group"]' },
	            { divSelector: 'div.sumo-form-wrapper.listbuilder-popup' },
	        ];
	        this.emailCaptured = new Emitter();
	        this._emailCheckTimeout = 1500;
	        this._eventMap = new Map([
	            ['mousemove', window],
	            ['scroll', window],
	            ['mouseleave', document],
	            ['om.Campaign.startShow', document],
	        ]);
	        this._boundCallEventHandler = this.callCheckEmailProviders.bind(this);
	        this._boundProcessEventHandler = this.processInputChange.bind(this);
	        this.addElementListeners();
	        this.addEmailProviderListeners();
	    }
	    addEmailProviderListeners() {
	        this._eventMap.forEach((target, eventType) => {
	            target.addEventListener(eventType, this._boundCallEventHandler);
	        });
	    }
	    removeEmailProviderListeners() {
	        this._eventMap.forEach((target, eventType) => {
	            target.removeEventListener(eventType, this._boundCallEventHandler);
	        });
	    }
	    callCheckEmailProviders(event) {
	        if (event.type !== 'mouseleave' || event.clientY <= 0) {
	            setTimeout(() => {
	                if (!this._emailProviderOnPage)
	                    this.emailProviderHandler();
	            }, this._emailCheckTimeout);
	        }
	    }
	    emailProviderHandler() {
	        for (const provider of this._emailProviders) {
	            const divs = document.querySelectorAll(provider.divSelector);
	            if (divs.length) {
	                this.removeEmailProviderListeners();
	                this._emailProviderOnPage = true;
	                this.addElementListeners();
	                break;
	            }
	        }
	    }
	    setElements() {
	        this._elements = Array.prototype.slice.call(document.querySelectorAll('input[type=text], input[type=email], input[name=email]'));
	    }
	    addElementListeners() {
	        this.setElements();
	        for (const input of this._elements) {
	            input.addEventListener('blur', this._boundProcessEventHandler);
	            input.addEventListener('change', this._boundProcessEventHandler);
	        }
	    }
	    removeElementListeners() {
	        for (const input of this._elements) {
	            input.removeEventListener('blur', this._boundProcessEventHandler);
	            input.removeEventListener('change', this._boundProcessEventHandler);
	        }
	    }
	    processInputChange(event) {
	        const target = event.target;
	        const value = target.value;
	        const email = validateEmail(value);
	        if (email) {
	            logger.info('EmailCaptureHandler', '_processInputChange', 'Valid Email: ', email);
	            this.emailCaptured.emit({ email, source: 'ecc' }).catch(() => { });
	            this.removeElementListeners();
	        }
	    }
	};
	EmailCaptureHandler = __decorate([
	    log('EmailCaptureHandler'),
	    singleton(),
	    __metadata("design:paramtypes", [])
	], EmailCaptureHandler);

	let GDPRComponent = class GDPRComponent extends Component {
	    constructor(_config) {
	        super();
	        this._config = _config;
	    }
	    init() {
	        this.addPrivacyPreferencesFooter();
	    }
	    addPrivacyPreferencesFooter() {
	        const privacyPreferences = `
      <div class="adthrive-privacy-preferences">
        <a href="javascript:adthrive.cmd.push(adthrive.showPrivacyPreferences);">Update Privacy Preferences</a>
      </div>
    `;
	        this._config.footer.elements.push({
	            order: 1,
	            element: privacyPreferences,
	        });
	    }
	};
	GDPRComponent = __decorate([
	    log('GDPRComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [Config])
	], GDPRComponent);

	let GDPREvents = class GDPREvents {
	    constructor() {
	        this.consentCaptured = new Emitter();
	    }
	};
	GDPREvents = __decorate([
	    singleton()
	], GDPREvents);

	let GDPREnforcementComponent = class GDPREnforcementComponent extends Component {
	    constructor(_events, _config) {
	        super();
	        this._events = _events;
	        this._config = _config;
	    }
	    init() {
	        logger.queueLogs = true;
	        this.checkConsent()
	            .then(tcString => {
	            if (tcString) {
	                this._events.consentCaptured.emit(tcString).catch(() => { });
	                this.checkConsentForVendor(this._config.gdpr.cafeMediaVendorId, [7])
	                    .then(vendorConsent => {
	                    if (!vendorConsent) {
	                        logger.info('GDPREnforcementComponent', 'disabling logger');
	                        logger.disableLogging = true;
	                    }
	                    else {
	                        if (logger.queueLogs)
	                            logger.clearLogQueue(true);
	                        logger.info('GDPREnforcementComponent', 'none enforced');
	                    }
	                })
	                    .catch(err => {
	                    logger.error('init', 'checkConsentForVendor', err);
	                });
	            }
	            else {
	                logger.info('GDPREnforcementComponent', 'start queueing logs');
	                this.listenForConsentSubmit().catch(err => {
	                    logger.error('init', 'listenForConsentSubmit', err);
	                });
	            }
	        })
	            .catch(err => {
	            logger.error('init', 'checkConsent', err);
	        });
	    }
	    checkConsent() {
	        return new Promise(resolve => {
	            window.__tcfapi('getTCData', 2, (tcData, success) => {
	                if (success && tcData && tcData.tcString) {
	                    return resolve(tcData.tcString);
	                }
	                return resolve('');
	            });
	        });
	    }
	    checkConsentForVendor(vendorId, purposeIds) {
	        return new Promise(resolve => {
	            window.__tcfapi('checkConsent', 2, (data, success) => {
	                if (success) {
	                    return resolve(data);
	                }
	                return resolve(false);
	            }, {
	                data: [
	                    {
	                        vendorId,
	                        purposeIds,
	                    },
	                ],
	            });
	        });
	    }
	    listenForConsentSubmit() {
	        return new Promise(resolve => {
	            window.__tcfapi('addEventListener', 2, (tcData, success) => {
	                if (success) {
	                    if (tcData && tcData.eventStatus === 'useractioncomplete') {
	                        this._events.consentCaptured.emit(tcData.tcString).catch(() => { });
	                        this.checkConsentForVendor(this._config.gdpr.cafeMediaVendorId, [7])
	                            .then(vendorConsent => {
	                            logger.info('GDPREnforcementComponent', 'listenForConsentSubmit', 'useractioncomplete', 'checkConsentForVendor', vendorConsent);
	                            if (vendorConsent) {
	                                if (logger.queueLogs) {
	                                    logger.clearLogQueue(true);
	                                }
	                            }
	                            else {
	                                logger.disableLogging = true;
	                                logger.clearLogQueue(false);
	                                logger.info('GDPREnforcementComponent', 'listenForConsentSubmit', 'logging disabled and queue clearing without sending');
	                            }
	                        })
	                            .catch(err => {
	                            logger.error('listenForConsentSubmit', 'checkConsentForVendor', err);
	                        });
	                        window.__tcfapi('removeEventListener', 2, removed => {
	                            if (removed) {
	                                logger.info('GDPREnforcementComponent', 'listenForConsentSubmit', 'removeEventListener');
	                            }
	                        }, tcData.listenerId);
	                    }
	                    resolve(true);
	                }
	                resolve(false);
	            });
	        });
	    }
	    get enabled() {
	        return typeof window.__tcfapi === 'function';
	    }
	};
	GDPREnforcementComponent = __decorate([
	    log('GDPREnforcementComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [GDPREvents, Config])
	], GDPREnforcementComponent);

	let IdentityAPI = class IdentityAPI extends Component {
	    constructor(_emailCaptureHandler, _config, _gdprEnforcement) {
	        super();
	        this._emailCaptureHandler = _emailCaptureHandler;
	        this._config = _config;
	        this._gdprEnforcement = _gdprEnforcement;
	        this._hasRun = false;
	    }
	    init() {
	        this._config.identityApi.optIn.on(({ data, cb }) => this.identityOptIn(data, cb).catch(() => { }));
	        window.addEventListener('message', e => {
	            if (window === window.top && e && e.origin === window.origin && e.data && e.data.message === 'adthriveIdentityAPI' && e.data.info) {
	                const identityData = {
	                    message: 'adthriveIdentityFinished',
	                    response: {},
	                };
	                this.identityOptIn(e.data.info, (response) => {
	                    var _a;
	                    if (!(e.source instanceof MessagePort) && !(e.source instanceof ServiceWorker)) {
	                        identityData.response = response;
	                        (_a = e.source) === null || _a === void 0 ? void 0 : _a.postMessage(identityData, e.origin);
	                    }
	                }).catch(() => { });
	            }
	        }, false);
	    }
	    start() {
	        this._config.identityApi.apiReady.emit().catch(() => { });
	    }
	    validateData(data) {
	        if (!data.source || typeof data.source !== 'string' || data.source.length > 20) {
	            throw Error(`source required with 20 characters or less`);
	        }
	        if (!data.plainText && !data.sha256) {
	            throw Error(`plainText or sha256 required`);
	        }
	        if (data.plainText && (typeof data.plainText !== 'string' || !validateEmail(data.plainText))) {
	            throw Error(`plainText not string or not valid email: ${data.plainText}`);
	        }
	        if (data.sha256 && (typeof data.sha256 !== 'string' || data.sha256.length !== 64)) {
	            throw Error(`sha256 not string or not encoded properly: ${data.sha256}`);
	        }
	    }
	    buildPII(data) {
	        const piiData = {
	            source: data.source,
	        };
	        if (data.plainText) {
	            piiData.email = data.plainText;
	        }
	        if (data.sha256) {
	            piiData.hash = data.sha256;
	        }
	        return piiData;
	    }
	    async identityOptIn(data, callback) {
	        try {
	            if (!this._config.identityApi.enabled) {
	                throw Error('Identity API not enabled');
	            }
	            if (this._hasRun) {
	                throw Error(`Identity API Already Successfully Called`);
	            }
	            if (this._config.ccpa.userOptedOut) {
	                throw Error(`User has opted out of CCPA`);
	            }
	            if (this._config.gdpr.enabled) {
	                const vendorConsent = await this._gdprEnforcement.checkConsentForVendor(this._config.gdpr.cafeMediaVendorId, [1]);
	                if (!vendorConsent) {
	                    throw Error('CafeMedia not given Purpose 1 consent to process identity data.');
	                }
	            }
	            this.validateData(data);
	            const piiData = this.buildPII(data);
	            this._emailCaptureHandler.emailCaptured.emit(piiData).catch(() => { });
	            callback({ success: true, data: { message: 'OK' } });
	            this._hasRun = true;
	        }
	        catch (err) {
	            callback({ success: false, data: { message: err.message } });
	        }
	    }
	};
	IdentityAPI = __decorate([
	    log('IdentityAPIComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [EmailCaptureHandler, Config, GDPREnforcementComponent])
	], IdentityAPI);

	let ImpressionLogComponent = class ImpressionLogComponent extends Component {
	    constructor(_config, _gam, _slotManager) {
	        super();
	        this._config = _config;
	        this._gam = _gam;
	        this._slotManager = _slotManager;
	        this._renderedSlotKey = new Map();
	        this._filterKeys = new Set(['abgroup', 'pvk', 'bucket', 'branch', 'deployment', 'siteName', 'siteId']);
	        this._host = 'dev-track.adthrive.com';
	        this._enabled = this._config.impressionLog.enabled;
	    }
	    init() {
	        this._gam.slotRenderEnded.on(event => this.slotRenderEnded(event));
	        if (this._enabled === 1) {
	            const { reasons: disableAds } = this._config.disableAds;
	            Promise.all([
	                disableAds.size !== 0 ? 0 : this._slotManager.requestingBids.once().then(() => now$2()),
	                disableAds.size !== 0 ? 0 : this._slotManager.requestedBids.once().then(() => now$2()),
	                disableAds.size !== 0 ? 0 : this._slotManager.displayed.once().then(() => now$2()),
	                pageLoaded(),
	            ])
	                .then(([requestingBids, requestedBids, displayed]) => this.logTiming(requestingBids, requestedBids, displayed))
	                .catch(err => logger.error('EventLogComponent', 'init', err));
	        }
	    }
	    get enabled() {
	        return !!this._enabled;
	    }
	    slotRenderEnded({ event, slot }) {
	        const legacy = this._enabled === 1;
	        const adUnitPath = event.slot.getAdUnitPath();
	        const slotKey = ulid();
	        this._renderedSlotKey.set(adUnitPath, slotKey);
	        const output = {
	            adUnitPath,
	            advertiserId: event.advertiserId,
	            agnosticCreativeId: event.sourceAgnosticCreativeId,
	            agnosticLineItemId: event.sourceAgnosticLineItemId,
	            campaignId: event.campaignId,
	            companyIds: event.companyIds,
	            creativeId: event.creativeId,
	            isEmpty: event.isEmpty,
	            lineItemId: event.lineItemId,
	            serviceName: event.serviceName,
	            siteTargeting: legacy ? JSON.stringify(this._gam.getTargetingMap()) : this.filterTargeting(this._gam.getTargetingMap()),
	            size: event.size,
	            slotElementId: slot.id,
	            slotKey,
	            slotTargeting: legacy ? JSON.stringify(slot.getTargetingMap()) : this.filterTargeting(slot.getTargetingMap()),
	            yieldGroupIds: event.yieldGroupIds,
	        };
	        legacy ? this.pixel(this._host, '/impression.gif', output) : this.logImpressionEvent(output);
	    }
	    filterTargeting(data) {
	        return Object.keys(data)
	            .filter(key => !this._filterKeys.has(key) && data[key].length)
	            .reduce((result, key) => {
	            result[key] = data[key];
	            return result;
	        }, {});
	    }
	    logImpressionEvent(impData) {
	        logger.event('SlotRenderEnded', 'adImpression', impData);
	    }
	    logTiming(auctionStarted, auctionFinished, displayed) {
	        if (window.performance && window.performance.timing) {
	            setTimeout(() => {
	                const t = window.performance.timing;
	                if (t && t.navigationStart !== 0) {
	                    const timing = {
	                        pageLoad: t.loadEventStart - t.navigationStart,
	                        domainLookup: t.domainLookupEnd - t.domainLookupStart,
	                        connect: t.connectEnd - t.connectStart,
	                        request: t.responseStart - t.requestStart,
	                        response: t.responseEnd - t.responseStart,
	                        navigation: t.fetchStart - t.navigationStart,
	                        domInteractive: t.domInteractive - t.navigationStart,
	                        domContentLoaded: t.domContentLoadedEventStart - t.navigationStart,
	                    };
	                    const valid = Object.keys(timing)
	                        .map(key => timing[key])
	                        .every((metric) => !isNaN(metric) && metric >= 0 && metric < 3600000);
	                    if (valid) {
	                        const { reasons: disableAds } = this._config.disableAds;
	                        this.pixel(this._host, '/timing.gif', {
	                            ...timing,
	                            ...this._config.timing,
	                            disableAds: disableAds.size > 0 ? [...disableAds].join(',') : 'none',
	                            auctionStarted,
	                            auctionFinished,
	                            displayed,
	                        });
	                    }
	                }
	            }, 0);
	        }
	    }
	    pixel(host, path, params) {
	        params.abgroup = this._config.abGroup.groups.join(',');
	        params.bucket = this._config.context.bucket;
	        params.branch = this._config.context.branch;
	        params.deployment = this._config.context.deployment;
	        params.siteId = this._config.site.id;
	        params.pageviewKey = this._config.context.pageviewKey;
	        params.sessionKey = this._config.context.sessionKey;
	        const query = createQueryString(params);
	        return (new Image().src = `https://${host}${path}?${query}`);
	    }
	};
	ImpressionLogComponent = __decorate([
	    log('ImpressionLogComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [Config, GoogleAdManager, SlotManager])
	], ImpressionLogComponent);

	let CloseButtonComponent = class CloseButtonComponent extends Component {
	    constructor(_googleAdManager, _config, _slotManager) {
	        super();
	        this._googleAdManager = _googleAdManager;
	        this._config = _config;
	        this._slotManager = _slotManager;
	        this._locations = ['Footer'];
	    }
	    init() {
	        this._googleAdManager.slotRenderEnded.on(({ slot, event }) => {
	            this.slotRenderEnded(slot, event);
	        });
	    }
	    slotRenderEnded(slot, event) {
	        var _a;
	        if (!event.isEmpty && ((_a = event.size) === null || _a === void 0 ? void 0 : _a.length) === 2) {
	            if (slot.element && this._locations.indexOf(slot.location) !== -1 && slot.sticky) {
	                slot.element.setAttribute('closable', 'true');
	                this._addCloseButton(slot.element, slot.location);
	            }
	        }
	    }
	    _addCloseButton(element, location) {
	        const closable = element.hasAttribute('closable');
	        const hasButton = element.querySelector('.adthrive-close');
	        if (closable && !hasButton) {
	            const button = document.createElement('span');
	            button.innerHTML = '&times;';
	            button.className = 'adthrive-close';
	            button.addEventListener('click', () => {
	                const closeEvent = document.createEvent('Event');
	                closeEvent.initEvent(`adthrive${location}Close`, true, true);
	                if (element.parentElement) {
	                    window.dispatchEvent(closeEvent);
	                    element.parentElement.removeChild(element);
	                    this._slotManager.destroy(element.id);
	                }
	            });
	            element.appendChild(button);
	        }
	    }
	    get enabled() {
	        if (this._config.adOptions.footerCloseButtonMigrated) {
	            return this._config.context.device === 'phone'
	                ? this._config.adOptions.footerCloseButtonMobile
	                : this._config.adOptions.footerCloseButtonDesktop;
	        }
	        return this._config.adOptions.footerCloseButton;
	    }
	};
	CloseButtonComponent = __decorate([
	    log('CloseButtonComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [GoogleAdManager, Config, SlotManager])
	], CloseButtonComponent);

	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	var freeGlobal$1 = freeGlobal;

	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	var root = freeGlobal$1 || freeSelf || Function('return this')();
	var root$1 = root;

	var now = function() {
	  return root$1.Date.now();
	};
	var now$1 = now;

	var Symbol$1 = root$1.Symbol;
	var Symbol$2 = Symbol$1;

	var objectProto$1 = Object.prototype;
	var hasOwnProperty = objectProto$1.hasOwnProperty;
	var nativeObjectToString$1 = objectProto$1.toString;
	var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : undefined;
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag$1),
	      tag = value[symToStringTag$1];
	  try {
	    value[symToStringTag$1] = undefined;
	    var unmasked = true;
	  } catch (e) {}
	  var result = nativeObjectToString$1.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag$1] = tag;
	    } else {
	      delete value[symToStringTag$1];
	    }
	  }
	  return result;
	}

	var objectProto = Object.prototype;
	var nativeObjectToString = objectProto.toString;
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';
	var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : undefined;
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	var symbolTag = '[object Symbol]';
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && baseGetTag(value) == symbolTag);
	}

	var NAN = 0 / 0;
	var reTrim = /^\s+|\s+$/g;
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	var reIsBinary = /^0b[01]+$/i;
	var reIsOctal = /^0o[0-7]+$/i;
	var freeParseInt = parseInt;
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	var FUNC_ERROR_TEXT$1 = 'Expected a function';
	var nativeMax = Math.max,
	    nativeMin = Math.min;
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT$1);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;
	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }
	  function leadingEdge(time) {
	    lastInvokeTime = time;
	    timerId = setTimeout(timerExpired, wait);
	    return leading ? invokeFunc(time) : result;
	  }
	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        timeWaiting = wait - timeSinceLastCall;
	    return maxing
	      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
	      : timeWaiting;
	  }
	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;
	    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }
	  function timerExpired() {
	    var time = now$1();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }
	  function trailingEdge(time) {
	    timerId = undefined;
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }
	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastInvokeTime = 0;
	    lastArgs = lastCallTime = lastThis = timerId = undefined;
	  }
	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now$1());
	  }
	  function debounced() {
	    var time = now$1(),
	        isInvoking = shouldInvoke(time);
	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;
	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        clearTimeout(timerId);
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}

	var FUNC_ERROR_TEXT = 'Expected a function';
	function throttle(func, wait, options) {
	  var leading = true,
	      trailing = true;
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  if (isObject(options)) {
	    leading = 'leading' in options ? !!options.leading : leading;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	  return debounce(func, wait, {
	    'leading': leading,
	    'maxWait': wait,
	    'trailing': trailing
	  });
	}

	class Sticky {
	    constructor(slot, preventOverlap) {
	        this._overlap = null;
	        this._stuck = false;
	        this._start = 0;
	        this._cutoff = 0;
	        this._cutoffBuffer = 20;
	        this._element = slot.element;
	        if (preventOverlap) {
	            if (slot.stickyOverlapSelector) {
	                logger.info('Sticky', 'constructor', 'Attempting to use sticky overlap selector override %s', slot.stickyOverlapSelector);
	                this._overlap = document.querySelector(slot.stickyOverlapSelector);
	            }
	            else {
	                logger.info('Sticky', 'constructor', 'Attempting to find the best sticky overlap selector');
	                this._overlap = this.findOverlap(this._element);
	            }
	            if (this._overlap) {
	                logger.info('Sticky', 'constructor', 'Using sticky overlap at %d', this._overlap.offsetTop, this._overlap);
	            }
	            else {
	                logger.info('Sticky', 'constructor', 'No sticky overlap found');
	            }
	        }
	        window.addEventListener('scroll', throttle(() => this.update(), 500));
	        window.addEventListener('resize', throttle(() => {
	            this.unstick();
	            this.update();
	            this.check();
	        }, 500));
	        window.addEventListener('scroll', () => this.check());
	    }
	    update() {
	        if (this._element) {
	            if (!this._stuck) {
	                this._start = this.getTop(this._element);
	            }
	            if (this._overlap) {
	                this._cutoff = this.getTop(this._overlap);
	            }
	        }
	    }
	    check() {
	        if (this._start !== 0) {
	            const scrollTop = window.pageYOffset;
	            const elementHeight = this._element.offsetHeight + this._cutoffBuffer;
	            const overlaps = this._cutoff !== 0 && scrollTop + elementHeight > this._cutoff;
	            if (this._start < scrollTop && !overlaps) {
	                this.stick();
	            }
	            else {
	                this.unstick();
	            }
	        }
	    }
	    stick() {
	        if (!this._stuck) {
	            const style = getComputedStyle(this._element, null);
	            const parent = this._element.parentElement;
	            if (parent) {
	                const parentStyle = getComputedStyle(parent, null);
	                parent.style.minHeight = parentStyle.getPropertyValue('height');
	            }
	            if (!this._element.style.width) {
	                this._element.style.width = style.getPropertyValue('width');
	            }
	            this._element.classList.add('adthrive-stuck');
	            this._stuck = true;
	        }
	    }
	    unstick() {
	        if (this._stuck) {
	            this._element.classList.remove('adthrive-stuck');
	            this._stuck = false;
	        }
	    }
	    getTop(element) {
	        const elementRect = element.getBoundingClientRect();
	        return elementRect.top + window.pageYOffset;
	    }
	    findOverlap(element) {
	        let overlap = null;
	        while (element.parentElement) {
	            element = element.parentElement;
	            let next = element.nextElementSibling;
	            while (next && isHidden(next)) {
	                next = next.nextElementSibling;
	            }
	            if (next && next.offsetTop > 0) {
	                if (!overlap || next.offsetTop < overlap.offsetTop) {
	                    overlap = next;
	                }
	            }
	        }
	        return overlap;
	    }
	}

	class StickyOutstream {
	    constructor(_config, _slotManager, _slot, _stickyCloseButtonExperiment, _eventProxy, _videoCloseButton) {
	        this._config = _config;
	        this._slotManager = _slotManager;
	        this._slot = _slot;
	        this._stickyCloseButtonExperiment = _stickyCloseButtonExperiment;
	        this._eventProxy = _eventProxy;
	        this._videoCloseButton = _videoCloseButton;
	        this._isRendered = false;
	    }
	    setup() {
	        if (!this._isRendered) {
	            this._isRendered = true;
	            this._appendCloseButton();
	            this._activate();
	        }
	    }
	    get renderState() {
	        return this._isRendered;
	    }
	    _activate() {
	        this._handleWidthBreak();
	        this._eventProxy.videoPlaying.on(this._handleRelatedPlayClose.bind(this));
	        this._slot.element.parentElement.classList.add('adthrive-sticky-outstream-active');
	    }
	    _appendCloseButton() {
	        const element = this._slot.element;
	        const closeButton = this._videoCloseButton.createPlayerCloseButton(this._handleCloseClick.bind(this), this._stickyCloseButtonExperiment.result, 'adthrive-sticky-outstream-close');
	        element.parentNode.insertBefore(closeButton, element);
	        setTimeout(() => {
	            closeButton.style.display = 'inline-flex';
	        }, this._config.video.closeButtonTimeout);
	    }
	    _logPlayerClose(closeReason) {
	        StickyOutstream.closeEvent.emit().catch(() => { });
	        logger.event('StickyOutstream', 'handleClose', {
	            device: isDesktop() ? 'desktop' : 'mobile',
	            closeReason,
	        });
	    }
	    _handleRelatedPlayClose() {
	        this._handleClose('relatedPlay');
	    }
	    _handleCloseClick() {
	        this._handleClose('closeClick');
	    }
	    _handleClose(closeReason) {
	        const element = this._slot.element;
	        const parent = element.parentElement;
	        this._logPlayerClose(closeReason);
	        if (parent) {
	            parent.removeChild(element);
	            parent.classList.remove('adthrive-sticky-outstream-active');
	            this._slotManager.destroy(element.id);
	            this._removeListener();
	        }
	    }
	    _handleWidthBreak() {
	        this._removeListener = this._eventProxy.footerRefreshed.on(this._handleFooterRefreshedEvent.bind(this));
	        console.log('%cSLogs', 'background-color:hotpink;padding:2px;color:white;font-size:1.2em)', 'handle width break called');
	        this._repositionCollapseBottom();
	    }
	    _handleFooterRefreshedEvent() {
	        this._repositionCollapseBottom();
	    }
	    _repositionCollapseBottom() {
	        if (this._config.context.device !== 'desktop') {
	            const footerBottom = calculateFooterBottom();
	            console.log('%cSLogs', 'background-color:hotpink;padding:2px;color:white;font-size:1.2em)', 'repositioncollapsebottom called... is it calling the wrong elem? ', this._slot.element);
	            this._slot.element.parentElement.style.setProperty('top', 'auto', 'important');
	            this._slot.element.parentElement.style.setProperty('bottom', `${footerBottom}px`, 'important');
	        }
	    }
	}
	StickyOutstream.closeEvent = new Emitter();

	let StickyCloseButtonExperiment = class StickyCloseButtonExperiment extends Experiment {
	    constructor(abgroup) {
	        super();
	        this.abgroup = abgroup;
	        this.key = 'socbe';
	        this._choices = [
	            { choice: 'sovpcc', weight: 0 },
	            { choice: 'sovpct1', weight: 0 },
	            { choice: 'sovpct2', weight: 100 },
	        ];
	        this._result = this.run();
	        abgroup.set(this.key, this._result);
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new WeightedChoice(this._choices).get();
	    }
	};
	__decorate([
	    sticky(),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", []),
	    __metadata("design:returntype", void 0)
	], StickyCloseButtonExperiment.prototype, "run", null);
	StickyCloseButtonExperiment = __decorate([
	    log('StickyCloseButtonExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup])
	], StickyCloseButtonExperiment);

	let VideoCloseButtonComponent = class VideoCloseButtonComponent extends Component {
	    constructor() {
	        super(...arguments);
	        this._hasTitleBar = false;
	        this._isInstreamExperiment = false;
	        this._isButtonOutsideContainer = false;
	        this._isButtonInsideContainer = false;
	        this._isDefaultPosition = false;
	        this._experimentResult = '';
	    }
	    createDefaultButton(handleCloseClick) {
	        const closeButton = document.createElement('div');
	        closeButton.innerHTML = '<span>&times;</span>';
	        closeButton.className = 'adthrive-wrapper-close';
	        closeButton.style.display = 'none';
	        closeButton.id = 'adthrive-collapse-close';
	        closeButton.onclick = handleCloseClick;
	        return closeButton;
	    }
	    createPlayerCloseButton(handleCloseClick, experimentResult, buttonID, hasTitleBar = false) {
	        this._hasTitleBar = hasTitleBar;
	        this._isInstreamExperiment = experimentResult === 'tlo' || experimentResult === 'tlw';
	        this._isButtonOutsideContainer = experimentResult === 'sovpct1' || experimentResult === 'tlo';
	        this._isButtonInsideContainer = experimentResult === 'sovpct2' || experimentResult === 'tlw';
	        this._isDefaultPosition = experimentResult === 'sovpcc' || experimentResult === 'off';
	        this._experimentResult = experimentResult;
	        const classes = this._getButtonClasses();
	        const svgOptions = this._getSvgOptions();
	        const closeButton = this._createCloseButton(classes, buttonID, svgOptions);
	        closeButton.onclick = handleCloseClick;
	        return this._isButtonInsideContainer ? this.applyCloseButtonWrapper(closeButton) : closeButton;
	    }
	    _getButtonClasses() {
	        const classes = [];
	        if (this._isButtonOutsideContainer || this._isDefaultPosition) {
	            classes.push('adthrive-wrapper-float-close');
	        }
	        if (this._isInstreamExperiment) {
	            classes.push('adthrive-instream-close');
	            if (this._isButtonOutsideContainer) {
	                classes.push('adthrive-top-left-outer', 'adthrive-float-left');
	            }
	        }
	        else if (this._experimentResult !== 'sovpcc') {
	            classes.push('adthrive-wrapper-close-outside-left');
	        }
	        return classes;
	    }
	    _getSvgOptions() {
	        return this._isButtonInsideContainer ? { fillColor: 'transparent', strokeColor: 'white' } : { fillColor: 'white', strokeColor: 'black' };
	    }
	    _createCloseButton(classes, id, svgOptions) {
	        const { fillColor, strokeColor } = svgOptions !== null && svgOptions !== void 0 ? svgOptions : { fillColor: 'white', strokeColor: 'black' };
	        const closeButton = this._createButtonHtml(classes, id);
	        const svg = this._createSvg(fillColor);
	        const path = this._createPath(strokeColor);
	        svg.appendChild(path);
	        closeButton.appendChild(svg);
	        return closeButton;
	    }
	    _createButtonHtml(classes, id) {
	        const closeButton = document.createElement('div');
	        closeButton.className = classes.join(' ');
	        closeButton.id = id;
	        return closeButton;
	    }
	    _createSvg(fillColor) {
	        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	        svg.setAttribute('width', '18');
	        svg.setAttribute('height', '18');
	        svg.setAttribute('fill', fillColor);
	        return svg;
	    }
	    _createPath(strokeColor) {
	        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	        path.setAttribute('d', 'M 0.5 9 A 5 5 0 0 0 17.5 9 A 5 5 0 0 0 0.5 9 M 9 9 L 7 7 L 11 11 M 9 9 L 7 11 L 11 7');
	        path.setAttribute('stroke', strokeColor);
	        path.setAttribute('stroke-width', '1');
	        return path;
	    }
	    applyCloseButtonWrapper(closeButton) {
	        const wrapper = document.createElement('div');
	        const classes = ['adthrive-wrapper-float-close', 'adthrive-wrapper-close-bkgd-50'];
	        if (this._hasTitleBar) {
	            classes.push('adthrive-top-left-inner-wrapper');
	        }
	        else {
	            classes.push('adthrive-top-left-inner');
	        }
	        wrapper.classList.add(...classes);
	        wrapper.appendChild(closeButton);
	        return wrapper;
	    }
	};
	VideoCloseButtonComponent = __decorate([
	    log('VideoCloseButtonComponent'),
	    injectable()
	], VideoCloseButtonComponent);

	let VideoEventProxy = class VideoEventProxy {
	    constructor(_gam, _pageManager) {
	        this._gam = _gam;
	        this._pageManager = _pageManager;
	        this.scroll = new Emitter();
	        this.resize = new Emitter();
	        this.pageVisibility = new Emitter();
	        this.videoPlaying = new Emitter();
	        this.footerRefreshed = new Emitter();
	        this.addEventListeners();
	        this._gam.slotRenderEnded.on(({ slot }) => {
	            if (slot.location === 'Footer') {
	                void this.footerRefreshed.emit();
	            }
	        });
	    }
	    addEventListeners() {
	        let isScrollTimeout = false;
	        let isResizeTimeout = false;
	        const scrollTimeout = 100;
	        const resizeTimeout = 100;
	        const scrollListener = () => {
	            if (isScrollTimeout) {
	                return;
	            }
	            isScrollTimeout = true;
	            setTimeout(() => {
	                void this.scroll.emit();
	                isScrollTimeout = false;
	            }, scrollTimeout);
	        };
	        const resizeListener = () => {
	            if (isResizeTimeout) {
	                return;
	            }
	            isResizeTimeout = true;
	            setTimeout(() => {
	                void this.resize.emit();
	                isResizeTimeout = false;
	            }, resizeTimeout);
	        };
	        this._pageManager.scroll.on(() => scrollListener());
	        this._pageManager.resize.on(() => resizeListener());
	        this._pageManager.visibilityChange.on(() => {
	            void this.pageVisibility.emit(document.hidden);
	        });
	    }
	    emitVideoPlayingEvent(playerId) {
	        this.videoPlaying.emit(playerId).catch(() => { });
	    }
	};
	VideoEventProxy = __decorate([
	    singleton(),
	    __metadata("design:paramtypes", [GoogleAdManager, PageManager])
	], VideoEventProxy);

	let StickyComponent = class StickyComponent extends Component {
	    constructor(_slots, _config, _slotManager, _stickyCloseButtonExperiment, _eventProxy, _videoCloseButton) {
	        super();
	        this._slots = _slots;
	        this._config = _config;
	        this._slotManager = _slotManager;
	        this._stickyCloseButtonExperiment = _stickyCloseButtonExperiment;
	        this._eventProxy = _eventProxy;
	        this._videoCloseButton = _videoCloseButton;
	        this._sticky = [];
	        this._slots.added.on((slot) => {
	            if (slot && slot.sticky) {
	                slot.element.classList.add('adthrive-sticky');
	                if (slot.location === 'Sidebar') {
	                    this._sticky.push(new Sticky(slot, true));
	                }
	                if (slot.location === 'Video_StickyOutstream') {
										// should this be disabled?
	                    this._stickyOutstream = new StickyOutstream(this._config, this._slotManager, slot, this._stickyCloseButtonExperiment, this._eventProxy, this._videoCloseButton);
	                }
	            }
	        });
	    }
	    stickyOutstreamReady() {
	        if (this._stickyOutstream && !this._stickyOutstream.renderState) {
	            this._stickyOutstream.setup();
	        }
	    }
	};
	StickyComponent = __decorate([
	    log('StickyComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [Slots,
	        Config,
	        SlotManager,
	        StickyCloseButtonExperiment,
	        VideoEventProxy,
	        VideoCloseButtonComponent])
	], StickyComponent);

	let LazyLoadComponent = class LazyLoadComponent extends Component {
	    constructor(_config, _pageManager, _slots, _slotManager, _sticky) {
	        super();
	        this._config = _config;
	        this._pageManager = _pageManager;
	        this._slots = _slots;
	        this._slotManager = _slotManager;
	        this._sticky = _sticky;
	        this._debounce = new DebounceByKey(1000);
	        this._viewports = this._config.lazyLoad.viewports;
	    }
	    init() {
	        const _viewportMap = new Map([
	            ['Below_Post', this._viewports.belowPost],
	            ['Content', this._viewports.content],
	            ['Default', this._viewports.default],
	        ]);
	        this._slotManager.added.on(slots => {
	            for (const slot of slots) {
	                if (slot.lazy) {
	                    const viewport = this._config.adOptions.infiniteScroll
	                        ? this._viewports.infScroll
	                        : defaultTo(_viewportMap.get(slot.location), _viewportMap.get('Default'));
	                    this.getIntersectionObserver(viewport).observe(slot.element);
	                }
	                else if (slot.location === 'Video_StickyOutstream') {
	                    this._pageManager.setupOnceEvent('scroll', () => {
	                        this._sticky.stickyOutstreamReady();
	                        this._slotManager.display([slot]).catch(reason => {
	                            logger.error('LazyLoadComponent', 'scroll', 'display stickyOutstream slot', reason);
	                        });
	                    });
	                }
	                else {
	                    this._slotManager.display([slot]).catch(reason => {
	                        logger.error('LazyLoadComponent', 'init', 'display', reason);
	                    });
	                }
	            }
	        });
	    }
	    getIntersectionObserver(viewport) {
	        const margin = window.innerHeight * viewport;
	        const callback = (entries) => {
	            for (const entry of entries) {
	                const slot = this._slots.get(entry.target.id);
	                if (slot) {
	                    this._debounce
	                        .limit(entry.target.id)
	                        .then(() => this.processEvent(entry, slot))
	                        .catch(reason => {
	                        logger.error('LazyLoadComponent', 'getIntersectionObserver', reason);
	                    });
	                }
	            }
	        };
	        return new IntersectionObserver(callback, {
	            rootMargin: `${margin}px 0px`,
	            threshold: [0, 1],
	        });
	    }
	    processEvent(entry, slot) {
	        if (entry.isIntersecting && !slot.displayed) {
	            this._slotManager.display(slot).catch(reason => {
	                logger.error('LazyLoadComponent', 'processEvent', 'display', reason);
	            });
	        }
	        else if (!entry.isIntersecting && slot.displayed) {
	            this._slotManager.clear(slot).catch(reason => {
	                logger.error('LazyLoadComponent', 'processEvent', 'clear', reason);
	            });
	        }
	    }
	    get enabled() {
	        return false;
	    }
	};
	LazyLoadComponent = __decorate([
	    log('LazyLoadComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [Config,
	        PageManager,
	        Slots,
	        SlotManager,
	        StickyComponent])
	], LazyLoadComponent);

	let GoogleLazyLoadComponent = class GoogleLazyLoadComponent extends Component {
	    constructor(_config, _gam, _pageManager, _slots, _slotManager, _sticky) {
	        super();
	        this._config = _config;
	        this._gam = _gam;
	        this._pageManager = _pageManager;
	        this._slots = _slots;
	        this._slotManager = _slotManager;
	        this._sticky = _sticky;
	        this._debounce = new DebounceByKey(1000);
	    }
	    init() {
	        const slotManager = this._slotManager;
	        this._slotManager.added.on(slots => {
	            for (const slot of slots) {
	                if (slot.lazy) {
	                    GoogleAdManager.pushToQueue(() => {
	                        slot.googleTagSlot.setTargeting('lazy', 'true');
	                    });
	                    this.getIntersectionObserver().observe(slot.element);
	                }
	                else if (slot.location === 'Video_StickyOutstream') {
	                    this._pageManager.setupOnceEvent('scroll', () => {
	                        this._sticky.stickyOutstreamReady();
	                        slotManager.display([slot]).catch(reason => {
	                            logger.error('GoogleLazyLoadComponent', 'scroll', 'display stickyOutstream slot', reason);
	                        });
	                    });
	                }
	                else {
	                    GoogleAdManager.pushToQueue(() => {
	                        slot.googleTagSlot.setTargeting('lazy', 'false');
	                    });
	                    slotManager.display(slot).catch(reason => {
	                        logger.error('GoogleLazyLoadComponent', 'init', 'display non lazy slot', reason);
	                    });
	                }
	            }
	        });
	    }
	    getIntersectionObserver() {
	        const margin = window.innerHeight * (this._config.lazyLoad.googleLazyLoadSettings.hbMarginPercent / 100);
	        const callback = (entries, observer) => {
	            for (const entry of entries) {
	                this.processEntry(entry, observer);
	            }
	        };
	        return new IntersectionObserver(callback, {
	            rootMargin: `${margin}px 0px`,
	            threshold: [0],
	        });
	    }
	    processEntry(entry, observer) {
	        const slot = this._slots.get(entry.target.id);
	        if (slot && entry.intersectionRatio > 0) {
	            this._debounce
	                .limit(entry.target.id)
	                .then(() => this._slotManager.display(slot))
	                .catch(reason => {
	                logger.error('GoogleLazyLoadComponent', 'callback', 'display lazy slot', reason);
	            });
	            observer.unobserve(slot.element);
	        }
	    }
	};
	GoogleLazyLoadComponent = __decorate([
	    log('GoogleLazyLoadComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [Config,
	        GoogleAdManager,
	        PageManager,
	        Slots,
	        SlotManager,
	        StickyComponent])
	], GoogleLazyLoadComponent);

	let HvpComponent = class HvpComponent extends Component {
	    constructor(_gam, _slotManager) {
	        super();
	        this._gam = _gam;
	        this._slotManager = _slotManager;
	        this._isMobile = isMobile();
	    }
	    _isCustomHVP(location) {
	        return this._isMobile && location === 'Content';
	    }
	    init() {
	        this._slotManager.added.on(slots => {
	            GoogleAdManager.pushToQueue(() => {
	                for (const slot of slots) {
	                    const hvp = Math.min(Math.floor((slot.viewability * 100) / 10) * 10, 80);
	                    if (hvp >= 50) {
	                        slot.setTargeting({ key: 'hvp', value: hvp.toString() });
	                    }
	                }
	            });
	        });
	        this._slotManager.refreshing.on(slots => {
	            GoogleAdManager.pushToQueue(() => {
	                for (const slot of slots) {
	                    const customSlots = this._isCustomHVP(slot.location);
	                    if (slot.refreshCount === 1) {
	                        slot.setTargeting({ key: 'hvp', value: customSlots ? '60' : '80' });
	                    }
	                    else if (slot.refreshCount === 2 && customSlots) {
	                        slot.setTargeting({ key: 'hvp', value: '80' });
	                    }
	                }
	            });
	        });
	    }
	};
	HvpComponent = __decorate([
	    log('HvpComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [GoogleAdManager, SlotManager])
	], HvpComponent);

	let MarmaladeInjector = class MarmaladeInjector {
	    constructor(_config) {
	        this._config = _config;
	    }
	    inject() {
	        try {
	            return this._config.marmalade.selectorMatches.reduce(this.processMatch.bind(this), []);
	        }
	        catch (err) {
	            logger.error('MarmaladeInjector', 'inject', err);
	        }
	        return [];
	    }
	    processMatch(slots, marmaladeSelectorMatch) {
	        const { adUnit, match } = marmaladeSelectorMatch;
	        logger.info('MarmaladeInjector', 'processMatch', 'AdUnit', adUnit);
	        logger.info('MarmaladeInjector', 'processMatch', 'Element', match);
	        const elementId = this.getElementId(adUnit.location, adUnit.sequence);
	        const exists = slots.some(slot => {
	            return slot.location === adUnit.location && slot.sequence === adUnit.sequence;
	        });
	        if (!exists) {
	            const adElement = this.addAd(match, elementId, adUnit.position, adUnit.classNames);
	            if (adElement) {
	                logger.info('MarmaladeInjector', 'processMatch', `ID ${elementId}`, match);
	                const slot = new Slot(adUnit.location, adUnit.sequence, adUnit.size, adElement, false, adUnit.lazy);
	                slots.push(slot);
	            }
	        }
	        return slots;
	    }
	    getElementId(location, sequence) {
	        return [this._config.gam.prefix, location, sequence].filter(defined).join('_');
	    }
	    addAd(element, id, position, classNames = []) {
	        const tag = `<div id="${id}" class="adthrive-ad ${classNames.join(' ')}"></div>`;
	        element.insertAdjacentHTML(position, tag);
	        return document.getElementById(id);
	    }
	};
	MarmaladeInjector = __decorate([
	    log('MarmaladeInjector'),
	    injectable(),
	    __metadata("design:paramtypes", [Config])
	], MarmaladeInjector);

	let MarmaladeComponent = class MarmaladeComponent extends Component {
	    constructor(_config, _marmaladeInjector, _slotManager, _gam, _prebidMethods) {
	        super();
	        this._config = _config;
	        this._marmaladeInjector = _marmaladeInjector;
	        this._slotManager = _slotManager;
	        this._gam = _gam;
	        this._prebidMethods = _prebidMethods;
	    }
	    init() {
	        const dynamicSlots = this._marmaladeInjector.inject();
	        dynamicSlots.forEach(dynamicSlot => (dynamicSlot.refreshInterval = 0));
	        const siteCodes = this._config.marmalade.siteCodes.filter(filterUnique);
	        const mcmp = this._config.marmalade.mcmp.filter(filterUnique);
	        const flpProdIds = this._config.marmalade.flpProdIds.filter(filterUnique);
	        const marmaladeLoaded = this._config.marmalade.loaded ? 'true' : 'false';
	        this._gam.setTargeting({ key: 'mcmp', value: mcmp });
	        this._gam.setTargeting({ key: 'site_code', value: siteCodes });
	        this._gam.setTargeting({ key: 'marmalade', value: marmaladeLoaded });
	        const siteCodeObject = siteCodes.reduce((obj, code) => {
	            obj[code] = 'True';
	            return obj;
	        }, {});
	        setIXFirstPartyData({
	            MCMP: mcmp.join('#MCMP:'),
	            ...siteCodeObject,
	        }, this._prebidMethods);
	        if (dynamicSlots.length > 0) {
	            this._gam.started.on(() => this._slotManager.add(dynamicSlots).catch(reason => {
	                logger.error('MarmaladeComponent', 'init', reason);
	            }));
	        }
	        if (flpProdIds) {
	            const expectedOrigin = /https:\/\/\S*\.safeframe.googlesyndication.com/i;
	            setCrossDomainMessaging(expectedOrigin, {
	                message: 'adthriveFlippData',
	                flippData: flpProdIds,
	            });
	        }
	    }
	    get enabled() {
	        return !this._config.disableAds.all;
	    }
	};
	MarmaladeComponent = __decorate([
	    log('MarmaladeComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [Config,
	        MarmaladeInjector,
	        SlotManager,
	        GoogleAdManager,
	        PrebidMethods])
	], MarmaladeComponent);

	let PiiManager = class PiiManager {
	    constructor(_emailCaptureHandler, _gdprEvents, _config) {
	        this._emailCaptureHandler = _emailCaptureHandler;
	        this._gdprEvents = _gdprEvents;
	        this._config = _config;
	        this._email = '';
	        this._consent = '';
	        this._hash = '';
	        this._source = '';
	        this._consentReceived = false;
	        this._emailCounted = false;
	        this.piiCaptured = new Emitter();
	    }
	    init() {
	        this._emailCaptureHandler.emailCaptured.on(data => this._handleEmailCapture(data));
	        this._gdprEvents.consentCaptured.on(consent => this._handleConsentCapture(consent));
	    }
	    async _handleEmailCapture(data) {
	        const { email, hash, source } = data;
	        this._hash = hash || (await this._hashEmail(email));
	        this._email = email;
	        this._source = source;
	        if (!this._config.gdpr.enabled || this._consentReceived) {
	            this._sendPii();
	        }
	    }
	    _handleConsentCapture(consent) {
	        this._consentReceived = true;
	        this._consent = consent;
	        if (this._email && this._hash) {
	            this._sendPii();
	        }
	    }
	    _sendPii() {
	        if (!this._emailCounted) {
	            this._emailCounted = true;
	            logger.event('PiiManager', '_sendPii', this._source);
	        }
	        this.piiCaptured.emit({ email: this._email, hash: this._hash, consent: this._consent, source: this._source }).catch(() => { });
	    }
	    async _hashEmail(email) {
	        if (!('msCrypto' in window) && location.protocol === 'https:' && 'crypto' in window && 'TextEncoder' in window) {
	            const msgUint8 = new TextEncoder().encode(email);
	            const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
	            const hashArray = Array.from(new Uint8Array(hashBuffer));
	            const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
	            return hashHex;
	        }
	        return '';
	    }
	};
	PiiManager = __decorate([
	    log('PiiManager'),
	    singleton(),
	    __metadata("design:paramtypes", [EmailCaptureHandler, GDPREvents, Config])
	], PiiManager);

	class PiiPartner {
	    get enabled() {
	        return true;
	    }
	}

	let LiveRampPiiPartner = class LiveRampPiiPartner extends PiiPartner {
	    constructor(_config, _gam) {
	        super();
	        this._config = _config;
	        this._gam = _gam;
	        this._liveRampBaseUrl = 'https://api.rlcdn.com/api/identity/envelope';
	        this._pid = 111;
	        this._it = 4;
	        this._localKey = '_lr_env';
	    }
	    get enabled() {
	        var _a;
	        return ((_a = this._config.liveRampAts) === null || _a === void 0 ? void 0 : _a.enabled) && 'localStorage' in window;
	    }
	    init() {
	        if (window.localStorage.getItem(this._localKey)) {
	            this._gam.setTargetingFlag('idp', ['ats']);
	        }
	    }
	    async processPii(pii) {
	        if (localStorage.getItem(this._localKey)) {
	            logger.info('LiveRampPiiPartner', 'processPii', 'LiveRamp exists in localStorage; not sending.');
	            return;
	        }
	        let requestUrl = `${this._liveRampBaseUrl}?pid=${this._pid}&it=${this._it}&iv=${pii.hash ? pii.hash : pii.email}`;
	        if (this._config.gdpr.enabled) {
	            requestUrl += `&ct=4&cv=${pii.consent}`;
	        }
	        else if (this._config.ccpa.required) {
	            requestUrl += `&ct=4&cv=${readCookie('usprivacy')}`;
	        }
	        try {
	            logger.info('LiveRampPiiPartner', 'Requesting LiveRamp envelope');
	            const response = await fetch(requestUrl, { method: 'GET', keepalive: true });
	            const responseBody = await response.text();
	            if (responseBody) {
	                const { envelope } = JSON.parse(responseBody);
	                localStorage.setItem(this._localKey, btoa(JSON.stringify({
	                    envelope,
	                    timestamp: +new Date(),
	                })));
	                logger.info('LiveRampPiiPartner', 'Successful Envelope Response: ', envelope);
	                return;
	            }
	            logger.info('LiveRampPiiPartner', 'LiveRamp ATS did not return an envelope.');
	        }
	        catch (requestError) {
	            logger.info('LiveRampPiiPartner', requestError);
	        }
	    }
	};
	LiveRampPiiPartner = __decorate([
	    log('LiveRampPiiPartner'),
	    injectable(),
	    __metadata("design:paramtypes", [Config, GoogleAdManager])
	], LiveRampPiiPartner);

	const idhoNotApplied = (_config, name) => !_config.idho.subModule || _config.idho.subModule.name !== name;
	const userIdConfigs = new Map([
	    [
	        'connectId',
	        {
	            id: {
	                name: 'connectId',
	                params: {
	                    pixelId: 58404,
	                },
	                storage: {
	                    name: 'connectid',
	                    type: 'html5',
	                    expires: 15,
	                },
	            },
	            enabled(_config) {
	                return idhoNotApplied(_config, this.id.name) && _config.liveRampAts.enabled;
	            },
	            targetingKey: 'cid',
	        },
	    ],
	    [
	        'unifiedId',
	        {
	            id: {
	                name: 'unifiedId',
	                params: {
	                    url: 'https://match.adsrvr.org/track/rid?ttd_pid=iowij76&fmt=json',
	                },
	                storage: {
	                    type: 'html5',
	                    name: 'pbjs-unifiedid',
	                    expires: 60,
	                },
	            },
	            enabled(_config) {
	                return idhoNotApplied(_config, this.id.name);
	            },
	            targetingKey: 'uid1',
	        },
	    ],
	    [
	        'id5Id',
	        {
	            id: {
	                name: 'id5Id',
	                params: {
	                    partner: 367,
	                },
	                storage: {
	                    type: 'html5',
	                    name: 'pbjs-id5id',
	                    expires: 60,
	                    refreshInSeconds: 8 * 3600,
	                },
	            },
	            enabled(_config) {
	                return idhoNotApplied(_config, this.id.name);
	            },
	            targetingKey: 'id5',
	        },
	    ],
	    [
	        'identityLink',
	        {
	            id: {
	                name: 'identityLink',
	                params: {
	                    pid: '111',
	                },
	                storage: {
	                    type: 'html5',
	                    name: 'pbjs-identitylink',
	                    expires: 60,
	                },
	            },
	            enabled(_config) {
	                return idhoNotApplied(_config, this.id.name);
	            },
	            targetingKey: 'idl',
	        },
	    ],
	    [
	        'pubCommonId',
	        {
	            id: {
	                name: 'pubCommonId',
	                storage: {
	                    type: 'html5',
	                    name: 'pbjs-pubcommonid',
	                    expires: 60,
	                },
	            },
	            enabled(_config) {
	                return idhoNotApplied(_config, this.id.name);
	            },
	            targetingKey: 'pc',
	        },
	    ],
	    [
	        'criteo',
	        {
	            id: {
	                name: 'criteo',
	                storage: {
	                    type: 'html5',
	                    name: 'pbjs-criteo',
	                    expires: 60,
	                },
	            },
	            enabled(_config) {
	                return idhoNotApplied(_config, this.id.name);
	            },
	            targetingKey: 'cri',
	        },
	    ],
	    [
	        'parrableId',
	        {
	            id: {
	                name: 'parrableId',
	                params: {
	                    partner: '9fde8b8d-49db-4c9e-b841-0e777ab8d343',
	                },
	            },
	            enabled(_config) {
	                return idhoNotApplied(_config, this.id.name) && (isNewZealand() || isHawaii() || isPhoenix() || isPacific());
	            },
	            targetingKey: 'par',
	        },
	    ],
	]);

	let YahooPiiPartner = class YahooPiiPartner extends PiiPartner {
	    constructor(_config, _prebidMethods) {
	        super();
	        this._config = _config;
	        this._prebidMethods = _prebidMethods;
	        this._submitted = false;
	        this.userId = userIdConfigs.get('connectId').id;
	    }
	    get enabled() {
	        return userIdConfigs.get('connectId').enabled(this._config);
	    }
	    updateUserIds() {
	        const userIdsFromConfig = this._prebidMethods.getConfig('userSync.userIds');
	        return userIdsFromConfig.map((userId) => {
	            if (userId.name === this.userId.name) {
	                userId = this.userId;
	            }
	            return userId;
	        });
	    }
	    processPii(pii) {
	        this._prebidMethods.addToQueue(() => {
	            this.run(pii);
	        });
	    }
	    run(pii) {
	        if (pii.hash && this.userId.params && !this._submitted) {
	            this.userId.params.he = pii.hash;
	            this._submitted = true;
	            const updatedUserIds = this.updateUserIds();
	            this._prebidMethods.setConfig({
	                userSync: {
	                    userIds: updatedUserIds,
	                },
	            });
	            this._prebidMethods.refreshUserIds({ submoduleNames: [this.userId.name] }, () => logger.info('YahooPiiPartner', 'processPii', '_PiiManager', 'emailCaptured', 'Sync complete'));
	        }
	    }
	};
	YahooPiiPartner = __decorate([
	    log('YahooPiiPartner'),
	    injectable(),
	    __metadata("design:paramtypes", [Config, PrebidMethods])
	], YahooPiiPartner);

	let PiiCaptureComponent = class PiiCaptureComponent extends Component {
	    constructor(_piiManager, liveRampPiiPartner, yahooPiiPartner) {
	        super();
	        this._piiManager = _piiManager;
	        this._partners = [liveRampPiiPartner, yahooPiiPartner].filter(piiPartner => piiPartner.enabled);
	    }
	    init() {
	        this._piiManager.init();
	        this._partners.forEach(piiPartner => piiPartner.init && piiPartner.init());
	        this._piiManager.piiCaptured.on(piiData => {
	            this._partners.forEach(partner => {
	                partner.processPii(piiData);
	            });
	        });
	    }
	};
	PiiCaptureComponent = __decorate([
	    log('PiiCaptureComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [PiiManager, LiveRampPiiPartner, YahooPiiPartner])
	], PiiCaptureComponent);

	let RefreshCountComponent = class RefreshCountComponent extends Component {
	    constructor(_slotManager) {
	        super();
	        this._slotManager = _slotManager;
	        this._maxSlotRefreshCount = 4;
	    }
	    init() {
	        this._slotManager.displaying.on(slots => {
	            GoogleAdManager.pushToQueue(() => {
	                slots.forEach(slot => slot.setTargeting({ key: 'refresh', value: '00' }));
	                slots.forEach(slot => slot.setTargeting({ key: 'nref', value: '0' }));
	            });
	        });
	        this._slotManager.refreshing.on(slots => {
	            GoogleAdManager.pushToQueue(() => {
	                for (const slot of slots) {
	                    const value = `0${Math.min(slot.refreshCount, this._maxSlotRefreshCount)}`.slice(-2);
	                    slot.setTargeting({ key: 'refresh', value });
	                    slot.setTargeting({ key: 'nref', value: slot.refreshCount.toString() });
	                }
	            });
	        });
	    }
	};
	RefreshCountComponent = __decorate([
	    log('RefreshCountComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [SlotManager])
	], RefreshCountComponent);

	let RefreshRebuildExperiment = class RefreshRebuildExperiment extends Experiment {
	    constructor(abgroup) {
	        super();
	        this.key = 'rebuildslot';
	        this._choices = [{ choice: true }, { choice: false }];
	        this._result = this.run();
	        abgroup.set(this.key, this._result ? 'on' : 'off');
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new BernoulliTrial(0.95).get();
	    }
	};
	__decorate([
	    sticky(),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", []),
	    __metadata("design:returntype", void 0)
	], RefreshRebuildExperiment.prototype, "run", null);
	RefreshRebuildExperiment = __decorate([
	    log('RefreshRebuildExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup])
	], RefreshRebuildExperiment);

	let RefreshRebuildComponent = class RefreshRebuildComponent extends Component {
	    constructor(_slotManager, _refreshRebuildExperiment) {
	        super();
	        this._slotManager = _slotManager;
	        this._refreshRebuildExperiment = _refreshRebuildExperiment;
	    }
	    init() {
	        this._slotManager.refreshing.on(slots => {
	            slots.filter(this.slotHasHighRefreshCountIncrement).forEach(slot => this._slotManager.rebuild(slot));
	        });
	    }
	    slotHasHighRefreshCountIncrement(slot) {
	        const highRefreshCount = 100;
	        return slot.refreshCount % highRefreshCount === 0;
	    }
	    get enabled() {
	        return this._refreshRebuildExperiment.result;
	    }
	};
	RefreshRebuildComponent = __decorate([
	    log('RefreshRebuildComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [SlotManager, RefreshRebuildExperiment])
	], RefreshRebuildComponent);

	function styleInject(css, ref) {
	  if ( ref === void 0 ) ref = {};
	  var insertAt = ref.insertAt;
	  if (!css || typeof document === 'undefined') { return; }
	  var head = document.head || document.getElementsByTagName('head')[0];
	  var style = document.createElement('style');
	  style.type = 'text/css';
	  if (insertAt === 'top') {
	    if (head.firstChild) {
	      head.insertBefore(style, head.firstChild);
	    } else {
	      head.appendChild(style);
	    }
	  } else {
	    head.appendChild(style);
	  }
	  if (style.styleSheet) {
	    style.styleSheet.cssText = css;
	  } else {
	    style.appendChild(document.createTextNode(css));
	  }
	}

	let SiteStyleComponent = class SiteStyleComponent extends Component {
	    constructor(_config) {
	        super();
	        this._config = _config;
	    }
	    start() {
	        if (this._config.site.style && this._config.site.style.length > 0) {
	            styleInject(this._config.site.style);
	        }
	        else if (this._config.context.styleUrl) {
	            importStyle(this._config.context.styleUrl);
	        }
	    }
	};
	SiteStyleComponent = __decorate([
	    log('SiteStyleComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [Config])
	], SiteStyleComponent);

	let TrafficSourceComponent = class TrafficSourceComponent extends Component {
	    constructor(_gam) {
	        super();
	        this._gam = _gam;
	    }
	    init() {
	        const referrer = this.getReferrer();
	        if (referrer !== null) {
	            this._gam.setTargeting({ key: 'doc_ref', value: referrer });
	        }
	    }
	    getReferrer() {
	        const referrer = getReferrer();
	        if (referrer && referrer.length) {
	            setSessionValue('referrer', referrer);
	        }
	        return referrer;
	    }
	};
	TrafficSourceComponent = __decorate([
	    log('TrafficSourceComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [GoogleAdManager])
	], TrafficSourceComponent);

	let UserIdTargeting = class UserIdTargeting {
	    constructor(_gam) {
	        this._gam = _gam;
	    }
	    getStoredIdValue(storage) {
	        let storedValue;
	        if (storage.type === 'cookie' && window.navigator.cookieEnabled) {
	            storedValue = readCookie(storage.name);
	        }
	        else if (storage.type === 'html5') {
	            storedValue = window.localStorage.getItem(storage.name);
	        }
	        return storedValue;
	    }
	    getSyncedIdModules(userIds) {
	        return [...userIds].reduce((acc, idModule) => {
	            if (idModule.storage !== undefined && this.getStoredIdValue(idModule.storage)) {
	                acc.push(idModule.name);
	                return acc;
	            }
	            return acc;
	        }, []);
	    }
	    setTargeting(userIds) {
	        const syncedPartners = this.getSyncedIdModules(userIds).map(partner => { var _a; return ((_a = userIdConfigs.get(partner)) === null || _a === void 0 ? void 0 : _a.targetingKey) || partner; });
	        this._gam.setTargetingFlag('idp', syncedPartners);
	    }
	};
	UserIdTargeting = __decorate([
	    log('UserIdTargeting'),
	    injectable(),
	    __metadata("design:paramtypes", [GoogleAdManager])
	], UserIdTargeting);

	let UserIdComponent = class UserIdComponent extends Component {
	    constructor(_config, _prebidMethods, userIdTargeting) {
	        super();
	        this._config = _config;
	        this._prebidMethods = _prebidMethods;
	        this.userIdTargeting = userIdTargeting;
	        this._enabledUserIds = [];
	        this._ppid = null;
	        this._enabledUserIds = [...userIdConfigs.values()]
	            .filter(userIdConfig => userIdConfig.enabled(this._config))
	            .map(userIdConfig => {
	            if (userIdConfig.id.name === 'pubCommonId') {
	                const storageName = (userIdConfig.id.storage && userIdConfig.id.storage.name) || '';
	                this._ppid = localStorage.getItem(storageName);
	                if (this._ppid) {
	                    userIdConfig.id.name = 'sharedId';
	                    userIdConfig.id.value = { pubcid: this._ppid };
	                }
	            }
	            return userIdConfig.id;
	        });
	    }
	    init() {
	        let userSync = { userIds: this._enabledUserIds };
	        if (this._ppid) {
	            userSync = { ppid: 'pubcid.org', ...userSync };
	        }
	        this._prebidMethods.setConfig({ userSync });
	        this.userIdTargeting.setTargeting([...userIdConfigs.values()].map(userIdConfig => userIdConfig.id));
	    }
	};
	UserIdComponent = __decorate([
	    log('UserIdComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [Config, PrebidMethods, UserIdTargeting])
	], UserIdComponent);

	let UTMComponent = class UTMComponent extends Component {
	    constructor(_config, _gam) {
	        super();
	        this._config = _config;
	        this._gam = _gam;
	    }
	    init() {
	        const utm = defaultTo(getSessionValue('utm', 1800000), {});
	        ['utm_medium', 'utm_campaign', 'utm_session', 'utm_source'].forEach(key => {
	            const current = this._config.context.querystring.get(key);
	            const value = defaultTo(current, utm[key]);
	            this._gam.setTargeting({ key, value });
	            if (value) {
	                utm[key] = value;
	            }
	        });
	        setSessionValue('utm', utm);
	    }
	};
	UTMComponent = __decorate([
	    log('UTMComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [Config, GoogleAdManager])
	], UTMComponent);

	var CollapseUtils_1;
	let CollapseUtils = CollapseUtils_1 = class CollapseUtils {
	    static changeState(collapseCollection, event) {
	        const { mediaStarted, playerContainer, playerElement, playerInstance, playerState } = collapseCollection;
	        logger.info(`CollapseUtils`, `changeState`, `Current player state: ${playerState} ... Player event: ${event}`);
	        if (event === 7 ) {
	            this.uncollapse(collapseCollection);
	            playerInstance.pause(true);
	            return 7 ;
	        }


					// if return early, don't seem to get a jump action

	        switch (playerState) {
	            case 0 :
	                if (event === 4 ) {
	                    if (!collapseCollection.collapseTimer.firstInView) {
	                        collapseCollection.collapseTimer.firstInView = new Date();
	                    }
	                    CollapseUtils_1.startEvent.emit().catch(() => { });
	                    if (this._shouldCollapse(playerContainer, mediaStarted)) {
	                        this.collapse(collapseCollection);
	                        playerInstance.getViewable() && playerInstance.play(true);
	                        return playerInstance._nonLinearAd ? 8  : 2 ;
	                    }
	                    else {
	                        return playerInstance._nonLinearAd ? 8  : 1 ;
	                    }
	                }
	                break;
	            case 1 :
									console.log('SLOGS ', 'uncollapsed play!!!!')
	                if (event === 4 ) {
										console.log('SLOGS UNCOLLAPSED IN VIEW')
	                    if (this._shouldCollapse(playerContainer, mediaStarted)) {
												console.log('SLOGS UNCOLLAPSED INVIEW - SHOULD COLLAPSE?????')
	                        this.collapse(collapseCollection);
	                        playerInstance.play(true);
	                        return 2 ;
	                    }
	                    else {
	                        playerInstance.play(true);
	                    }
	                }
	                else if (event === 3 ) {
	                    playerInstance.pause(true);
	                    return 5 ;
	                }
	                else if (event === 1 ) {
	                    return 3 ;
	                }
	                break;
	            case 2 :
								console.log('SLOGS THIS IS COLLAPSED PLAY ')
	                if (event === 4 ) {
										console.log('SLOGS!!! this is event 4 collapsedplay IN VIEW')
										console.log('try removing the if statement?')
	                    // if (!this._shouldCollapse(playerContainer, mediaStarted)) {
											// 	console.log('SLOGS COLLAPSED INVIEW SHOULD UNCOLLAPSE NOW?????????')
	                    //     this.uncollapse(collapseCollection);
	                    //     playerInstance.play(true);
	                    //     return 1 ;
	                    // }
	                    // else {
	                        playerInstance.play(true);
	                    // }
	                }
	                else if (event === 1 ) {
	                    return 4 ;
	                }
	                else if (event === 6 ) {
	                    collapseCollection.lastCollapsedClasses = playerElement.className;
	                    this.uncollapse(collapseCollection);
	                    playerInstance.pause(true);
	                    return 6 ;
	                }
	                else if (event === 5 ) {
	                    this.uncollapse(collapseCollection);
	                    playerInstance.pause(true);
	                    return 7 ;
	                }
	                break;
	            case 8 :
	                if (event === 4 ) {
	                    if (this._shouldCollapse(playerContainer, mediaStarted)) {
	                        this.collapse(collapseCollection);
	                    }
	                }
	                else if (event === 3 ) {
	                    playerInstance.pauseAd(true);
	                    return 9 ;
	                }
	                else if (event === 6 ) {
	                    this.uncollapse(collapseCollection);
	                    playerInstance.pauseAd(true);
	                    return 10 ;
	                }
	                break;
	            case 4 :
	                if (event === 4  && !this._shouldCollapse(playerContainer, mediaStarted)) {
	                    this.uncollapse(collapseCollection);
	                    return 3 ;
	                }
	                else if (event === 1 ) {
	                    return 2 ;
	                }
	                else if (event === 5 ) {
	                    this.uncollapse(collapseCollection);
	                    playerInstance.pause(true);
	                    return 7 ;
	                }
	                break;
	            case 3 :
	                if (event === 4  && this._shouldCollapse(playerContainer, mediaStarted)) {
	                    this.collapse(collapseCollection);
	                    return 4 ;
	                }
	                else if (event === 1 ) {
	                    return 1 ;
	                }
	                break;
	            case 5 :
	                if (event === 4 ) {
	                    playerInstance.play(true);
	                    return 1 ;
	                }
	            case 9 :
	                if (event === 4 ) {
	                    playerInstance.pauseAd(false);
	                    return 8 ;
	                }
	                else if (this.playerWouldOverlapFooter(collapseCollection)) {
	                    return 10 ;
	                }
	                break;
	            case 6 :
	                if (this._shouldCollapse(playerElement, mediaStarted) && !this.playerWouldOverlapFooter(collapseCollection)) {
	                    this.collapse(collapseCollection);
	                    playerInstance.play(true);
	                    return 2 ;
	                }
	                else {
	                    return 6 ;
	                }
	            case 10 :
	                if (this._shouldCollapse(playerElement, mediaStarted) && !this.playerWouldOverlapFooter(collapseCollection)) {
	                    this.collapse(collapseCollection);
	                    playerInstance.pauseAd(false);
	                    return 8 ;
	                }
	                else {
	                    playerInstance.pauseAd(true);
	                    return 10 ;
	                }
	            default:
	                return playerState;
	        }
	        return playerState;
	    }
	    static handleResize(collapseCollection) {
	        if (!this._isCollapsed(collapseCollection.playerState)) {
	            this.resizeContainer(collapseCollection);
	        }
	        else {
	            if (!collapseCollection.forceMobile && collapseCollection.collapseType === "adthrive-collapse-sticky" ) {
	                this._stickToSidebar(collapseCollection);
	            }
	        }
	    }
	    static handleScroll(collapseCollection) {
	        if (!VideoUtils.playerInView(collapseCollection.playerElement)) {
	            collapseCollection.playerState = this.changeState(collapseCollection, 3 );
	        }
	        else {
	            if (this.playerWouldOverlapFooter(collapseCollection)) {
	                collapseCollection.playerState = this.changeState(collapseCollection, 6 );
	            }
	            else {
	                collapseCollection.playerState = this.changeState(collapseCollection, 4 );
	            }
	        }
	        if (collapseCollection.playerState === 2  || collapseCollection.playerState === 4 ) {
	            CollapseUtils_1.startCollapseTimer(collapseCollection);
	        }
	        else {
	            CollapseUtils_1.stopCollapseTimer(collapseCollection);
	        }
	    }
	    static handleOtherVideoPlaying(collapseCollection) {
	        collapseCollection.playerState = this.changeState(collapseCollection, 7 );
	    }
	    static handlePageVisibilityChange(hidden, collapseCollection) {
	        if (collapseCollection.playerState !== 7  &&
	            collapseCollection.playerState !== 0  &&
	            collapseCollection.playerState !== 3  &&
	            collapseCollection.playerState !== 4  &&
	            collapseCollection.playerState !== 5  &&
	            collapseCollection.playerState !== 6 ) {
	            if (hidden) {
	                logger.info('CollapsePlayer', 'handlePageVisibilityChange', 'Video > Pausing player due to page not being visible');
	                collapseCollection.playerInstance.pause(true);
	            }
	            else {
	                logger.info('CollapsePlayer', 'handlePageVisibilityChange', 'Video > Playing player due to page being visible');
	                collapseCollection.playerInstance.play(true);
	            }
	        }
	    }
	    static handleWidthBreak(event, collapseCollection) {
	        if (collapseCollection.playerState === 7  || collapseCollection.playerState === 0 ) {
	            return;
	        }
	        if (event.matches) {
	            logger.info('CollapsePlayer', 'handleWidthBreak', `Video > JW Collapse forcing mobile`);
	            if (this._isCollapsed(collapseCollection.playerState)) {
	                this.toggleCollapsedPlayerClasses(false, collapseCollection);
	                if (collapseCollection.collapseType === "adthrive-collapse-sticky" ) {
	                    this._unstickFromSidebar(collapseCollection.playerElement);
	                }
	                collapseCollection.forceMobile = true;
	                this.toggleCollapsedPlayerClasses(true, collapseCollection);
	            }
	            collapseCollection.forceMobile = true;
	        }
	        else {
	            logger.info('CollapsePlayer', 'handleWidthBreak', `Video > JW Collapse not mobile`);
	            this.toggleCollapsedPlayerClasses(false, collapseCollection);
	            collapseCollection.forceMobile = false;
	            if (this._isCollapsed(collapseCollection.playerState)) {
	                this.toggleCollapsedPlayerClasses(true, collapseCollection);
	                if (collapseCollection.collapseType === "adthrive-collapse-sticky" ) {
	                    this._stickToSidebar(collapseCollection);
	                }
	            }
	        }
	    }
	    static handleClose(collapseCollection) {
	        CollapseUtils_1.closeEvent.emit().catch(() => { });
	        collapseCollection.playerState = this.changeState(collapseCollection, 5 );
	        CollapseUtils_1.stopCollapseTimer(collapseCollection);
	        logger.event('jw-player', 'handleClose', {
	            timeElapsed: collapseCollection.collapseTimer.timeCollapsed,
	            device: isDesktop() ? 'desktop' : 'mobile',
	            playerType: collapseCollection.playerType,
	        });
	    }
	    static handleUserClick(collapseCollection) {
	        collapseCollection.playerState = this.changeState(collapseCollection, 1 );
	    }
	    static collapse(collapseCollection) {
	        if (this.disableCollapse) {
	            logger.info('CollapseUtils', 'Trying to collapse a player, but collapse disabled.');
	            return;
	        }
	        this.collapseEvent.emit().catch(() => { });
					console.log('SLOGS!!!!! THIS IS THE COLLAPSE METHOD THIS IS THE PLACE - collapse togglecollapsedplayerclasses now!')
	        this.toggleCollapsedPlayerClasses(true, collapseCollection);
	        if (!collapseCollection.forceMobile && collapseCollection.collapseType === "adthrive-collapse-sticky" ) {
	            this._stickToSidebar(collapseCollection);
	        }
	        collapseCollection.playerInstance.resize();
	        setTimeout((collapseColl) => {
	            this.displayCloseButton(collapseColl);
	        }, collapseCollection.closeButtonTimeout, collapseCollection);
	    }
	    static displayCloseButton(collapseCollection) {
	        if (this._isCollapsed(collapseCollection.playerState)) {
	            collapseCollection.closeButton.style.display = 'inline-flex';
	        }
	    }
	    static uncollapse(collapseCollection) {
	        CollapseUtils_1.uncollapseEvent.emit().catch(() => { });
					console.log('IS IT HERE???')
					console.log('SLOGS going to comment out togglecollapsedplayer in uncollapse - does not work !!!')
	        // this.toggleCollapsedPlayerClasses(false, collapseCollection);
	        this._unstickFromSidebar(collapseCollection.playerElement);
	        collapseCollection.closeButton.style.display = 'none';
	        this.resizeContainer(collapseCollection);
	    }
	    static _shouldCollapse(el, mediaStarted) {
	        return mediaStarted && VideoUtils.getScrollTop() >= elementOffset(el).top + el.offsetHeight / 2;
	    }
	    static _isCollapsed(playerState) {
	        return playerState === 2  || playerState === 4 ;
	    }
	    static _stickToSidebar(collapseCollection) {
	        if (collapseCollection.stickyElement) {
	            collapseCollection.playerElement.style.left = `${collapseCollection.stickyElement.getBoundingClientRect().left}px`;
	            collapseCollection.playerElement.style.width = `${collapseCollection.stickyElement.clientWidth}px`;
	        }
	        collapseCollection.playerElement.style.top = `${collapseCollection.topMargin}px`;
	    }
	    static _unstickFromSidebar(playerElement) {
	        playerElement.style.cssText = '';
	    }
	    static playerWouldOverlapFooter(collapseCollection) {
	        if (!collapseCollection.footerElement) {
	            return false;
	        }
	        if (collapseCollection.playerElement.className.indexOf('adthrive-collapse-bottom') >= 0 ||
	            (collapseCollection.lastCollapsedClasses && collapseCollection.lastCollapsedClasses.indexOf('adthrive-collapse-bottom') >= 0)) {
	            const footerBottom = calculateFooterBottom();
	            return !(window.innerHeight - footerBottom < collapseCollection.footerElement.getBoundingClientRect().top);
	        }
	        return !((collapseCollection.topMargin || 0) + collapseCollection.playerElement.getBoundingClientRect().height <
	            collapseCollection.footerElement.getBoundingClientRect().top);
	    }
	    static toggleCollapsedPlayerClasses(toggleOn, collapseCollection) {
				//IT IS HERE????
				console.log('SLOG ---- SO WHICH ONE OF THE TOGGLECOLLAPSED PLAYER CLASSES IS IT?')
	        const utils = collapseCollection.playerInstance.utils;

					console.log('SLOG OR IS IT THE TOGGLE CLASSES?....... oh shoot - toggle back in?')
	        const toggleClass = hasProperty(utils, 'toggleClass') && typeof utils.toggleClass === 'function' ? utils.toggleClass : () => { };
	        // if (collapseCollection.forceMobile) {
	        //     toggleClass(collapseCollection.playerElement, "adthrive-collapse-mobile" , toggleOn);
	        //     toggleClass(collapseCollection.playerElement, collapseCollection.collapseMobileSizeType, toggleOn);
	        //     toggleClass(collapseCollection.playerElement, collapseCollection.collapseMobileSubType, toggleOn);
	        //     if (collapseCollection.collapseMobileSubType === "adthrive-collapse-bottom-left"  ||
	        //         collapseCollection.collapseMobileSubType === "adthrive-collapse-bottom-right" ) {
	        //         this.repositionCollapseMobileBottom(collapseCollection);
	        //     }
	        // }
	        // else {
	        //     toggleClass(collapseCollection.playerElement, collapseCollection.collapseType, toggleOn);
	        //     if (collapseCollection.collapseSubType) {
	        //         toggleClass(collapseCollection.playerElement, collapseCollection.collapseSubType, toggleOn);
	        //     }
	        //     if (collapseCollection.collapseMobileSizeType) {
	        //         toggleClass(collapseCollection.playerElement, collapseCollection.collapseMobileSizeType, toggleOn);
	        //     }
	        //     if (collapseCollection.collapseType === "adthrive-collapse-mobile" ) {
	        //         toggleClass(collapseCollection.playerElement, collapseCollection.collapseMobileSubType, toggleOn);
	        //         if (collapseCollection.collapseMobileSubType === "adthrive-collapse-bottom-left"  ||
	        //             collapseCollection.collapseMobileSubType === "adthrive-collapse-bottom-right" ) {
	        //             this.repositionCollapseMobileBottom(collapseCollection);
	        //         }
	        //     }
	        // }
	    }
	    static repositionCollapseMobileBottom(collapseCollection) {
				console.log('IS IT THE REPOSITION COLLAPSE MOBILE BOTTOM???')
	        if (collapseCollection.playerElement.className.indexOf('adthrive-collapse-bottom') >= 0) {
	            const footerBottom = calculateFooterBottom();
	            collapseCollection.playerElement.style.setProperty('top', 'auto', 'important');
	            collapseCollection.playerElement.style.setProperty('bottom', `${footerBottom}px`, 'important');
	        }
	    }
	    static resizeContainer(collapseCollection) {
	        collapseCollection.playerContainer.style.height = `${collapseCollection.playerElement.offsetHeight + 30}px`;
	    }
	    static startCollapseTimer(collapseCollection) {
	        if (collapseCollection.collapseTimer.isRunning) {
	            return;
	        }
	        if (!collapseCollection.collapseTimer.startTime) {
	            collapseCollection.collapseTimer.startTime = new Date();
	            collapseCollection.collapseTimer.lastCollapsedTime = collapseCollection.collapseTimer.startTime;
	        }
	        else {
	            collapseCollection.collapseTimer.lastCollapsedTime = new Date();
	        }
	        collapseCollection.collapseTimer.isRunning = true;
	    }
	    static stopCollapseTimer(collapseCollection) {
	        if (!collapseCollection.collapseTimer.isRunning) {
	            return;
	        }
	        if (collapseCollection.collapseTimer.lastCollapsedTime) {
	            collapseCollection.collapseTimer.timeCollapsed += new Date().getTime() - collapseCollection.collapseTimer.lastCollapsedTime.getTime();
	        }
	        collapseCollection.collapseTimer.isRunning = false;
	    }
	};
	CollapseUtils.collapseEvent = new Emitter();
	CollapseUtils.uncollapseEvent = new Emitter();
	CollapseUtils.closeEvent = new Emitter();
	CollapseUtils.startEvent = new Emitter();
	CollapseUtils.disableCollapse = false;
	CollapseUtils = CollapseUtils_1 = __decorate([
	    log('CollapseUtils')
	], CollapseUtils);

	class VideoPlayer {
	    constructor() { }
	    init(prerollAdUrl) {
	        this.setup(prerollAdUrl);
	    }
	}

	let StickyInstreamCloseButtonExperiment = class StickyInstreamCloseButtonExperiment extends Experiment {
	    constructor(abgroup) {
	        super();
	        this.abgroup = abgroup;
	        this.key = 'sicb';
	        this._choices = [
	            { choice: 'off', weight: 80 },
	            { choice: 'tlo', weight: 10 },
	            { choice: 'tlw', weight: 10 },
	        ];
	        this._result = this.run();
	        abgroup.set(this.key, this._result);
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new WeightedChoice(this._choices).get();
	    }
	};
	__decorate([
	    sticky(),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", []),
	    __metadata("design:returntype", void 0)
	], StickyInstreamCloseButtonExperiment.prototype, "run", null);
	StickyInstreamCloseButtonExperiment = __decorate([
	    log('StickyInstreamCloseButtonExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup])
	], StickyInstreamCloseButtonExperiment);

	let TearDownPlayerExperiment = class TearDownPlayerExperiment extends Experiment {
	    constructor(abgroup) {
	        super();
	        this.tearDownOnCrash = 'tdoc';
	        this._choices = [
	            { choice: 900000, weight: 5 },
	            { choice: 600000, weight: 5 },
	            { choice: 300000, weight: 5 },
	            { choice: -1, weight: 5 },
	            { choice: 0, weight: 80 },
	        ];
	        this.key = 'mgtdtw';
	        this._result = this.run();
	        abgroup.set(this.key, this._result === -1 ? this.tearDownOnCrash : (this._result / 1000).toString());
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new WeightedChoice(this._choices).get();
	    }
	};
	TearDownPlayerExperiment = __decorate([
	    log('TearDownPlayerExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup])
	], TearDownPlayerExperiment);

	class JwPlayer extends VideoPlayer {
	    constructor(_playerId, _playlistId, _name, _size, _pageElement, _eventProxy, _vastLoadTimeout, _config, _collapseType = "adthrive-collapse-float" , _collapseMobileSizeType, _prebidMethods, _playerType, _isCollapsible, _saveVideoCloseState) {
	        super();
	        this._playerId = _playerId;
	        this._playlistId = _playlistId;
	        this._name = _name;
	        this._size = _size;
	        this._pageElement = _pageElement;
	        this._eventProxy = _eventProxy;
	        this._vastLoadTimeout = _vastLoadTimeout;
	        this._config = _config;
	        this._collapseType = _collapseType;
	        this._collapseMobileSizeType = _collapseMobileSizeType;
	        this._prebidMethods = _prebidMethods;
	        this._playerType = _playerType;
	        this._isCollapsible = _isCollapsible;
	        this._saveVideoCloseState = _saveVideoCloseState;
	        this.initialAuctionPlayer = false;
	        this._prerollAdUrl = '';
	        this._prerollNum = 0;
	        this.requestVideoBids = () => {
	            throw new Error('Request video bids not set');
	        };
	        this.buildVideoUrl = () => {
	            throw new Error('Build video url not set');
	        };
	        this.setPlayerInstance = () => {
	            throw new Error('Reset player not set');
	        };
	        this._defaults = {};
	        this._state = 0 ;
	        this._collapseCollection = null;
	        this._videoAdUnit = null;
	        this._adPlayed = false;
	        this._nextAdFetched = false;
	        this._adDurationLogged = false;
	        this._isFirstPlay = true;
	        this._createdSkipContainer = false;
	        this._calledNextVideo = false;
	        this._wasClicked = false;
	        this._canSkip = true;
	        this._isAdvancePlaylist = false;
	        this._adDetails = null;
	        this._canTearDown = false;
	        this._tearDownAfterNextAd = false;
	        this._tearDownTimer = null;
	        this._tearDownPlayerTimeout = 0;
	        this._stalePlayerTimer = null;
	        this._currentAdTime = 0;
	        this._currentAdDurationWithBuffer = 0;
	        this._adTimingBuffer = 10;
	        this._defaultAdDuration = 30;
	        this._autoplayBehaviorConfig = {
	            autostart: 'viewable',
	            mute: true,
	        };
	        this._baseConfig = {
	            advertising: {
	                adscheduleid: 'DmULPHgQ',
	                client: 'googima',
	                maxRedirects: this._config.video.maxRedirect,
	                requestTimeout: this._config.video.jwRequestTimeout,
	                vastLoadTimeout: this._vastLoadTimeout,
	                vpaidmode: 'insecure',
	            },
	        };
	        this._stickyInstreamCloseButtonExperiment = instance.resolve(StickyInstreamCloseButtonExperiment);
	        this._videoCloseButtonComponent = instance.resolve(VideoCloseButtonComponent);
	        if (window.matchMedia) {
	            const mediaQuery = window.matchMedia(`only screen and (max-width: ${this._config.site.breakpoints.desktop - 1}px)`);
	            mediaQuery.addListener(this.handleWidthBreak.bind(this));
	            this.handleWidthBreak(mediaQuery);
	        }
	        const advancePlayListSettings = this._config.video.advancePlaylist;
	        this._isAdvancePlaylist =
	            this._playerType === 'playlist' ? advancePlayListSettings.playlistPlayer.enabled : advancePlayListSettings.relatedPlayer.enabled;
	        if (this._playerType !== 'contextual' || (this._isCollapsible && advancePlayListSettings)) {
	            this._tearDownPlayerTimeout = instance.resolve(TearDownPlayerExperiment).result;
	            this._canTearDown = this._tearDownPlayerTimeout !== 0 && this._tearDownPlayerTimeout !== -1;
	        }
	    }
	    get name() {
	        return `${this._name}`;
	    }
	    get collapsible() {
	        return this._isCollapsible;
	    }
	    get size() {
	        return this._size;
	    }
	    get vp() {
	        if (this._prerollNum <= 1) {
	            return this._prerollNum;
	        }
	        else if (this._prerollNum <= 9) {
	            return 2;
	        }
	        return 3;
	    }
	    get isPlayerType() {
	        return this._playerType;
	    }
	    init() {
	        this.setup();
	    }
	    getDefaults() {
	        return this._defaults;
	    }
	    setDefaults(defaults) {
	        this._defaults = defaults;
	    }
	    resetAdVars() {
	        this._adPlayed = false;
	        this._nextAdFetched = false;
	        this._adDurationLogged = false;
	        this._currentAdTime = 0;
	        this._currentAdDurationWithBuffer = 0;
	        this._clearStaleTimers();
	    }
	    handleNextAdFetch() {
	        var _a;
	        if (!this._nextAdFetched) {
	            this._nextAdFetched = true;
	            this._prerollNum++;
	            (_a = this.requestVideoBids([this])) === null || _a === void 0 ? void 0 : _a.then(() => (this._prerollAdUrl = this.buildVideoUrl(this)));
	        }
	    }
	    preventCollapse() {
	        CollapseUtils.disableCollapse = true;
	        logger.info('JwPlayer', 'preventCollapse', 'Setting disableCollapse to true');
	        if (this._collapseCollection) {
	            logger.info('JwPlayer', 'preventCollapse', 'Uncollapsing player');
	            CollapseUtils.uncollapse(this._collapseCollection);
	        }
	    }
	    playLinearAd() {
	        this._playerInstance._nonLinearAd = false;
	        this._playerInstance.playAd(this._prerollAdUrl);
	        this._prebidMethods.markWinningBidAsUsed({ adUnitCode: this.name });
	        this._adPlayed = true;
	    }
	    _setPlayerVersions() {
	        const regex = new RegExp('^[0-9]+.[0-9]+.[0-9]+', 'i');
	        const player = this._playerInstance;
	        const version = regex.exec(player.version);
	        this.jwVersion = version && version[0];
	        this.imaVersion = player.plugins && player.plugins.googima && player.plugins.googima.version;
	    }
	    _getPlayerVersions() {
	        return {
	            imaSDKVersion: this.imaVersion,
	            jwVersion: this.jwVersion,
	        };
	    }
	    _tearDownPlayer() {
	        if (this._tearDownAfterNextAd) {
	            logger.info('JwPlayer', 'tearDownPlayer', 'Tear down initiated');
	            this._tearDownAfterNextAd = false;
	            if (this._tearDownTimer) {
	                clearTimeout(this._tearDownTimer);
	            }
	            this._playerInstance.remove();
	            this.addToPage();
	            this.setPlayerInstance(this);
	            this.handleScroll();
	        }
	    }
	    _enableTearDown() {
	        this._tearDownAfterNextAd = true;
	        logger.info('JwPlayer', 'enableTearDown', 'Tear down player after next ad');
	    }
	    _startTearDownTimer() {
	        const tearDownPlayerTimeout = this._tearDownPlayerTimeout;
	        const canTearDown = this._canTearDown;
	        const message = canTearDown ? `Tear down player after ${tearDownPlayerTimeout / 1000} seconds` : 'Tear down player disabled';
	        logger.info('JwPlayer', 'startTearDownTimer', message);
	        if (canTearDown) {
	            this._tearDownTimer = setTimeout(this._enableTearDown.bind(this), tearDownPlayerTimeout);
	        }
	    }
	    _handleErrors() {
	        ['adError', 'setupError', 'error'].forEach(eventType => {
	            const isAdError = eventType === 'adError';
	            this._playerInstance.on(eventType, error => {
	                this._clearStaleTimers();
	                if (eventType === 'setupError') {
	                    this.preventCollapse();
	                }
	                logger.error('JwPlayer', eventType, {
	                    code: error.code,
	                    ...(isAdError && { message: error.message }),
	                    ...this.getJwEventLog(error),
	                });
	                if (eventType === 'adError') {
	                    const vastErrorDetails = {
	                        imaSDKVersion: this._playerInstance.plugins.googima.version,
	                        message: error.message,
	                        jwVersion: this._playerInstance.version,
	                        code: error.code,
	                        ...this._adDetails,
	                    };
	                    logger.error('JwPlayer', 'vastError', vastErrorDetails);
	                    this._tearDownPlayer();
	                }
	            });
	        });
	    }
	    _handleTimeEvents() {
	        this._playerInstance.on('beforeComplete', () => {
	            this.resetAdVars();
	            this._playerInstance._nonLinearAd = false;
	        });
	        this._playerInstance.on('time', ({ position, duration }) => {
	            if (!this._nextAdFetched && duration - position < 5) {
	                this.handleNextAdFetch();
	            }
	        });
	        this._playerInstance.on('adTime', jwEvent => {
	            this._currentAdTime = jwEvent.position;
	            if (this._config.video.logAdDuration && !this._adDurationLogged) {
	                const adDurationObject = { adDuration: jwEvent.duration, roundedAdDuration: Math.round(jwEvent.duration) };
	                logger.event('VideoManager', 'VideoAdDuration', adDurationObject);
	                this._adDurationLogged = true;
	            }
	        });
	        this._playerInstance.on('adComplete', () => {
	            this._tearDownPlayer();
	        });
	    }
	    _handlePlayingEvents() {
	        ['play', 'firstFrame'].forEach(eventType => {
	            this._playerInstance.on(eventType, () => {
	                this._clearStaleTimers();
	                if (eventType === 'firstFrame' && this._isAdvancePlaylist) {
	                    !this._adPlayed && this.playLinearAd();
	                }
	            });
	        });
	        this._playerInstance.on('beforePlay', async () => {
	            if (!this._adPlayed) {
	                if (!this._collapseCollection && this._isFirstPlay) {
	                    await this.requestVideoBids([this]);
	                    this._prerollAdUrl = this.buildVideoUrl(this);
	                }
	                this.playLinearAd();
	                this._isFirstPlay = false;
	            }
	        });
	        ['adSkipped', 'adPause'].forEach(eventType => {
	            this._playerInstance.on(eventType, () => {
	                this._clearStaleTimers();
	                if (eventType === 'adPause') {
	                    this._playerInstance.once('adPlay', () => {
	                        if (this._currentAdTime !== 0) {
	                            this._setStaleAdDetection();
	                        }
	                    });
	                }
	            });
	        });
	        if (this._collapseCollection) {
	            ['play', 'adPlay'].forEach(eventType => {
	                this._playerInstance.once(eventType, () => {
	                    this._collapseCollection.mediaStarted = true;
	                    CollapseUtils.handleScroll(this._collapseCollection);
	                });
	            });
	        }
	    }
	    _handleAdTrackingEvents() {
	        this._playerInstance.on('adLoaded', data => {
	            const adDetails = data.ima && data.ima.ad && data.ima.ad.h;
	            const currentAdDuration = (adDetails && adDetails.duration) || data.duration || this._defaultAdDuration;
	            this._currentAdDurationWithBuffer = currentAdDuration + this._adTimingBuffer;
	            if (adDetails) {
	                this._adDetails = {
	                    gamLineItem: adDetails.adWrapperIds,
	                    gamCreativeId: adDetails.adWrapperCreativeIds,
	                    vastCreativeId: adDetails.creativeId,
	                    mediaFileURL: adDetails.mediaUrl,
	                };
	            }
	            this._setStaleAdDetection();
	        });
	        if (this._config.video.logAdLifeCycle) {
	            ['adRequest', 'adImpression', 'adStarted', 'adViewableImpression'].forEach(eventType => {
	                this._playerInstance.on(eventType, event => {
	                    logger.event('JwPlayer', eventType, this.getJwEventLog(event));
	                });
	            });
	        }
	    }
	    _setupEventListeners() {
	        this._handleErrors();
	        this._handleTimeEvents();
	        this._handlePlayingEvents();
	        this._handleAdTrackingEvents();
	        this._playerInstance.on('ready', () => {
	            this._startTearDownTimer();
	        });
	    }
	    jwSetup(playerConfig) {
	        const config = { ...this._defaults, ...this._baseConfig, ...playerConfig };
	        this._playerInstance.setup(config);
	        this.handleNonLinearAd();
	        this._setupEventListeners();
	        this._playerInstance.on('adLoaded', data => {
	            const adDetails = data.ima && data.ima.ad && data.ima.ad.h;
	            const currentAdDuration = (adDetails && adDetails.duration) || data.duration || this._defaultAdDuration;
	            this._currentAdDurationWithBuffer = currentAdDuration + this._adTimingBuffer;
	            if (adDetails) {
	                this._adDetails = {
	                    gamLineItem: adDetails.adWrapperIds,
	                    gamCreativeId: adDetails.adWrapperCreativeIds,
	                    vastCreativeId: adDetails.creativeId,
	                    mediaFileURL: adDetails.mediaUrl,
	                };
	            }
	            this._setStaleAdDetection();
	        });
	    }
	    _clearStaleTimers() {
	        if (this._stalePlayerTimer) {
	            clearTimeout(this._stalePlayerTimer);
	            this._stalePlayerTimer = null;
	        }
	    }
	    _setStaleAdDetection() {
	        const currentAdDuration = this._currentAdDurationWithBuffer - this._currentAdTime;
	        if (!this._stalePlayerTimer) {
	            this._stalePlayerTimer = setTimeout(() => {
	                logger.error('JwPlayer', 'stalePlayer', {
	                    message: 'JwPlayer encountered an unknown error during ad play',
	                    ...this._getPlayerVersions(),
	                    ...this._adDetails,
	                });
	                if (this._tearDownPlayerTimeout === -1) {
	                    this._enableTearDown();
	                    this._tearDownPlayer();
	                }
	                else {
	                    this._playerInstance.playlistItem(this._playerInstance.getPlaylistIndex());
	                }
	            }, currentAdDuration * 1000);
	        }
	    }
	    getJwEventLog(event) {
	        return {
	            playerName: this._name,
	            rawData: this.trimEventData(event),
	        };
	    }
	    set videoAdUnit(videoAdUnit) {
	        this._videoAdUnit = videoAdUnit;
	    }
	    get videoAdUnit() {
	        return this._videoAdUnit;
	    }
	    handleNonLinearAd() {
	        this._playerInstance.on('adImpression', event => {
	            const maybeAd = hasProperty(event.ima, 'ad') ? event.ima.ad : null;
	            const imaAd = tryToAccessProperty(maybeAd, 'g') || hasProperty(maybeAd, 'h');
	            if ((imaAd && hasProperty(imaAd, 'linear') && imaAd.linear === false) || event.linear === 'nonlinear') {
	                this._playerInstance._nonLinearAd = true;
	                this._playerInstance.pause();
	                const containerElement = document.getElementById(`${this._playlistId}`);
	                const playerElement = containerElement.querySelector('div > div.jw-overlays.jw-reset');
	                playerElement.style.backgroundColor = 'black';
	                const playerControls = containerElement.querySelector('div.jw-wrapper.jw-reset > div.jw-controls.jw-reset');
	                playerControls.style.zIndex = '-1';
	                this._playerInstance.once('adComplete', () => {
	                    this._playerInstance._nonLinearAd = false;
	                    playerElement.style.backgroundColor = 'transparent';
	                    playerControls.style.zIndex = '';
	                    this._playerInstance.play();
	                });
	            }
	        });
	    }
	    getJwBoostTargeting() {
	        return {
	            playerID: this._playlistId,
	            ...((this.name === VideoAdUnit.Video_In_Post_ClicktoPlay_SoundOn || this.name === VideoAdUnit.Video_Individual_Autoplay_SOff) && {
	                mediaID: this._playlistId,
	            }),
	        };
	    }
	    handleScroll() {
	        if (this._collapseCollection) {
	            CollapseUtils.handleScroll(this._collapseCollection);
	        }
	    }
	    handleResize() {
	        if (this._collapseCollection) {
	            CollapseUtils.handleResize(this._collapseCollection);
	        }
	    }
	    handlePageVisibilityChange(hidden) {
	        if (this._collapseCollection) {
	            CollapseUtils.handlePageVisibilityChange(hidden, this._collapseCollection);
	        }
	    }
	    displayCloseButton() {
	        if (this._collapseCollection) {
	            CollapseUtils.displayCloseButton(this._collapseCollection);
	        }
	    }
	    handleClose() {
	        if (this._collapseCollection) {
	            if (this._saveVideoCloseState) {
	                setSessionValue('video_closed', true);
	            }
	            CollapseUtils.handleClose(this._collapseCollection);
	        }
	    }
	    handleUserClick() {
	        if (this._collapseCollection) {
	            CollapseUtils.handleUserClick(this._collapseCollection);
	        }
	    }
	    handleWidthBreak(event) {
	        if (this._collapseCollection) {
	            CollapseUtils.handleWidthBreak(event, this._collapseCollection);
	        }
	    }
	    handleVideoPlayingEvent(playlistId) {
	        if (this._collapseCollection) {
	            if (playlistId === this._playlistId) {
	                return;
	            }
	            else {
	                CollapseUtils.handleOtherVideoPlaying(this._collapseCollection);
	            }
	        }
	    }
	    handleTitleClick(event) {
	        if (this._collapseCollection.collapseTimer.firstInView) {
	            logger.event('jw-player', 'handleTitleClick', {
	                timeElapsed: Date.now() - this._collapseCollection.collapseTimer.firstInView.valueOf(),
	                link: event.currentTarget.getAttribute('href'),
	            });
	        }
	    }
	    handleFooterRefreshedEvent() {
	        if (this._collapseCollection) {
	            CollapseUtils.repositionCollapseMobileBottom(this._collapseCollection);
	        }
	    }
	    configureQuality() {
	        if (!isDesktop()) {
	            this._playerInstance.on('levels', levels => {
	                this._playerInstance.setCurrentQuality(levels.levels.length - 1);
	            });
	        }
	    }
	    getCollapseSubType(collapseType, stickyElement) {
	        return "adthrive-collapse-bottom-right" ;
	    }
	    createDefaultButton() {
	        return this._videoCloseButtonComponent.createDefaultButton(this.handleClose.bind(this));
	    }
	    createPlayerCloseButton() {
	        const hasTitleBar = this._wrapperTitleWrapperElement || this._videoTitleElement;
	        this._closeButton = this._videoCloseButtonComponent.createPlayerCloseButton(this.handleClose.bind(this), this._stickyInstreamCloseButtonExperiment.result, 'adthrive-collapse-close', !!hasTitleBar);
	        return this._closeButton;
	    }
	    createPlayerWrapper(isTitleLink) {
	        if (isTitleLink) {
	            this._wrapperTitleWrapperElement = document.createElement('a');
	            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	            svg.setAttribute('width', '24');
	            svg.setAttribute('height', '24');
	            svg.setAttribute('style', 'vertical-align: top;');
	            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	            path.setAttribute('d', 'M 16 1 H 23 V 8 Z M 19.5 12.5 V 23 H 1 V 4.5 H 12 l 1 1 H 2 V 22 H 18.5 V 11.5 l 1 1 v 1 M 19 4 L 11.5 11.5 l 1 1 L 20 5');
	            path.setAttribute('stroke', 'white');
	            path.setAttribute('stroke-width', '2');
	            path.setAttribute('stroke-linejoin', 'round');
	            svg.appendChild(path);
	            this._wrapperTitleWrapperElement.appendChild(svg);
	        }
	        else {
	            this._wrapperTitleWrapperElement = document.createElement('div');
	        }
	        this._videoTitleElement = document.createElement('span');
	        const playerHeaderBar = document.createElement('div');
	        const videoTitleWrapper = document.createElement('div');
	        videoTitleWrapper.className = 'adthrive-wrapper-title-wrapper';
	        this._videoTitleElement.classList.add('adthrive-video-text-cutoff');
	        this._videoTitleElement.classList.add('adthrive-video-title');
	        this._wrapperTitleWrapperElement.className = 'adthrive-video-text-cutoff';
	        this._wrapperTitleWrapperElement.appendChild(this._videoTitleElement);
	        this._wrapperTitleWrapperElement.target = '_blank';
	        this._wrapperTitleWrapperElement.onclick = this.handleTitleClick.bind(this);
	        this._closeButton = this._stickyInstreamCloseButtonExperiment.result !== 'off' ? this.createPlayerCloseButton() : this.createDefaultButton();
	        videoTitleWrapper.appendChild(this._wrapperTitleWrapperElement);
	        playerHeaderBar.className = 'adthrive-wrapper-bar';
	        playerHeaderBar.appendChild(videoTitleWrapper);
	        playerHeaderBar.appendChild(this._closeButton);
	        return playerHeaderBar;
	    }
	    trimEventData(event) {
	        var _a, _b, _c, _d, _e;
	        const cloned = { ...event };
	        if (cloned === null || cloned === void 0 ? void 0 : cloned.tag) {
	            delete cloned.tag;
	        }
	        if ((_c = (_b = (_a = cloned === null || cloned === void 0 ? void 0 : cloned.ima) === null || _a === void 0 ? void 0 : _a.ad) === null || _b === void 0 ? void 0 : _b.g) === null || _c === void 0 ? void 0 : _c.traffickingParameters) {
	            delete cloned.ima.ad.g.traffickingParameters;
	        }
	        if ((_e = (_d = cloned === null || cloned === void 0 ? void 0 : cloned.ima) === null || _d === void 0 ? void 0 : _d.userRequestContext) === null || _e === void 0 ? void 0 : _e.adTagUrl) {
	            delete cloned.ima.userRequestContext.adTagUrl;
	        }
	        if (cloned === null || cloned === void 0 ? void 0 : cloned.mediaFile) {
	            delete cloned.mediaFile;
	        }
	        return cloned;
	    }
	    handleNextButton() {
	        this._calledNextVideo = true;
	        this.removeSkipContainer();
	        this.resetAdVars();
	        if (this._isAdvancePlaylist && this._playerInstance.getPlaylist().length === 1) {
	            this._playerInstance.pause();
	            this._playerInstance.seek(0);
	            this._playerInstance.trigger('firstFrame', { loadTime: 0, viewable: 1 });
	        }
	        else {
	            this._playerInstance.next();
	        }
	    }
	    createSkipContainer() {
	        const container = document.createElement('div');
	        container.id = 'next-stay-container';
	        const nextButton = document.createElement('div');
	        nextButton.onclick = this.handleNextButton.bind(this);
	        nextButton.id = 'next-video';
	        nextButton.textContent = 'Next';
	        container.appendChild(nextButton);
	        const stayButton = document.createElement('div');
	        stayButton.id = 'stay-video';
	        stayButton.textContent = 'Stay';
	        container.appendChild(stayButton);
	        return container;
	    }
	    initSkipContainer() {
	        const startNextVideo = 5;
	        const showContainer = 25;
	        const jwPlayerNextPopup = 10;
	        const minVideoDuration = startNextVideo + showContainer + jwPlayerNextPopup;
	        this._playerInstance.on('time', ({ position, duration }) => {
	            if (!this._canSkip || this._playerInstance._nonLinearAd || this._wasClicked || duration < minVideoDuration) {
	                return;
	            }
	            if (!this._createdSkipContainer && position >= showContainer) {
	                this._createdSkipContainer = true;
	                this.handleNextAdFetch();
	                this._skipContainer = this.createSkipContainer();
	                this._playerInstance.getContainer().appendChild(this._skipContainer);
	                if (getComputedStyle(this._skipContainer).backgroundColor) {
	                    this._skipContainer.classList.add('loaded');
	                }
	            }
	            else if (this._createdSkipContainer && !this._calledNextVideo && position >= showContainer + startNextVideo) {
	                this.handleNextButton();
	            }
	        });
	    }
	    handleVideoPlayerClicked() {
	        this._wasClicked = true;
	        this.removeSkipContainer();
	    }
	    removeSkipContainer() {
	        var _a, _b;
	        (_b = (_a = this._skipContainer) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(this._skipContainer);
	        this._skipContainer = undefined;
	    }
	    handleFirstFrame() {
	        this._calledNextVideo = false;
	        this._createdSkipContainer = false;
	        this._wasClicked = false;
	    }
	}

	let ContextualPlayer = class ContextualPlayer extends JwPlayer {
	    constructor(_playerId, _playlistId, _name, _size, _pageElement, _eventProxy, _config, _isCollapsible, _collapseType, _collapseMobileSizeType, _prebidMethods, _mobileLocation) {
	        super(_playerId, _playlistId, _name, _size, _pageElement, _eventProxy, 10000, _config, _collapseType, _collapseMobileSizeType, _prebidMethods, 'contextual', _isCollapsible);
	        this._mobileLocation = _mobileLocation;
	        this._playerConfig = {
	            repeat: true,
	            nextupoffset: -0.01,
	            playlist: `https://cdn.jwplayer.com/v2/media/${this._playlistId}`,
	        };
	        this._wrapperBarRemoved = false;
	        this._playerElement = document.createElement('div');
	        this._canSkip = false;
	        this._autoplayStationaryPlayer = this._shouldStationaryAutoplay();
	        if (_isCollapsible || this._autoplayStationaryPlayer) {
	            this._playerConfig = { ...this._playerConfig, ...this._autoplayBehaviorConfig };
	            this.initialAuctionPlayer = true;
	            this._stickyElement = null;
	            if (this._collapseType === "adthrive-collapse-mobile" ) {
	                this._eventProxy.footerRefreshed.on(this.handleFooterRefreshedEvent.bind(this));
	            }
	            this._playerContainer = this._pageElement;
	            this._eventProxy.scroll.on(this.handleScroll.bind(this));
	            this._eventProxy.resize.on(this.handleResize.bind(this));
	            this._eventProxy.pageVisibility.on(this.handlePageVisibilityChange.bind(this));
	        }
	    }
	    addToPage() { }
	    _appendPlayer() {
	        const player = document.createElement('div');
	        player.id = this._playlistId;
	        player.className = 'adthrive-jw-static-player';
	        if (this._isCollapsible) {
	            this._pageElement.id = 'adthrive-contextual-container';
	            this._playerElement.className = 'adthrive-player-position';
	            this._playerElement.id = 'adthrive-contextual-position';
	            if (this._config.video.removeVideoTitleWrapper) {
	                this._playerElement.appendChild(this.createPlayerCloseButton());
	            }
	            else {
	                this._playerElement.appendChild(this.createPlayerWrapper(false));
	            }
	            this._playerElement.appendChild(player);
	            this._pageElement.appendChild(this._playerElement);
	        }
	        else {
	            this._pageElement.appendChild(player);
	        }
	    }
	    setup() {
	        if (this._isFirstPlay) {
	            this._appendPlayer();
	        }
	        this._playerInstance = window.jwplayer(this._playlistId);
	        if (this._isCollapsible) {
	            this._collapseCollection = {
	                playerInstance: this._playerInstance,
	                playerType: 'contextualCollapse',
	                playerState: this._state,
	                playerContainer: this._pageElement,
	                playerElement: this._playerElement,
	                footerElement: this._config.video.footerSelector ? document.querySelector(this._config.video.footerSelector) : null,
	                stickyElement: this._stickyElement,
	                closeButton: this._closeButton,
	                closeButtonTimeout: this._config.video.closeButtonTimeout,
	                forceMobile: this._config.context.device !== 'desktop',
	                collapseType: this._collapseType,
	                collapseMobileSizeType: this._collapseMobileSizeType,
	                collapseSubType: this.getCollapseSubType(this._collapseType, this._stickyElement),
	                collapseMobileSubType: this._getCollapseMobileSubType(),
	                collapseTimer: {
	                    timeCollapsed: 0,
	                    isRunning: false,
	                },
	                mediaStarted: false,
	            };
	        }
	        this.jwSetup(this._playerConfig);
	        this._playerInstance.on('play', () => {
	            this._eventProxy.emitVideoPlayingEvent(this._playlistId);
	        });
	        this._playerInstance.on('adPlay', () => {
	            this._eventProxy.emitVideoPlayingEvent(this._playlistId);
	        });
	        if (this._isCollapsible) {
	            this._eventProxy.videoPlaying.on(this.handleVideoPlayingEvent.bind(this));
	        }
	        else {
	            this._eventProxy.videoPlaying.on(this.contextualHandleVideoPlayingEvent.bind(this));
	        }
	        this._config.video.contextualPlayerAdded = true;
	        logger.info('StaticPlayer', 'jwPlayer', `Video > Embedded video ${this._playlistId}`);
	        this._playerInstance.on('ready', () => {
	            this.configureQuality();
	            this.initRelatedPlaylist();
	            this._setPlayerVersions();
	            this._prerollAdUrl = this.buildVideoUrl(this);
	            if (this._autoplayStationaryPlayer) {
	                if (VideoUtils.playerInView(this._pageElement)) {
	                    this._playerInstance.play(true);
	                }
	                this._logStationaryAutoplay();
	            }
	            if (this._isCollapsible) {
	                this.playerReady();
	            }
	        });
	    }
	    _logStationaryAutoplay() {
	        if (this._config.video.logAdLifeCycle) {
	            logger.event('JwPlayer', 'StaticPlayer', {
	                message: `Static Player set to autoplay for playlist id ${this._playlistId}`,
	                ...this._getPlayerVersions(),
	            });
	        }
	    }
	    loadPlaylistPlayerVideos() {
	        const jwPromise = this._config.video.jwPlaylist;
	        jwPromise
	            .then((result) => {
	            if (result.playlist && result.playlist.length) {
	                const newPlaylist = this._playerInstance.getPlaylist().concat(VideoUtils.shufflePlaylist(result.playlist));
	                this._playerInstance.once('userInactive', () => { var _a; return !((_a = this._collapseCollection) === null || _a === void 0 ? void 0 : _a.mediaStarted) && this.handleScroll(); });
	                this._playerInstance.load(newPlaylist);
	                this.handleScroll();
	            }
	        })
	            .catch(() => false);
	    }
	    setupAllowSkip() {
	        if (this._config.video.advancePlaylist.relatedPlayer.applyToFirst) {
	            this._canSkip = true;
	        }
	        this._playerInstance.once('complete', () => {
	            this.hideWrapperBar();
	            this._canSkip = true;
	        });
	    }
	    handleNextButton() {
	        this.hideWrapperBar();
	        super.handleNextButton();
	    }
	    _shouldStationaryAutoplay() {
	        return !this._config.video.playlistPlayerAdded && !!document.querySelector('body.adthrive-video-autoplay');
	    }
	    setWrapperBar() {
	        this._wrapperBar = this._playerElement.querySelector('.adthrive-wrapper-bar');
	    }
	    hideWrapperBar() {
	        const wrapperBar = this._wrapperBar;
	        const playerElement = this._playerElement;
	        if (this._wrapperBarRemoved || !wrapperBar) {
	            return;
	        }
	        this._wrapperBarRemoved = true;
	        wrapperBar.parentNode && wrapperBar.parentNode.removeChild(wrapperBar);
	        this._wrapperBar = null;
	        playerElement.insertBefore(this.createPlayerCloseButton(), playerElement.firstChild);
	        if (this._collapseCollection) {
	            this._collapseCollection.closeButton = this._closeButton;
	            this.displayCloseButton();
	        }
	    }
	    initRelatedPlaylist() {
	        const videoConfig = this._config.video;
	        const advancePlayConfig = videoConfig.advancePlaylist.relatedPlayer;
	        advancePlayConfig.shouldRun
	            .then(result => {
	            if (result) {
	                this.loadPlaylistPlayerVideos();
	                this.setupAllowSkip();
	                this._playerInstance.on('firstFrame', () => this.handleFirstFrame());
	                this._playerInstance.getContainer().addEventListener('click', () => this.handleVideoPlayerClicked());
	                this.initSkipContainer();
	            }
	        })
	            .catch(() => false);
	    }
	    playerReady() {
	        this.setWrapperBar();
	        if (this._wrapperBar) {
	            this._wrapperBar.style.setProperty('display', 'flex');
	        }
	        if (this._videoTitleElement) {
	            const maybePlaylistItem = this._playerInstance.getPlaylistItem(0);
	            const title = tryToAccessProperty(maybePlaylistItem, 'title');
	            this._videoTitleElement.innerText = typeof title === 'string' ? title : '';
	        }
	        this._playerInstance.on('pause', pauseEvent => {
	            if (pauseEvent.pauseReason === 'interaction') {
	                this.handleUserClick();
	            }
	        });
	        this._playerInstance.on('play', playEvent => {
	            if (playEvent.playReason === 'interaction') {
	                this.handleUserClick();
	            }
	            this._eventProxy.emitVideoPlayingEvent(this._playlistId);
	        });
	        this._playerInstance.on('adPlay', () => {
	            this._eventProxy.emitVideoPlayingEvent(this._playlistId);
	        });
	        this.handleResize();
	    }
	    contextualHandleVideoPlayingEvent(playlistId) {
	        if (playlistId === this._playlistId) {
	            return;
	        }
	        this._playerInstance.pause(true);
	    }
	    _getCollapseMobileSubType() {
	        return this._mobileLocation ? this._mobileLocation : undefined;
	    }
	};
	ContextualPlayer = __decorate([
	    log('ContextualPlayer'),
	    __metadata("design:paramtypes", [Object, String, String, Array, HTMLElement,
	        VideoEventProxy,
	        Config, Boolean, String, String, PrebidMethods, String])
	], ContextualPlayer);

	let PlaylistPlayer = class PlaylistPlayer extends JwPlayer {
	    constructor(_playerId, _playlistId, _name, _size, _sharedVideoSettings, _pageElement, _eventProxy, _config, _collapseType = "adthrive-collapse-float" , _collapseMobileSizeType, _prebidMethods, _mobileLocation, _saveVideoCloseState, _title, _shuffle) {
	        super(_playerId, _playlistId, _name, _size, _pageElement, _eventProxy, _config.video.vastTimeout, _config, _collapseType, _collapseMobileSizeType, _prebidMethods, 'playlist', true, _saveVideoCloseState);
	        this._sharedVideoSettings = _sharedVideoSettings;
	        this._mobileLocation = _mobileLocation;
	        this._title = _title;
	        this._shuffle = _shuffle;
	        this._isCollapsible = true;
	        this._playerConfig = {
	            playlist: `https://cdn.jwplayer.com/v2/playlists/${this._playlistId}`,
	            related: {
	                autoplaytimer: 0,
	            },
	        };
	        this._playerConfig = { ...this._playerConfig, ...this._autoplayBehaviorConfig };
	        this.initialAuctionPlayer = true;
	        this._stickyElement = null;
	        if (this._checkVideoClose()) {
	            this._state = 7 ;
	        }
	        if (this._config.video.footerSelector) {
	            this._footerElement = document.querySelector(this._config.video.footerSelector);
	        }
	        else {
	            this._footerElement = null;
	        }
	        if (this._collapseType === "adthrive-collapse-mobile" ) {
	            this._eventProxy.footerRefreshed.on(this.handleFooterRefreshedEvent.bind(this));
	        }
	        this.clsPlayerContainer = document.querySelector(`#cls-video-container-${this._playlistId} > div`);
	        this._playerContainer = this.clsPlayerContainer ? this.clsPlayerContainer : document.createElement('div');
	        this._playerElement = document.createElement('div');
	        this._collapseCollection = {
	            playerInstance: this._playerInstance,
	            playerType: 'playlist',
	            playerState: this._state,
	            playerContainer: this._playerContainer,
	            playerElement: this._playerElement,
	            stickyElement: this._stickyElement,
	            footerElement: this._footerElement,
	            closeButton: this._closeButton,
	            closeButtonTimeout: this._config.video.closeButtonTimeout,
	            forceMobile: this._config.context.device !== 'desktop',
	            collapseType: this._collapseType,
	            collapseSubType: this.getCollapseSubType(this._collapseType, this._stickyElement),
	            collapseMobileSizeType: this._collapseMobileSizeType,
	            collapseMobileSubType: this._getCollapseMobileSubType(),
	            collapseTimer: {
	                timeCollapsed: 0,
	                isRunning: false,
	            },
	            mediaStarted: false,
	        };
	    }
	    setup() {
	        this._eventProxy.scroll.on(this.handleScroll.bind(this));
	        this._eventProxy.resize.on(this.handleResize.bind(this));
	        this._eventProxy.pageVisibility.on(this.handlePageVisibilityChange.bind(this));
	        this._eventProxy.videoPlaying.on(this.handleVideoPlayingEvent.bind(this));
	    }
	    _appendPlayer() {
	        const player = document.createElement('div');
	        const title = document.createElement('h3');
	        this._playerContainer.classList.add('adthrive-player-container');
	        this._playerContainer.classList.add('adthrive-collapse-player');
	        this._playerContainer.id = 'adthrive-collapse-container';
	        this._playerElement.className = 'adthrive-player-position';
	        this._playerElement.id = 'adthrive-collapse-position';
	        player.id = this._playlistId;
	        title.innerText = this._getTitle();
	        title.className = 'adthrive-player-title';
	        title.id = 'adthrive-collapse-title';
	        this._playerElement.appendChild(title);
	        if (this._config.video.removeVideoTitleWrapper) {
	            this._playerElement.appendChild(this.createPlayerCloseButton());
	        }
	        else {
	            this._playerElement.appendChild(this.createPlayerWrapper(true));
	        }
	        this._collapseCollection.closeButton = this._closeButton;
	        this._playerElement.appendChild(player);
	        this._playerContainer.appendChild(this._playerElement);
	        if (!this.clsPlayerContainer) {
	            this._pageElement.insertAdjacentElement(this._sharedVideoSettings.position, this._playerContainer);
	        }
	    }
	    addToPage() {
	        if (this._isFirstPlay) {
	            this._appendPlayer();
	        }
	        this._playerInstance = window.jwplayer(this._playlistId);
	        if (this._collapseCollection) {
	            this._collapseCollection.playerInstance = this._playerInstance;
	            this._collapseCollection.playerContainer = this._playerContainer;
	            this._collapseCollection.playerElement = this._playerElement;
	        }
	        this.jwSetup(this._playerConfig);
	        this._playerInstance.on('ready', this.playerReady.bind(this));
	        this._config.video.playlistPlayerAdded = true;
	        logger.info('CollapsePlayer', 'addToPage', `Video > JW Collapse ${this._playerId} added`);
	    }
	    playerReady() {
	        var _a;
	        this._setPlayerVersions();
	        this._prerollAdUrl = this.buildVideoUrl(this);
	        (_a = this._playerElement.querySelector('.adthrive-wrapper-bar')) === null || _a === void 0 ? void 0 : _a.style.setProperty('display', 'flex');
	        const shuffle = this._getShuffle();
	        if (shuffle) {
	            const playlistObj = this._playerInstance.getPlaylist();
	            this._playerInstance.load(VideoUtils.shufflePlaylist(playlistObj));
	        }
	        if (this._config.video.advancePlaylist.playlistPlayer.enabled) {
	            this._playerInstance.on('firstFrame', () => this.handleFirstFrame());
	            this._playerInstance.getContainer().addEventListener('click', () => this.handleVideoPlayerClicked());
	            this.initSkipContainer();
	        }
	        this._playerInstance.on('pause', pauseEvent => {
	            if (pauseEvent.pauseReason === 'interaction') {
	                this.handleUserClick();
	            }
	        });
	        this._playerInstance.on('play', playEvent => {
	            if (playEvent.playReason === 'interaction' && !this._calledNextVideo) {
	                this.handleUserClick();
	            }
	            this._eventProxy.emitVideoPlayingEvent(this._playlistId);
	        });
	        this._playerInstance.on('adPlay', () => {
	            this._eventProxy.emitVideoPlayingEvent(this._playlistId);
	        });
	        this._playerInstance.on('playlistItem', playlistItemEvent => {
	            const item = playlistItemEvent.item;
	            if (this._videoTitleElement && hasProperty(item, 'title') && typeof item.title === 'string') {
	                this._videoTitleElement.innerText = item.title;
	            }
	            if (this._wrapperTitleWrapperElement && hasProperty(item, 'link') && typeof item.link === 'string') {
	                this._wrapperTitleWrapperElement.href = item.link;
	            }
	        });
	        this.configureQuality();
	        this.handleResize();
	    }
	    _getShuffle() {
	        return this._shuffle ? this._shuffle : false;
	    }
	    _getTitle() {
	        return this._title ? this._title : '';
	    }
	    _getCollapseMobileSubType() {
	        return this._mobileLocation ? this._mobileLocation : undefined;
	    }
	    _checkVideoClose() {
	        return this._saveVideoCloseState && this._config.video.videoWasClosed;
	    }
	};
	PlaylistPlayer = __decorate([
	    log('PlaylistPlayer'),
	    __metadata("design:paramtypes", [String, String, String, Array, Object, HTMLElement,
	        VideoEventProxy,
	        Config, String, String, PrebidMethods, String, Boolean, String, Boolean])
	], PlaylistPlayer);

	let SekindoPlayer = class SekindoPlayer extends VideoPlayer {
	    constructor(_playlistId, _portalSettings, _pageElement, _device, _width, _height, _isCollapse, _config, _videoRequestManager) {
	        super();
	        this._playlistId = _playlistId;
	        this._portalSettings = _portalSettings;
	        this._pageElement = _pageElement;
	        this._device = _device;
	        this._width = _width;
	        this._height = _height;
	        this._isCollapse = _isCollapse;
	        this._config = _config;
	        this._videoRequestManager = _videoRequestManager;
	        this.API_ID = 'sekindoPlayer';
	        this._clsContainer = null;
	        this._hasTitle = this._portalSettings.title && (this._portalSettings.title !== null || this._portalSettings.title !== '') ? true : false;
	    }
	    addToPage() {
	        this.setup();
	        this._config.video.sekindoPlayerAdded = true;
	    }
	    setup() {
	        window.addEventListener('primisPlayerInit', ((e) => {
	            if (e.detail.playerApiId === this.API_ID) {
	                logger.event('sekindo-player', 'init', 'Sekindo player initialized');
	                this._videoRequestManager.requestingSekindoBids.emit(this).catch(() => { });
	            }
	        }));
	        this._clsContainer = document.querySelector(`#cls-video-container-${this._playlistId}`);
	        const div = document.createElement('div');
	        div.className = 'adthrive-sekindo-player';
	        div.id = 'adthrive-sekindo-container';
	        const script = document.createElement('script');
	        const params = VideoUtils.createQueryString({
	            s: this._isCollapse ? 98876 : 87493,
	            cbuster: '%%CACHEBUSTER%%',
	            pubUrl: '%%REFERRER_URL_ESC_ESC%%',
	            x: this._width,
	            y: this._height,
	            vp_contentFeedId: this._playlistId,
	            subId: this._config.site.id,
	            playerApiId: this.API_ID,
	        });
	        script.async = true;
	        script.defer = true;
	        script.type = 'text/javascript';
	        script.src = `https://live.primis.tech/live/liveView.php?${params}`;
	        if (this._device === 'desktop') {
	            this._desktopSetup(div, script);
	        }
	        else {
	            this._mobileSetup(div, script);
	        }
	    }
	    _desktopSetup(div, script) {
	        if (this._hasTitle) {
	            const title = document.createElement('h4');
	            title.innerText = this._portalSettings.title;
	            title.classList.add('widgettitle');
	            title.id = 'adthrive-sekindo-desktop-title';
	            div.appendChild(title);
	        }
	        div.appendChild(script);
	        if (this._clsContainer) {
	            this._clsContainer.appendChild(div);
	        }
	        else {
	            this._pageElement.insertAdjacentElement(this._portalSettings.position, div);
	        }
	    }
	    _mobileSetup(div, script) {
	        if (this._hasTitle) {
	            const title = document.createElement('strong');
	            title.innerText = this._portalSettings.title;
	            title.id = 'adthrive-sekindo-mobile-title';
	            div.appendChild(title);
	        }
	        div.appendChild(script);
	        const wrapperDiv = document.createElement('div');
	        wrapperDiv.className = 'adthrive-sekindo-mobile-center';
	        wrapperDiv.id = 'adthrive-sekindo-mobile-wrapper';
	        wrapperDiv.appendChild(div);
	        if (this._clsContainer) {
	            this._clsContainer.appendChild(wrapperDiv);
	        }
	        else {
	            this._pageElement.insertAdjacentElement(this._portalSettings.position, wrapperDiv);
	        }
	    }
	};
	SekindoPlayer = __decorate([
	    log('SekindoPlayer'),
	    __metadata("design:paramtypes", [String, Object, HTMLElement, String, Number, Number, Boolean, Config,
	        VideoRequestManager])
	], SekindoPlayer);

	class VideoBase extends Component {
	    constructor(_videoConfig, sekindoHoldoutExperimentResult, _component) {
	        super();
	        this._videoConfig = _videoConfig;
	        this._component = _component;
	        this._stickyRelatedOnPage = false;
	        this._contextualMediaIds = [];
	        const players = this._videoConfig.players || [];
	        this._device = isDesktop() ? 'desktop' : 'mobile';
	        this._potentialPlayerMap = this._setPotentialPlayerMap(sekindoHoldoutExperimentResult);
	        const stationaryRelated = players.filter(player => player.type === "stationaryRelated"  && player.enabled);
	        this._potentialPlayerMap.stationaryRelated = stationaryRelated;
	    }
	    _setPotentialPlayerMap(sekindoHoldoutExperimentResult) {
	        const players = this._videoConfig.players;
	        const defaultMap = {
	            stickyRelated: [],
	            stickyPlaylist: [],
	            sekindo: [],
	            stationaryRelated: [],
	        };
	        return players && players.length
	            ? players
	                .filter((player) => { var _a; return ((_a = player.devices) === null || _a === void 0 ? void 0 : _a.indexOf(this._device)) > -1; })
	                .reduce((accumulator, player) => {
	                if (!accumulator[player.type]) {
	                    logger.event(this._component, 'constructor', 'Unknown Video Player Type detected', player.type);
	                    accumulator[player.type] = [];
	                }
	                if (player.enabled) {
	                    if (!sekindoHoldoutExperimentResult || player.type !== "sekindo" ) {
	                        accumulator[player.type].push(player);
	                    }
	                }
	                return accumulator;
	            }, defaultMap)
	            : defaultMap;
	    }
	    _checkPlayerSelectorOnPage(playerType) {
	        const players = this._potentialPlayerMap[playerType].map((player) => {
	            return {
	                player,
	                playerElement: this._getPlacementElement(player),
	            };
	        });
	        if (!players.length) {
	            return { player: null, playerElement: null };
	        }
	        return players[0];
	    }
	    _getOverrideElement(player, playerElement, publisherPageElement) {
	        if (player && playerElement) {
	            const div = document.createElement('div');
	            playerElement.insertAdjacentElement(player.position, div);
	            publisherPageElement = div;
	            logger.info(this._component, '_initializeRelatedPlayers', 'Changing injection element', publisherPageElement);
	        }
	        else {
	            const { player: stickyPlaylistPlayer, playerElement: stickyPlaylistElement } = this._checkPlayerSelectorOnPage("stickyPlaylist" );
	            if (stickyPlaylistPlayer && stickyPlaylistElement) {
	                const div = document.createElement('div');
	                stickyPlaylistElement.insertAdjacentElement(stickyPlaylistPlayer.position, div);
	                publisherPageElement = div;
	                logger.info(this._component, '_initializeRelatedPlayers', 'Changing injection element', publisherPageElement);
	            }
	        }
	        return publisherPageElement;
	    }
	    _shouldOverrideElement(element) {
	        const overrideEmbed = element.getAttribute('override-embed');
	        if (overrideEmbed === 'true' || overrideEmbed === 'false') {
	            return overrideEmbed === 'true';
	        }
	        return this._videoConfig.contextualSettings ? this._videoConfig.contextualSettings.overrideEmbedLocation : false;
	    }
	    _getPlacementElement(settings) {
	        const pageSelectorEl = allowablePageSelector(settings.pageSelector);
	        const elementSelectorEl = validCssSelector(settings.elementSelector);
	        if (!pageSelectorEl.valid) {
	            logger.error('VideoUtils', 'getPlacementElement', new Error(`${settings.pageSelector} is not a valid selector`));
	            return null;
	        }
	        if (settings.pageSelector && !pageSelectorEl.elements.length) {
	            logger.event('VideoUtils', 'getPlacementElement', new Error(`PSNF: ${settings.pageSelector} does not exist on the page`));
	            return null;
	        }
	        if (!elementSelectorEl.valid) {
	            logger.error('VideoUtils', 'getPlacementElement', new Error(`${settings.elementSelector} is not a valid selector`));
	            return null;
	        }
	        if (elementSelectorEl.elements.length > settings.skip) {
	            return elementSelectorEl.elements[settings.skip];
	        }
	        else {
	            logger.event('VideoUtils', 'getPlacementElement', new Error(`ESNF: ${settings.elementSelector} does not exist on the page`));
	            return null;
	        }
	    }
	    _getEmbeddedPlayerType(element) {
	        let embeddedPlayerType = element.getAttribute('data-player-type');
	        if (!embeddedPlayerType || embeddedPlayerType === 'default') {
	            embeddedPlayerType = this._videoConfig.contextualSettings ? this._videoConfig.contextualSettings.defaultPlayerType : 'static';
	        }
	        if (this._stickyRelatedOnPage) {
	            embeddedPlayerType = 'static';
	        }
	        return embeddedPlayerType;
	    }
	    _getUnusedMediaId(publisherPageElement) {
	        const mediaId = publisherPageElement.getAttribute('data-video-id');
	        if (mediaId && this._contextualMediaIds.indexOf(mediaId) === -1) {
	            this._contextualMediaIds.push(mediaId);
	            return mediaId;
	        }
	        else {
	            logger.info(this._component, '_getUnusedMediaId', 'No Unique MediaId');
	            return false;
	        }
	    }
	    _createRelatedPlayer(mediaId, embeddedPlayerType, publisherPageElement) {
	        if (embeddedPlayerType === 'collapse') {
	            this._createCollapsePlayer(mediaId, publisherPageElement);
	        }
	        else if (embeddedPlayerType === 'static') {
	            this._createStaticPlayer(mediaId, publisherPageElement);
	        }
	    }
	    _createCollapsePlayer(mediaId, publisherPageElement) {
	        const { player: stickyRelatedPlayer, playerElement: stickyRelatedElement } = this._checkPlayerSelectorOnPage("stickyRelated" );
	        const player = stickyRelatedPlayer ? stickyRelatedPlayer : this._potentialPlayerMap["stationaryRelated" ][0];
	        if (player && player.playerId) {
	            const shouldOverrideElement = this._shouldOverrideElement(publisherPageElement);
	            if (shouldOverrideElement) {
	                publisherPageElement = this._getOverrideElement(stickyRelatedPlayer, stickyRelatedElement, publisherPageElement);
	            }
	            publisherPageElement = document.querySelector(`#cls-video-container-${mediaId} > div`) || publisherPageElement;
	            this._createStickyRelatedPlayer({ ...player, mediaId }, publisherPageElement);
	        }
	        else {
	            logger.error(this._component, '_createCollapsePlayer', 'No video player found');
	        }
	    }
	    _createStaticPlayer(mediaId, publisherPageElement) {
	        if (this._potentialPlayerMap["stationaryRelated" ].length && this._potentialPlayerMap["stationaryRelated" ][0].playerId) {
	            const player = this._potentialPlayerMap["stationaryRelated" ][0];
	            this._createStationaryRelatedPlayer({ ...player, mediaId }, publisherPageElement);
	        }
	        else {
	            logger.error(this._component, '_createStaticPlayer', 'No video player found');
	        }
	    }
	    _shouldRunAutoplayPlayers() {
	        if (this._isVideoAllowedOnPage()) {
	            if (this._potentialPlayerMap["stickyRelated" ].length ||
	                this._potentialPlayerMap["stickyPlaylist" ].length ||
	                this._potentialPlayerMap["sekindo" ].length) {
	                return true;
	            }
	        }
	        return false;
	    }
	    _determineAutoplayPlayers() {
	        const componentName = this._component;
	        const isVideoManagerComponent = componentName === 'VideoManagerComponent';
	        const config = this._config;
	        if (this._stickyRelatedOnPage) {
	            logger.event(componentName, 'stickyRelatedOnPage', (isVideoManagerComponent && {
	                device: config && config.context.device,
	                isDesktop: this._device,
	            }) ||
	                {});
	            return;
	        }
	        const { player: stickyPlaylistPlayer, playerElement: stickyPlaylistElement } = this._checkPlayerSelectorOnPage("stickyPlaylist" );
	        const { player: sekindoPlayer, playerElement: sekindoElement } = this._checkPlayerSelectorOnPage("sekindo" );
	        if (stickyPlaylistPlayer && stickyPlaylistPlayer.playerId && stickyPlaylistPlayer.playlistId && stickyPlaylistElement) {
	            this._createPlaylistPlayer(stickyPlaylistPlayer, stickyPlaylistElement);
	        }
	        else if (sekindoPlayer && sekindoPlayer.playlistId && sekindoElement) {
	            this._createSekindoPlayer(sekindoPlayer, sekindoElement);
	        }
	        else {
	            logger.event(componentName, 'noStickyPlaylistOrSekindo', (isVideoManagerComponent && {
	                vendor: 'none',
	                device: config && config.context.device,
	                isDesktop: this._device,
	            }) ||
	                {});
	        }
	    }
	    _initializeRelatedPlayers(publisherPageElements) {
	        for (let t = 0; t < publisherPageElements.length; t++) {
	            const publisherPageElement = publisherPageElements[t];
	            const embeddedPlayerType = this._getEmbeddedPlayerType(publisherPageElement);
	            logger.info(this._component, '_initializeRelatedPlayers', 'embeddedPlayerType', embeddedPlayerType);
	            const mediaId = this._getUnusedMediaId(publisherPageElement);
	            if (mediaId) {
	                this._createRelatedPlayer(mediaId, embeddedPlayerType, publisherPageElement);
	            }
	        }
	    }
	}

	let VideoUrlBuilder = class VideoUrlBuilder {
	    constructor(_abgroup, _auctionManagers, _config, _gam, _irisTv) {
	        this._abgroup = _abgroup;
	        this._auctionManagers = _auctionManagers;
	        this._config = _config;
	        this._gam = _gam;
	        this._irisTv = _irisTv;
	        this.shouldPrebidRun = false;
	    }
	    getVideoTargeting(player, gamTargetingMap) {
	        const _VPRENUM = 'vprenum';
	        const playerVersion = 'jwv';
	        const imaVersion = 'imav';
	        const irisContextual = this._irisTv.irisContextualData;
	        const videoTargeting = {};
	        const rpExpKey = 'rvadv_ab';
	        Object.keys(gamTargetingMap).forEach(key => {
	            const relatedPlaylistExp = this._abgroup.get(rpExpKey);
	            if (key === 'abgroup' && relatedPlaylistExp) {
	                gamTargetingMap[key].push(`${rpExpKey}:${relatedPlaylistExp}`);
	            }
	            videoTargeting[key] = encodeURIComponent(gamTargetingMap[key].toString());
	        });
	        videoTargeting[_VPRENUM] = String(player._prerollNum);
	        videoTargeting[playerVersion] = player.jwVersion || '';
	        videoTargeting[imaVersion] = player.imaVersion || '';
	        if (irisContextual) {
	            const irisKey = 'iris_context';
	            videoTargeting[irisKey] = irisContextual.toString();
	        }
	        return videoTargeting;
	    }
	    getAmazonBidTargeting(amazonAm, playlistId) {
	        const amznBid = amazonAm && amazonAm.getVideoBid && amazonAm.getVideoBid(playlistId);
	        if (amznBid) {
	            return { amznbid: amznBid.amznbid, amzniid: amznBid.amzniid, amznp: amznBid.amznp };
	        }
	    }
	    getCustParams(player) {
	        const targetingMap = this._gam.getTargetingMap();
	        const amazonAm = this._auctionManagers.getAmazonAuctionManager();
	        return {
	            ...this.getVideoTargeting(player, targetingMap),
	            ...(amazonAm && this.getAmazonBidTargeting(amazonAm, player._playlistId)),
	        };
	    }
	    handleGdprConsent() {
	        const gdprConsent = {
	            gdpr: 1,
	            gdpr_consent: 'tcunavailable',
	        };
	        if (typeof window.__tcfapi === 'function') {
	            window.__tcfapi('getFullTCData', 2, tcData => {
	                if (tcData && tcData.tcString.length) {
	                    gdprConsent.gdpr_consent = tcData.tcString;
	                }
	                if (tcData && tcData.addtlConsent.length) {
	                    gdprConsent.addtl_consent = tcData.addtl_consent;
	                }
	            });
	        }
	        return gdprConsent;
	    }
	    getConsentParams() {
	        if (this._config.gdpr.enabled) {
	            this.handleGdprConsent();
	        }
	        else if (this._config.ccpa.privacyString) {
	            return { us_privacy: this._config.ccpa.privacyString };
	        }
	    }
	    getDefaultVideoUrlParams(player) {
	        return {
	            iu: `/${this._config.gam.account}/${this._config.gam.prefix}_${player.name}/${this._config.site.id}`,
	            sz: player.size.join('x'),
	            hl: 'en',
	            output: 'vast',
	            url: '__referrer__',
	            vad_type: 'linear',
	            description_url: '__domain__',
	            pp: '10_VAST%20redirects_video%2Fmp4_VPAID%20JavaScript',
	        };
	    }
	    buildGAMVideoUrl(player) {
	        const consentParams = this.getConsentParams();
	        const custParams = VideoUtils.createQueryString(this.getCustParams(player));
	        const encodedCustParams = VideoUtils.createEncodedQueryString({ cust_params: custParams });
	        const defaultParams = this.getDefaultVideoUrlParams(player);
	        const baseGamUrl = 'https://securepubads.g.doubleclick.net/gampad/ads';
	        const gamVideoUrlParams = {
	            env: 'vp',
	            gdfp_req: '1',
	            unviewed_position_start: '1',
	            correlator: Date.now(),
	            ...defaultParams,
	            ...consentParams,
	        };
	        return `${baseGamUrl}?${VideoUtils.createQueryString(gamVideoUrlParams)}&${encodedCustParams}`;
	    }
	    buildGAMVideoUrlPrebid(player) {
	        const custParams = this.getCustParams(player);
	        const defaultParams = this.getDefaultVideoUrlParams(player);
	        return pbjs.adServers.dfp.buildVideoUrl({
	            adUnit: player.videoAdUnit,
	            params: {
	                ...defaultParams,
	                cust_params: custParams,
	            },
	        });
	    }
	    buildVideoUrl(player) {
	        return this.shouldPrebidRun ? this.buildGAMVideoUrlPrebid(player) : this.buildGAMVideoUrl(player);
	    }
	};
	VideoUrlBuilder = __decorate([
	    log('VideoUrlBuilder'),
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup,
	        AuctionManagers,
	        Config,
	        GoogleAdManager,
	        IrisTv])
	], VideoUrlBuilder);

	let SekindoHoldoutExperiment = class SekindoHoldoutExperiment extends Experiment {
	    constructor(abgroup) {
	        super();
	        this.abgroup = abgroup;
	        this.key = 'sekho';
	        this._result = false;
	        this._choices = [{ choice: true }, { choice: false }];
	        const win = window;
	        const cls = win && win.adthriveCLS;
	        const exp = cls && cls.experiments;
	        const expVal = exp && this.key in exp;
	        this._result = exp && expVal ? exp[this.key] : this.run();
	        this.abgroup.set(this.key, this._result ? 'on' : 'off');
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new BernoulliTrial(0.05).get();
	    }
	};
	SekindoHoldoutExperiment = __decorate([
	    injectable(),
	    log('SekindoHoldoutExperiment'),
	    __metadata("design:paramtypes", [ABGroup])
	], SekindoHoldoutExperiment);

	let VideoManagerComponent = class VideoManagerComponent extends VideoBase {
	    constructor(_config, _prebidMethods, _jwBoostExperiment, _userPageDataLoggingEvent, _collapsibleVideoLoggingStore, _videoRequestManager, _eventProxy, _mediaType, _sekindoHoldoutExperiment, _videoUrlBuilder, _irisTv) {
	        super(_config.video, _sekindoHoldoutExperiment.result, 'VideoManagerComponent');
	        this._config = _config;
	        this._prebidMethods = _prebidMethods;
	        this._jwBoostExperiment = _jwBoostExperiment;
	        this._userPageDataLoggingEvent = _userPageDataLoggingEvent;
	        this._collapsibleVideoLoggingStore = _collapsibleVideoLoggingStore;
	        this._videoRequestManager = _videoRequestManager;
	        this._eventProxy = _eventProxy;
	        this._mediaType = _mediaType;
	        this._sekindoHoldoutExperiment = _sekindoHoldoutExperiment;
	        this._videoUrlBuilder = _videoUrlBuilder;
	        this._irisTv = _irisTv;
	        this._sekindoPlayers = [];
	        this._jwPlayers = [];
	        this._IN_POST_SELECTOR = '.adthrive-video-player';
	        logger.info('VideoManagerComponent', 'constructor', '_potentialPlayerMap', this._potentialPlayerMap);
	    }
	    init() {
	        this._handleCollapsibleVideoLogging();
	        this._initializePlayers();
	        this._mediaType.runOneStreamExperiment();
	    }
	    _initializePlayers() {
	        const publisherVideoElements = document.querySelectorAll(this._IN_POST_SELECTOR);
	        logger.info('VideoManagerComponent', '_initializePlayers', 'publisherVideoElements', publisherVideoElements);
	        if (publisherVideoElements.length) {
	            this._initializeRelatedPlayers(publisherVideoElements);
	        }
	        if (!this._shouldRunAutoplayPlayers()) {
	            logger.info('VideoManagerComponent', '_initializePlayers', 'disable autoplay players');
	            try {
	                this._importScripts();
	            }
	            catch (e) {
	                logger.error('VideoManagerComponent', 'initializePlayers', e);
	            }
	            return;
	        }
	        this._determineAutoplayPlayers();
	        try {
	            this._importScripts();
	        }
	        catch (e) {
	            logger.error('VideoManagerComponent', 'initializePlayers', e);
	        }
	    }
	    _createStationaryRelatedPlayer(player, element) {
	        const isCollapse = false;
	        const playerSize = this._device === 'mobile' ? [400, 225] : [640, 360];
	        const playerName = VideoAdUnit.Video_In_Post_ClicktoPlay_SoundOn;
	        const playerCollapseType = "adthrive-collapse-mobile" ;
	        const relatedPlayer = new ContextualPlayer(player.playerId, player.mediaId, playerName, playerSize, element, this._eventProxy, this._config, isCollapse, playerCollapseType, "adthrive-collapse-medium" , this._prebidMethods);
	        logger.info('VideoManagerComponent', '_createStationaryRelatedPlayer', 'related player created', relatedPlayer);
	        this._jwPlayers.push(relatedPlayer);
	    }
	    _createStickyRelatedPlayer(player, element) {
	        const isCollapse = true;
	        const playerSize = this._device === 'mobile' ? [400, 225] : [640, 360];
	        const playerName = VideoAdUnit.Video_Individual_Autoplay_SOff;
	        const playerCollapseType = this._getCollapseType();
	        this._collapsibleVideoLoggingStore.playerName = playerName;
	        this._stickyRelatedOnPage = true;
	        this._config.video.mobileStickyPlayerOnPage = this._device === 'mobile' ? true : false;
	        const relatedPlayer = new ContextualPlayer(player.playerId, player.mediaId, playerName, playerSize, element, this._eventProxy, this._config, isCollapse, playerCollapseType, "adthrive-collapse-medium" , this._prebidMethods, player.mobileLocation);
	        logger.info('VideoManagerComponent', '_createStickyRelatedPlayer', 'related player created', relatedPlayer);
	        this._jwPlayers.push(relatedPlayer);
	    }
	    _createSekindoPlayer(player, element) {
	        const playlistId = player.playlistId;
	        const playerSize = this._device === 'mobile' ? { width: 340, height: 260 } : { width: 320, height: 250 };
	        const playerSettings = { ...player, classNames: [] };
	        const isCollapse = false;
	        this._sekindoPlayers.push(new SekindoPlayer(playlistId, playerSettings, element, this._device, playerSize.width, playerSize.height, isCollapse, this._config, this._videoRequestManager));
	    }
	    _createPlaylistPlayer(player, element) {
	        const playerId = player.playerId;
	        const playlistId = player.playlistId;
	        const collapseType = this._getCollapseType();
	        const playerSize = collapseType === "adthrive-collapse-mobile"  ? [400, 225] : [640, 360];
	        const playerName = this._device === 'mobile' ? VideoAdUnit.Video_Coll_SOff_Smartphone : VideoAdUnit.Video_Collapse_Autoplay_SoundOff;
	        const settings = {
	            classNames: [],
	            enabled: true,
	            pageSelector: player.pageSelector,
	            elementSelector: player.elementSelector,
	            position: player.position,
	            skip: player.skip,
	        };
	        this._config.video.mobileStickyPlayerOnPage = true;
	        const playlistPlayer = new PlaylistPlayer(playerId, playlistId, playerName, playerSize, settings, element, this._eventProxy, this._config, collapseType, "adthrive-collapse-medium" , this._prebidMethods, player.mobileLocation, player.saveVideoCloseState, player.title, player.shuffle);
	        logger.info('VideoManagerComponent', '_createPlaylistPlayer', 'Playlist Player Created', playlistPlayer);
	        this._collapsibleVideoLoggingStore.playerName = playerName;
	        this._jwPlayers.push(playlistPlayer);
	    }
	    _initJwBoost() {
	        this._prebidMethods.setConfig({
	            ...(this._jwBoostExperiment.result &&
	                this._jwPlayers.length && {
	                realTimeData: {
	                    dataProviders: [
	                        {
	                            name: 'jwplayer',
	                            params: {
	                                mediaIDs: this._contextualMediaIds,
	                            },
	                        },
	                    ],
	                },
	            }),
	        });
	    }
	    _hasCollapsiblePlayer(players) {
	        return players.length ? players.some(player => player.collapsible) : false;
	    }
	    _hasInViewAutoplayStationaryPlayer(players) {
	        return players.length ? players.some(player => !player.collapsible && VideoUtils.playerInView(player._pageElement)) : false;
	    }
	    _setPlayerInstance(player) {
	        void this._resetPlayer(player);
	    }
	    _resetPlayer(player) {
	        logger.info('VideoManagerComponent', 'reset', `Video > JW player ${player._playerId}`);
	        player.init();
	    }
	    async _initializePlayer(player, isContextual) {
	        const videoRequestManager = this._videoRequestManager;
	        logger.info('VideoManagerComponent', 'import', `Video > Imported JW player ${player._playerId}`);
	        player.setDefaults(window.jwplayer.defaults);
	        window.jwplayer.defaults = {};
	        await this._prebidMethods
	            .waitForQueue()
	            .then(() => {
	            this._videoUrlBuilder.shouldPrebidRun = true;
	        })
	            .catch(() => { });
	        if (isContextual && this._contextualMediaIds[0]) {
	            await this._irisTv.setContextualData(this._contextualMediaIds[0]);
	        }
	        videoRequestManager.addVideoSlots([player]);
	        if (player.initialAuctionPlayer) {
	            await videoRequestManager.requestVideoBids([player]);
	        }
	        player.setPlayerInstance = this._setPlayerInstance.bind(this);
	        player.requestVideoBids = async (players) => {
	            return await videoRequestManager.requestVideoBids(players);
	        };
	        GoogleAdManager.pushToQueue(() => {
	            player.buildVideoUrl = this._videoUrlBuilder.buildVideoUrl.bind(this._videoUrlBuilder);
	            player.addToPage();
	            player.init();
	        });
	    }
	    _importScripts() {
	        const hasCollapsiblePlayer = this._hasCollapsiblePlayer(this._jwPlayers);
	        const hasInViewAutoplayStationaryPlayer = !hasCollapsiblePlayer && this._hasInViewAutoplayStationaryPlayer(this._jwPlayers);
	        if (hasCollapsiblePlayer || hasInViewAutoplayStationaryPlayer || this._sekindoPlayers.length) {
	            this._config.video.preventStickyOutstream = true;
	        }
	        this._initJwBoost();
	        if (this._jwPlayers.length) {
	            this._config.video.hasJwPlayer = true;
	        }
	        this._jwPlayers.forEach(player => {
	            const isContextual = player.isPlayerType === 'contextual';
	            if (isContextual) {
	                this._config.video.setupAdvanceRelatedExperiment(player.collapsible);
	            }
	            importScript(`https://content.jwplatform.com/libraries/${player._playerId}.js`)
	                .then(async () => this._initializePlayer(player, isContextual))
	                .catch(error => logger.error('VideoManagerComponent', 'importScripts', error));
	        });
	        this._sekindoPlayers.forEach(player => {
	            player.addToPage();
	        });
	    }
	    _isVideoAllowedOnPage() {
	        if (this._config.disableAds.video) {
	            logger.info('VideoManagerComponent', 'isVideoAllowedOnPage', 'Video > Non in post players are disabled on page');
	            if (this._config.disableAds.reasons.has('video_tag')) {
	                logger.error('VideoManagerComponent', 'isVideoAllowedOnPage', new Error('DBP: Disabled by publisher via video tag'));
	            }
	            else if (this._config.disableAds.reasons.has('video_plugin')) {
	                logger.error('VideoManagerComponent', 'isVideoAllowedOnPage', new Error('DBP: Disabled by publisher via video plugin'));
	            }
	            else if (this._config.disableAds.reasons.has('video_page')) {
	                logger.error('VideoManagerComponent', 'isVideoAllowedOnPage', new Error('DBP: Disabled by publisher via command queue'));
	            }
	            else {
	                logger.error('VideoManagerComponent', 'isVideoAllowedOnPage', new Error('DBP: Disabled by publisher via other'));
	            }
	            return false;
	        }
	        return true;
	    }
	    _getCollapseType() {
	        if (this._device === 'mobile') {
	            return "adthrive-collapse-mobile" ;
	        }
	        else {
	            return "adthrive-collapse-float" ;
	        }
	    }
	    _handleCollapsibleVideoLogging() {
	        CollapseUtils.collapseEvent.on(() => {
	            this._collapsibleVideoLoggingStore.startedCollapsedTime = now$2();
	        });
	        CollapseUtils.uncollapseEvent.on(() => {
	            this._collapsibleVideoLoggingStore.totalTimeCollapsed += this._collapsibleVideoLoggingStore.startedCollapsedTime
	                ? now$2() - this._collapsibleVideoLoggingStore.startedCollapsedTime
	                : 0;
	            this._collapsibleVideoLoggingStore.startedCollapsedTime = undefined;
	        });
	        CollapseUtils.closeEvent.on(() => {
	            this._collapsibleVideoLoggingStore.wasClosed = true;
	        });
	        CollapseUtils.startEvent
	            .once()
	            .then(() => {
	            this._collapsibleVideoLoggingStore.wasStarted = true;
	        })
	            .catch(() => { });
	        this._userPageDataLoggingEvent.loggingData.on(() => {
	            if (this._collapsibleVideoLoggingStore.startedCollapsedTime) {
	                this._collapsibleVideoLoggingStore.totalTimeCollapsed += now$2() - this._collapsibleVideoLoggingStore.startedCollapsedTime;
	            }
	        });
	    }
	};
	VideoManagerComponent = __decorate([
	    log('VideoManagerComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [Config,
	        PrebidMethods,
	        JwBoostExperiment,
	        UserPageDataLoggingEvents,
	        CollapsibleVideoLoggingStore,
	        VideoRequestManager,
	        VideoEventProxy,
	        MediaType,
	        SekindoHoldoutExperiment,
	        VideoUrlBuilder,
	        IrisTv])
	], VideoManagerComponent);

	let WebVitalsComponent = class WebVitalsComponent extends Component {
	    constructor(_bootstrapConfig, _pageManager) {
	        super();
	        this._bootstrapConfig = _bootstrapConfig;
	        this._pageManager = _pageManager;
	        this._maxTimeOnPage = 3600000;
	        this._webVitals = [];
	        this._webVitalsSent = false;
	        this._visibilityChangeOff = this._pageManager.visibilityChange.on(() => this.logWebVitals());
	    }
	    init() {
	        domReady()
	            .then(() => {
	            const webVitals = window.webVitals;
	            const addWebVital = this.addWebVital;
	            webVitals.getFID(addWebVital);
	            webVitals.getCLS(addWebVital);
	            webVitals.getLCP(addWebVital);
	            webVitals.getFCP(addWebVital);
	            webVitals.getTTFB(addWebVital);
	        })
	            .catch(() => false);
	        window.addEventListener('LogWebVital', event => {
	            this._webVitals.push(event.detail);
	        });
	        setTimeout(() => {
	            this.logWebVitals();
	        }, this._maxTimeOnPage);
	    }
	    addWebVital({ name, delta, value, id }) {
	        const webVitalEvent = new CustomEvent('LogWebVital', { detail: { name, delta, value, id } });
	        window.dispatchEvent(webVitalEvent);
	    }
	    logWebVitals() {
	        if (this._webVitalsSent) {
	            return;
	        }
	        const webVitalsData = { webVitals: this._webVitals, gptLoad: true };
	        this._webVitalsSent = true;
	        this._visibilityChangeOff();
	        if (this._bootstrapConfig.gptLibFailed) {
	            webVitalsData.gptLoad = false;
	        }
	        logger.fetchEvent('WebVitalsComponent', 'logWebVital', webVitalsData);
	    }
	    get enabled() {
	        return this._bootstrapConfig.webVitalsEnabled;
	    }
	};
	WebVitalsComponent = __decorate([
	    log('WebVitalsComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [BootstrapConfig, PageManager])
	], WebVitalsComponent);

	let LayoutShiftExperiment = class LayoutShiftExperiment extends Experiment {
	    constructor(abgroup) {
	        super();
	        this._result = false;
	        this.key = 'logcls';
	        this._choices = [{ choice: true }, { choice: false }];
	        if (isChrome()) {
	            this._result = this.run();
	            abgroup.set(this.key, this._result ? 'on' : 'off');
	        }
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new BernoulliTrial(0.1).get();
	    }
	};
	LayoutShiftExperiment = __decorate([
	    log('LayoutShiftExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup])
	], LayoutShiftExperiment);

	let LayoutShiftComponent = class LayoutShiftComponent extends Component {
	    constructor(_gam, _slotManager, _slots, _videoRequestManager, _layoutShiftExperiment, _pageManager) {
	        super();
	        this._gam = _gam;
	        this._slotManager = _slotManager;
	        this._slots = _slots;
	        this._videoRequestManager = _videoRequestManager;
	        this._layoutShiftExperiment = _layoutShiftExperiment;
	        this._pageManager = _pageManager;
	        this._events = [];
	        this._maxTimeOnPage = 3600000;
	        this._screenHeightsWithin = 5;
	        this._previousSiblings = 3;
	        this._layoutShiftData = [];
	        this._slotResize = {};
	        this._loggedInitialLoadShift = false;
	        this._maxPayloadSize = 3062;
	    }
	    init() {
	        this.watchSlotShift();
	    }
	    get enabled() {
	        return (this._layoutShiftExperiment.result &&
	            'ResizeObserver' in window &&
	            'PerformanceObserver' in window &&
	            PerformanceObserver.supportedEntryTypes.indexOf('layout-shift') > -1);
	    }
	    watchSlotShift() {
	        this.setPerformanceObserver();
	        this.setResizeEvents();
	        this.setEventListeners();
	    }
	    setPerformanceObserver() {
	        if (!this._layoutObserver) {
	            try {
	                this._layoutObserver = new PerformanceObserver(list => {
	                    this.analyzeEntries(list.getEntries());
	                });
	                this._layoutObserver.observe({
	                    type: 'layout-shift',
	                    buffered: false,
	                });
	            }
	            catch (e) {
	                logger.error('LayoutShiftComponent', 'SetPerformanceObserver', e);
	            }
	        }
	    }
	    setResizeEvents() {
	        this._events.push(this._videoRequestManager.requestingSekindoBids.on(video => {
	            this.setResizeObservers(video._playlistId, video._pageElement);
	        }));
	        this._events.push(this._videoRequestManager.requestingVideoBids.on(videos => {
	            videos.forEach(video => {
	                this.setResizeObservers(video._playlistId, video._pageElement);
	            });
	        }));
	        this._events.push(this._gam.slotRequested.on(({ slot }) => {
	            this.setResizeObservers(slot.element.id, slot.element);
	        }));
	        this._slotManager.refreshing
	            .once()
	            .then(() => {
	            this.logLayoutShift();
	        })
	            .catch(() => { });
	    }
	    setEventListeners() {
	        this._events.push(this._pageManager.beforeUnload.on(() => this.logLayoutShift()));
	        this._events.push(this._pageManager.visibilityChange.on(() => this.logLayoutShift()));
	        setTimeout(() => {
	            this.logLayoutShift();
	        }, this._maxTimeOnPage);
	    }
	    setResizeObservers(id, element) {
	        if (!this._slotResize[id]) {
	            this._slotResize[id] = {
	                hasResized: false,
	                resizeObserver: new ResizeObserver((entries) => {
	                    entries.forEach(() => {
	                        this._slotResize[id].hasResized = true;
	                        this._slotResize[id].ro_ts = Date.now();
	                        this._slotResize[id].resizeObserver.disconnect();
	                    });
	                }),
	            };
	            this._slotResize[id].resizeObserver.observe(element);
	        }
	    }
	    analyzeEntries(entries) {
	        const performanceTimestamp = Date.now();
	        for (const entry of entries) {
	            const { value, sources, hadRecentInput } = entry;
	            if (!hadRecentInput) {
	                const data = {
	                    value,
	                    po_ts: performanceTimestamp,
	                    nodes: [],
	                };
	                for (const source of sources) {
	                    if (source.node) {
	                        const identifier = this.getIdentifier(source.node);
	                        const key = identifier.split(':')[1];
	                        data.nodes.push({
	                            identifier,
	                            posDiff: source.currentRect.top - source.previousRect.top,
	                            absPos: window.pageYOffset + source.currentRect.top,
	                            prevEls: this.getPreviousSibling(source.node, this._previousSiblings),
	                            parent: this.getIdentifier(source.node.parentNode),
	                            hasResized: this.checkResizes(source.node),
	                            ...(this._slotResize[key] && this._slotResize[key].ro_ts && { ro_ts: this._slotResize[key].ro_ts }),
	                        });
	                    }
	                }
	                this._layoutShiftData.push(data);
	            }
	        }
	    }
	    getIdentifier(element) {
	        return element.id
	            ? `id:${element.id}`
	            : element.classList && element.classList.value
	                ? `class:${element.classList.value.split(' ').join('.')}`
	                : `node:${element.nodeName.toLowerCase()}`;
	    }
	    getPreviousSibling(elem, siblingNum = 3) {
	        let sibling = elem.previousElementSibling;
	        let list = 0;
	        const sibs = [];
	        while (sibling && list < siblingNum) {
	            ++list;
	            sibs.push(this.getIdentifier(sibling));
	            sibling = sibling.previousElementSibling;
	        }
	        return sibs;
	    }
	    checkResizes(element) {
	        const identifier = this.getIdentifier(element).split(':')[1];
	        if (this._slotResize[identifier] && this._slotResize[identifier].hasResized) {
	            return this.checkIsSticky(identifier) || this.checkElementPlacement(element);
	        }
	        return false;
	    }
	    checkIsSticky(identifier) {
	        const slot = this._slots.get(identifier);
	        return slot && slot.isSticky;
	    }
	    checkElementPlacement(element) {
	        return ((isElementInViewport(element) || isElementOffScreenAboveScrolled(element)) && isElementWithinXScreenHeights(element, this._screenHeightsWithin));
	    }
	    logLayoutShift() {
	        if (this._loggedInitialLoadShift) {
	            return;
	        }
	        this._loggedInitialLoadShift = true;
	        this.checkAndTrim(this._layoutShiftData).forEach((layoutShiftDataRequestArray) => {
	            logger.event('LayoutShiftComponent', 'logLayoutShift', layoutShiftDataRequestArray);
	        });
	        this.cleanUp();
	    }
	    checkAndTrim(shiftData = []) {
	        if (!shiftData.length) {
	            logger.info('LayoutShiftComponent', 'logLayoutShift', 'No LayoutShift data detected');
	            return [];
	        }
	        const data = [...shiftData].sort((a, b) => {
	            return b.value - a.value;
	        });
	        const stringified = JSON.stringify(data);
	        if (stringified.length > this._maxPayloadSize) {
	            if (Math.ceil(stringified.length / this._maxPayloadSize) <= 2) {
	                return [data.slice(0, Math.ceil(data.length / 2)), data.slice(Math.ceil(data.length / 2))];
	            }
	            else {
	                const coeff = (this._maxPayloadSize / stringified.length) * (Math.ceil(stringified.length / this._maxPayloadSize) / 2);
	                const trimmedData = data.slice();
	                trimmedData.length = Math.floor(data.length * coeff);
	                return this.checkAndTrim(trimmedData);
	            }
	        }
	        return [data];
	    }
	    cleanUp() {
	        this.disconnectObservers();
	        this.removeEventListeners();
	    }
	    removeEventListeners() {
	        this._events.forEach(turnEventOff => {
	            turnEventOff();
	        });
	    }
	    disconnectObservers() {
	        this._layoutObserver.disconnect();
	        const resizeObserverIdentifiers = Object.keys(this._slotResize);
	        for (const resizeObserverIdentifier of resizeObserverIdentifiers) {
	            this._slotResize[resizeObserverIdentifier].resizeObserver.disconnect();
	        }
	    }
	};
	LayoutShiftComponent = __decorate([
	    log('LayoutShiftComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [GoogleAdManager,
	        SlotManager,
	        Slots,
	        VideoRequestManager,
	        LayoutShiftExperiment,
	        PageManager])
	], LayoutShiftComponent);

	let InfiniteScrollEvents = class InfiniteScrollEvents {
	    constructor() {
	        this.contentAdded = new Emitter();
	    }
	};
	InfiniteScrollEvents = __decorate([
	    log('InfiniteScrollEvents'),
	    singleton()
	], InfiniteScrollEvents);

	let InfiniteScrollDetectionComponent = class InfiniteScrollDetectionComponent extends Component {
	    constructor(_config, _events) {
	        super();
	        this._config = _config;
	        this._events = _events;
	        this._ajaxSelector = '#ajax-load-more';
	        this._heightThreshold = 1000;
	        this._infiniteScrollElement = null;
	    }
	    start() {
	        this.detectInfiniteScroll();
	    }
	    detectInfiniteScroll() {
	        const callback = (mutationsList, source) => {
	            mutationsList
	                .filter(({ type, addedNodes }) => type === 'childList' && addedNodes.length > 0)
	                .reduce((added, { addedNodes }) => [...added, ...Array.prototype.slice.call(addedNodes)], [])
	                .filter((node) => node instanceof HTMLElement && node.clientHeight > this._heightThreshold)
	                .forEach(div => {
	                if (div.parentElement) {
	                    source.disconnect();
	                    source.observe(div.parentElement, { childList: true });
	                }
	                this._events.contentAdded.emit(div).catch(reason => {
	                    logger.error('InfiniteScrollDetectionComponent', 'addMutationObserver', 'added', reason);
	                });
	            });
	        };
	        this.checkForCustomConfig();
	        const observer = new MutationObserver(callback);
	        if (this._infiniteScrollElement) {
	            observer.observe(this._infiniteScrollElement, { childList: true, subtree: true });
	            logger.info('InfiniteScrollDetectionComponent', 'detectInfiniteScroll', 'observing', this._infiniteScrollElement);
	        }
	        else {
	            logger.warn('InfiniteScrollDetectionComponent', 'detectInfiniteScroll', 'observing body, no custom or ajax element found');
	            Array.prototype.slice
	                .call(document.querySelectorAll('body *'))
	                .filter(e => e instanceof HTMLElement && e.offsetHeight > this._heightThreshold)
	                .forEach(e => {
	                observer.observe(e, { childList: true });
	            });
	        }
	    }
	    checkForCustomConfig() {
	        const { heightThreshold, selector } = this._config.adOptions.infiniteScrollOptions;
	        const customElement = selector ? document.querySelector(selector) : null;
	        if (customElement) {
	            this._infiniteScrollElement = customElement;
	        }
	        else {
	            const ajaxElement = document.querySelector(this._ajaxSelector);
	            if (ajaxElement) {
	                this._config.infiniteScroll.ajaxType = true;
	                this._infiniteScrollElement = ajaxElement;
	            }
	        }
	        if (heightThreshold && heightThreshold > 0) {
	            this._heightThreshold = heightThreshold;
	        }
	    }
	    get enabled() {
	        return this._config.adOptions.infiniteScroll && 'MutationObserver' in window;
	    }
	};
	InfiniteScrollDetectionComponent = __decorate([
	    log('InfiniteScrollDetectionComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [Config, InfiniteScrollEvents])
	], InfiniteScrollDetectionComponent);

	let InfiniteScrollDynamicAdsInjector = class InfiniteScrollDynamicAdsInjector extends BaseDynamicAdsInjector {
	    constructor(_config) {
	        super();
	        this._config = _config;
	        this._count = 1;
	    }
	    getDynamicElementId() {
	        return `${this._config.gam.prefix}_Infinite_${this._count++}`;
	    }
	};
	InfiniteScrollDynamicAdsInjector = __decorate([
	    log('InfiniteScrollDynamicAdsInjector'),
	    injectable(),
	    __metadata("design:paramtypes", [Config])
	], InfiniteScrollDynamicAdsInjector);

	let InfiniteScrollDynamicAdsComponent = class InfiniteScrollDynamicAdsComponent extends Component {
	    constructor(_config, _events, _injector, _slotManager, _gam) {
	        super();
	        this._config = _config;
	        this._events = _events;
	        this._injector = _injector;
	        this._slotManager = _slotManager;
	        this._gam = _gam;
	        this._page = 1;
	    }
	    init() {
	        this._events.contentAdded.on(element => {
	            this._page++;
	            this._config.context.pageviewKey = ulid();
	            this._gam.setTargeting({ key: 'pvk', value: this._config.context.pageviewKey });
	            this.addSlots(element);
	        });
	        this._slotManager.added.on(slots => slots.forEach(slot => {
	            GoogleAdManager.pushToQueue(() => {
	                slot.setTargeting({ key: 'inf_scroll', value: this._page.toString() });
	            });
	        }));
	    }
	    addSlots(target) {
	        const lazyDynamicAds = this._config.dynamicAds
	            .filter(dynamicAd => !(this._config.infiniteScroll.ajaxType && dynamicAd.location === 'Sidebar'))
	            .filter(dynamicAd => this.locationEnabled(dynamicAd))
	            .filter(dynamicAd => this.forDevice(dynamicAd, this._config.context.device))
	            .filter(dynamicAd => this.forPage(dynamicAd));
	        const addedDynamicSlots = this._injector.inject(lazyDynamicAds, target);
	        this._slotManager.add(addedDynamicSlots).catch(reason => {
	            logger.error('InfiniteScrollDynamicAdsComponent', 'addSlots', reason);
	        });
	    }
	    get enabled() {
	        return this._config.adOptions.infiniteScroll;
	    }
	    forDevice(dynamicAdUnit, device) {
	        return dynamicAdUnit.devices.indexOf(device) !== -1;
	    }
	    forPage(dynamicAdUnit) {
	        return dynamicAdUnit.pageSelector.length === 0 || document.querySelector(dynamicAdUnit.pageSelector) !== null;
	    }
	    locationEnabled(dynamicAdUnit) {
	        return !this._config.disableAds.locations.has(dynamicAdUnit.location) && !this._config.disableAds.all;
	    }
	};
	InfiniteScrollDynamicAdsComponent = __decorate([
	    log('InfiniteScrollDynamicAdsComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [Config,
	        InfiniteScrollEvents,
	        InfiniteScrollDynamicAdsInjector,
	        SlotManager,
	        GoogleAdManager])
	], InfiniteScrollDynamicAdsComponent);

	let InfiniteScrollRefreshComponent = class InfiniteScrollRefreshComponent extends Component {
	    constructor(_config, _events, _slotManager, _slots) {
	        super();
	        this._config = _config;
	        this._events = _events;
	        this._slotManager = _slotManager;
	        this._slots = _slots;
	        this._debounce = new DebounceByKey(1000);
	    }
	    start() {
	        this._observer = this.getIntersectionObserver();
	        this._events.contentAdded.on(element => {
	            if (this._observer) {
	                this._observer.observe(element);
	            }
	        });
	    }
	    getIntersectionObserver() {
	        return new IntersectionObserver((entries) => {
	            for (const entry of entries) {
	                logger.info('InfiniteScrollRefreshComponent', 'getIntersectionObserver', entry);
	                if (entry.intersectionRatio > 0 && entry.isIntersecting) {
	                    this._debounce
	                        .limit(entry.target.id)
	                        .then(() => this.refresh())
	                        .catch(reason => {
	                        logger.error('InfiniteScrollRefreshComponent', 'getIntersectionObserver', 'refresh', reason);
	                    });
	                }
	            }
	        }, {
	            threshold: [0.08],
	        });
	    }
	    refresh() {
	        if (this._config.adOptions.infiniteScrollRefresh) {
	            const slots = this._slots.get().filter(slot => this._config.infiniteScroll.refreshSlots.has(slot.location) && slot.isSticky);
	            this._slotManager.refresh(slots).catch(reason => {
	                logger.error('InfiniteScrollRefreshComponent', 'refresh', reason);
	            });
	        }
	    }
	    get enabled() {
	        return this._config.adOptions.infiniteScroll && 'IntersectionObserver' in window;
	    }
	};
	InfiniteScrollRefreshComponent = __decorate([
	    log('InfiniteScrollRefreshComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [Config, InfiniteScrollEvents, SlotManager, Slots])
	], InfiniteScrollRefreshComponent);

	let AlwaysInViewComponent = class AlwaysInViewComponent extends Component {
	    constructor(_googleAdManager) {
	        super();
	        this._googleAdManager = _googleAdManager;
	    }
	    init() {
	        this._googleAdManager.slotRenderEnded.on(({ slot }) => {
	            this.slotRenderEnded(slot);
	        });
	    }
	    slotRenderEnded(slot) {
	        slot.alwaysInView = slot.location === 'Footer' || slot.location === 'Video_StickyOutstream';
	    }
	};
	AlwaysInViewComponent = __decorate([
	    log('AlwaysInViewComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [GoogleAdManager])
	], AlwaysInViewComponent);

	let ChangeSlotRefreshComponent = class ChangeSlotRefreshComponent extends Component {
	    constructor(_slotManager) {
	        super();
	        this._slotManager = _slotManager;
	        const messageListener = (evt) => {
	            const isValidEventMessage = evt && evt.data && evt.data.message === 'set_adthrive_slot_timeout' && evt.data.slot_id && evt.data.refresh_interval >= 0;
	            if (isValidEventMessage) {
	                this._slotManager.updateRefreshTimeout(evt.data.slot_id, evt.data.refresh_interval);
	            }
	        };
	        window.addEventListener('message', messageListener, false);
	    }
	};
	ChangeSlotRefreshComponent = __decorate([
	    log('ChangeSlotRefreshComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [SlotManager])
	], ChangeSlotRefreshComponent);

	let DocumentHiddenPauseRefreshComponent = class DocumentHiddenPauseRefreshComponent extends Component {
	    constructor(_slotManager, _slots, _pageManager) {
	        super();
	        this._slotManager = _slotManager;
	        this._slots = _slots;
	        this._pageManager = _pageManager;
	    }
	    init() {
	        this._pageManager.visibilityChange.on(() => this.documentVisibilityChanged());
	    }
	    documentVisibilityChanged() {
	        const visibilityState = document.visibilityState;
	        logger.info('ViewableRefreshComponent', 'documentVisibilityChanged', `Document Visibility Changed to ${visibilityState}`);
	        const slots = this._slots.get();
	        if (visibilityState === 'visible') {
	            this._slotManager.resumeRefresh(slots);
	        }
	        else if (visibilityState === 'hidden') {
	            this._slotManager.pauseRefresh(slots);
	        }
	    }
	};
	DocumentHiddenPauseRefreshComponent = __decorate([
	    log('DocumentHiddenPauseRefreshComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [SlotManager, Slots, PageManager])
	], DocumentHiddenPauseRefreshComponent);

	let ImpressionViewableRefreshComponent = class ImpressionViewableRefreshComponent extends Component {
	    constructor(_googleAdManager, _slotManager) {
	        super();
	        this._googleAdManager = _googleAdManager;
	        this._slotManager = _slotManager;
	        this._inViewPercentage = 50;
	    }
	    init() {
	        this._googleAdManager.impressionViewable.on(({ slot }) => {
	            this.processImpressionViewable(slot);
	        });
	        this._googleAdManager.slotVisibilityChanged.on(({ slot, event }) => {
	            this.processVisibilityChanged(slot, event);
	        });
	    }
	    processImpressionViewable(slot) {
	        slot.outOfViewGPT = false;
	        this._slotManager.inView(slot);
	    }
	    processVisibilityChanged(slot, event) {
	        this.check(slot, event.inViewPercentage);
	    }
	    check(slot, inViewPercentage) {
	        if ((inViewPercentage && inViewPercentage >= this._inViewPercentage) || slot.location === 'Video_StickyOutstream') {
	            slot.outOfViewGPT = false;
	            this._slotManager.inView(slot);
	        }
	        else {
	            slot.outOfViewGPT = true;
	            this._slotManager.outOfView(slot);
	        }
	    }
	};
	ImpressionViewableRefreshComponent = __decorate([
	    log('ImpressionViewableRefreshComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [GoogleAdManager, SlotManager])
	], ImpressionViewableRefreshComponent);

	let IntersectionObserverRefreshComponent = class IntersectionObserverRefreshComponent extends Component {
	    constructor(_googleAdManager, _slotManager, _slots) {
	        super();
	        this._googleAdManager = _googleAdManager;
	        this._slotManager = _slotManager;
	        this._slots = _slots;
	        this._inViewPercentage = 50;
	    }
	    init() {
	        this._observer = this.getIntersectionObserver();
	        this._googleAdManager.slotRenderEnded.on(({ slot }) => {
	            this.slotRenderEnded(slot);
	        });
	        this._slotManager.refreshing.on(slots => {
	            this.refreshing(slots);
	        });
	    }
	    get enabled() {
	        return 'IntersectionObserver' in window;
	    }
	    slotRenderEnded(slot) {
	        if (this._observer && slot.element) {
	            this._observer.observe(slot.element);
	        }
	    }
	    refreshing(slots) {
	        if (this._observer) {
	            for (const slot of slots) {
	                if (slot.element) {
	                    this._observer.unobserve(slot.element);
	                }
	            }
	        }
	    }
	    getIntersectionObserver() {
	        return new IntersectionObserver((entries) => {
	            for (const entry of entries) {
	                const slot = this._slots.get(entry.target.id);
	                if (slot) {
	                    this.check(slot, entry.intersectionRatio * 100);
	                }
	            }
	        }, { threshold: [0, this._inViewPercentage / 100] });
	    }
	    check(slot, inViewPercentage) {
	        if (inViewPercentage >= this._inViewPercentage || slot.location === 'Video_StickyOutstream') {
	            slot.outOfViewIO = false;
	            this._slotManager.inView(slot);
	        }
	        else {
	            slot.outOfViewIO = true;
	            this._slotManager.outOfView(slot);
	        }
	    }
	};
	IntersectionObserverRefreshComponent = __decorate([
	    log('IntersectionObserverRefreshComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [GoogleAdManager, SlotManager, Slots])
	], IntersectionObserverRefreshComponent);

	let ComscoreTrackerComponent = class ComscoreTrackerComponent extends Component {
	    constructor(_config, _gdprEvents) {
	        super();
	        this._config = _config;
	        this._gdprEvents = _gdprEvents;
	        this._comscoreId = '20567959';
	        this._gdprEnabled = false;
	        this._gdprEnabled = this._config.gdpr.enabled;
	    }
	    init() {
	        const consentParams = this._config.ccpa.comscoreParams || '0';
	        const comscoreData = { c1: '2', c2: this._comscoreId, ...((this._gdprEnabled || this._config.ccpa.required) && { cs_ucfr: consentParams }) };
	        window._comscore = window._comscore || [];
	        window._comscore.push(comscoreData);
	        const baseUrl = 'https://sb.scorecardresearch.com';
	        if (this._gdprEnabled) {
	            this._gdprEvents.consentCaptured.on(() => {
	                importScript(`${baseUrl}/cs/${this._comscoreId}/beacon.js`).catch(() => { });
	            });
	        }
	        else {
	            return importScript(`${baseUrl}/beacon.js`);
	        }
	    }
	    get enabled() {
	        return true;
	    }
	};
	ComscoreTrackerComponent = __decorate([
	    log('ComscoreTrackerComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [Config, GDPREvents])
	], ComscoreTrackerComponent);

	let HawkeyeTrackerComponent = class HawkeyeTrackerComponent extends Component {
	    constructor(_gam, _config) {
	        super();
	        this._gam = _gam;
	        this._config = _config;
	        this._trackerHoldoutKey = 'hawk';
	    }
	    init() {
	        this._gam.slotOnload
	            .once()
	            .then(() => this.import())
	            .then(() => this.syncData())
	            .catch(err => logger.error('HawkeyeTrackerComponent', 'init', 'slotOnload', err));
	    }
	    get enabled() {
	        return this._config.tkho.tracker !== this._trackerHoldoutKey;
	    }
	    async import() {
	        const url = 'https://pghub.io/js/pandg-sdk.js';
	        return await importScript(url, true);
	    }
	    syncData() {
	        const metadata = {
	            ccpa: this._config.ccpa.privacyString ? this._config.ccpa.privacyString : null,
	            bp_id: 'cafemedia',
	        };
	        const config = {
	            name: 'P&G',
	            pixelUrl: 'https://pandg.tapad.com/tag',
	        };
	        const tagger = window.Tapad.init(metadata, config);
	        tagger.sync({}).then((data) => logger.info('HawkeyeTrackerComponent', 'sync', JSON.stringify(data)));
	    }
	};
	HawkeyeTrackerComponent = __decorate([
	    log('HawkeyeTrackerComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [GoogleAdManager, Config])
	], HawkeyeTrackerComponent);

	let LiveRampAtsTrackerComponent = class LiveRampAtsTrackerComponent extends Component {
	    constructor(_config, _gam) {
	        super();
	        this._config = _config;
	        this._gam = _gam;
	        this._trackerHoldoutKey = 'ats';
	    }
	    init() {
	        this._gam.slotOnload
	            .once()
	            .then(() => this.import())
	            .catch(err => logger.error('LiveRampAtsTrackerComponent', 'init', err));
	    }
	    get enabled() {
	        return this._config.liveRampAts.enabled && !this._config.disableAds.all && this._config.tkho.tracker !== this._trackerHoldoutKey;
	    }
	    import() {
	        importScript(this._config.liveRampAts._url)
	            .then(() => window.ats.start(this._config.liveRampAts._config))
	            .catch(() => { });
	    }
	};
	LiveRampAtsTrackerComponent = __decorate([
	    log('LiveRampAtsTrackerComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [Config, GoogleAdManager])
	], LiveRampAtsTrackerComponent);

	let MerkleTrackerComponent = class MerkleTrackerComponent extends Component {
	    constructor(_config, _gam) {
	        super();
	        this._config = _config;
	        this._gam = _gam;
	        this.ptk = '17c1789b-e660-493b-aa74-3c8fb990dc5f';
	        this.pubid = 'CAFEMEDIA';
	        this.merkleStorageKey = 'IXWRAPPERMerkleIp';
	    }
	    init() {
	        if (window.localStorage.getItem(`${this.merkleStorageKey}`)) {
	            this.spoof();
	        }
	        else {
	            this._gam.slotOnload
	                .once()
	                .then(() => {
	                this.load()
	                    .then(response => {
	                    if (!(response instanceof Error) && Object.keys(response).length) {
	                        window.localStorage.setItem(`${this.merkleStorageKey}`, encodeURIComponent(JSON.stringify(response)));
	                        this.spoof();
	                    }
	                })
	                    .catch(() => { });
	            })
	                .catch(() => { });
	        }
	    }
	    async load() {
	        const url = `https://mid.rkdms.com/idsv2?ptk=${this.ptk}&pubid=${this.pubid}`;
	        return new Promise((resolve, reject) => {
	            const request = new XMLHttpRequest();
	            request.open('get', url);
	            request.withCredentials = true;
	            request.addEventListener('load', () => {
	                if (request.status !== 200) {
	                    return reject(new Error(`Error status: ${request.status} response: ${request.responseText}`));
	                }
	                return resolve(JSON.parse(request.responseText));
	            });
	            request.addEventListener('error', () => {
	                return reject(new Error('Request failed'));
	            });
	            request.send();
	        });
	    }
	    spoof() {
	        if (!window.headertag) {
	            window.headertag = {
	                getIdentityInfo: () => {
	                    var _a;
	                    const unifiedData = JSON.parse(decodeURIComponent(window.localStorage.getItem('pbjs-unifiedid') || ''));
	                    const merkleData = JSON.parse(decodeURIComponent(window.localStorage.getItem(`${this.merkleStorageKey}`) || '{}'));
	                    return {
	                        AdserverOrgIp: {
	                            data: {
	                                source: 'adserver.org',
	                                uids: Object.keys(unifiedData).map(name => {
	                                    return {
	                                        id: unifiedData[name],
	                                        ext: {
	                                            rtiPartner: name,
	                                        },
	                                    };
	                                }),
	                            },
	                            responsePending: false,
	                        },
	                        MerkleIp: {
	                            data: {
	                                source: 'merkleinc.com',
	                                uids: [
	                                    {
	                                        id: (_a = merkleData === null || merkleData === void 0 ? void 0 : merkleData.ppid) === null || _a === void 0 ? void 0 : _a.id,
	                                        ext: {
	                                            enc: 0,
	                                        },
	                                    },
	                                ],
	                            },
	                            responsePending: false,
	                        },
	                    };
	                },
	            };
	        }
	    }
	    get enabled() {
	        return !this._config.gdpr.enabled && !this._config.ccpa.enabled;
	    }
	};
	MerkleTrackerComponent = __decorate([
	    log('MerkleTrackerComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [Config, GoogleAdManager])
	], MerkleTrackerComponent);

	let NielsenTrackerExperiment = class NielsenTrackerExperiment extends Experiment {
	    constructor() {
	        super();
	        this._result = false;
	        this.key = 'NielsenTrackerExperiment';
	        this._choices = [{ choice: true }, { choice: false }];
	        if (isChrome()) {
	            this._result = this.run();
	        }
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new BernoulliTrial(1 / 300).get();
	    }
	};
	NielsenTrackerExperiment = __decorate([
	    log('NielsenTrackerExperiment'),
	    injectable(),
	    __metadata("design:paramtypes", [])
	], NielsenTrackerExperiment);

	let NielsenTrackerComponent = class NielsenTrackerComponent extends Component {
	    constructor(_config, _nielsenTrackerExperiment, _gam) {
	        super();
	        this._config = _config;
	        this._nielsenTrackerExperiment = _nielsenTrackerExperiment;
	        this._gam = _gam;
	    }
	    init() {
	        this._gam.slotOnload
	            .once()
	            .then(() => this.loadImage())
	            .catch(reason => {
	            logger.error('NielsenTrackerComponent', 'init', reason);
	        });
	    }
	    get enabled() {
	        return this._nielsenTrackerExperiment.result;
	    }
	    loadImage() {
	        const device = this._config.context.device;
	        let base = 'https://secure-gl.imrworldwide.com/cgi-bin/m?am=3&at=view&rt=banner&st=image&cr=adthrive&ce=cafemedia';
	        const ciParam = 'nlsnci542';
	        const campaignMap = {
	            phone: 'nlsn290957',
	            tablet: 'nlsn291137',
	            desktop: 'nlsn291136',
	        };
	        let campaign = campaignMap[device];
	        const pintAndInstaCampaignMap = {
	            phone: 'nlsn287186',
	            tablet: 'nlsn287188',
	            desktop: 'nlsn287187',
	        };
	        const referrer = getReferrer();
	        if (referrer && (referrer.toLowerCase().indexOf('instagram.com') >= 0 || referrer.toLowerCase().indexOf('pinterest.com') >= 0)) {
	            campaign = pintAndInstaCampaignMap[device];
	        }
	        base = base + `&ci=${ciParam}&ca=${campaign}&pc=${window.location.host}&r=${Date.now()}`;
	        new Image().src = `${base}`;
	    }
	};
	NielsenTrackerComponent = __decorate([
	    log('NielsenTrackerComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [Config, NielsenTrackerExperiment, GoogleAdManager])
	], NielsenTrackerComponent);

	let TargetRewriteTrackerComponent = class TargetRewriteTrackerComponent extends Component {
	    constructor(_config, _gam) {
	        super();
	        this._config = _config;
	        this._gam = _gam;
	        this._accountId = '2773249';
	        this._adId = '81938';
	        this._configId = '2092';
	        this._affDomain = 'goto.target.com';
	        this._targetDomain = 'www.target.com';
	        this._commonParams = '';
	        this._commonPath = '';
	        this._trackerHoldoutKey = 'tgtaff';
	        this._commonParams = createQueryString({
	            subid1: this._config.site.id,
	            subid2: location.href,
	            sharedid: this._config.site.name,
	        });
	        this._commonPath = `${this._accountId}/${this._adId}/${this._configId}`;
	    }
	    init() {
	        this._gam.slotOnload
	            .once()
	            .then(() => this.rewriteAllTargetLinksOnPage())
	            .catch(err => logger.error('TargetRewriteTrackerComponent', 'getAllTargetLinksOnPage', err));
	    }
	    rewriteAllTargetLinksOnPage() {
	        let rewriteCount = 0;
	        const anchors = Array.prototype.map.call(document.querySelectorAll(`a[href*="${this._targetDomain}"]`), (anchor) => {
	            return anchor;
	        });
	        anchors
	            .filter(anchor => this.isTargetLink(anchor))
	            .forEach(anchor => {
	            logger.info('TargetRewriteTrackerComponent', 'Target Link Found!', anchor.href);
	            this.fireImpression(anchor.href);
	            this.replaceTargetLink(anchor);
	            rewriteCount++;
	        });
	        if (rewriteCount) {
	            logger.event('TargetRewriteTrackerComponent', 'logTargetRewrite', {
	                message: 'targetRewrite',
	                countRewrite: rewriteCount,
	            });
	        }
	    }
	    fireImpression(anchorHref) {
	        const impPixel = this.getImpressionPixel(anchorHref);
	        logger.info('TargetRewriteTrackerComponent', 'fireImpression', impPixel);
	        return (new Image().src = impPixel);
	    }
	    getImpressionPixel(anchorHref) {
	        let url = `https://${this._affDomain}/i/${this._commonPath}?`;
	        const ir = `U1|${this.getUUID()}`;
	        url += `_ir=${encodeURIComponent(ir)}` + '&' + this._commonParams + '&subid3=' + encodeURIComponent(anchorHref);
	        const hrefParts = anchorHref.split('?');
	        if (hrefParts.length > 1) {
	            url += '&' + hrefParts[1];
	        }
	        return url;
	    }
	    getUUID() {
	        return new Date().getTime().toString() + '.' + Math.random().toString(36).substring(2, 15);
	    }
	    replaceTargetLink(anchor) {
	        const urlEncoded = encodeURIComponent(anchor.href);
	        const anchorClasses = ['noskimlinks', 'norewrite'];
	        anchor.classList.add(...anchorClasses);
	        anchor.href = `https://${this._affDomain}/c/${this._commonPath}?${this._commonParams}&subid3=${urlEncoded}&u=${urlEncoded}`;
	        logger.info('TargetRewriteTrackerComponent', 'replaceTargetLink', anchor.href);
	    }
	    isTargetLink(anchor) {
	        const domain = this.extractDomain(anchor.href);
	        return domain && domain.indexOf(this._affDomain) === -1;
	    }
	    extractDomain(url) {
	        const matches = /^https?\:\/\/([^\/:?#]+)(?:[\/:?#]|$)/i.exec(url);
	        return (matches && matches[1]) || '';
	    }
	    get enabled() {
	        return this._config.tkho.tracker !== this._trackerHoldoutKey && !this._config.ccpa.enabled && this._config.adOptions.targetAff;
	    }
	};
	TargetRewriteTrackerComponent = __decorate([
	    injectable(),
	    __metadata("design:paramtypes", [Config, GoogleAdManager])
	], TargetRewriteTrackerComponent);

	let TheTradeDeskTrackerComponent = class TheTradeDeskTrackerComponent extends Component {
	    constructor(_gam) {
	        super();
	        this._gam = _gam;
	    }
	    init() {
	        this._gam.slotOnload
	            .once()
	            .then(() => this.loadImage())
	            .catch(err => logger.error('TheTradeDeskTrackerComponent', 'init', err));
	    }
	    get enabled() {
	        return true;
	    }
	    loadImage() {
	        const base = 'https://insight.adsrvr.org/track/evnt/?adv=z127r4i&ct=0:p21aj7j&fmt=3';
	        new Image().src = `${base}`;
	    }
	};
	TheTradeDeskTrackerComponent = __decorate([
	    log('TheTradeDeskTrackerComponent'),
	    injectable(),
	    __metadata("design:paramtypes", [GoogleAdManager])
	], TheTradeDeskTrackerComponent);

	let Components = class Components {
	    constructor(_config, adDensityComponent, adTestComponent, alwaysInViewComponent, brandMetricsComponent, bodyDeviceClassComponent, ccpaComponent, changeSlotRefreshComponent, closeButtonComponent, comscoreComponent, comscoreTrackerComponent, configTargetingComponent, confirmedClicksComponent, confiantComponent, declaredRefreshComponent, documentHiddenPauseRefreshComponent, dynamicAdsComponent, impressionLogComponent, externalSlotsComponent, firstPageviewComponent, firstPartyDataComponent, floorsComponent, footerComponent, googleLazyLoadComponent, gumGumInScreenComponent, identityAPI, hawkeyeTrackerComponent, hvpComponent, impressionViewableRefreshComponent, infiniteScrollDetectionComponent, infiniteScrollDynamicAdsComponent, infiniteScrollRefreshComponent, intersectionObserverRefreshComponent, layoutShiftComponent, lazyLoadComponent, liveRampAtsTrackerComponent, marmaladeComponent, merkleTrackerComponent, nielsenTrackerComponent, piiCaptureComponent, refreshCountComponent, refreshRebuildComponent, siteStyleComponent, stickyComponent, targetRewriteTrackerComponent, theTradeDeskTrackerComponent, trafficSourceComponent, userPageDataLoggingComponent, userIdComponent, utmComponent, videoManagerComponent, webVitalsComponent) {
	        this._config = _config;
	        this._components = [
	            adDensityComponent,
	            adTestComponent,
	            alwaysInViewComponent,
	            brandMetricsComponent,
	            bodyDeviceClassComponent,
	            ccpaComponent,
	            changeSlotRefreshComponent,
	            closeButtonComponent,
	            comscoreComponent,
	            comscoreTrackerComponent,
	            configTargetingComponent,
	            confirmedClicksComponent,
	            confiantComponent,
	            declaredRefreshComponent,
	            documentHiddenPauseRefreshComponent,
	            dynamicAdsComponent,
	            impressionLogComponent,
	            externalSlotsComponent,
	            firstPageviewComponent,
	            firstPartyDataComponent,
	            floorsComponent,
	            footerComponent,
	            googleLazyLoadComponent,
	            gumGumInScreenComponent,
	            hawkeyeTrackerComponent,
	            hvpComponent,
	            identityAPI,
	            impressionViewableRefreshComponent,
	            infiniteScrollDetectionComponent,
	            infiniteScrollDynamicAdsComponent,
	            infiniteScrollRefreshComponent,
	            intersectionObserverRefreshComponent,
	            liveRampAtsTrackerComponent,
	            layoutShiftComponent,
	            lazyLoadComponent,
	            marmaladeComponent,
	            merkleTrackerComponent,
	            nielsenTrackerComponent,
	            piiCaptureComponent,
	            refreshCountComponent,
	            refreshRebuildComponent,
	            siteStyleComponent,
	            stickyComponent,
	            targetRewriteTrackerComponent,
	            theTradeDeskTrackerComponent,
	            trafficSourceComponent,
	            userIdComponent,
	            userPageDataLoggingComponent,
	            utmComponent,
	            videoManagerComponent,
	            webVitalsComponent,
	        ];
	        this._nonCCPAComponents = [
	            impressionLogComponent,
	            merkleTrackerComponent,
	            nielsenTrackerComponent,
	            theTradeDeskTrackerComponent,
	            userIdComponent,
	        ];
	    }
	    init() {
	        const ccpa = this._config.ccpa;
	        this._components
	            .filter(component => !ccpa.enabled || (ccpa.enabled && this._nonCCPAComponents.indexOf(component) === -1))
	            .forEach(component => component.init !== undefined && component.enabled && component.init());
	    }
	    start() {
	        this._components.forEach(component => component.start !== undefined && component.enabled && component.start());
	    }
	};
	Components = __decorate([
	    log('Components'),
	    injectable(),
	    __metadata("design:paramtypes", [Config,
	        AdDensityComponent,
	        AdTestComponent,
	        AlwaysInViewComponent,
	        BrandMetricsComponent,
	        BodyDeviceClassComponent,
	        CCPAComponent,
	        ChangeSlotRefreshComponent,
	        CloseButtonComponent,
	        ComscoreComponent,
	        ComscoreTrackerComponent,
	        ConfigTargetingComponent,
	        ConfirmedClicksComponent,
	        ConfiantComponent,
	        DeclaredRefreshComponent,
	        DocumentHiddenPauseRefreshComponent,
	        DynamicAdsComponent,
	        ImpressionLogComponent,
	        ExternalSlotsComponent,
	        FirstPageviewComponent,
	        FirstPartyDataComponent,
	        FloorsComponent,
	        FooterComponent,
	        GoogleLazyLoadComponent,
	        GumGumInScreenComponent,
	        IdentityAPI,
	        HawkeyeTrackerComponent,
	        HvpComponent,
	        ImpressionViewableRefreshComponent,
	        InfiniteScrollDetectionComponent,
	        InfiniteScrollDynamicAdsComponent,
	        InfiniteScrollRefreshComponent,
	        IntersectionObserverRefreshComponent,
	        LayoutShiftComponent,
	        LazyLoadComponent,
	        LiveRampAtsTrackerComponent,
	        MarmaladeComponent,
	        MerkleTrackerComponent,
	        NielsenTrackerComponent,
	        PiiCaptureComponent,
	        RefreshCountComponent,
	        RefreshRebuildComponent,
	        SiteStyleComponent,
	        StickyComponent,
	        TargetRewriteTrackerComponent,
	        TheTradeDeskTrackerComponent,
	        TrafficSourceComponent,
	        UserPageDataLoggingComponent,
	        UserIdComponent,
	        UTMComponent,
	        VideoManagerComponent,
	        WebVitalsComponent])
	], Components);

	var css_248z = ".adthrive-ad{margin-top:10px;margin-bottom:10px;text-align:center;overflow-x:visible;clear:both;line-height:0}.jw-flag-small-player #next-stay-container{margin:0}.jw-flag-small-player #next-video,.jw-flag-small-player #stay-video{width:75px;height:30px;line-height:30px}#next-stay-container{bottom:25%;right:0;margin:12px;position:absolute}#next-video,#stay-video{box-shadow:0 0 10px rgba(0,0,0,.5);opacity:.9;width:100px;height:40px;line-height:40px;text-align:center;cursor:pointer;background-color:#333;color:#fff;margin:10px}#next-video{box-shadow:inset 0 0 0 0 #333;transition:box-shadow 5s linear}#next-stay-container.loaded #next-video{box-shadow:inset 100px 0 0 0 red}.adthrive-ad-cls{display:flex;justify-content:center;align-items:center;flex-wrap:wrap}.adthrive-ad-cls>div,.adthrive-ad-cls>iframe{flex-basis:100%}.adthrive-interstitial{margin-top:0;margin-bottom:0}.adthrive-native-recipe{display:inline-block}.adthrive-stuck.adthrive-sticky.adthrive-header,.adthrive-stuck.adthrive-sticky.adthrive-sidebar{position:fixed;top:0;z-index:9999}.adthrive-stuck.adthrive-header{margin-top:0}.adthrive-sticky.adthrive-footer{text-align:center;margin:0;width:100%;overflow:hidden;position:fixed;left:0;bottom:0;z-index:99999;background-color:hsla(0,0%,100%,.8);border-top:2px solid hsla(0,0%,88.2%,.8)}.adthrive-sticky.adthrive-footer>.adthrive-close{cursor:pointer;color:#b2b2b2;border:1px solid #b2b2b2;border-radius:20px;background:#fff;line-height:20px;display:inline-block;font-size:20px;font-family:arial,sans-serif;padding:0 5px;position:absolute;top:5px;right:5px}.adthrive-device-desktop .adthrive-sticky.adthrive-footer>.adthrive-close{top:10px;right:10px}#_inv_voicefive___{display:none}.adthrive-ccpa-link,.adthrive-footer-message,.adthrive-privacy-preferences{text-align:center;margin-top:5px}.adthrive-ccpa-link,.adthrive-ccpa-link span,.adthrive-footer-message span,.adthrive-privacy-preferences a{font-family:Arial,Helvetica Neue,Helvetica,sans-serif;font-size:13px;color:#b2b2b2}.adthrive-ccpa-link a{text-decoration:underline;cursor:pointer}.adthrive-device-phone .adthrive-footer-message{margin-bottom:60px}.adthrive-footer-message{margin-bottom:100px}.adthrive-footer-message>span{text-transform:uppercase;border-top:1px solid #b2b2b2;padding-top:5px}.adthrive-collapse-player{width:90%;border-top:1px solid #dbdbdb;border-bottom:1px solid #dbdbdb;padding:8px!important;margin-left:auto;margin-right:auto}.adthrive-player-position.adthrive-collapse-float{position:fixed;width:300px;z-index:2147483644}h3.adthrive-player-title{margin:10px 0}.adthrive-player-position.adthrive-collapse-float.adthrive-collapse-right{top:0;right:5px}.adthrive-player-position.adthrive-collapse-float.adthrive-collapse-bottom-right{bottom:100px;right:5px}.adthrive-player-position.adthrive-collapse-float.adthrive-collapse-bottom-left{bottom:100px;left:5px}.adthrive-player-position.adthrive-collapse-float>.adthrive-player-title{display:none}.adthrive-player-position.adthrive-collapse-sticky{padding-top:20px;padding-bottom:20px;position:fixed;z-index:9999}.adthrive-player-position.adthrive-collapse-sticky>.adthrive-player-title{display:none}.adthrive-player-position.adthrive-collapse-mobile{position:fixed;width:300px;z-index:99998}.adthrive-player-position.adthrive-collapse-mobile.adthrive-collapse-medium,.adthrive-player-position.adthrive-collapse-mobile.adthrive-collapse-small{width:272px}.adthrive-player-position.adthrive-collapse-mobile.adthrive-collapse-top-right{top:26px;right:10px}.adthrive-player-position.adthrive-collapse-mobile.adthrive-collapse-top-left{top:26px;left:5px}.adthrive-player-position.adthrive-collapse-mobile.adthrive-collapse-bottom-left{bottom:52px;left:5px}.adthrive-player-position.adthrive-collapse-mobile.adthrive-collapse-bottom-right{bottom:52px;right:10px}.adthrive-player-position.adthrive-collapse-mobile>.adthrive-player-title{display:none}.adthrive-sekindo-mobile-center{display:flex;flex-direction:row;justify-content:center;text-align:center}.adthrive-wrapper-close{margin-left:auto;margin-right:0;height:36px;min-width:36px;justify-content:center;align-items:center;font-size:36px;color:#fff}.adthrive-wrapper-float-close{float:right;display:none;margin-bottom:5px;cursor:pointer}.adthrive-wrapper-bar{display:none;background-color:#595959;font-family:Arial,Helvetica,sans-serif;border-top-left-radius:5px;border-top-right-radius:5px;height:36px}.adthrive-video-title{font-size:13px;font-weight:700;text-decoration:none;color:#fff}.adthrive-wrapper-title-wrapper{display:inline-flex;min-width:0;margin-left:10px;margin-right:10px;justify-content:center;align-items:center}.adthrive-video-text-cutoff{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;color:#fff}.adthrive-wrapper-title-wrapper>a>svg,.adthrive-wrapper-title-wrapper>div>svg{vertical-align:middle;fill:#fff;margin-right:5px}.adthrive-wrapper-title-wrapper>a{text-decoration:none}.adthrive-sticky-outstream{padding-top:20px;position:fixed;z-index:2147483644;display:none;overflow:hidden}.adthrive-instream-close{pointer-events:all}.adthrive-instream-close.adthrive-float-left{float:left}.adthrive-top-left-outer{position:absolute;top:-20px}.adthrive-top-left-inner{position:absolute;top:0}.adthrive-top-left-inner-wrapper.adthrive-wrapper-float-close,.adthrive-top-left-inner.adthrive-wrapper-float-close{padding:2px;color:#fff;background:rgba(0,0,0,.5);pointer-events:none;z-index:99;width:100%}.adthrive-top-left-inner-wrapper.adthrive-wrapper-float-close{position:absolute;top:36px}.adthrive-sticky-outstream>.adthrive-wrapper-float-close{position:absolute;top:32px;right:1px}.adthrive-sticky-outstream>.adthrive-wrapper-float-close.adthrive-wrapper-close-outside-left{left:2px}.adthrive-wrapper-close-bkgd-50>#adthrive-sticky-outstream-close{padding:2px 0 0 2px;pointer-events:all}.adthrive-sticky-outstream>.adthrive-wrapper-float-close.adthrive-wrapper-close-bkgd-50{top:52px;left:0;padding:2px;color:#fff;background:rgba(0,0,0,.5);pointer-events:none}.adthrive-sticky-outstream.adthrive-sticky-outstream-mobile{bottom:52px;right:10px}.adthrive-sticky-outstream.adthrive-sticky-outstream-desktop{bottom:100px;right:5px}.adthrive-sticky-outstream.adthrive-sticky-outstream-active{display:block}.adthrive-video-stickyoutstream div:first-of-type{margin:-1px}";
	styleInject(css_248z);

	let AdThrive = class AdThrive {
	    constructor(config, cmd, slotManager, slots, _auctionManagers, _googleAdManager, _components) {
	        this.config = config;
	        this.cmd = cmd;
	        this.slotManager = slotManager;
	        this.slots = slots;
	        this._auctionManagers = _auctionManagers;
	        this._googleAdManager = _googleAdManager;
	        this._components = _components;
	        this.marmalade = {
	            mcmp: null,
	        };
	        this.marmaladeFinished = (data) => data;
	        this.siteAds = {
	            targeting: {
	                push: this._googleAdManager.setTargeting,
	            },
	        };
	        this._apiReady = new Promise(resolve => resolve(false));
	        this.bucket = this.config.context.bucket;
	        this.branch = this.config.context.branch;
	        this.invalidTraffic = this.config.context.invalidTraffic;
	        this.deployment = this.config.context.deployment;
	        this.abgroup = this.config.abGroup.groups;
	    }
	    init() {
	        this._apiReady = new Promise(resolve => this.config.identityApi.apiReady.on(() => resolve(true)));
	        logger.sending.on(() => {
	            logger.data = {
	                abgroup: this.config.abGroup.groupsAsObject,
	                sess: this.config.context.sessionKey,
	                pvk: this.config.context.pageviewKey,
	                hbho: this.config.hbho.bidders,
	                vbho: this.config.vbho.bidders,
	                ...(this.config.clsOptions &&
	                    this.config.clsOptions.branch && {
	                    clsBranch: this.config.clsOptions.branch,
	                }),
	                ...(this.config.clsOptions &&
	                    this.config.clsOptions.bucket && {
	                    clsBucket: this.config.clsOptions.bucket,
	                }),
	            };
	        });
	        setSessionValue('session_fpv', getSessionValue('session_fpv') === null ? true : false);
	        this.cmd.init();
	        this._auctionManagers.init();
	        this._googleAdManager.init();
	        this._components.init();
	        this._googleAdManager.start();
	        this._components.start();
	    }
	    identityApi(data, cb) {
	        return this._apiReady.then(() => {
	            this.config.identityApi.optIn.emit({ data, cb }).catch(() => { });
	        });
	    }
	    disableAds(patterns) {
	        this.config.disableAds.disableAllAds(patterns);
	    }
	    disableContentAds(patterns) {
	        this.config.disableAds.disableContentAds(patterns);
	    }
	    disablePlaylistPlayers(patterns) {
	        this.config.disableAds.disablePlaylistPlayers(patterns);
	    }
	    showPrivacyPreferences() {
	        if (window.__tcfapi) {
	            window.__tcfapi('showConsentManager', 2);
	        }
	    }
	    getConsentData() {
	        if (window.__tcfapi) {
	            window.__tcfapi('getFullTCData', 2, tcData => {
	                logger.info('AdThrive', 'getConsentData', 'tcData', tcData);
	            });
	        }
	    }
	    getAdthriveFlippData() {
	        return this.config.marmalade.flpProdIds.filter(filterUnique);
	    }
	    setTargetingFlag(flagKey, flagVals, overwrite = false) {
	        if (!flagKey || typeof flagKey !== 'string' || !flagVals || !Array.isArray(flagVals) || flagVals.length === 0) {
	            logger.warn('AdThrive', 'setTargetingFlag', 'Missing flag targeting key and/or values');
	            return;
	        }
	        this._googleAdManager.setTargetingFlag(flagKey, flagVals, overwrite);
	    }
	    setTargeting(targeting) {
	        this._googleAdManager.setTargeting(targeting);
	    }
	    getTargeting() {
	        return this._googleAdManager.getTargeting();
	    }
	    getTargetingMap() {
	        return this._googleAdManager.getTargetingMap();
	    }
	    logError(className, methodName, args) {
	        logger.error(className, methodName, args);
	    }
	    refreshSlots(slotIds) {
	        let slots = this.slots.get();
	        if (slotIds && slotIds.length) {
	            slots = slots.filter(slot => slotIds.indexOf(slot.id) !== -1);
	        }
	        slots.forEach(slot => {
	            this.slotManager
	                .refresh(slot, false)
	                .then(() => {
	                this.slotManager.clearRefreshTimeout(slot, true);
	            })
	                .catch(() => { });
	        });
	    }
	};
	AdThrive = __decorate([
	    log('AdThrive'),
	    singleton(),
	    __metadata("design:paramtypes", [Config,
	        CommandQueue,
	        SlotManager,
	        Slots,
	        AuctionManagers,
	        GoogleAdManager,
	        Components])
	], AdThrive);

	const build = {
	    domain: 'ads.adthrive.com',
	    branch: 'master',
	    bucket: 'prod',
	    cmp: true,
	};

	let DelayLoadingExperiment = class DelayLoadingExperiment extends Experiment {
	    constructor(abgroup) {
	        super();
	        this._setAbGroup = true;
	        this._choices = [
	            { choice: 500, weight: 10 },
	            { choice: 1000, weight: 10 },
	            { choice: 2000, weight: 10 },
	            { choice: 3000, weight: 70 },
	        ];
	        this.key = 'deftimer1';
	        this._result = this.run();
	        if (this._setAbGroup) {
	            abgroup.set(this.key, this._result === 0 ? 'off' : String(this._result));
	        }
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        if (navigator.userAgent &&
	            (navigator.userAgent.search(/GTmetrix/i) > -1 ||
	                navigator.userAgent.search(/pingdom/i) > -1 ||
	                navigator.userAgent.search(/Google Page Speed Insights/i) > -1)) {
	            this._setAbGroup = false;
	            return 0;
	        }
	        else {
	            return new WeightedChoice(this._choices).get();
	        }
	    }
	};
	__decorate([
	    sticky(),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", []),
	    __metadata("design:returntype", Number)
	], DelayLoadingExperiment.prototype, "run", null);
	DelayLoadingExperiment = __decorate([
	    log('DelayLoadingExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup])
	], DelayLoadingExperiment);

	let EnableDelayLoadingExperiment = class EnableDelayLoadingExperiment extends Experiment {
	    constructor(abgroup) {
	        super();
	        this._choices = [{ choice: true }, { choice: false }];
	        this.key = 'delload';
	        this._result = this.run();
	        abgroup.set(this.key, this._result ? 'on' : 'off');
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new BernoulliTrial(0.95).get();
	    }
	};
	EnableDelayLoadingExperiment = __decorate([
	    log('EnableDelayLoadingExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [ABGroup])
	], EnableDelayLoadingExperiment);

	let LoggerFilterExperiment = class LoggerFilterExperiment extends Experiment {
	    constructor() {
	        super();
	        this.classList = ['EmailCaptureHandler'];
	        this._result = false;
	        this._choices = [{ choice: true }, { choice: false }];
	        this.key = 'logfltr';
	        this._result = this.run();
	    }
	    get result() {
	        return this._result;
	    }
	    run() {
	        return new BernoulliTrial(0).get();
	    }
	};
	LoggerFilterExperiment = __decorate([
	    log('LoggerFilterExperiment'),
	    singleton(),
	    __metadata("design:paramtypes", [])
	], LoggerFilterExperiment);

	let StubCmp = class StubCmp {
	    init(gdpr) {
	        const stubOnPage = window.__tcfapi !== undefined && typeof window.__tcfapi === 'function';
	        if (!stubOnPage) {
	            logger.info('StubCmp', 'init', 'Stub not found on page');
	            return;
	        }
	        let adthriveStub = false;
	        window.__tcfapi('adthrive', 2, result => (adthriveStub = result));
	        if (!adthriveStub) {
	            logger.info('StubCmp', 'init', 'Stub found on page but not verified by Adthrive');
	            return;
	        }
	        logger.info('StubCmp', 'init', 'Valid Stub Found');
	        if (gdpr === 'true') {
	            logger.info('StubCmp', 'init', 'Set GDPR applies to true');
	            window.__tcfapi('setGdprApplies', 2, res => res, true);
	        }
	        else {
	            this.clearQueue();
	            this.stubCommands();
	        }
	    }
	    processTcfCommand(tcfCommand) {
	        const { command, callback } = tcfCommand;
	        if (!callback || (callback && typeof callback !== 'function')) {
	            return;
	        }
	        if (command === 'ping' || command === 'getTCData' || command === 'addEventListener') {
	            callback({
	                apiVersion: '2',
	                cmpLoaded: true,
	                cmpStatus: 'loaded',
	                cmpId: undefined,
	                cmpVersion: undefined,
	                displayStatus: 'disabled',
	                gdprApplies: false,
	                tcfPolicyVersion: undefined,
	                gvlVersion: undefined,
	            }, true);
	        }
	        else if (command === 'removeEventListener') {
	            callback(true);
	        }
	    }
	    clearQueue() {
	        logger.info('StubCmp', 'init', 'Processing existing CMP queue');
	        const existingCommandQueue = window.__tcfapi();
	        if (existingCommandQueue && Array.isArray(existingCommandQueue)) {
	            existingCommandQueue.forEach(eventItem => this.processTcfCommand(eventItem));
	        }
	    }
	    stubCommands() {
	        logger.info('StubCmp', 'init', 'Handle incoming stub CMP commands');
	        window.__tcfapi = (command, version, callback, parameter) => {
	            this.processTcfCommand({ command, version, callback, parameter });
	        };
	    }
	};
	StubCmp = __decorate([
	    log('StubCmp'),
	    singleton()
	], StubCmp);

	const isLoaded = (instance) => {
	    return instance instanceof AdThrive || instance instanceof Promise;
	};
	const timing = instance.resolve(Timing);
	const setTimingProperties = (loading, bootstrapFinished, amazon, gam, marmalade, prebid, webvitals) => {
	    timing.loading = loading;
	    timing.bootstrapFinished = bootstrapFinished;
	    timing.amazonStarted = amazon.started;
	    timing.amazonFinished = amazon.finished;
	    timing.amazonDuration = amazon.duration;
	    timing.gamStarted = gam.started;
	    timing.gamFinished = gam.finished;
	    timing.gamDuration = gam.duration;
	    timing.marmaladeStarted = marmalade.started;
	    timing.marmaladeFinished = marmalade.finished;
	    timing.marmaladeDuration = marmalade.duration;
	    timing.prebidStarted = prebid.started;
	    timing.prebidFinished = prebid.finished;
	    timing.prebidDuration = prebid.duration;
	    timing.webVitalsStarted = webvitals.started;
	    timing.webVitalsFinished = webvitals.finished;
	    timing.webVitalsDuration = webvitals.duration;
	};
	const setupAdthrive = (loading, amazon, gam, marmalade, prebid, webvitals) => {
	    const bootstrapFinished = now$2();
	    instance.register('MarmaladeResponse', { useValue: marmalade.result });
	    window.adthrive = instance.resolve(AdThrive);
	    setTimingProperties(loading, bootstrapFinished, amazon, gam, marmalade, prebid, webvitals);
	    return window.adthrive.init();
	};
	const handleBootstrapReject = (error) => {
	    const marmalade = error.marmalade;
	    const errorMessage = error.message || error;
	    if (marmalade && Object.prototype.hasOwnProperty.call(marmalade, 'result')) {
	        instance.register('MarmaladeResponse', { useValue: marmalade.result });
	        const layoutShift = instance.resolve(LayoutShiftComponent);
	        layoutShift.init();
	    }
	    const webVitals = instance.resolve(WebVitalsComponent);
	    webVitals.init();
	    return Promise.reject(errorMessage);
	};
	const load = async (published) => {
	    var _a;
	    const loading = now$2();
	    const currentBranch = window.adthrive.branch;
	    const enabled = currentBranch === ((_a = getSessionValue('branch')) === null || _a === void 0 ? void 0 : _a.branch);
	    setSessionValue('branch', { branch: currentBranch, enabled });
	    logger.init(published);
	    instance.register('Build', { useValue: build });
	    instance.register('AdThrive', { useValue: published });
	    const bootstrap = instance.resolve(Bootstrap);
	    return await bootstrap
	        .run()
	        .then(({ amazon, gam, marmalade, prebid, webvitals }) => setupAdthrive(loading, amazon, gam, marmalade, prebid, webvitals))
	        .catch((error) => handleBootstrapReject(error));
	};
	const getBaseUrl = ({ gdpr, baseUrl }) => {
	    return gdpr === 'true' ? `${baseUrl}/gdpr` : baseUrl;
	};
	const inheritAdthriveCLS = () => {
	    const adthriveSiteAds = window.adthrive.siteAds;
	    const adthriveCLS = window.adthriveCLS;
	    const adthriveCLSSiteAds = adthriveCLS && adthriveCLS.siteAds;
	    if (adthriveCLSSiteAds && typeof adthriveCLSSiteAds === 'object') {
	        adthriveSiteAds.adUnits = adthriveCLSSiteAds.adUnits;
	        adthriveSiteAds.video = adthriveCLSSiteAds.video;
	        adthriveSiteAds.videoPlayers = adthriveCLSSiteAds.videoPlayers;
	        adthriveSiteAds.breakpoints = adthriveCLSSiteAds.breakpoints;
	    }
	};
	const delayLoadEventListeners = (delayExperimentResult) => {
	    const pageManager = instance.resolve(PageManager);
	    const setupOnceEventWithPromise = pageManager.setupOnceEventWithPromise;
	    const defaultEvents = [setupOnceEventWithPromise('scroll'), setupOnceEventWithPromise('mousemove'), setupOnceEventWithPromise('keyup')];
	    const loadEvent = [setupOnceEventWithPromise('load').then(() => delay(delayExperimentResult))];
	    return delayExperimentResult === 0 ? defaultEvents : loadEvent.concat(defaultEvents);
	};
	const handleDelayLoadingExperiment = (published) => {
	    let ready;
	    const enableDelayLoadingExperiment = published.siteAds.adOptions.delayLoading === true
	        ? instance.resolve(EnableDelayLoadingExperiment)
	        : { result: false };
	    if (enableDelayLoadingExperiment.result) {
	        const delayLoadingExperiment = instance.resolve(DelayLoadingExperiment);
	        const delayLoadingPromises = delayLoadEventListeners(delayLoadingExperiment.result);
	        ready = Promise.race(delayLoadingPromises);
	    }
	    else {
	        ready = Promise.resolve();
	    }
	    return ready;
	};
	const run = () => {
	    const adthrive = window.adthrive;
	    inheritAdthriveCLS();
	    const baseUrl = getBaseUrl(adthrive);
	    const invalidTraffic = isBotTraffic();
	    const bucket = invalidTraffic ? 'unsupported' : adthrive.bucket;
	    const logFilterExperiment = instance.resolve(LoggerFilterExperiment);
	    const loggerFilters = logFilterExperiment.result ? [] : logFilterExperiment.classList;
	    const published = { ...adthrive, bucket, baseUrl, invalidTraffic, loggerFilters };
	    const startTime = now$2();
	    const stubCmp = instance.resolve(StubCmp);
	    stubCmp.init(published.gdpr);
	    handleDelayLoadingExperiment(published)
	        .then(() => {
	        logger.info('index', `Delayed loading by: ${now$2() - startTime} ms`);
	        return load(published);
	    })
	        .then(() => logger.info('index', 'load', 'Done'))
	        .catch(err => {
	        logger.error('index', 'load', err);
	    });
	};
	if (!isLoaded(window.adthrive)) {
	    run();
	}
	var index = window.adthrive;

	return index;

})();
