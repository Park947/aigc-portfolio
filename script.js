const projects = {
  fortune: {
    type: "AIGC 短剧 / 2026.06 - 至今 / 07 集",
    title: "财神爷来我家送财，结果被我妈拉去相亲",
    intro: "一个以家庭轻喜剧和职场反差为核心的 7 集竖屏短剧策划。让“财神送财”与“妈妈相亲”两条不相干的线，在第一秒就撞在一起。",
    role: "选题、人物关系、分集结构、角色 / 场景 / 道具资产规划、分镜与 Seedance 分段 Prompt。",
    focus: "通过固定人数构图、固定座位、单一动作与尾帧续接，改善多人对话中的角色、道具和空间连续性。",
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
    video: "assets/videos/reborn-no-rescue-web.mp4"
  },
  mirror: {
    type: "叙事短片 / 00:59",
    title: "《镜子里的我，已经活过今天》",
    intro: "从镜中自我对视出发，以人物情绪和日常瞬间组织一段有关时间感的短片。",
    role: "视觉资产设定、图生视频、素材筛选、剪辑与声音设计。",
    focus: "用镜面、视线与场景切换维持人物状态，让抽象的情绪变化拥有可感知的画面节奏。",
    video: "assets/videos/mirror-today.mov"
  },
  elevator: {
    type: "叙事短片 / 00:15",
    title: "《电梯里的每一层人生》",
    intro: "一支围绕电梯空间切换与人生隐喻展开的竖屏叙事短片。",
    role: "创意策划、分镜、AI 视频生成、剪辑与声音设计。",
    focus: "把有限空间作为统一视觉锚点，通过楼层变化建立简洁、直接的叙事推进。",
    video: "assets/videos/elevator-life.mp4"
  },
  eclipse: {
    type: "视觉实验 / 00:30",
    title: "《日蚀丛林》",
    intro: "一支 30 秒的美漫风动作预告片：女战士深入原始丛林，在日蚀发生时遭遇兽群与虫王。当前为带生成平台标记的展示版，后续将替换为无水印导出。",
    role: "世界观、角色、怪物与场景设定；6 个高动作密度镜头拆解；图生视频生成、素材筛选、剪辑与声音包装。",
    focus: "在动作、特效与密集场景中维持主角外形、色彩体系和画风统一，并让镜头节奏服务冒险感。",
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

document.querySelectorAll(".project-card").forEach((card) => {
  card.querySelector(".project-open").addEventListener("click", () => {
    const project = projects[card.dataset.project];
    dialogType.textContent = project.type;
    dialogTitle.textContent = project.title;
    dialogIntro.textContent = project.intro;
    dialogRole.textContent = project.role;
    dialogFocus.textContent = project.focus;
    setVideo(project.video);
    renderEpisodes(project.episodes);
    dialog.showModal();
  });
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
