# Q-VEDHA Redirect Configuration

## Target URL
All CTAs and interactive elements redirect to: `https://instance.qvedha.in`

## Updated Components

### 1. Hero Section (src/sections/hero.tsx)
**Chatbox Interactions:**
- ✅ Submit button (send icon) - redirects on click
- ✅ Form submission - redirects on Enter key press
- ✅ Input field - submits form on Enter

**CTA Buttons:**
- ✅ "Try it for free" button → `https://instance.qvedha.in`
- ✅ "View live demo" button → `https://instance.qvedha.in`

**Chatbox Dropdown:**
- ✅ Background color: Black (`bg-black`)
- ✅ Options updated to:
  - Alpha X8 664M
  - Alpha X8 8B
- ✅ Dropdown options styled with black background

### 2. Navbar (src/components/navbar.tsx)
**Desktop & Mobile:**
- ✅ "Try it for free" button → `https://instance.qvedha.in`

### 3. CTA Section (src/sections/cta.tsx)
**Bottom Page CTA:**
- ✅ "Start Free Trial" button → `https://instance.qvedha.in`

## Implementation Details

### Chatbox Form Handling
```typescript
const handleChatSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  window.location.href = 'https://instance.qvedha.in';
};

const handleSendClick = () => {
  window.location.href = 'https://instance.qvedha.in';
};
```

### Dropdown Styling
```tsx
<select className="appearance-none bg-black border border-border/40 hover:border-primary/50 rounded-lg pl-2 sm:pl-3 pr-6 sm:pr-8 py-1 sm:py-1.5 text-[10px] sm:text-xs text-foreground/80 hover:text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all cursor-pointer">
  <option value="Alpha X8 664M" className="bg-black text-foreground">Alpha X8 664M</option>
  <option value="Alpha X8 8B" className="bg-black text-foreground">Alpha X8 8B</option>
</select>
```

## User Journey

### Primary Flow
1. User lands on homepage
2. User sees hero section with chatbox
3. User can either:
   - Type in chatbox and press Enter → Redirects to instance
   - Click send button → Redirects to instance
   - Click "Try it for free" button → Redirects to instance
   - Click "View live demo" button → Redirects to instance

### Secondary Flow
1. User scrolls through features
2. User reaches CTA section at bottom
3. User clicks "Start Free Trial" → Redirects to instance

### Navigation Flow
1. User clicks "Try it for free" in navbar (desktop or mobile)
2. Redirects to instance

## Model Selection
The dropdown in the chatbox now shows Q-VEDHA's AI models:
- **Alpha X8 664M**: Smaller, faster model
- **Alpha X8 8B**: Larger, more capable model

Both options are styled with black background for consistency with the dark theme.

## Testing Checklist

✅ Hero chatbox submit (Enter key)
✅ Hero chatbox send button (click)
✅ Hero "Try it for free" button
✅ Hero "View live demo" button
✅ Navbar "Try it for free" button (desktop)
✅ Navbar "Try it for free" button (mobile)
✅ CTA "Start Free Trial" button
✅ Dropdown shows correct models
✅ Dropdown has black background
✅ All redirects go to instance.qvedha.in

## Notes

- All redirects use `window.location.href` for full page navigation
- Form submission prevents default behavior before redirecting
- Dropdown styling matches the dark theme of the website
- Mobile and desktop versions both redirect correctly
- No pricing section CTAs to update (section removed from page)
