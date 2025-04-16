import type { AiTool } from '../utils/AiNavConfig'; // 导入我们定义的数据结构

// 定义这个组件需要接收哪些数据 (Props)
interface ToolCardProps {
  tool: AiTool; // 接收一个 AiTool 对象
}

// 定义 ToolCard 组件
const ToolCard = ({ tool }: ToolCardProps) => (
  // target="_blank" rel="noopener noreferrer" 在新标签页打开链接，更安全
  <a
    href={tool.url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-start rounded-lg border border-gray-200 bg-white p-4 shadow transition hover:shadow-md" // 使用Tailwind CSS定义样式
  >
    {/* 工具图标 */}
    <img
      src={tool.icon}
      alt={`${tool.name} 图标`}
      className="mr-4 size-12 shrink-0" // flex-shrink-0 防止图标被压缩
      // 处理图片加载失败的情况
      onError={(e) => {
        (e.target as HTMLImageElement).src = '/assets/images/tools/default.png'; // 显示默认图标
      }}
    />
    {/* 工具信息 */}
    <div className="grow">
      <h3 className="mb-1 text-lg font-semibold text-gray-900">{tool.name}</h3>
      <p className="mb-2 line-clamp-2 text-sm text-gray-600">
        {/* line-clamp-2 限制描述最多显示两行 */}
        {tool.description}
      </p>
      {/* 标签 */}
      <div className="flex flex-wrap gap-1">
        {tool.tags.map((tag) => (
          <span
            key={tag} // 列表渲染需要唯一的 key
            className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </a>
);

export { ToolCard }; // 导出组件，方便其他文件使用
