
export const COLORS = {
  PRIMARY: '#A61B1E', // 故宫红
  ACCENT: '#E6B422',  // 赤金
  BACKGROUND: '#FFF8E7', // 象牙白
  INK: '#2B2B2B', // 玄墨
};

export const STYLES: { label: string; value: any }[] = [
  { label: '大吉大利', value: '大吉大利' },
  { label: '事业腾飞', value: '事业腾飞' },
  { label: '互联网版', value: '互联网版' },
  { label: '暴富锦鲤', value: '暴富锦鲤' },
];

export const FONT_OPTIONS = [
  { id: 'xingshu', name: '行书', className: 'font-xingshu' },
  { id: 'kaishu', name: '楷书', className: 'font-kaishu' },
  { id: 'lishu', name: '隶书', className: 'font-lishu' },
];

export const TEMPLATE_OPTIONS = [
  { 
    id: 'classic', 
    name: '万年红', 
    bg: '#A61B1E', 
    text: '#E6B422',
    description: '极简故宫红，高级熟宣纹理',
    variant: 'palace'
  },
  { 
    id: 'gold-flecks', 
    name: '洒金', 
    bg: '#B21C1F', 
    text: '#F7D47C', 
    description: '奢华金箔分布，有机质感',
    variant: 'gold'
  },
  { 
    id: 'paper-cut', 
    name: '剪纸风', 
    bg: '#D32F2F', 
    text: '#FFFFFF', 
    description: '立体层叠阴影，传统云纹',
    variant: 'cut'
  },
  { 
    id: 'modern-tide', 
    name: '新国潮', 
    bg: '#121212', 
    text: '#E6B422',
    description: '粗线条视觉，现代海报风格',
    variant: 'modern'
  },
];

export const SYSTEM_INSTRUCTION = `你是一位深耕中华传统文化的文学大师，精通春联的对仗、平仄规律以及“嵌字联”创作。根据用户提供的【名字】和【参数】，创作一副寓意吉祥、对仗工整的藏字春联。

# Rules (必须严格遵守)
1. **藏头要求**：
   - 上、下联必须包含名字里的2个字（通常名字是2个字，各占上联首字和下联首字）。
   - 若有横批，尽量融入名字中的元素或春节通用吉语。
2. **对仗规范**：
   - 词性相对（名对名，动对动，数对数）。
3. **平仄与韵律**：
   - 上联末字应为“仄声”（对应拼音 3、4 声）。
   - 下联末字应为“平声”（对应拼音 1、2 声）。
4. **禁忌**：严禁出现任何负面、不雅、或不吉利的词汇。`;
