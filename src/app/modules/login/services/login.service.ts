import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private authService: AuthService,
    private router: Router,
    private http: HttpClient
  ) {}

  //TODO: implementare il login con Observable e cercare di fare backend
  public doLogin(user: string, pwd: string): Observable<ArrayBuffer> {
    return this.http.post<ApiResponseV2<string>>(
      `${environment.servicesUrl}login`,
      {
        username: user,
        password: pwd,
      }
    );
  }

  //? Implementazione del login del backend di mercatino. Da studiare
  // [HttpPost]
  // public ApiResponse<string> Login([FromBody] LoginRequestDTO loginRequest)
  // {
  //     try
  //     {
  //         string pwd = _encryption.Encrypt(loginRequest.password);

  //         Utente loginUser = _dbConnection.GetData<Utente>()
  //            .FirstOrDefault(x => x.username.ToLower().Equals(loginRequest.username.ToLower()) &&
  //                                 x.password == pwd);

  //         if (loginUser == null)
  //             return ApiResponse<string>.FromErrorCode("LOGIN_USER_OR_PASSWORD_INVALID");

  //         if (!loginUser.attivo)
  //             return ApiResponse<string>.FromErrorCode("LOGIN_USER_INACTIVE");

  //         ClienteFornitore cfServ = _dbConnection.GetData<ClienteFornitore>()
  //             .FirstOrDefault(x => x.codCF == loginUser.relatedNegozio.codNegozioServ && x.relatedNegozio.id == loginUser.relatedNegozio.id);

  //         if (cfServ == null)
  //             return ApiResponse<string>.FromErrorCode("INCORRECT_CONFIGURATION_DATA");

  //         string newToken = SmartJWTEngine.GenerateToken(
  //             _config.GetConfiguration("Jwt:Issuer"),
  //             _config.GetConfiguration("Jwt:Audience"),
  //             _config.GetConfiguration("Jwt:Key"),
  //             Constants.MANAGEMENT_TOKEN_DURATION,
  //             null,
  //             new List<SmartJWTClaim>() {
  //                 new SmartJWTClaim("ID", loginUser.id.ToString()),
  //                 new SmartJWTClaim("puntoVenditaId",loginUser.relatedNegozio.id.ToString()),
  //                 new SmartJWTClaim("puntoVenditaName",loginUser.relatedNegozio.ragioneSocialeFiscale),
  //                 new SmartJWTClaim("role",loginUser.ruolo),
  //                 new SmartJWTClaim("negozioScadGg",loginUser.relatedNegozio.giorniScadenza.ToString()),
  //                 new SmartJWTClaim("codNegozio",loginUser.relatedNegozio.codNegozio),
  //                 new SmartJWTClaim("codNegozioCom",loginUser.relatedNegozio.codNegozioCom),
  //                 new SmartJWTClaim("codNegozioSvu",loginUser.relatedNegozio.codNegozioSvu),
  //                 new SmartJWTClaim("codNegozioServ",loginUser.relatedNegozio.codNegozioServ),
  //                 new SmartJWTClaim("cfServId", cfServ.id.ToString()),
  //                 new SmartJWTClaim("aliquotaNegozio", loginUser.relatedNegozio.aliquotaIva.ToString()),
  //                 new SmartJWTClaim("unique_name",loginUser.username)
  //             }
  //         );

  //         return new ApiResponse<string>(newToken);
  //     }
  //     catch (Exception ex)
  //     {
  //         _logger.LogError(ex.Message);
  //         throw;
  //     }
  // }

  //? Classe Utente del backend di mercatino. Da studiare
  // public class Utente
  // {
  //     public virtual int id { get; set; }
  //     public virtual string username { get; set; }
  //     public virtual string nome { get; set; }
  //     public virtual string cognome { get; set; }
  //     public virtual string email { get; set; }
  //     public virtual string password { get; set; }
  //     public virtual string telefono { get; set; }
  //     public virtual bool attivo { get; set; }
  //     public virtual string ruolo { get; set; }
  //     public virtual Negozio relatedNegozio { get; set; }
  //     public virtual DateTime createdOn { get; set; }
  // }

  //?Mapper (utente) del backend di mercatino. Da studiare
  // public class UtenteMap : ClassMapping<Utente>
  // {
  //     public UtenteMap()
  //     {
  //         Id(x => x.id, x =>
  //         {
  //             x.Generator(Generators.Identity);
  //             x.Type(NHibernateUtil.Int32);
  //         });

  //         Property(x => x.username, x =>
  //         {
  //             x.UniqueKey("user_negozio");
  //             x.Length(50);
  //             x.Type(NHibernateUtil.String);
  //             x.NotNullable(true);
  //         });

  //         Property(x => x.nome, x =>
  //         {
  //             x.Length(50);
  //             x.Type(NHibernateUtil.String);
  //             x.NotNullable(true);
  //         });

  //         Property(x => x.cognome, x =>
  //         {
  //             x.Length(50);
  //             x.Type(NHibernateUtil.String);
  //             x.NotNullable(true);
  //         });

  //         Property(x => x.email, x =>
  //         {
  //             x.Length(100);
  //             x.Type(NHibernateUtil.String);
  //             x.NotNullable(true);
  //         });

  //         Property(x => x.password, x =>
  //         {
  //             x.Length(4000);
  //             x.Type(NHibernateUtil.String);
  //             x.NotNullable(true);
  //         });

  //         Property(x => x.telefono, x =>
  //         {
  //             x.Length(50);
  //             x.Type(NHibernateUtil.String);
  //             x.NotNullable(false);
  //         });

  //         Property(x => x.createdOn, x =>
  //         {
  //             x.Type(NHibernateUtil.DateTime);
  //             x.NotNullable(true);
  //         });

  //         Property(x => x.attivo, x =>
  //         {
  //             x.Type(NHibernateUtil.Boolean);
  //             x.NotNullable(false);
  //             x.Column(c => c.Default(false));
  //         });

  //         Property(x => x.ruolo, x =>
  //         {
  //             x.Type(NHibernateUtil.String);
  //             x.NotNullable(true);
  //         });

  //         ManyToOne(x => x.relatedNegozio, x =>
  //         {
  //             x.UniqueKey("user_negozio");
  //             x.Column("relatedNegozio_id");
  //             x.Cascade(Cascade.None);
  //             x.NotNullable(true);
  //         });

  //         Table("utenti");
  //     }
  // }
}
