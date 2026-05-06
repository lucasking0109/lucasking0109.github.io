// Lucas King - Portfolio Data
// All content is organized by category for easy maintenance

const SITE_DATA = {
    personal: {
        name: "Chun-An (Lucas) Chin",
        title: "Quantitative Researcher | AI Engineer | Data Scientist",
        bio: [
            "Quantitative researcher with an MS in Mathematical Finance from Boston University and CFA Level II passed. Specializes in combining macro signals, fundamental factors, and machine learning models to generate alpha across U.S. equities and derivatives markets. Current work focuses on applying large language models and deep learning to financial forecasting, alternatives data analytics, and event-driven strategies.",
            "A volleyball player since college, though most of my time now goes to developing trading strategies and research — leaving less time on the court and more reminders that time flies. I'm also someone who loves finding problems in everyday life and turning them into solutions — like building BlinkAlarm, an app I created after realizing I was staring at screens 10+ hours a day and forgetting to blink."
        ],
        social: {
            github: "https://github.com/lucasking0109",
            linkedin: "https://www.linkedin.com/in/chun-an-chin",
            email: "cchunan@bu.edu"
        }
    },

    experience: [
        {
            title: "Vici Holdings - AI Data Scientist Intern",
            date: "Jul 2025 - Sep 2025",
            startYear: 2025,
            startMonth: 7,
            endYear: 2025,
            endMonth: 9,
            description: [
                "Developed a Python-based NLP pipeline via the GPT-o3 API, leveraging section-aware chunking and RAG via Weaviate to parse 10-K filings, applying few-shot prompting to extract management-quality indicators.",
                "Validated these AI signals through rigorous ground-truth sampling and permutation tests, quantifying governance metrics to construct a quantitative portfolio that improved baseline annualized return by 16%.",
                "Architected a multi-agent system deployed on AWS EC2, utilizing hooks and custom tool-calling (skills) to orchestrate LLM agents, generating M&A valuation scenarios that accelerated event-driven trading analysis by 50%."
            ],
            link: null
        },
        {
            title: "Clear Island Co., Ltd. - Investment Analyst",
            date: "Nov 2022 - Jul 2024",
            startYear: 2022,
            startMonth: 11,
            endYear: 2024,
            endMonth: 7,
            description: [
                "Architected an end-to-end data backend using Python and PostgreSQL, engineering automated web scrapers and API pipelines to ingest and normalize macroeconomic data for a U.S. market screening framework.",
                "Deployed a live automated trading engine on AWS, integrating the IB Gateway API alongside an interactive frontend dashboard (Streamlit) to visualize real-time portfolio exposure, VaR, ES, and stress testing.",
                "Leveraged model signals to manage an unleveraged, high-beta (Beta ≈ 2.0) portfolio, achieving Sharpe Ratio 2.84, Information Ratio 2.23, and +3.63% annualized return against the NASDAQ benchmark."
            ],
            link: null
        },
        {
            title: "Capital Futures Corporation - Trading Model Researcher Intern",
            date: "Sep 2020 - May 2021",
            startYear: 2020,
            startMonth: 9,
            endYear: 2021,
            endMonth: 5,
            description: [
                "Engineered a high-fidelity data pipeline by aggregating multi-vendor feeds, cross-referencing sources to scrub anomalies, and imputing missing values to establish a robust foundation for historical backtesting.",
                "Built a research-to-execution framework using Python for strategy evaluation and MQL5 for systematic trading, leveraging rigorous out-of-sample validation to boost live portfolio stability by 14% during high-volatility regimes."
            ],
            link: null
        }
    ],

    education: [
        {
            title: "Boston University",
            degree: "MS in Mathematical Finance & Financial Technology",
            date: "Sep 2024 - Present",
            startYear: 2024,
            startMonth: 9,
            description: [],
            coursework: "Statistics, Stochastic Calculus, Advanced Machine Learning, Algorithmic and High-Frequency Trading, Credit Risk, Deep Learning, Fixed Income, Advanced Programming, Corporate Risk, Economics of FinTech"
        },
        {
            title: "Soochow University",
            degree: "Bachelor of Business Administration",
            date: "Graduated Jun 2022",
            startYear: 2018,
            startMonth: 9,
            endYear: 2022,
            endMonth: 6,
            description: [],
            coursework: "Statistics, Financial Management, Operations Research, Operations Management, Microeconomics, Macroeconomics, Managerial Accounting, Information Management, Procurement Management, Marketing Research, Global Marketing, Project Management, Marketing Management, Business Calculus, Economics, Management, Accounting, Financial Investment and Asset Management, An Introduction to Financial Derivatives, Machine Learning with Python, Application of Artificial Intelligence in Financial Industry"
        },
        {
            title: "Hanze University of Applied Sciences (Hanze UAS)",
            degree: "Exchange Student - Brand, Design & Psychology",
            date: "Feb 2022 - Jun 2022",
            startYear: 2022,
            startMonth: 2,
            endYear: 2022,
            endMonth: 6,
            description: [
                "Exchange student with scholarship studying Brand, Design & Psychology."
            ]
        }
    ],

    projects: [
        {
            title: "The Earnings Agent - Autonomous LLM Agent for SEC Earnings Analysis",
            tag: "AI Agent",
            date: "Apr 2026",
            expanded: true,
            description: [
                "Architected an autonomous LLM agent for SEC 10-K/10-Q/8-K analysis with multi-tier hierarchical memory, structural self-correction loops, and deterministic numeric-traceability validation — achieved 100% hallucination-free output across 41 backtest events × 5 tickers (NVDA, AAPL, MSFT, GOOGL, AMZN).",
                "Designed a hybrid retrieval pipeline with context-aware chunking and multi-strategy semantic + lexical fusion over a production SEC filings corpus, addressing the brittleness of standard RAG in long-form financial documents.",
                "Implemented a deterministic context-injection pattern that pre-computes structured year-over-year diff signals into the agent's reasoning context — lifted 10-day forward signal accuracy +12-17 percentage points over baseline RAG on NVDA backtests.",
                "Deployed end-to-end on AWS with real-time SEC EDGAR monitoring and bilingual (EN/繁中) analyst report delivery; ~$0.27 per event and ~80s wall-clock latency via prompt caching and parallel tool execution. Live samples: cielee.com/work/earnings-agent."
            ],
            link: "https://cielee.com/work/earnings-agent",
            report: null
        },
        {
            title: "HFT Optimal Execution Research on NYSE/NASDAQ Tick Data",
            tag: "Research",
            date: "Mar 2026",
            expanded: true,
            description: [
                "Built an end-to-end research pipeline for optimal trade execution on real NYSE/NASDAQ tick data (208 equities × 14 venues × 5 days), benchmarking classical strategies — TWAP, VWAP-following, and a calibrated Almgren-Chriss model — against PPO reinforcement learning agents.",
                "Engineered a custom multi-agent training environment by extending the ABIDES simulator with a HerderAgent class (Lux 1998 chartist model) and multi-seed Latin hypercube calibration to real AAPL stylized facts — reducing volatility autocorrelation distance by 19%.",
                "Calibrated Almgren-Chriss baseline beat TWAP by ~5 bps median Implementation Shortfall with 21% IS variance reduction; action-capped PPO further delivered 52% variance reduction vs TWAP and a 56.4% win rate on 5-day out-of-sample evaluation."
            ],
            link: "https://github.com/lucasking0109/hft-optimal-execution",
            report: null
        },
        {
            title: "AIS Global Ship Tracking — Alternative Data Pipeline",
            tag: "Research",
            date: "Mar 2026",
            expanded: true,
            description: [
                "Built a 24/7 global maritime data collection pipeline on AWS EC2, ingesting 100M+ AIS position reports over 16 days via WebSocket → SQLite (WAL) → Parquet (zstd, ~80% size reduction) with a DuckDB query layer over a 45-day rolling retention.",
                "Developed an interactive Streamlit + PyDeck visualization for shipping flow analysis with WebGL-accelerated heatmaps, ship-type/speed/draught/flag filters, multi-day timeline at 5-min granularity, and Flag-of-Convenience detection across 19 open-registry nations.",
                "Conducted a comparative coverage analysis vs commercial baselines (MarineTraffic ~650k vessels/day, Spire ~250k/day, this project ~32k/day), exposing a ~95% gap in offshore regions — Persian Gulf (80 vs 500+ ships), Red Sea (4 vs 200+) — proving free terrestrial AIS is insufficient for Middle East / open-ocean research without satellite augmentation."
            ],
            link: "https://github.com/lucasking0109/AIS-research",
            report: null
        },
        {
            title: "MA Public Records Search - Legal Analysis Platform",
            tag: "System",
            date: "Mar 2026",
            expanded: true,
            description: [
                "Built a search and AI-powered legal analysis platform for Massachusetts public records appeals decisions, indexing 28,645 cases spanning 12 years (2014–2026) with full-text search, Boolean operators, and filters by year, case type, and status.",
                "Implemented a hybrid RAG system combining BM25 keyword search with vector similarity search (text-embedding-3-small) using Reciprocal Rank Fusion, enabling AI-powered case analysis with outcome prediction and precedent matching via GPT-4.1-mini with streaming responses.",
                "Developed a Python scraper using Playwright with 10 parallel workers to collect 27,333 case PDFs (~3.8 GB) from the MA Secretary of the Commonwealth, with automated text extraction and case outcome classification.",
                "Deployed on Vercel with Turso (SQLite cloud + FTS5), Cloudflare R2 for PDF storage, and comprehensive security hardening."
            ],
            link: "https://mapublicrecord.com",
            report: null
        },
        {
            title: "Option Scenario System - Real-Time Options Analytics Platform",
            tag: "System",
            date: "Jan 2026",
            expanded: true,
            description: [
                "Built a real-time options analytics platform that streams live bid/ask, implied volatility, and Greeks for 12 major U.S. stocks, capturing ~23,000 contracts per snapshot across expirations ranging from 1 day to over 6 months.",
                "Developed scenario analysis that answers \"if the stock drops 3% in 2 days, how much does my position gain or lose?\" by repricing every contract with Black-Scholes and breaking down P&L into Delta, Gamma, Vega, Theta, and higher-order effects so traders can see exactly where the risk comes from.",
                "Built an Expected Value engine using Monte Carlo simulation with GARCH(1,1) volatility forecasting to estimate the probability-weighted payoff of any option position, paired with a portfolio hedge calculator that takes existing positions and recommends specific hedges with beta-adjusted Greeks.",
                "Full-stack deployment on AWS EC2 with FastAPI, React 19, Redis, Docker, and automated daily data archival."
            ],
            link: null
        },
        {
            title: "BlinkAlarm - Eye Health Monitor (iOS & macOS)",
            tag: "App",
            date: "Mar 2026",
            expanded: true,
            description: [
                "Built a privacy-first eye health app using Apple's on-device Vision framework to monitor blink rate in real time and alert users during prolonged screen use.",
                "Implemented adaptive EAR-based blink detection with auto-calibration (45 samples), head pose filtering, and two-level smart alerts with haptic feedback.",
                "Developed dual-platform support: macOS menu bar app with floating alerts and screen tint, iOS with themed monitoring interfaces and Pomodoro timer."
            ],
            link: null,
            appStore: "https://apps.apple.com/us/app/blinkalarm/id6759943933",
            report: null
        },
        {
            title: "WarZone Tower Defense - Reinforcement Learning Agent",
            tag: "ML / RL",
            date: "Mar 2026",
            expanded: true,
            description: [
                "Reverse-engineered a Flash tower defense game by decompiling ActionScript source code and rebuilt a full Python + Pygame simulator from scratch for RL training.",
                "Trained a MaskablePPO agent with hybrid CNN+MLP observations (10ch × 51×31 spatial grid + 38-dim vector) and a 7,767-action masked space across 32 experimental runs in 3 phases (~500 hours, ~350M steps, 10 parallel workers on Apple MPS).",
                "Discovered that hierarchical action abstraction — collapsing 7,767 raw actions into 9 macro strategies inspired by EA SEED's Plants vs Zombies paper — drove the single largest improvement (+23 waves), pushing the best agent to 168.6 mean / 176 max waves vs. the developer's record of 200.",
                "Earlier insight: behavioral cloning from just 3 human demos reached 165.6 waves with a fraction of pure-RL compute, but BC+RL resume training consistently degraded — confirming that strong priors accelerate learning but don't survive fine-tuning."
            ],
            link: "https://github.com/lucasking0109/Warzone_Tower_Defense_RLmodel",
            linkedin: "https://www.linkedin.com/posts/chun-an-chin_reinforcementlearning-machinelearning-gameai-activity-7437320561669746688-MMoE",
            report: null
        },
        {
            title: "Denoising Diffusion Probabilistic Models (DDPM) - Face Generation",
            tag: "Research",
            date: "Feb 2026",
            description: [
                "Implemented DDPM to generate synthetic 64×64 human face images using U-Net with attention mechanisms (~22M parameters) and 1000 denoising timesteps.",
                "Trained on CelebA dataset (162,770 face images) with EMA model refinement (decay rate 0.9999).",
                "Achieved best training loss of 0.01564 by epoch 33; generated diverse faces with varied hairstyles, skin tones after 60 epochs (~60 hours) on Apple MPS."
            ],
            link: "https://github.com/lucasking0109/DDPM_w-CelebA_Data",
            linkedin: "https://www.linkedin.com/posts/chun-an-chin_ddpm-research-report-activity-7424318879423819778-PGE3",
            report: "https://lucasking0109.github.io/DDPM_w-CelebA_Data/report/DDPM_Research_Report.html"
        },
        {
            title: "DCGAN with CIFAR-10 - Image Generation & Mode Collapse Study",
            tag: "Research",
            date: "Jan 2026",
            description: [
                "Implemented Deep Convolutional GAN to generate 64×64 truck images from CIFAR-10, focusing on diagnosing and resolving mode collapse.",
                "Applied label smoothing (real: 0.9, fake: 0.1), 30% dropout regularization, and dynamic training balance (skip discriminator updates when accuracy >80%).",
                "V2 model (label smoothing + dropout + single-class training) achieved 29% improvement over baseline, demonstrating stable and diverse image generation."
            ],
            link: "https://github.com/lucasking0109/GAN_Model_w-_CIFAR_Data",
            linkedin: "https://www.linkedin.com/posts/chun-an-chin_ganresearchreport-activity-7421058518490750976-SBrc",
            report: "https://lucasking0109.github.io/GAN_Model_w-_CIFAR_Data/DCGAN_Research_Report.html"
        },
        {
            title: "Automated Investment Style Classification for Mutual Fund Prospectuses Using NLP",
            tag: "NLP",
            date: "May 2025",
            description: [
                "Data preprocessing and tokenization.",
                "Generated domain-specific word embeddings using Skip-gram Word2Vec.",
                "Built Knowledge Base to calculate cosine distance between document vectors and style centroids as additional features.",
                "Performed classification using Regression, Random Forest, and XGBoost.",
                "Achieved 66% accuracy using XGBoost for automated fund style classification."
            ],
            link: null
        },
        {
            title: "Company Bankruptcy Prediction (Kaggle Competition)",
            tag: "ML / RL",
            date: "Apr 2025",
            description: [
                "Applied StandardScaler for feature normalization; addressed extreme class imbalance using SMOTE oversampling within each cross-validation fold.",
                "Built Pipeline connecting StandardScaler → SMOTE → Classifier, preventing data leakage.",
                "Tested Random Forest, SVM, and XGBoost, optimizing for F1 score.",
                "XGBoost model achieved 0.46 F1 score on test set, demonstrating PR97 model stability."
            ],
            link: "https://github.com/lucasking0109/Bankruptcy_Prediction"
        },
    ],

    competitions: [
        {
            title: "QRT Asset Allocation Performance Forecasting Data Challenge",
            subtitle: "1st Place",
            date: "Spring 2026",
            description: [
                "Achieved 1st place overall in the QRT Data Challenge, a global quantitative finance competition focused on forecasting asset allocation performance across multiple asset classes."
            ],
            linkedin: "https://www.linkedin.com/posts/chun-an-chin_quantitativeresearch-machinelearning-assetallocation-activity-7440855367909179392-698n",
            image: null
        },
        {
            title: "IMC Prosperity 3 Trading Competition",
            subtitle: "Top 1% globally (133rd/12,621)",
            date: "Spring 2025",
            description: [
                "Developed volatility-arbitrage strategies by modeling implied volatility surfaces, cross-sectional deviations, and generating dynamic Black-Scholes pricing signals to systematically exploit recurring short-term mispricing.",
                "Exploited hidden microstructure inefficiencies across markets by optimizing limit-order placement, execution timing, and fill probabilities, capturing ~60% of theoretical arbitrage potential with minimal risk exposure."
            ],
            linkedin: "https://www.linkedin.com/posts/chun-an-chin_imcprosperity3-algorithmictrading-quantfin-activity-7325727472359002113-WVmE",
            image: "images/imc-leaderboard.png"
        },
        {
            title: "Rotman International Trading Competition 2025",
            date: "Spring 2025",
            description: [
                "Led team to 1st place in the MSMFT internal competition: Achieved 2nd place globally in the Sales & Trader Case by coordinating strategies and ensuring alignment across team members under real-time trading pressure.",
                "Deployed market-making strategies targeting order-book imbalances and spread dynamics, systematically profiting from structural inefficiencies while avoiding directional exposure."
            ],
            linkedin: "https://www.linkedin.com/posts/chun-an-chin_ritc2025-quantfinance-algorithmictrading-activity-7312688246260383744-XtsA",
            image: "images/rotman-ranking.png"
        }
    ],

    certificates: {
        file: "",
        images: [
            "certificates/images/cert-01.png",
            "certificates/images/cert-02.png",
            "certificates/images/cert-03.png",
            "certificates/images/cert-04.png",
            "certificates/images/cert-05.png",
            "certificates/images/cert-06.png",
            "certificates/images/cert-07.png",
            "certificates/images/cert-08.png",
            "certificates/images/cert-10.png",
            "certificates/images/cert-12.jpg",
            "certificates/images/cert-13.jpg",
            "certificates/images/cert-14.jpg",
            "certificates/images/cert-15.png",
            "certificates/images/cert-16.jpg",
            "certificates/images/cert-17.jpg",
            "certificates/images/cert-18.jpg"
        ],
        categories: [
            {
                name: "Finance",
                items: [
                    "CFA Level 2 Passed",
                    "CFA Level 1 Passed",
                    "Amplifyme x CFA Institute: Finalist of Investing Simulator Challenge",
                    "Akuna Capital: Options 101 / 201 Courses",
                    "Licensing Examination for Securities and Futures Intermediaries (Hong Kong)",
                    "Qualification Exam for Senior Securities Specialist",
                    "Qualification Exam for Futures Specialist",
                    "Basic Test on Financial Markets and Professional Ethics"
                    
                ]
            },
            {
                name: "Cloud & AI",
                items: [
                    "AWS Certified AI Practitioner"
                ]
            },
            {
                name: "Coding",
                items: [
                    "CodePath: Intermediate Technical Interview Prep (Advanced)",
                    "TQC: Python Programming",
                    "TQC: Web Data Extraction and Analysis"
                ]
            }
        ]
    }
};
