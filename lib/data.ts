import { IProject } from '@/types';

const PL = '/logo/placeholder.svg';

export const GENERAL_INFO = {
    email: 'mfigueredosilva1@gmail.com',
    emailSubject: 'Contato pelo portfólio',
    emailBody: 'Olá Matheus, vi seu portfólio e gostaria de conversar sobre...',
};

/** Perfil público — usado no menu SOCIAL e em qualquer link direto. */
export const LINKEDIN_PROFILE_URL =
    'https://www.linkedin.com/in/matheus-silva-902735288/';

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/silvaaszx' },
    { name: 'linkedin', url: LINKEDIN_PROFILE_URL },
];

export const MY_STACK = {
    'Flutter & Dart': [
        { name: 'Dart 3+', icon: PL },
        { name: 'Flutter 3.24+', icon: PL },
        { name: 'BLoC / Cubit', icon: PL },
        { name: 'Dartz', icon: PL },
        { name: 'Dio', icon: PL },
        { name: 'Provider', icon: PL },
    ],
    'iOS & macOS': [
        { name: 'Swift', icon: PL },
        { name: 'SwiftUI', icon: PL },
        { name: 'UIKit', icon: PL },
        { name: 'SwiftData', icon: PL },
        { name: 'WidgetKit', icon: PL },
        { name: 'macOS', icon: PL },
    ],
    'Android & Cross': [
        { name: 'Kotlin', icon: PL },
        { name: 'Jetpack Compose', icon: PL },
        { name: 'React Native', icon: PL },
        { name: 'Redux', icon: PL },
    ],
    'Web & backend': [
        { name: 'React.js', icon: PL },
        { name: 'Next.js', icon: PL },
        { name: 'Node.js', icon: PL },
        { name: 'TypeScript', icon: PL },
        { name: 'Tailwind CSS', icon: PL },
        { name: 'GraphQL / REST', icon: PL },
    ],
    'Arquitetura & cloud': [
        { name: 'MVVM-C', icon: PL },
        { name: 'Clean Architecture', icon: PL },
        { name: 'SOLID', icon: PL },
        { name: 'Firebase', icon: PL },
        { name: 'AWS (S3)', icon: PL },
        { name: 'Offline-first', icon: PL },
    ],
    'Testes & DevOps': [
        { name: 'flutter_test / mocktail', icon: PL },
        { name: 'XCTest', icon: PL },
        { name: 'Fastlane', icon: PL },
        { name: 'GitHub Actions', icon: PL },
        { name: 'CI/CD', icon: PL },
        { name: 'App Store / Play', icon: PL },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'NotchPrime',
        slug: 'notchprime',
        year: 2026,
        description: `
      Utilitário premium para macOS que transforma o notch da câmera em uma interface interativa.<br/><br/>
      <ul>
        <li>Integração com Spotify e Apple Music via AppleScript</li>
        <li>Contorno seguro do App Sandbox (Temporary Exceptions)</li>
        <li>Processamento on-device e automação eficiente</li>
      </ul>
    `,
        role: `Desenvolvedor macOS<br/>
      Engenharia e publicação focada em manipulação profunda do sistema e gerenciamento seguro de permissões.`,
        techStack: ['macOS', 'AppleScript', 'App Sandbox', 'Swift'],
        thumbnail: '/projects/thumbnail/notchprime.png',
        longThumbnail: '/projects/long/notchprime.png',
        images: [
            '/projects/images/notchprime-1.png',
            '/projects/images/notchprime-1.png',
        ],
    },
    {
        title: 'BulkingTracker',
        slug: 'bulkingtracker',
        year: 2026,
        description: `
      App nativo em SwiftUI para saúde e ganho de massa muscular, com arquitetura offline-first.<br/><br/>
      <ul>
        <li>SwiftData para persistência local</li>
        <li>Cálculos de macronutrientes e retenção de dados complexos</li>
        <li>Gráficos de evolução com alta performance visual</li>
      </ul>
    `,
        role: `Desenvolvedor iOS<br/>
      Construção voltada à fluidez e precisão na visualização de progresso.`,
        techStack: ['SwiftUI', 'SwiftData', 'Offline-first', 'Saúde'],
        thumbnail: '/projects/thumbnail/bulkingtracker.png',
        longThumbnail: '/projects/long/bulkingtracker.png',
        images: ['/projects/images/bulkingtracker-1.png'],
    },
    {
        title: 'HodlVision',
        slug: 'hodlvision',
        year: 2026,
        description: `
      Rastreamento de portfólio Bitcoin (DCA) com cotação em tempo real.<br/><br/>
      <ul>
        <li>APIs públicas e WebSockets</li>
        <li>Smart Wallet read-only, Face ID e Keychain</li>
        <li>Widgets com WidgetKit e compliance no App Store Connect</li>
      </ul>
    `,
        role: `Desenvolvedor iOS<br/>
      SwiftUI nativo com foco em segurança e experiência em tempo real.`,
        techStack: ['SwiftUI', 'WebSockets', 'WidgetKit', 'Keychain'],
        thumbnail: '/projects/thumbnail/hodlvision.jpeg',
        longThumbnail: '/projects/long/hodlvision.jpeg',
        images: ['/projects/images/hodlvision-1.jpeg'],
    },
    {
        title: 'Raven Stories',
        slug: 'raven-stories',
        year: 2025,
        description: `
      Jogo interativo mobile com animações fluidas e alta imersão.<br/><br/>
      <ul>
        <li>Arquitetura híbrida SwiftUI + UIKit</li>
        <li>SwiftData para progresso de sessão</li>
        <li>Performance e imersão como prioridade</li>
      </ul>
    `,
        role: `Desenvolvedor Mobile<br/>
      Integração estratégica entre SwiftUI e componentes avançados de UIKit.`,
        techStack: ['SwiftUI', 'UIKit', 'SwiftData'],
        thumbnail: '/projects/thumbnail/raven-stories.jpeg',
        longThumbnail: '/projects/long/raven-stories.jpeg',
        images: ['/projects/images/raven-stories-1.jpeg'],
    },
    {
        title: 'Scout',
        slug: 'scout',
        year: 2025,
        description: `
      App de estatísticas esportivas — da ideação ao deploy na App Store.<br/><br/>
      <ul>
        <li>Prototipagem no Figma e pipelines Fastlane</li>
        <li>SwiftUI com componentes visuais complexos</li>
        <li>APIs RESTful com JSON dinâmico em tempo real</li>
      </ul>
    `,
        role: `Desenvolvedor iOS / liderança técnica<br/>
      Ciclo completo de desenvolvimento e camada de rede otimizada.`,
        techStack: ['SwiftUI', 'REST', 'Fastlane', 'Figma'],
        thumbnail: '/projects/thumbnail/scout.jpeg',
        longThumbnail: '/projects/long/scout.jpeg',
        images: ['/projects/images/scout-1.jpeg'],
    },
    {
        title: 'StudySnap',
        slug: 'studysnap',
        year: 2026,
        description: `
      App de estudos com foco em captura rápida de conteúdo e transformação de materiais em revisões inteligentes. O projeto foi pensado para reduzir o tempo gasto organizando anotações e aumentar a eficiência da aprendizagem com uma experiência mobile fluida e orientada à produtividade.
    `,
        role: `Idealização do produto, desenvolvimento mobile, arquitetura do app, integração de recursos inteligentes e refinamento de UX para fluxo de estudo rápido.`,
        techStack: ['Swift', 'SwiftUI', 'MVVM', 'OCR', 'AI Integration', 'App Store Connect'],
        thumbnail: '/projects/thumbnail/studysnap.png',
        longThumbnail: '/projects/long/studysnap.png',
        images: ['/projects/images/studysnap-1.png'],
    },
    {
        title: 'Liber Intercambio',
        slug: 'liber-intercambio',
        year: 2026,
        description: `
      Aplicativo criado para centralizar informações sobre intercâmbio, universidades, bolsas de estudo, documentação e custos em uma única experiência mobile. Também utiliza inteligência artificial para recomendar universidades com base nas preferências do usuário e gerar checklists personalizados conforme o país de destino.
    `,
        role: `iOS Developer em projeto colaborativo na Apple Developer Academy, atuando na construção do produto, desenvolvimento da interface, implementação de funcionalidades e entrega da solução junto ao time.`,
        techStack: ['Swift', 'SwiftUI', 'UIKit', 'iOS', 'AI Integration', 'Clean Architecture'],
        thumbnail: '/projects/thumbnail/liber-intercambio.png',
        longThumbnail: '/projects/long/liber-intercambio.png',
        images: ['/projects/images/liber-intercambio-1.png'],
    },
    {
        title: 'Jarvis PersonalAssistantAI',
        slug: 'jarvis-personal-assistant',
        year: 2026,
        description: `
      Assistente pessoal com IA projetado para centralizar tarefas, respostas contextuais e automações do dia a dia em uma interface mobile. O foco do projeto é combinar produtividade, rapidez de interação e experiência conversacional natural em um produto útil para rotinas pessoais e profissionais.
    `,
        role: `Concepção do produto, desenvolvimento mobile, arquitetura da solução e integração com recursos de inteligência artificial para assistência contextual.`,
        techStack: ['Swift', 'SwiftUI', 'AI Integration', 'App Intents', 'Siri Shortcuts', 'MVVM'],
        thumbnail: '/projects/thumbnail/jarvis.png',
        longThumbnail: '/projects/long/jarvis.png',
        images: ['/projects/images/jarvis-1.png'],
    },
    {
        title: 'Certo ou Errado',
        slug: 'certo-ou-errado',
        year: 2026,
        description: `
      Aplicativo mobile com proposta interativa e dinâmica para desafios de validação, quiz ou tomada rápida de decisão. O projeto foi desenhado para entregar uma experiência leve, intuitiva e gamificada, com foco em engajamento e responsividade.
    `,
        role: `Desenvolvimento do app, estruturação de arquitetura, modelagem de fluxo de jogo/interação e implementação da experiência mobile.`,
        techStack: ['Swift', 'SwiftUI', 'UIKit', 'MVVM', 'State Management', 'iOS'],
        thumbnail: '/projects/thumbnail/certo-ou-errado.png',
        longThumbnail: '/projects/long/certo-ou-errado.png',
        images: ['/projects/images/certo-ou-errado-1.png'],
    },
    {
        title: 'PixelHunter AI',
        slug: 'pixelhunter-ai',
        year: 2026,
        description: `
      Aplicativo com recursos de inteligência artificial voltado para análise, identificação ou geração assistida de conteúdo visual. O projeto explora IA aplicada a imagem com foco em praticidade, velocidade de processamento e experiência mobile moderna.
    `,
        role: `Definição do produto, desenvolvimento mobile e integração de funcionalidades inteligentes relacionadas a processamento visual.`,
        techStack: ['Swift', 'SwiftUI', 'AI Integration', 'Computer Vision', 'OCR', 'iOS'],
        thumbnail: '/projects/thumbnail/pixelhunter.png',
        longThumbnail: '/projects/long/pixelhunter.png',
        images: ['/projects/images/pixelhunter-1.png'],
    },
    {
        title: 'VetApp',
        slug: 'vetapp',
        year: 2026,
        description: `
      Assistente completo de saúde para tutores de pets, com IA no centro da experiência. O app oferece assistente de saúde 24h, OCR para leitura de carteirinha de vacina, histórico médico, lembretes inteligentes, geração de relatórios em PDF e mapa com clínicas e pet shops próximos.
    `,
        role: `Idealização, desenvolvimento do produto, implementação mobile, integração de OCR e IA generativa, além de definição de fluxos de UX voltados a situações reais de cuidado pet.`,
        techStack: ['Swift', 'SwiftUI', 'OCR', 'AI Integration', 'PDFKit', 'MapKit', 'iOS'],
        thumbnail: '/projects/thumbnail/vetapp.png',
        longThumbnail: '/projects/long/vetapp.png',
        images: ['/projects/images/vetapp-1.png'],
    },
    {
        title: 'SquadMatch',
        slug: 'squadmatch',
        year: 2026,
        description: `
      Aplicativo voltado para organização de partidas de futebol, conectando jogadores, times e disponibilidade em uma experiência mobile prática. O projeto nasce como solução para facilitar coordenação de jogos, formação de squads e gestão de participação.
    `,
        role: `Criação e desenvolvimento do produto, com foco em experiência mobile, organização de fluxo social e construção de uma solução funcional para uso recorrente.`,
        techStack: ['Swift', 'SwiftUI', 'Firebase', 'Cloud Firestore', 'MVVM', 'iOS'],
        thumbnail: '/projects/thumbnail/squadmatch.png',
        longThumbnail: '/projects/long/squadmatch.png',
        images: ['/projects/images/squadmatch-1.png'],
    },
    {
        title: 'PsiManager',
        slug: 'psimanager',
        year: 2026,
        description: `
      Aplicativo para gestão de consultórios de psicologia, criado para centralizar rotinas operacionais e melhorar a produtividade de profissionais da área. O app integra organização de informações, recursos inteligentes, geração de PDF e automações voltadas ao contexto clínico.
    `,
        role: `Desenvolvimento completo do produto, incluindo arquitetura, interface, integração com IA, geração de documentos e automações do ecossistema Apple.`,
        techStack: ['SwiftUI', 'SwiftData', 'Google Gemini API', 'PDFKit', 'Siri Shortcuts', 'App Intents'],
        thumbnail: '/projects/thumbnail/psimanager.png',
        longThumbnail: '/projects/long/psimanager.png',
        images: ['/projects/images/psimanager-1.png'],
    },
    {
        title: 'SoundByte',
        slug: 'soundbyte',
        year: 2026,
        description: `
      Aplicativo mobile focado em consumo rápido de conteúdo em áudio, insights curtos ou experiências multimídia otimizadas para retenção e praticidade. O projeto prioriza fluidez, interface moderna e interação simples para consumo recorrente.
    `,
        role: `Concepção do produto, desenvolvimento do app e definição da experiência de uso com foco em performance e usabilidade.`,
        techStack: ['Swift', 'SwiftUI', 'AVFoundation', 'MVVM', 'iOS', 'App Store Connect'],
        thumbnail: '/projects/thumbnail/soundbyte.png',
        longThumbnail: '/projects/long/soundbyte.png',
        images: ['/projects/images/soundbyte-1.png'],
    },
    {
        title: 'SpotDrop',
        slug: 'spotdrop',
        year: 2026,
        description: `
      Aplicativo com proposta de descoberta, compartilhamento ou organização baseada em localização, pontos de interesse ou recomendações contextuais. A solução foi pensada para entregar uma experiência rápida, intuitiva e útil para interação com lugares ou oportunidades ao redor.
    `,
        role: `Planejamento do produto, desenvolvimento mobile e modelagem de fluxos centrados em localização e descoberta contextual.`,
        techStack: ['Swift', 'SwiftUI', 'MapKit', 'CoreLocation', 'MVVM', 'iOS'],
        thumbnail: '/projects/thumbnail/spotdrop.png',
        longThumbnail: '/projects/long/spotdrop.png',
        images: ['/projects/images/spotdrop-1.png'],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Desenvolvedor Flutter',
        company: 'Kobe Apps',
        duration: 'Out 2025 – Atual',
    },
    {
        title: 'Desenvolvedor iOS',
        company: 'Apple Developer Academy | UCB',
        duration: 'Mar 2025 – Atual',
    },
    {
        title: 'Co-fundador & Tech Lead',
        company: 'Change Digital',
        duration: 'Out 2025 – Atual',
    },
    {
        title: 'Desenvolvedor SQL e Dados',
        company: 'Caixa Seguridade',
        duration: 'Out 2024 – Jun 2025',
    },
];
