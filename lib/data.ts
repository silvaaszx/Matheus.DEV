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
