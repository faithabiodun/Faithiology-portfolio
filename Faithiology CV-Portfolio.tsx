// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect, useRef } from 'react';
import * as echarts from 'echarts';
const App: React.FC = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);
const skillChartRef = useRef<HTMLDivElement>(null);
useEffect(() => {
if (skillChartRef.current) {
const chart = echarts.init(skillChartRef.current);
const option = {
animation: false,
radar: {
indicator: [
{ name: 'Content Writing', max: 100 },
{ name: 'Visual Design', max: 100 },
{ name: 'Social Media', max: 100 },
{ name: 'Infographics', max: 100 },
{ name: 'Storytelling', max: 100 },
{ name: 'Engagement', max: 100 }
]
},
series: [{
type: 'radar',
data: [{
value: [95, 90, 95, 85, 90, 95],
name: 'Skills',
itemStyle: {
color: '#6366f1'
},
areaStyle: {
color: 'rgba(99, 102, 241, 0.2)'
}
}]
}]
};
chart.setOption(option);
}
}, []);
return (
<div className="min-h-screen bg-white">
{/* Navigation */}
<nav className="fixed w-full bg-white shadow-md z-50">
<div className="max-w-7xl mx-auto px-4">
<div className="flex justify-between items-center h-16">
<div className="text-2xl font-bold text-indigo-600">Faithiology</div>
<div className="hidden md:flex space-x-8">
<a href="#home" className="text-gray-700 hover:text-indigo-600 cursor-pointer">Home</a>
<a href="#about" className="text-gray-700 hover:text-indigo-600 cursor-pointer">About</a>
<a href="#contact" className="text-gray-700 hover:text-indigo-600 cursor-pointer">Contact</a>
</div>
<button
className="md:hidden cursor-pointer !rounded-button"
onClick={() => setIsMenuOpen(!isMenuOpen)}
>
<i className="fas fa-bars text-xl"></i>
</button>
</div>
</div>
{/* Mobile Menu */}
{isMenuOpen && (
<div className="md:hidden bg-white shadow-lg">
<a href="#home" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 cursor-pointer">Home</a>
<a href="#about" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 cursor-pointer">About</a>
<a href="#contact" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 cursor-pointer">Contact</a>
</div>
)}
</nav>
{/* Hero Section */}
<section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
<div className="absolute inset-0">
<img
src="https://public.readdy.ai/ai/img_res/f58443350b9c3635f664d8870cd58e31.jpg"
className="w-full h-full object-cover object-top"
alt="Hero Background"
/>
</div>
<div className="max-w-7xl mx-auto px-4 relative z-10">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="text-left">
<h1 className="text-5xl font-bold text-gray-800 mb-4">Faithiology</h1>
<h2 className="text-3xl text-indigo-600 mb-4">Prolific Content Writer</h2>
<p className="text-xl text-gray-600 mb-8">Transforming Ideas into Engaging Visual Stories</p>
<a 
  href="https://docs.google.com/document/d/1ShFCeuU_aIYIX_ZuyWSoiDdWKyxyHunzhzX7xDSI0cU/edit?usp=sharing" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition duration-300 cursor-pointer !rounded-button whitespace-nowrap inline-block"
>
  Download CV
</a>
</div>
<div className="flex justify-center">
<div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl">
<img
src="https://static.readdy.ai/image/4538b9817dc7b55308e7bd52e5e40215/5bd43a4b9183533b1bc923086fc19de6.jpeg"
className="w-full h-full object-cover"
alt="Profile"
/>
</div>
</div>
</div>
</div>
</section>
{/* About Section */}
<section id="about" className="py-20 bg-gray-50">
<div className="max-w-7xl mx-auto px-4">
<h2 className="text-4xl font-bold text-center mb-16 text-gray-800">About Me</h2>
<div className="grid md:grid-cols-2 gap-12">
<div>
<p className="text-lg text-gray-600 leading-relaxed mb-6">
With over 3 years of experience in content creation and visual storytelling, I specialize in crafting engaging content that resonates with diverse audiences across various digital platforms.
</p>
<p className="text-lg text-gray-600 leading-relaxed mb-6">
My expertise lies in transforming complex ideas into digestible, visually appealing content that drives engagement and builds meaningful connections with audiences.
</p>
<div ref={skillChartRef} className="w-full h-80"></div>
</div>
<div className="space-y-6">
<div className="bg-white p-6 rounded-lg shadow-md">
<h3 className="text-xl font-semibold mb-4 text-indigo-600">Core Competencies</h3>
<ul className="space-y-3">
<li className="flex items-center">
<i className="fas fa-check-circle text-green-500 mr-2"></i>
<span>Visual Content Strategy</span>
</li>
<li className="flex items-center">
<i className="fas fa-check-circle text-green-500 mr-2"></i>
<span>Social Media Management</span>
</li>
<li className="flex items-center">
<i className="fas fa-check-circle text-green-500 mr-2"></i>
<span>Infographic Design</span>
</li>
<li className="flex items-center">
<i className="fas fa-check-circle text-green-500 mr-2"></i>
<span>Content Writing</span>
</li>
</ul>
</div>
<div className="bg-white p-6 rounded-lg shadow-md">
<h3 className="text-xl font-semibold mb-4 text-indigo-600">Industry Experience</h3>
<ul className="space-y-3">
<li className="flex items-center">
<i className="fas fa-briefcase text-indigo-500 mr-2"></i>
<span>Web3</span>
</li>
<li className="flex items-center">
<i className="fas fa-briefcase text-indigo-500 mr-2"></i>
<span>Game-Fi</span>
</li>
<li className="flex items-center">
<i className="fas fa-briefcase text-indigo-500 mr-2"></i>
<span>DeFi</span>
</li>
<li className="flex items-center">
<i className="fas fa-briefcase text-indigo-500 mr-2"></i>
<span>Branding</span>
</li>
<li className="flex items-center">
<i className="fas fa-briefcase text-indigo-500 mr-2"></i>
<span>Education</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

{/* Contact Section */}
<section id="contact" className="py-20 bg-gray-50">
<div className="max-w-7xl mx-auto px-4">
<h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Let's Connect</h2>
<div className="flex justify-center space-x-8">
<a href="https://x.com/faithiologyyy" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 cursor-pointer">
<i className="fab fa-twitter text-3xl"></i>
</a>
<a href="https://t.me/faithiology999" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 cursor-pointer">
<i className="fab fa-telegram text-3xl"></i>
</a>
<a href="https://discord.com/faithiologyyy" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 cursor-pointer">
<i className="fab fa-discord text-3xl"></i>
</a>
<a href="mailto:abiodunfaith60@gmail.com" className="text-gray-600 hover:text-indigo-600 cursor-pointer">
<i className="fas fa-envelope text-3xl"></i>
</a>
</div>
</div>
</section>
{/* Footer */}
<footer className="bg-gray-800 text-white py-8">
<div className="max-w-7xl mx-auto px-4 text-center">
<p>&copy; 2025 Faithiology. All rights reserved.</p>
</div>
</footer>
</div>
);
};
export default App
