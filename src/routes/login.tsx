import { createFileRoute } from '@tanstack/react-router';
import { useTheme } from '@/components/ui/theme-provider';
import { SignIn } from '@clerk/tanstack-react-start';
export const Route = createFileRoute('/login')({
  component: LogIn,
});

function LogIn() {
  const { theme } = useTheme();

  return (
    <div className="flex  justify-center pt-30">
      <SignIn
        signUpUrl="/signup"
        appearance={{
          variables: {
            colorBackground: theme == 'dark' ? '#0f141a9f' : '#f5f3f69f',
            colorText: theme == 'dark' ? 'white' : 'black',
            colorTextOnPrimaryBackground: theme == 'dark' ? 'white' : 'black',
          },
          elements: {
            socialButtons: 'bg-slate-900! rounded-md! text-white!',
            socialButtonsBlockButtonText: 'text-white!',
            formButtonPrimary: 'text-white!  bg-slate-900!',
            formFieldInput: 'placeholder:text-black!',
            footerActionLink: 'text-slate-500!',
          },
        }}
      />
    </div>
  );
}
