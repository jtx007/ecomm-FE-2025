import { createFileRoute } from '@tanstack/react-router';
import { useTheme } from '@/components/ui/theme-provider';
import { SignUp } from '@clerk/tanstack-react-start';

export const Route = createFileRoute('/signup')({
  component: RouteComponent,
});

function RouteComponent() {
  const { theme } = useTheme();

  return (
    <div className="flex  justify-center pt-30">
      <SignUp
        signInUrl="/login"
        appearance={{
          variables: {
            colorBackground: theme == 'dark' ? '#0f141a9f' : '#f5f3f69f',
            colorText: theme == 'dark' ? 'white' : 'black',
            colorTextOnPrimaryBackground: theme == 'dark' ? 'white' : 'black',
          },
          elements: {
            socialButtons: 'bg-slate-900! rounded-md! text-white!',
            socialButtonsBlockButtonText: 'text-white!',
            formButtonPrimary: 'bg-slate-900!',
            formFieldInput: 'placeholder:text-black!',
            footerActionLink: 'text-slate-500!',
          },
        }}
      />
    </div>
  );
}
