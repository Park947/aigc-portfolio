const projects = {
  fortune: {
    type: "AIGC 短剧 / 2026.06 - 至今 / 07 集",
    title: "财神爷来我家送财，结果被我妈拉去相亲",
    intro: "一个以家庭轻喜剧和职场反差为核心的 7 集竖屏短剧策划。让“财神送财”与“妈妈相亲”两条不相干的线，在第一秒就撞在一起。",
    role: "选题、人物关系、分集结构、角色 / 场景 / 道具资产规划、分镜与 Seedance 分段 Prompt。",
    focus: "通过固定人数构图、固定座位、单一动作与尾帧续接，改善多人对话中的角色、道具和空间连续性。",
    review: { approach: ["先完成“家庭误会 -> 父亲 KPI -> 办公室机缘 -> 客户合作”的 7 集因果线，再把每段控制在 15 秒和 3 至 4 句对白内，让反差、口型和情绪都有生成空间。", "建立角色、场景、道具三层资产库：角色三视图锁脸和服装，客厅、工位和会议室锁家具与光线，元宝箱、登记本、文件夹锁颜色、材质和状态。", "多人镜头把 Prompt 写成镜头调度：第一帧就锁定人数、座位与道具位置；用稳定三人中景和单一动作完成对话。只有角色、场景、服装、座位与道具都匹配时才续接尾帧。"], challenges: ["会议室曾出现两个林晚：双人镜头切到三人镜头时，模型叠加了两个画面状态。后来改为第一帧即固定三人会议中景，整段一镜到底。", "人物从入口走到工位时，办公室中途穿帮：场景图只锁住工位附近。改为从人物已经站定的固定工位直接开始，删去不必要的长距离移动。", "尾帧会把已离场角色带入下一段：王总或客户仍出现在新的双人关系里。因此角色增减、家庭与职场跨场景时，一律用角色图和场景图重建独立首帧。", "多人、多动作和多道具会造成换座或重复：每段只保留一种空间状态，道具变化拆到下一段，例如文件夹先手持、下一段才落到桌面。"], reflection: ["这次让我确认，连续短剧的关键不是把 Prompt 写得更长，而是先规定角色名单、坐位、道具状态和尾帧是否具备续接条件。", "角色的总结台词不适合在客户面前说时，我没有硬改同一镜头，而是保留双人情绪补镜，并追加短喜剧尾镜，让人物关系和主题落点更自然。", "下一版会完成统一片头、封面、字幕版与无字幕作品集版，并建立角色声线、资产表、道具状态表和尾帧判断模板，提升后续系列开发效率。"] },
    video: "assets/videos/fortune-01.mov",
    episodes: [
      { label: "第 1 集", video: "assets/videos/fortune-01.mov" },
      { label: "第 2 集", video: "assets/videos/fortune-02.mov" },
      { label: "第 3 集", video: "assets/videos/fortune-03.mov" },
      { label: "第 4 集", video: "assets/videos/fortune-04.mov" },
      { label: "第 5 集", video: "assets/videos/fortune-05.mov" },
      { label: "第 6 集", video: "assets/videos/fortune-06.mp4" },
      { label: "第 7 集", video: "assets/videos/fortune-07.mov" }
    ]
  },
  reborn: {
    type: "AIGC 悬疑短剧 / 03:01",
    title: "《重生后，我不再救他》",
    intro: "以重生后的关键抉择为起点，围绕人物关系和悬疑反转推进的一支叙事短剧。",
    role: "剧本、分镜、AI 视频生成、素材筛选、剪辑与声音设计。",
    focus: "将悬疑信息放进人物关系和节奏节点中，让反转在短时长内具有明确的情绪落点。",
    review: { approach: ["先将长剧情拆成不超过 15 秒的情绪单元：死亡与发现背叛、重生确认、电话试探、调查跟踪、幕后命令、正面对峙。每段先确定信息焦点，再决定景别、动作与对白。", "角色图、场景图和尾帧图各自只负责一件事：角色锁外貌，仓库、卧室、咖啡厅和办公室图锁空间与光线，尾帧只在人物位置和道具状态完全匹配时续接。", "多人关系不交给模型临场安排：咖啡厅与仓库固定苏晴在左、陈宇在右；办公室固定林晚在门口或桌侧、陈宇在桌后。手机、文件和录音界面只作为视觉焦点，准确文字交由后期。"], challenges: ["死亡、血迹、多人背叛和复杂对白同时出现时容易生成失败：改以意识模糊、惊醒、呼吸和眼神维持悬疑，把高风险画面弱化为非重点线索。", "15 秒内塞入黑场、特写、主观视角、手机和对白会导致跳变：改为每段一个核心动作、3 至 4 句以内对白，并在疑惑、录音证实、正面对峙处断开。", "两段人物站位前后矛盾会造成重新排位：将“苏晴左、陈宇右、并肩站立”写成可验证的规则，并以上一段尾帧锁定已经成立的构图。", "屏幕与文件文字容易乱码，独立生成的声音也无法自然连续：生成干净亮屏或文件特写，文字、电话声、心跳和空间混响统一在后期叠加与衔接。"], reflection: ["我确认了连续性不是靠长 Prompt 获得，而是要在生成前记录人物站位、镜头方向、光线、道具状态和首尾帧是否匹配，并做一次连续性检查。", "证据线是悬疑剧的关键信息，下一版会先为财务表格、录音文件、责任确认书建立统一道具资产，减少临时生成文字导致的理解成本。", "后续会建立角色声线和环境音库，将心跳、电话与空间混响作为剪辑层统一控制，让生成画面和声音不再互相制约。"] },
    video: "assets/videos/reborn-no-rescue-web.mp4"
  },
  mirror: {
    type: "叙事短片 / 00:59",
    title: "《镜子里的我，已经活过今天》",
    intro: "从镜中自我对视出发，以人物情绪和日常瞬间组织一段有关时间感的短片。",
    role: "视觉资产设定、图生视频、素材筛选、剪辑与声音设计。",
    focus: "用镜面、视线与场景切换维持人物状态，让抽象的情绪变化拥有可感知的画面节奏。",
    review: { approach: ["先把悬疑规则写清：镜中人不是普通延迟，而是另一条时间线的主角。59 秒拆为异常出现、警告升级、威胁现身、身份揭示四段，每段只保留一个情绪峰值和主要动作。", "人物三视图锁定短黑发、浅灰上衣、手表等身份特征；浴室空场景锁定圆镜、洗手台、左窗、右侧磨砂门和晨光。人物图、空间图、尾帧图分别负责身份、空间和动作状态。", "先用正面固定构图建立镜像规则，再以慢半拍、不同视线、镜中暴雨和触镜逐步打破规则。声音按段独立设计，用水流、敲门、镜面摩擦、暴雨与低频心跳在后期形成连续线索。"], challenges: ["独立生成会让同一人物变脸：每段重复相同外观锚点并使用上一段尾帧；镜中人只改变状态，不改变脸、服装与体型。", "仅靠文字描述会让浴室门、窗、镜子和洗手台重新排列：为每段重复固定空间关系，跨段只在同一浴室里延续动作，不让模型重新设计房间。", "镜像容易变成普通切镜或同步表演：第一段先用正面固定镜头让现实人物和镜中人同时可见，只用抬手、擦脸、转头等简单动作制造时间差。", "现实浴室与镜中暴雨同时变化会失控，且 15 秒容不下手机、录音、敲门和反转：暴雨只在第三段进入镜面区域，信息按四段递进；需读懂的文字和音轨问题交由后期。"], reflection: ["这次说明镜像异常不能在一个生成段内同时处理表演、空间变化和特效。下一版会分别为抬手不同步、转头不同步和触镜制作单动作首帧。", "手机录音和镜面文字是叙事关键信息，需要比生成结果更可控：会延长有效停留时间，优先用后期叠加，避免观众因乱码或停留不足错过线索。", "成片会补统一片头、封面、四段关键帧和音效设计稿，作为“成片 + 资产 + 制作复盘”的完整案例展示。"] },
    video: "assets/videos/mirror-today.mov"
  },
  elevator: {
    type: "叙事短片 / 00:15",
    title: "《电梯里的每一层人生》",
    intro: "一支围绕电梯空间切换与人生隐喻展开的竖屏叙事短片。",
    role: "创意策划、分镜、AI 视频生成、剪辑与声音设计。",
    focus: "把有限空间作为统一视觉锚点，通过楼层变化建立简洁、直接的叙事推进。",
    review: { approach: ["让主角始终留在同一部电梯中，只改变门外世界。电梯的金属内壁、按钮、顶灯、地面和门框作为空间锚点，四种人生阶段都从门内被观看。", "用童年客厅、海边青春、高层办公室、白色房间四个易识别的空间符号代替复杂对白；每层只承担一个情绪，观众在开门瞬间即可理解“楼层 = 人生阶段”。", "把关门、短暂停顿、开门、快速展示设计成固定节拍。门框遮挡、光线突变和环境声承担转场，结尾回到近似开场的构图，为循环播放预留接口。"], challenges: ["15 秒中要容纳四层人生、空间碎片与双重人物：压缩为“现实锚点 + 四个切片 + 一个反转 + 循环”，每层只保留玩具、海风、城市窗景或空椅子等一个识别符号。", "独立生成的场景像不同作品拼接：固定电梯内部构图、门框比例、主角站位和镜头高度，坚持从门内向外观察；仅改变门外内容和色温。", "不同人生阶段会让模型把主角变成不同年龄：主角始终保持短发、深色外套和背影或侧身，人生变化由门外人物和空间呈现；另一个自己放在深处或镜面次要位置。", "快速切换会退化为普通跳切，声音也易拥挤：每次使用关门遮挡和短暂黑暗，电梯机械声持续存在，其他环境声遵循开门进入、关门收回的规则。"], reflection: ["下一版会增加稳定的楼层按钮或提示音变化，但具体数字和文字交给后期，既加强时间信息，又避开生成文字乱码。", "结尾的另一个自己需要更早得到支撑：会在前几个楼层埋入同一把钥匙、同一束光或同一个身影等轻线索，让循环反转更有回看的价值。", "这套“固定空间连接多个世界”的规则可以继续拓展为地铁、酒店房间、便利店或候车室，形成统一的超现实短片系列。"] },
    video: "assets/videos/elevator-life.mp4"
  },
  eclipse: {
    type: "视觉实验 / 00:30",
    title: "《日蚀丛林》",
    intro: "一支 30 秒的美漫风动作预告片：女战士深入原始丛林，在日蚀发生时遭遇兽群与虫王。当前为带生成平台标记的展示版，后续将替换为无水印导出。",
    role: "世界观、角色、怪物与场景设定；6 个高动作密度镜头拆解；图生视频生成、素材筛选、剪辑与声音包装。",
    focus: "在动作、特效与密集场景中维持主角外形、色彩体系和画风统一，并让镜头节奏服务冒险感。",
    review: { approach: ["先把 30 秒拆成进入异境、遭遇威胁、危机升级、Boss 揭示和终局爆发五个情绪节点；独立生成的镜头也因此能在剪辑后保有清楚的因果和递进。", "先建立女战士、猎豹、狼群、虫群、日蚀虫王与丛林遗迹的资产库。人物设定图负责身份锁定，怪物图负责每一层冲突，避免模型在镜头间重新设计关键形象。", "Prompt 固定为“参考图 + 外观锚点 + 单一动作 + 镜头语言 + 光影约束”：一个镜头只完成闪避、横斩或跳劈等一个主动作；再以青绿遗迹和金色剑光统一画面。"], challenges: ["初版画面偏暗，人物、遗迹和巨剑落在相近明度中：改为青绿环境配金色阳光、剑气和边缘光，先确保主角轮廓与动作可读。", "不同镜头会改变脸部、披风和武器比例：后续持续引用同一张主角设定图，重复发型、头巾、战纹、肩甲和巨剑等外观锚点，并把复杂动作拆开生成。", "主角、怪物、动作和特效同时出现时容易失焦：将敌人按猎豹、狼群、虫群、虫王分层，每段只突出一个敌对对象和一个空间关系；群像镜头只承担规模感。", "数秒生成片段难以天然连成故事：用相同色彩、角色参考和运动方向衔接，例如前一镜的剑气向右挥出，下一镜延续向右的怪物冲入。"], reflection: ["这次验证了“单帧好看”不等于动作连续。下一版会用前一段尾帧作为下一段的起始参考，并明确人物与怪物的运动方向，减少动作和空间的跳切。", "预告片中主角主要承担打斗功能，缺少能建立代入感的反应镜头；后续会在每一轮威胁升级前补入近景反应，让人物也参与叙事。", "正式投递会补无水印横版、9:16 精剪版、封面与 6 至 8 张关键帧，把生成过程、视觉资产与成片结果组织成更完整的作品包。"] },
    video: "assets/videos/worlds-between.mp4"
  },
  serum: {
    type: "美妆广告 / 00:15",
    title: "精华液",
    intro: "围绕精华液的质地、肤感联想和产品特写，构建具有可信度的护肤广告表达。",
    role: "卖点提炼、分镜脚本、视频生成、素材筛选与成片优化。",
    focus: "让产品外观、液体质感和镜头节奏始终服务于核心卖点，减少生成中常见的变形与偏移。",
    video: "assets/videos/serum.mp4"
  },
  fragrance: {
    type: "香氛广告 / 00:15",
    title: "香水",
    intro: "以光线、材质与人物氛围组织香氛广告的情绪化视觉叙事。",
    role: "创意构思、分镜、视频生成、画面筛选与剪辑。",
    focus: "以统一的色彩、光感和瓶身特写，建立香氛内容应有的精致与记忆点。",
    video: "assets/videos/fragrance.mp4"
  },
  drink: {
    type: "食品广告 / 00:15",
    title: "饮料",
    intro: "通过清爽动态与饮用场景，强化饮料产品的即时感与食欲联想。",
    role: "卖点提炼、画面设计、视频生成、节奏剪辑与成片优化。",
    focus: "将产品识别、使用场景与节奏节点放在同一条镜头路径中，保证信息流广告的直观表达。",
    video: "assets/videos/drink.mp4"
  },
  glass: {
    type: "日用广告 / 00:15",
    title: "杯子",
    intro: "围绕产品轮廓、使用动作与生活场景，设计一支日用产品的短广告。",
    role: "产品观察、分镜脚本、视频生成、画面筛选与剪辑。",
    focus: "让杯子的外观和使用方式保持稳定，在生活化画面里突出产品本身。",
    video: "assets/videos/glass.mp4"
  },
  scoop: {
    type: "日用广告 / 00:15",
    title: "铲子",
    intro: "通过明确的功能动作和物件质感，完成一支实用型日用广告表达。",
    role: "卖点梳理、镜头设计、视频生成、素材筛选与成片优化。",
    focus: "用连续动作说明产品功能，并在细节特写中保留真实的材质与使用感。",
    video: "assets/videos/scoop.mp4"
  }
};

const dialog = document.querySelector(".project-dialog");
const dialogTitle = document.querySelector("#dialog-title");
const dialogType = document.querySelector(".dialog-type");
const dialogIntro = document.querySelector(".dialog-intro");
const dialogRole = document.querySelector(".dialog-role");
const dialogFocus = document.querySelector(".dialog-focus");
const dialogVideo = document.querySelector(".dialog-video");
const episodePicker = document.querySelector(".episode-picker");
const reviewDialog = document.querySelector(".review-dialog");
const reviewType = document.querySelector(".review-type");
const reviewTitle = document.querySelector("#review-title");
const reviewIntro = document.querySelector(".review-intro");
const reviewApproach = document.querySelector(".review-approach");
const reviewChallenges = document.querySelector(".review-challenges");
const reviewReflection = document.querySelector(".review-reflection-list");

dialogVideo.addEventListener("contextmenu", (event) => event.preventDefault());

const setVideo = (source) => {
  dialogVideo.pause();
  dialogVideo.src = source;
  dialogVideo.load();
};

const renderEpisodes = (episodes = []) => {
  episodePicker.replaceChildren();
  episodePicker.hidden = episodes.length === 0;
  episodes.forEach((episode, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "episode-button";
    button.textContent = episode.label;
    button.setAttribute("aria-pressed", String(index === 0));
    button.addEventListener("click", () => {
      setVideo(episode.video);
      episodePicker.querySelectorAll(".episode-button").forEach((item) => item.setAttribute("aria-pressed", "false"));
      button.setAttribute("aria-pressed", "true");
    });
    episodePicker.append(button);
  });
};

const openProject = (projectId) => {
  const project = projects[projectId];
  if (!project) return;

  dialogType.textContent = project.type;
  dialogTitle.textContent = project.title;
  dialogIntro.textContent = project.intro;
  dialogRole.textContent = project.role;
  dialogFocus.textContent = project.focus;
  setVideo(project.video);
  renderEpisodes(project.episodes);
  dialog.showModal();
};

const renderReviewList = (element, items) => {
  element.replaceChildren(...items.map((text) => {
    const item = document.createElement("li");
    item.textContent = text;
    return item;
  }));
};

const openReview = (projectId) => {
  const project = projects[projectId];
  if (!project?.review) return;

  reviewType.textContent = `${project.type} / 制作复盘`;
  reviewTitle.textContent = project.title;
  reviewIntro.textContent = project.intro;
  renderReviewList(reviewApproach, project.review.approach);
  renderReviewList(reviewChallenges, project.review.challenges);
  renderReviewList(reviewReflection, project.review.reflection);
  reviewDialog.showModal();
};

document.querySelectorAll(".project-card").forEach((card) => {
  card.querySelector(".project-open").addEventListener("click", () => openProject(card.dataset.project));
});

document.querySelectorAll(".project-review-open").forEach((button) => {
  button.addEventListener("click", () => openReview(button.dataset.project));
});

document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("close", () => {
  dialogVideo.pause();
  dialogVideo.removeAttribute("src");
  dialogVideo.load();
});
dialog.addEventListener("click", (event) => {
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});

document.querySelector(".review-close").addEventListener("click", () => reviewDialog.close());
reviewDialog.addEventListener("click", (event) => {
  const rect = reviewDialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) reviewDialog.close();
});

document.querySelectorAll(".filter").forEach((filter) => {
  filter.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((button) => {
      button.classList.remove("is-active");
      button.setAttribute("aria-pressed", "false");
    });
    filter.classList.add("is-active");
    filter.setAttribute("aria-pressed", "true");
    document.querySelectorAll(".project-card").forEach((card) => {
      card.classList.toggle("is-hidden", filter.dataset.filter !== "all" && card.dataset.category !== filter.dataset.filter);
    });
    document.querySelectorAll(".work-group").forEach((group) => {
      group.classList.toggle("is-empty", !group.querySelector(".project-card:not(.is-hidden)"));
    });
  });
});

const progress = document.querySelector(".scroll-progress span");
const updateProgress = () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${max ? (window.scrollY / max) * 100 : 0}%`;
};
window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealItems = document.querySelectorAll(".reveal");
if (reduceMotion) revealItems.forEach((item) => item.classList.add("is-visible"));
else {
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
  }), { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
}

const toast = document.querySelector(".toast");
document.querySelector(".copy-email").addEventListener("click", async (event) => {
  try {
    await navigator.clipboard.writeText(event.currentTarget.dataset.email);
    toast.classList.add("is-visible");
    setTimeout(() => toast.classList.remove("is-visible"), 2200);
  } catch { event.currentTarget.textContent = "邮箱：JUJUUOO@163.com"; }
});
