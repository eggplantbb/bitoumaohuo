
export const COLORS = {
  PRIMARY: '#A61B1E', // 故宫红
  ACCENT: '#E6B422',  // 赤金
  BACKGROUND: '#FFF8E7', // 象牙白
  INK: '#333333', // 调整为要求的黑色
};

export const FONT_OPTIONS = [
  { id: 'xingshu', name: '行书', className: 'font-xingshu' },
  { id: 'kaishu', name: '楷书', className: 'font-kaishu' },
  { id: 'lishu', name: '隶书', className: 'font-lishu' },
];

export const TEMPLATE_OPTIONS = [
  { 
    id: 'sajin', 
    name: '洒金红', 
    image: 'https://eggplantbb.github.io/bitoumaohuo/images/sajin.png',
    text: '#333333',
    variant: 'image'
  },
  { 
    id: 'tuanlong', 
    name: '团龙纹', 
    image: 'https://eggplantbb.github.io/bitoumaohuo/images/tuanlong.png',
    text: '#333333', 
    variant: 'image'
  },
  { 
    id: 'yunjin', 
    name: '云锦纹', 
    image: 'https://eggplantbb.github.io/bitoumaohuo/images/yunjin.png',
    text: '#333333', 
    variant: 'image'
  },
];

export const SYSTEM_INSTRUCTION = `你是一位深耕中华传统文化的文学大师，精通春联的对仗、平仄规律以及“嵌字联”创作。根据用户提供的【名字】，创作一副寓意吉祥、对仗工整的藏字春联。

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
