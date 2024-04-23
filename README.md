# play
> Work sucks. Play works.

Dynamic linker to provide flexible extension mechanism for Rust compiled WebAssembly in browsers.

# Motivation

The future is ABI-first. In the early 2000s, ccode composed typically included 20% external code, a figure that has increased to 80% today. In the future, most code will be AI-generated, necessitating a mechanism to link external code at runtime. This is achievable through dynamic linking, which requires an ABI to exist. Additionally, with the rise of modern Web APIs, there is a trend toward shifting more capabilities to the client side, consequently increasing bundle sizes. To ensure a snappy experience, we cannot afford to statically link assets like Wasm blobs at compile time. Essentially, this represents a fundamental shift in how software will be built and run for most modern applications.
