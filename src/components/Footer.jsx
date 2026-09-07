import data from "../data/data.json";

const socialIcons = {
  facebook: (
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  ),
  twitter: (
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
  ),
  instagram: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </>
  ),
  youtube: (
    <>
      <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </>
  ),
};

const PaymentIcons = () => (
  <div className="flex items-center gap-2">
    {/* Visa */}
    <div className="w-10 h-6 border border-[#E5E7EB] rounded flex items-center justify-center bg-white">
      <div className="apple-pay-button">
        Pay
       </div>
    </div>
    {/* Mastercard */}
    <div className="w-10 h-6 border border-[#E5E7EB] rounded flex items-center justify-center bg-white">
      <svg viewBox="0 0 38 24" className="w-8 h-4" fill="none">
        <circle cx="15" cy="12" r="7" fill="#EB001B" />
        <circle cx="23" cy="12" r="7" fill="#F79E1B" />
        <path d="M19 7.2C20.5 8.3 21.5 9.9 21.5 12C21.5 14.1 20.5 15.7 19 16.8C17.5 15.7 16.5 14.1 16.5 12C16.5 9.9 17.5 8.3 19 7.2Z" fill="#FF5F00" />
      </svg>
    </div>
    
    {/* Generic secure icon */}
    <div className="w-10 h-6 border border-[#E5E7EB] rounded flex items-center justify-center bg-white">
      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    </div>
  </div>
);

export default function Footer() {
  const footer = data.footer;

  return (
    /* footer-section: Fill 1440px, border-top 1px, pt-64 pr-80 pb-40 pl-80, gap-48 */
    <footer className="bg-white border-t border-[#E5E7EB]">
      {/* Mobile simplified */}
      <div className="md:hidden pt-[24px] px-[16px] pb-[24px] flex flex-col gap-[20px]">
        <div className="flex items-center gap-[4px]">
          <span className="text-[16px] font-black text-[#111827]">LUXE</span>
          <span className="text-[16px] font-black text-[#FF4500]">DEALS</span>
        </div>
        <p className="text-[11px] text-[#6B7280]">{footer.copyright}</p>
      </div>

      {/* Tablet + Desktop */}
      {/* max-w-[1440px] inner container, flex-col gap-48px*/}
      <div className="hidden md:block pt-[48px] pb-[32px] px-[24px] xl:pt-[64px] xl:pb-[40px] xl:px-[80px]">  
        {/* max-w-[1440px] inner container, flex-col gap-48px */}
        <div className="max-w-[1440px] mx-auto flex flex-col gap-[48px]">
          
          {/* footer-nav-columns: flex-row on tablet+desktop, justify space-between */}
          <div className="flex md:flex-row md:justify-between flex-col gap-[32px] md:gap-0">

            {/* footer-luxe-deals: fixed 280px, flex-col, gap 20px */}
            <div className="flex flex-col gap-[20px] md:w-[280px] md:flex-none">
              <div className="flex items-center">
                <span className="text-[22px] font-black text-[#111827] tracking-tight leading-none">
                  LUXE
                </span>
                <span className="text-[22px] font-black text-[#FF4500] tracking-tight leading-none">
                  DEALS
                </span>
              </div>

              <p className="text-[#6B7280] text-sm leading-relaxed">
                {footer.tagline}
              </p>

              <div className="flex items-center gap-3">
                {footer.social.map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="w-8 h-8 rounded-full border border-[#E5E7EB] flex items-center justify-center text-[#6B7280] hover:text-[#111827] hover:border-[#9CA3AF] transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      {socialIcons[s]}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns: 2×2 grid on tablet, row on desktop */}
            <div className="grid grid-cols-2 xl:contents gap-x-[32px] gap-y-[24px]">
              {footer.columns.map((col) => (
                <div key={col.title} className={col.title === 'OUR ENTERPRISE' ? 'hidden xl:block' : ''}>
                  <h4 className="text-[#111827] text-xs font-bold tracking-widest uppercase mb-4">
                    {col.title}
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {col.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-[#6B7280] text-sm hover:text-[#111827] transition-colors"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-[#E5E7EB]" />

          {/* Footer bottom: copyright left, SECURE CHECKOUT right */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-[#6B7280]">
            <p>{footer.copyright}</p>
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#9CA3AF]">
                Secure Checkout:
              </span>
              <PaymentIcons />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
