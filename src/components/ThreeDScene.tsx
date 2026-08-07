import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ThreeDScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 25;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xff8a00, 1.5, 100);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Objects: Create a series of floating 3D geometry shapes (mesh particles)
    const geometries = [
      new THREE.IcosahedronGeometry(1.2, 0),
      new THREE.TetrahedronGeometry(1.0, 0),
      new THREE.TorusGeometry(0.8, 0.3, 8, 16),
      new THREE.OctahedronGeometry(0.9, 0),
    ];

    const materials = [
      new THREE.MeshBasicMaterial({ color: 0xff8a00, wireframe: true }),
      new THREE.MeshBasicMaterial({ color: 0x3f3f46, wireframe: true }),
      new THREE.MeshBasicMaterial({ color: 0x71717a, wireframe: true }),
    ];

    const meshes: THREE.Mesh[] = [];
    const count = window.innerWidth < 768 ? 8 : 16;

    for (let i = 0; i < count; i++) {
      const geom = geometries[Math.floor(Math.random() * geometries.length)];
      const mat = materials[Math.floor(Math.random() * materials.length)];
      const mesh = new THREE.Mesh(geom, mat);

      // Random position
      mesh.position.set(
        (Math.random() - 0.5) * 35,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 15
      );

      // Random rotation
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        0
      );

      // Random scale
      const s = 0.5 + Math.random() * 0.8;
      mesh.scale.set(s, s, s);

      // Custom velocity details stored in userData
      mesh.userData = {
        speedX: (Math.random() - 0.5) * 0.015,
        speedY: (Math.random() - 0.5) * 0.015,
        rotSpeedX: (Math.random() - 0.5) * 0.01,
        rotSpeedY: (Math.random() - 0.5) * 0.01,
      };

      scene.add(mesh);
      meshes.push(mesh);
    }

    // Mouse coordinates track
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.targetY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Resize handler
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth mouse interpolation (LERP)
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Parallax scene shift
      scene.rotation.y = mouse.x * 0.15;
      scene.rotation.x = -mouse.y * 0.15;

      // Float and spin meshes
      meshes.forEach((mesh) => {
        mesh.position.x += mesh.userData.speedX;
        mesh.position.y += mesh.userData.speedY;

        mesh.rotation.x += mesh.userData.rotSpeedX;
        mesh.rotation.y += mesh.userData.rotSpeedY;

        // Boundary checks to bounce
        if (mesh.position.x > 18 || mesh.position.x < -18) mesh.userData.speedX *= -1;
        if (mesh.position.y > 10 || mesh.position.y < -10) mesh.userData.speedY *= -1;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 -z-10 w-full h-full pointer-events-none overflow-hidden opacity-60">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
