# Yaru - Project Task Manager

A modern, intuitive project management application built with Next.js that helps you organize projects, track tasks, and achieve your goals efficiently.


## ✨ Features

### 🎯 Project Management
- **Project Dashboard** - Overview of all your projects with progress tracking
- **Project Cards** - Visual representation of project status and completion
- **Project Categories** - Organize projects by type (Research, Development, etc.)
- **Progress Tracking** - Real-time progress bars showing task completion rates

### ✅ Task Management
- **Task Creation** - Add tasks with priorities, due dates, and descriptions
- **Task Status** - Mark tasks as complete/incomplete with visual indicators
- **Priority Levels** - High, Medium, Low priority classification with color coding
- **Due Date Tracking** - Visual indicators for overdue tasks
- **Task Actions** - Edit and delete tasks with dropdown menus

### 🎨 User Interface
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Modern UI** - Clean, professional interface using Tailwind CSS and DaisyUI
- **Collapsible Sidebar** - Space-efficient navigation with toggle functionality
- **Dark/Light Mode** - Adaptive theming for comfortable viewing
- **Smooth Animations** - Hover effects and transitions for better UX

### 📊 Dashboard Features
- **Project Statistics** - Quick overview of active, completed, and total projects
- **Recent Projects** - Easy access to your most recently worked on projects
- **Quick Actions** - Fast project and task creation buttons
- **Status Indicators** - Visual badges showing project and task states

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/yaru.git
   cd yaru
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/)
- **Language**: TypeScript
- **Icons**: Heroicons (via SVG)
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
yaru/
├── app/
│   ├── components/
│   │   ├── header/          # Navigation header
│   │   ├── sidebar/         # Collapsible sidebar navigation
│   │   ├── project/         # Project-related components
│   │   └── task/            # Task management components
│   ├── types/               # TypeScript type definitions
│   ├── homepage/            # Main dashboard page
│   └── page.tsx             # Landing page
├── public/                  # Static assets
└── README.md
```

## 🎯 Usage

### Creating Projects
1. Click "New Project" from the sidebar or header dropdown
2. Fill in project details (title, description, priority, category)
3. Add tasks to your project with due dates and priorities

### Managing Tasks
- **Add Tasks**: Use the "Add Task" button in projects or quick actions
- **Complete Tasks**: Check the checkbox next to any task
- **Edit Tasks**: Click the three-dot menu on any task card
- **Priority System**: Assign High (red), Medium (yellow), or Low (blue) priorities

### Navigation
- **Dashboard**: Overview of all projects and quick stats
- **All Projects**: Complete list of all your projects
- **Active Projects**: View only projects in progress
- **Completed**: See finished projects
- **My Tasks**: View all tasks across all projects

## 🎨 Customization

The application uses DaisyUI themes and can be easily customized:

- **Colors**: Modify the gradient colors in the header and branding
- **Themes**: DaisyUI supports multiple built-in themes
- **Layout**: Responsive grid system adapts to different screen sizes

## 📱 Responsive Design

Yaru is fully responsive and works great on:
- **Desktop** (1024px and up)
- **Tablet** (768px - 1023px)
- **Mobile** (320px - 767px)

## 🔮 Future Enhancements

- [ ] User authentication and profiles
- [ ] Project collaboration features
- [ ] Task comments and attachments
- [ ] Time tracking functionality
- [ ] Project templates
- [ ] Export/import capabilities
- [ ] Email notifications
- [ ] Advanced filtering and search
- [ ] Integration with calendar apps
- [ ] Mobile app development

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss the changes you would like to make.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [DaisyUI](https://daisyui.com/) for the beautiful component library
- [Heroicons](https://heroicons.com/) for the clean, beautiful icons

## 📧 Contact

judeflavian20@gmail.com

Project Link: [project Link](https://github.com/flavian101/yaru)
