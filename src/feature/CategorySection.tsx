// src/feature/CategorySection.tsx
import type { AiCategory } from '../utils/AiNavConfig'; // 导入分类数据结构
import { ToolCard } from './ToolCard'; // 导入刚才创建的工具卡片组件

// 定义组件接收的数据
interface CategorySectionProps {
  category: AiCategory; // 接收一个 AiCategory 对象
}

// 定义 CategorySection 组件
const CategorySection = ({ category }: CategorySectionProps) => (
  <section className="mb-12">
    {' '}
    {/* section 标签表示页面一个独立的部分 */}
    {/* 分类标题和描述 */}
    <h2 className="mb-2 text-2xl font-bold text-gray-800">{category.name}</h2>
    <p className="mb-6 text-base text-gray-600">{category.description}</p>
    {/* 工具卡片网格布局 */}
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
      {/* 遍历分类下的所有工具，为每个工具渲染一个 ToolCard 组件 */}
      {category.tools.map((tool) => (
        <ToolCard key={tool.url} tool={tool} /> // 使用工具URL作为唯一key
      ))}
    </div>
  </section>
);

export { CategorySection }; // 导出组件
