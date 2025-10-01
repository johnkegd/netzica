import { Component, OnInit } from "@angular/core";
import { NavigationComponent } from "./components/navigation/navigation";
import { AppFooter } from "./components/app.footer";
import { RightAlignedImage } from "./components/marketing/right-aligned-image/right-aligned-image";
import { ThreeTiers } from "./components/threetiers/threetiers";
import { FeaturesTimelineComponent } from "./components/features-timeline/features-timeline";
import { SimpleBanner } from "./components/marketing/simple-banner/simple-banner";
import { ContactFormComponent } from "./components/contact-form/contact-form";
import { AuthCheckService } from "./services/auth-check.service";

@Component({
  selector: "app-main",
  imports: [
    NavigationComponent,
    AppFooter,
    RightAlignedImage,
    ThreeTiers,
    FeaturesTimelineComponent,
    SimpleBanner,
    ContactFormComponent,
  ],
  templateUrl: "./main.component.html",
  styleUrl: "./main.component.scss",
})
export class MainComponent implements OnInit {
  constructor(private authCheckService: AuthCheckService) {}

  ngOnInit() {
    // Start periodic authentication checks
    this.authCheckService.startPeriodicChecks();
  }
}
