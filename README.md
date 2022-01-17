# About math3d

This library is modified from the math module of [three.js](https://github.com/mrdoob/three.js/tree/dev/src/math)

# What have been changed
you could jump to the corrsponding commit by the links
- NDC is [converted](https://github.com/cgproto/math3d/commit/0c6b6027f6937ed9bf3120ba63a8ab6bec0a514c) from OpenGL space to Metal
- new [interface](https://github.com/cgproto/math3d/commit/75076f1b187802452e8c7ea50fddd531bfc32505) to apply translation or rotation to Matrix4
- [replace](https://github.com/cgproto/math3d/commit/5bdce48294e6c3423a9a46e8bfb375f9f5dfb131) `Matrix.makePerspective( left, right, top, bottom, near, far )` with `Matrix4.makePerspective( fov, aspect, near, far )` and add `Matrix4.makeFrustum( left, right, top, bottom, near, far )`
