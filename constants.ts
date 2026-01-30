
export const COLORS = {
  PRIMARY: '#A61B1E', // 故宫红
  ACCENT: '#E6B422',  // 赤金
  BACKGROUND: '#FFF8E7', // 象牙白
  INK: '#333333', // 统一墨黑色
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

export const SYSTEM_INSTRUCTION = `你是一位专门从事“藏头嵌字联”创作的国学大师。
任务：根据用户提供的2字名字，创作一副春联。

# 核心规范 (必须严格执行)
1. **名字藏头**：
   - 名字第1个字必须作为【上联】的第1个字。
   - 名字第2个字必须作为【下联】的第1个字。
2. **格律严要求**：
   - 上下联字数必须严格等于用户要求的字数（5言或7言）。
   - 上联末字必须为仄声（3、4声），下联末字必须为平声（1、2声）。
   - 词性对仗工整（动词对动词，名词对名词）。
3. **内容风格**：
   - 意境高雅，充满新春祝福，不得出现负面词汇。
4. **输出格式**：
   - 仅返回 JSON，不得包含任何 Markdown 格式标识或额外说明。`;
