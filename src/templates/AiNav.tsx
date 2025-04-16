// src/templates/AiNav.tsx
import { CategorySection } from '../feature/CategorySection'; // 导入分类区块组件
import { Meta } from '../layout/Meta'; // 导入用于设置页面头部信息的组件
import { AiNavConfig } from '../utils/AiNavConfig'; // 导入我们的AI工具数据
import { AppConfig } from '../utils/AppConfig'; // 导入网站基本配置
// 可以复用现有的页脚
// 可以复用现有的头部Banner，或者自定义

// 定义 AiNav 模板组件
const AiNav = () => (
  <div className="text-gray-800 antialiased">
    {' '}
    {/* 设置基础字体颜色和抗锯齿 */}
    {/* 设置页面的标题和描述，利于SEO */}
    <Meta title={AppConfig.title} description={AppConfig.description} />
    {/* 你可以在这里添加一个Hero    <Hero /> Banner */}
    <header className="bg-gradient-to-r from-teal-500 to-cyan-600 py-12 text-center text-white">
      <h1 className="mb-2 text-4xl font-bold">{AppConfig.site_name}</h1>
      <p className="text-lg opacity-90">{AppConfig.description}</p>
    </header>
    {/* 主体内容区域 */}
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* 遍历所有AI工具分类数据 */}
      {AiNavConfig.map((category) => (
        // 为每个分类渲染一个 CategorySection 组件
        <CategorySection key={category.name} category={category} />
      ))}
    </main>
    {/* 页脚<Footer /> */}
  </div>
);

export { AiNav }; // 导出模板
