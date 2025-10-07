import { Component, OnInit } from "@angular/core";
import { RightAlignedImage } from "./components/marketing/right-aligned-image/right-aligned-image";
import { ThreeTiers } from "./components/threetiers/threetiers";
import { FeaturesTimelineComponent } from "./components/features-timeline/features-timeline";
import { SimpleBanner } from "./components/marketing/simple-banner/simple-banner";
import { ContactFormComponent } from "./components/contact-form/contact-form";
import { BrandedBannerComponent } from "./components/branded-banner/branded-banner";
import { Hero3dEmojiComponent } from "./components/hero-3d-emoji/hero-3d-emoji";
import { CloudsSeparatorComponent } from "./components/clouds-separator/clouds-separator";
import { AuthCheckService } from "./services/auth-check.service";
import { FaqSection } from "./components/marketing/faq-section/faq-section";
import { MainLayoutComponent } from "./components/layouts/main-layout/main-layout.component";
import { SEOService } from "./services/seo.service";

@Component({
  selector: "app-main",
  imports: [
    MainLayoutComponent,
    RightAlignedImage,
    ThreeTiers,
    FeaturesTimelineComponent,
    SimpleBanner,
    ContactFormComponent,
    BrandedBannerComponent,
    Hero3dEmojiComponent,
    CloudsSeparatorComponent,
    FaqSection,
  ],
  templateUrl: "./main.component.html",
  styleUrl: "./main.component.scss",
})
export class MainComponent implements OnInit {
  constructor(
    private authCheckService: AuthCheckService,
    private seoService: SEOService
  ) {}

  ngOnInit() {
    // Start periodic authentication checks
    this.authCheckService.startPeriodicChecks();
    
    // Update SEO for home page
    this.seoService.updateSEO(this.seoService.getPageSEO('home'));
  }
}
