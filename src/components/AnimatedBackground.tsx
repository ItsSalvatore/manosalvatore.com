
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface AnimatedBackgroundProps {
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 10;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    
    // Create floating shapes
    const shapes: THREE.Mesh[] = [];
    const totalShapes = 12;
    
    // Colors from our theme
    const colors = [
      new THREE.Color('#8B5CF6'), // electric-purple
      new THREE.Color('#7C3AED'), // electric-violet
      new THREE.Color('#06B6D4'), // neon-cyan
      new THREE.Color('#22D3EE')  // neon-teal
    ];
    
    for (let i = 0; i < totalShapes; i++) {
      let geometry;
      const random = Math.random();
      
      // Randomize shape types
      if (random < 0.3) {
        geometry = new THREE.TetrahedronGeometry(0.5 + Math.random() * 0.5, 0);
      } else if (random < 0.6) {
        geometry = new THREE.OctahedronGeometry(0.5 + Math.random() * 0.5, 0);
      } else if (random < 0.8) {
        geometry = new THREE.DodecahedronGeometry(0.5 + Math.random() * 0.5, 0);
      } else {
        geometry = new THREE.TorusGeometry(0.5 + Math.random() * 0.3, 0.2, 16, 32);
      }
      
      const color = colors[Math.floor(Math.random() * colors.length)];
      const material = new THREE.MeshBasicMaterial({ 
        color: color,
        transparent: true,
        opacity: 0.2 + Math.random() * 0.4,
        wireframe: Math.random() > 0.5
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      
      // Position randomly in space
      mesh.position.x = Math.random() * 20 - 10;
      mesh.position.y = Math.random() * 20 - 10;
      mesh.position.z = Math.random() * 10 - 15;
      
      // Store random rotation speeds
      mesh.userData = {
        rotSpeed: {
          x: (Math.random() - 0.5) * 0.01,
          y: (Math.random() - 0.5) * 0.01,
          z: (Math.random() - 0.5) * 0.01
        },
        floatSpeed: 0.01 + Math.random() * 0.01,
        floatDistance: 0.2 + Math.random() * 0.3,
        initialY: mesh.position.y,
        floatOffset: Math.random() * Math.PI * 2
      };
      
      scene.add(mesh);
      shapes.push(mesh);
    }

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    // Add directional light
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);

    // Handle mouse movement for parallax effect
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Handle window resizing
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation loop
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      
      time += 0.01;
      
      // Update shapes
      shapes.forEach(shape => {
        const { rotSpeed, floatSpeed, floatDistance, initialY, floatOffset } = shape.userData;
        
        // Rotate shapes
        shape.rotation.x += rotSpeed.x;
        shape.rotation.y += rotSpeed.y;
        shape.rotation.z += rotSpeed.z;
        
        // Float shapes
        shape.position.y = initialY + Math.sin(time + floatOffset) * floatDistance;
        
        // Subtle parallax effect based on mouse position
        shape.position.x += (mousePosition.current.x * 0.01 - shape.position.x * 0.001);
        shape.position.y += (mousePosition.current.y * 0.01 - shape.position.y * 0.001);
      });
      
      // Subtle camera movement
      camera.position.x += (mousePosition.current.x * 0.3 - camera.position.x) * 0.05;
      camera.position.y += (mousePosition.current.y * 0.3 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);
      
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
      shapes.forEach(shape => {
        shape.geometry.dispose();
        (shape.material as THREE.Material).dispose();
      });
    };
  }, []);

  return <div ref={containerRef} className={`absolute inset-0 -z-10 ${className}`} />;
};

export default AnimatedBackground;
